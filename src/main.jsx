import React, { useEffect } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import manifest from './client-manifest.json';

const path = window.location.pathname.replace(/\/?$/, '/');
const route = manifest[path] ? path : null;
const loaders = import.meta.glob('./pages/*.jsx');
let Page;

function App() {
  useEffect(() => {
    if (!route) return;
    document.body.className = manifest[route].bodyClass;
    // The production build already contains this head and fully rendered content.
    if (import.meta.env.DEV && !document.getElementById('root').dataset.prerendered) {
      document.querySelectorAll('[data-page-head]').forEach(n => n.remove());
      const template = document.createElement('template');
      import('./manifest.json').then(({default: fullManifest}) => {
        template.innerHTML = fullManifest[route].head;
        for (const node of [...template.content.children]) {
          node.setAttribute('data-page-head', '');
          document.head.appendChild(node);
        }
      });
    }
    const submit = event => {
      if (!event.target.matches('form[data-stage]')) return;
      event.preventDefault();
      window.location.assign('/thank-you/');
    };
    document.addEventListener('submit', submit, true);
    const script = document.createElement('script');
    script.src = manifest[route].behavior;
    script.onload = () => { script.dataset.ready = 'true'; };
    document.body.appendChild(script);
    return () => {
      document.removeEventListener('submit', submit, true);
      script.remove();
    };
  }, []);
  return Page ? <Page /> : <main><h1>Page not found</h1><a href="/">Back to home</a></main>;
}

const root = document.getElementById('root');
async function start() {
  if (route) Page = (await loaders[`./pages/${manifest[route].key}.jsx`]()).default;
  if (root.dataset.prerendered) hydrateRoot(root, <App />);
  else createRoot(root).render(<App />);
}
start();
