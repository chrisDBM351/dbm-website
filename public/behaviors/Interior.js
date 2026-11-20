/* Approved-site interactions. Full-document navigation intentionally resets observers. */
(()=>{
/* DBM site shared behaviors (deeper pages). Each block is self-contained and keyed off data attributes / classes,
   so it ports 1:1 into React useEffect hooks. */
(() => {
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* split headline words */
  $$('[data-split]').forEach(el => {
    let i = 0;
    el.innerHTML = el.innerHTML.split(/(<br>|<em>|<\/em>)/).map(p => /^</.test(p) ? p :
      p.split(/(\s+)/).map(w => /^\s+$/.test(w) || !w ? w : `<span class="w" style="transition-delay:${(i++) * .06}s">${w}</span>`).join('')).join('');
  });

  /* reveal + counters + funnels */
  const count = el => {
    const t = +el.dataset.c, d = +(el.dataset.d || 0), pre = el.dataset.pre || '', s = performance.now();
    if (reduce) { el.textContent = pre + t.toFixed(d); return; }
    (function f(n) { const p = Math.min(1, (n - s) / 1600), v = t * (1 - Math.pow(1 - p, 4)); el.textContent = pre + v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }); if (p < 1) requestAnimationFrame(f); })(s);
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-c]').forEach(count);
    io.unobserve(e.target);
  }), { threshold: .15 });
  $$('.rv,.words,.fun,.kpis,.trail').forEach(el => io.observe(el));

  /* nav: dropdowns, burger, scrolled state */
  $$('nav .dd>button').forEach(b => b.addEventListener('click', () => {
    const d = b.parentElement, o = !d.classList.contains('op');
    $$('nav .dd').forEach(x => { x.classList.remove('op'); x.firstElementChild.setAttribute('aria-expanded', 'false'); });
    if (o) { d.classList.add('op'); b.setAttribute('aria-expanded', 'true'); }
  }));
  document.addEventListener('click', e => { if (!e.target.closest('nav .dd')) $$('nav .dd').forEach(x => x.classList.remove('op')); });
  const bg = document.getElementById('bg'), mn = document.getElementById('mnav'), nv = document.getElementById('nav');
  if (bg && mn) {
    const set = o => { mn.classList.toggle('op', o); nv.classList.toggle('mo', o); bg.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };
    bg.addEventListener('click', () => set(!mn.classList.contains('op')));
    mn.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => set(false)));
  }
  const onScroll = () => nv && nv.classList.toggle('s', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* card spotlight */
  $$('.cd,.sv').forEach(c => c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); c.style.setProperty('--x', e.clientX - r.left + 'px'); c.style.setProperty('--y', e.clientY - r.top + 'px'); }));

  /* FAQ accordion */
  $$('.qi button').forEach(b => b.addEventListener('click', () => {
    const q = b.parentElement, a = q.querySelector('.a'), o = q.classList.toggle('op');
    b.setAttribute('aria-expanded', o); a.style.maxHeight = o ? a.scrollHeight + 'px' : 0;
  }));

  /* lead trail: step through on view */
  $$('.trail').forEach(t => {
    const steps = $$('.st2', t); let i = 0, timer;
    const run = () => { steps.forEach((s, j) => s.classList.toggle('on', j <= i)); i = (i + 1) % (steps.length + 2); };
    new IntersectionObserver(([e]) => { clearInterval(timer); if (e.isIntersecting) { if (reduce) { steps.forEach(s => s.classList.add('on')); return; } run(); timer = setInterval(run, 900); } }, { threshold: .3 }).observe(t);
  });

  /* scaled iframe thumbs */
  const z = () => $$('.dthumb,.thumb').forEach(t => { const f = t.querySelector('iframe'); if (f) f.style.transform = 'scale(' + t.clientWidth / 1440 + ')'; });
  addEventListener('resize', z); addEventListener('load', z); setTimeout(z, 300);

  /* article TOC highlight */
  const toc = $$('.toc a');
  if (toc.length) {
    const hs = toc.map(a => document.querySelector(a.getAttribute('href')));
    const ob = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) toc.forEach((a, i) => a.classList.toggle('on', hs[i] === e.target)); }), { rootMargin: '-15% 0px -75% 0px' });
    hs.forEach(h => h && ob.observe(h));
  }

  /* insights filter */
  $$('.cats button').forEach(b => b.addEventListener('click', () => {
    $$('.cats button').forEach(x => x.classList.toggle('on', x === b));
    const c = b.dataset.cat; $$('[data-cat-item]').forEach(it => it.style.display = (c === 'all' || it.dataset.catItem === c) ? '' : 'none');
  }));

  /* staging forms: never send */
  /* staging: nothing is sent; submit goes straight to the thank-you page (Lovable will wire the real endpoint) */
  $$('form[data-stage]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); location.href = f.getAttribute('action'); }));

  /* WebGL silk (same shader as the homepage) */
  function silk(cv, opt) {
    const gl = cv.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) { cv.style.background = 'radial-gradient(ellipse at 50% 60%,#1F4FE0,#0A1F44 45%,#02040A 75%)'; return; }
    const vs = `attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`;
    const fs = `precision highp float;uniform vec2 r;uniform float t;uniform vec2 m;uniform float k;
    float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
    float fb(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.02+vec2(1.7,9.2);a*=.5;}return v;}
    void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=(gl_FragCoord.xy-.5*r)/r.y;float T=t*.06;p+=(m-.5)*.12;p*=.75;
     vec2 q=vec2(fb(p*1.1+vec2(0,T)),fb(p*1.1+vec2(5.2,1.3)-T));vec2 w=vec2(fb(p+2.2*q+vec2(1.7,9.2)+T*1.4),fb(p+2.2*q+vec2(8.3,2.8)-T));
     float f=fb(p*.9+2.6*w);float band=smoothstep(.0,.9,sin((p.x*1.4+p.y*k+f*3.2+T*2.)*1.6)*.5+.5);float s=pow(f,1.25)*(.35+.9*band);
     vec3 c=vec3(.008,.016,.04);c=mix(c,vec3(.04,.12,.27),smoothstep(.05,.35,s));c=mix(c,vec3(.12,.31,.88),smoothstep(.25,.6,s));c=mix(c,vec3(.66,.85,1.),smoothstep(.55,.95,s)*.85);
     float v=1.-smoothstep(.35,1.05,length((uv-vec2(.5,.48))*vec2(1.,1.25)));c*=.45+.95*v;gl_FragColor=vec4(c,1);}`;
    const sh = (ty, src) => { const s = gl.createShader(ty); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(pr); gl.useProgram(pr);
    const bf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, bf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const lp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
    const ur = gl.getUniformLocation(pr, 'r'), ut = gl.getUniformLocation(pr, 't'), um = gl.getUniformLocation(pr, 'm'), uk = gl.getUniformLocation(pr, 'k');
    let vis = true, mx = .5, my = .5, tx = .5, ty = .5; new IntersectionObserver(e => vis = e[0].isIntersecting).observe(cv);
    addEventListener('pointermove', e => { tx = e.clientX / innerWidth; ty = 1 - e.clientY / innerHeight; }, { passive: true });
    const rs = () => { const d = Math.min(devicePixelRatio, 1.5) * .55; cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d; gl.viewport(0, 0, cv.width, cv.height); }; rs(); addEventListener('resize', rs);
    const t0 = performance.now() - opt.off;
    let lastFrame=0;(function fr(now=0) { if (vis && !document.hidden && (reduce||innerWidth>640||now-lastFrame>=32)) { lastFrame=now; mx += (tx - mx) * .03; my += (ty - my) * .03; gl.uniform2f(ur, cv.width, cv.height); gl.uniform1f(ut, reduce ? 20 : (performance.now() - t0) / 1000); gl.uniform2f(um, mx, my); gl.uniform1f(uk, opt.k); gl.drawArrays(gl.TRIANGLES, 0, 3); } (!reduce&&requestAnimationFrame(fr)); })();
  }
  $$('canvas.gl').forEach((c, i) => silk(c, { k: +(c.dataset.k || (i ? -.7 : .9)), off: +(c.dataset.off || i * 40000) }));

  /* mobile floating CTA */
  const fl = document.querySelector('.audit-float'), foot = document.getElementById('contact'), hero = document.querySelector('.ph-hero,.art-hero');
  if (fl && foot && hero) {
    const narrow = matchMedia('(max-width:640px)');
    const up = () => { const h = document.documentElement.clientHeight; fl.hidden = !narrow.matches || hero.getBoundingClientRect().bottom > 0 || foot.getBoundingClientRect().top < h || !!document.querySelector('#mnav.op'); };
    addEventListener('scroll', up, { passive: true }); narrow.addEventListener('change', up); up();
  }
})();

})();