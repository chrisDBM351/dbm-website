import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
import { load } from 'cheerio';

await build({
  stdin: {
    contents: `import React from 'react';import {renderToString} from 'react-dom/server';import {pages} from './src/routes.jsx';export const render=route=>renderToString(React.createElement(pages[route]));`,
    resolveDir: process.cwd(),
    loader:'jsx'
  },
  outfile: '.build/prerender.mjs',
  bundle: true, platform:'node', format:'esm',
  packages: 'external'
});
const { render } = await import(path.resolve('.build/prerender.mjs'));
const manifest = JSON.parse(fs.readFileSync('src/manifest.json','utf8'));
const shell = load(fs.readFileSync('dist/index.html','utf8'));
const entries = shell('script[type=module]').toArray().map(el=>shell.html(el)).join('\n');
for (const [route, meta] of Object.entries(manifest)) {
  const out=path.join('dist',route);
  fs.mkdirSync(out,{recursive:true});
  const html=`<!doctype html><html lang="en"><head>${meta.head}
<style>
.hero .rv,.hero .words,.hero .w,.ph-hero h1,.ph-hero h1 .w,.art-hero h1,.art-hero h1 .w{opacity:1!important;transform:none!important}
canvas.gl{background:radial-gradient(ellipse at 50% 60%,#1F4FE0,#0A1F44 45%,#02040A 75%)}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;animation:none!important;transition:none!important}.rv,.words,.w{opacity:1!important;transform:none!important}}
</style>
<noscript><style>.rv,.words,.w,.fun,.kpis,.trail{opacity:1!important;transform:none!important}.qi .a{max-height:none!important}.find .q{opacity:1}</style></noscript>
${entries}</head><body class="${meta.bodyClass}"><div id="root" data-prerendered="true">${render(route)}</div></body></html>`;
  fs.writeFileSync(path.join(out,'index.html'),html);
}
// Unknown URLs must not masquerade as a successful homepage.
fs.writeFileSync('dist/404.html','<!doctype html><html lang="en"><head><title>Page not found | DBM</title><meta name="robots" content="noindex"></head><body><main><h1>Page not found</h1><a href="/">Back to home</a></main></body></html>');
console.log(`Pre-rendered ${Object.keys(manifest).length} React routes with full HTML, page metadata and structured data.`);
