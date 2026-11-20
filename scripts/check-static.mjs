import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
const manifest=JSON.parse(fs.readFileSync('src/manifest.json','utf8'));
const errors=[];
let references=0;
for(const route of Object.keys(manifest)){
  const html=fs.readFileSync(path.join('dist',route,'index.html'),'utf8');
  const $=load(html);
  if(!$('h1').text().trim())errors.push(`${route}: missing rendered h1`);
  if($('[data-port-style]').length)errors.push(`${route}: unresolved migrated inline style`);
  if(!$('title').text())errors.push(`${route}: missing title`);
  if(!$('meta[name=description]').attr('content'))errors.push(`${route}: missing description`);
  if(!$('meta[name=robots]').attr('content')?.includes('noindex'))errors.push(`${route}: preview indexable`);
  if(!$('link[rel=canonical]').attr('href'))errors.push(`${route}: missing canonical`);
  $('script[type="application/ld+json"]').each((_,s)=>{try{JSON.parse($(s).html())}catch(e){errors.push(`${route}: invalid JSON-LD`)}});
  $('[src],[href],[action]').each((_,el)=>{
    for(const attr of ['src','href','action']){
      const value=$(el).attr(attr);
      if(!value||/^(https?:|mailto:|tel:|data:|javascript:|#)/i.test(value))continue;
      const url=new URL(value,'https://local.test'+route);
      const pathname=decodeURIComponent(url.pathname);
      const target=path.join('dist',pathname);
      references++;
      if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html')))errors.push(`${route}: missing ${attr} ${value}`);
    }
  });
  $('form').each((_,f)=>{
    if($(f).attr('method')!=='dialog')errors.push(`${route}: form can send without JS`);
  });
}
assert.equal(errors.length,0,errors.join('\n'));
assert.match(fs.readFileSync('dist/robots.txt','utf8'),/Disallow: \//);
console.log(JSON.stringify({routes:Object.keys(manifest).length,localReferences:references,errors}));
