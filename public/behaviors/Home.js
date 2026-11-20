/* Approved-site interactions. Full-document navigation intentionally resets observers. */
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
(()=>{

/* findings */
const F=[
 ["The CRM showed <b>20 hired clients</b> from ads. 18 were past clients calling back. Real new ones: 6.","Employment Law Firm","law"],
 ["<b>83%</b> of one roofer's Local Services leads in winter were snow removal, not roofing.","Roofing Contractor","roof"],
 ["<b>16%</b> of a builder's paid calls never reached a human. Phone tree, closed office, voicemail.","Custom Home Builder","build"],
 ["<b>147 open estimates</b> sat 30+ days with no decision. $3.1M+ in quotes, waiting on a follow-up.","Roofing Contractor","roof"],
 ["A main campaign had desktop bids set to -100%. It ran <b>mobile-only for 4 months</b> and nobody knew.","Custom Home Builder","build"],
 ["<b>226 leads</b> never got a phone call. Most got one automated text.","Wellness Clinic","health"],
 ["Last-30-day ROAS read <b>2.8x</b>. The same month, once cases signed, read <b>7.2x</b>.","Personal Injury Firm","law"],
 ["<b>19 of 68</b> charged Local Services leads were junk: job seekers, wrong numbers, vendors. All reported.","Pediatric Practice","health"],
 ["One keyword, <b>under $6K</b> in spend, produced <b>$145K+</b> in closed jobs.","Roofing Contractor","roof"],
 ["Better invoice matching lifted attributed revenue from <b>$1.5M to $1.8M</b>. Same ads, truer numbers.","Flooring Company","home"],
];
const IC={law:`<path d="M12 3v18M7 21h10M4 6h16M6 6l-4 8h8L6 6ZM18 6l-4 8h8l-4-8ZM2 14c0 4 8 4 8 0M14 14c0 4 8 4 8 0"/>`,roof:`<path d="m3 11 9-8 9 8M6 9v11h12V9M10 20v-6h4v6"/>`,build:`<path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9 M18 15l4-4 M21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>`,health:`<path d="M20.5 5.5a5 5 0 0 0-7 0L12 7l-1.5-1.5a5 5 0 0 0-7 7L12 21l8.5-8.5a5 5 0 0 0 0-7Z"/><path d="M5 11h4l2-3 2 7 2-4h4"/>`,home:`<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7"/>`};
function card(f,i){return `<div class="fc${i%5==2?' hot':''}"><p class="q">${f[0]}</p><div class="who"><i class="ind"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${IC[f[2]]}</svg></i><div><strong>${f[1]}</strong>Finding from a DBM audit</div></div></div>`}
const a=F.slice(0,5),b=F.slice(5);
document.getElementById('r1').innerHTML=[...a,...a].map(card).join('');
document.getElementById('r2').innerHTML=[...b,...b].map((f,i)=>card(f,i+1)).join('');

/* split words */
document.querySelectorAll('[data-split]').forEach(el=>{
  let i=0;el.innerHTML=el.innerHTML.split(/(<br>|<em>|<\/em>)/).map(p=>/^</.test(p)?p:p.split(/(\s+)/).map(w=>/^\s+$/.test(w)||!w?w:`<span class="w" style="transition-delay:${(i++)*.07}s">${w}</span>`).join('')).join('');
});
/* reveal + counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
  e.target.querySelectorAll('[data-c]').forEach(count);
  const r=e.target.querySelector('.ring');if(r){r.style.transition='stroke-dashoffset 2.2s cubic-bezier(.2,.7,.2,1)';r.style.strokeDashoffset=352*(1-.995)}
  io.unobserve(e.target)}),{threshold:.18});
document.querySelectorAll('.rv,.words').forEach(el=>io.observe(el));
function count(el){if(reduce){el.textContent=(+el.dataset.c).toFixed(+(el.dataset.d||0));return}const t=+el.dataset.c,d=+(el.dataset.d||0),s=performance.now();(function f(n){const p=Math.min(1,(n-s)/1800),v=t*(1-Math.pow(1-p,4));el.textContent=v.toFixed(d);if(p<1)requestAnimationFrame(f)})(s)}
/* nav v2 */
document.querySelectorAll('[data-ph]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
document.querySelectorAll('nav .dd>button').forEach(b=>b.addEventListener('click',()=>{const d=b.parentElement,o=!d.classList.contains('op');document.querySelectorAll('nav .dd').forEach(x=>{x.classList.remove('op');x.firstElementChild.setAttribute('aria-expanded','false')});if(o){d.classList.add('op');b.setAttribute('aria-expanded','true')}}));
document.addEventListener('click',e=>{if(!e.target.closest('nav .dd'))document.querySelectorAll('nav .dd').forEach(x=>x.classList.remove('op'))});
(()=>{const bg=document.getElementById('bg'),mn=document.getElementById('mnav'),nv=document.getElementById('nav');const set=o=>{mn.classList.toggle('op',o);nv.classList.toggle('mo',o);bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};bg.addEventListener('click',()=>set(!mn.classList.contains('op')));mn.querySelectorAll('a[href^="#contact"]').forEach(a=>a.addEventListener('click',()=>set(false)))})();
/* nav */
addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('s',scrollY>40),{passive:true});
/* sticky image per step */
const imgs=[...document.querySelectorAll('#stick img')],H=[["Leaks found","16% of calls"],["Leads tracked","2,961"],["Creative tested","Weekly"],["Return on spend","12.5x"]];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=+e.target.dataset.i;imgs.forEach((m,j)=>m.classList.toggle('on',i==j));document.getElementById('hk').textContent=H[i][0];document.getElementById('hv').textContent=H[i][1]}}),{rootMargin:'-45% 0px -45% 0px'});
document.querySelectorAll('.sp').forEach(s=>so.observe(s));
/* spotlight */
document.querySelectorAll('.sv').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));
/* faq */
document.querySelectorAll('.qi button').forEach(b=>b.onclick=()=>{const q=b.parentElement,a=q.querySelector('.a'),o=q.classList.toggle('op');a.style.maxHeight=o?a.scrollHeight+'px':0});
/* radar sweep */
const sw=document.querySelector('.sweep');let ang=0,radarVisible=false;new IntersectionObserver(([e])=>{radarVisible=e.isIntersecting}).observe(sw);if(!reduce)(function rot(){if(radarVisible&&!document.hidden){ang+=.8;sw.style.transform=`rotate(${ang}deg)`}requestAnimationFrame(rot)})();

/* WebGL silk */
function silk(cv,opt){
  const gl=cv.getContext('webgl',{antialias:false,premultipliedAlpha:false});if(!gl){cv.style.background='radial-gradient(ellipse at 50% 60%,#1F4FE0,#0A1F44 45%,#02040A 75%)';return}
  const vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`;
  const fs=`precision highp float;uniform vec2 r;uniform float t;uniform vec2 m;uniform float k;
  float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
  float fb(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.02+vec2(1.7,9.2);a*=.5;}return v;}
  void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=(gl_FragCoord.xy-.5*r)/r.y;float T=t*.06;
   p+= (m-.5)*.12;
   p*=.75;vec2 q=vec2(fb(p*1.1+vec2(0,T)),fb(p*1.1+vec2(5.2,1.3)-T));
   vec2 w=vec2(fb(p+2.2*q+vec2(1.7,9.2)+T*1.4),fb(p+2.2*q+vec2(8.3,2.8)-T));
   float f=fb(p*.9+2.6*w);
   float band=smoothstep(.0,.9,sin((p.x*1.4+p.y*k+f*3.2+T*2.)*1.6)*.5+.5);
   float s=pow(f,1.25)*(.35+.9*band);
   vec3 c=vec3(.008,.016,.04);
   c=mix(c,vec3(.04,.12,.27),smoothstep(.05,.35,s));
   c=mix(c,vec3(.12,.31,.88),smoothstep(.25,.6,s));
   c=mix(c,vec3(.66,.85,1.),smoothstep(.55,.95,s)*.85);
   float v=1.-smoothstep(.35,1.05,length((uv-vec2(.5,.48))*vec2(1.,1.25)));
   c*=.45+.95*v;
   gl_FragColor=vec4(c,1);}`;
  function sh(ty,src){const s=gl.createShader(ty);gl.shaderSource(s,src);gl.compileShader(s);return s}
  const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);gl.useProgram(pr);
  const bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  const lp=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(lp);gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
  const ur=gl.getUniformLocation(pr,'r'),ut=gl.getUniformLocation(pr,'t'),um=gl.getUniformLocation(pr,'m'),uk=gl.getUniformLocation(pr,'k');
  let vis=true,mx=.5,my=.5,tx=.5,ty=.5;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
  addEventListener('pointermove',e=>{tx=e.clientX/innerWidth;ty=1-e.clientY/innerHeight},{passive:true});
  function rs(){const d=Math.min(devicePixelRatio,1.5)*.55;cv.width=cv.clientWidth*d;cv.height=cv.clientHeight*d;gl.viewport(0,0,cv.width,cv.height)}rs();addEventListener('resize',rs);
  const t0=performance.now()-opt.off;
  let lastFrame=0;(function fr(now=0){if(vis&&!document.hidden&&(reduce||innerWidth>640||now-lastFrame>=32)){lastFrame=now;mx+=(tx-mx)*.03;my+=(ty-my)*.03;gl.uniform2f(ur,cv.width,cv.height);gl.uniform1f(ut,reduce?20:(performance.now()-t0)/1000);gl.uniform2f(um,mx,my);gl.uniform1f(uk,opt.k);gl.drawArrays(gl.TRIANGLES,0,3)}(!reduce&&requestAnimationFrame(fr))})();
}
silk(document.getElementById('g1'),{k:.9,off:0});
silk(document.getElementById('g2'),{k:-.7,off:40000});

})();
(()=>{
(function(){function z(){document.querySelectorAll('.thumb').forEach(t=>{const f=t.querySelector('iframe');f.style.transform='scale('+t.clientWidth/1440+')'})}addEventListener('resize',z);addEventListener('load',z);setTimeout(z,300)})()
})();
(()=>{
(function(){const lb=document.getElementById('dblb'),fr=lb.querySelector('iframe');function open(e){if(e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();if(!fr.src)fr.src='databoard/?embed';lb.classList.add('on');document.body.classList.add('lbo');lb.querySelector('.cl').focus()}function close(){lb.classList.remove('on');document.body.classList.remove('lbo')}document.querySelectorAll('a.dbx').forEach(a=>a.addEventListener('click',open));lb.addEventListener('click',e=>{if(e.target===lb||e.target.closest('.cl'))close()});addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('on'))close()})})()
})();
(()=>{

(()=>{const panel=document.querySelector('.sig-panel'),buttons=panel.querySelectorAll('[data-set]'),motion=matchMedia('(prefers-reduced-motion:reduce)');let timer,seen=false,manual=false;
function show(mode,animate){panel.dataset.mode=mode;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.set===mode)));panel.querySelector('.sig-readout').textContent=mode==='all'?'Find more people who fill out a form.':'Find more people likely to book an estimate.';panel.classList.remove('sig-run');if(animate&&!motion.matches){void panel.offsetWidth;panel.classList.add('sig-run')}}
buttons.forEach(b=>b.addEventListener('click',()=>{manual=true;clearTimeout(timer);show(b.dataset.set,true)}));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting){if(seen&&!manual){clearTimeout(timer);show('qualified',false)}return}if(seen||manual||motion.matches)return;seen=true;show('all',true);timer=setTimeout(()=>show('qualified',true),3900)},{threshold:.45});observer.observe(panel)}
})();
})();
(()=>{
(()=>{
 const action=document.querySelector('.audit-float'), hero=document.getElementById('top'), foot=document.getElementById('contact'), narrow=matchMedia('(max-width:640px)');
 const targets=[...document.querySelectorAll('section a.btn[href="#contact"]')];
 const update=()=>{const height=document.documentElement.clientHeight;
 const nearCTA=targets.some(el=>{const r=el.getBoundingClientRect();return r.width>0&&r.bottom>84&&r.top<height;});
 action.hidden=!narrow.matches||hero.getBoundingClientRect().bottom>0||foot.getBoundingClientRect().top<height||nearCTA||!!document.querySelector('#mnav.op,#dblb.on');};
 const io=new IntersectionObserver(update,{threshold:[0,.01,.5,1]});[hero,foot,...targets].forEach(el=>io.observe(el));
 const mo=new MutationObserver(update);['mnav','dblb'].forEach(id=>{const el=document.getElementById(id);if(el)mo.observe(el,{attributes:true,attributeFilter:['class']});});
 narrow.addEventListener('change',update);window.addEventListener('pageshow',update);update();
})();
})();