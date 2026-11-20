import React from 'react';
import { Header, Footer } from '../components/SiteChrome.jsx';

function SectionPhHero0(){return (<>
<section className="ph-hero c short"><canvas className="gl" data-k="0.9" aria-hidden="true" /><div className="vig" /><div className="grain" />
  <div className="wrap"><div className="ph-grid"><div><h1 className="words in" data-split>Notes from<br /><em>the war room.</em></h1>
        <p className="hp rv in" style={{"transitionDelay":".45s"}}>Platform changes, translated for owners. No jargon, just what it means for your leads.</p>
        <div className="acts rv in" style={{"transitionDelay":".6s"}} /></div></div></div></section>
</>);}

function SectionSec1(){return (<>
<section className="sec t-ice "><div className="wrap"><div className="feat rv"><a className="ph it" href="/insights/lsa-moving-to-performance-max/" style={{"display":"block"}}><img src="/img/b1.webp" alt="" style={{"objectPosition":"62% 50%"}} /><div className="tg"><span className="tag">Google</span><div className="bot"><div className="wd"><div className="lb">Save before the switch</div><div className="r"><span className="ck">✓</span>Lead history</div><div className="r"><span className="ck">✓</span>Call recordings</div><div className="r"><span className="ck">✓</span>Reviews + ratings</div></div><div className="hk">Save this <em>first.</em></div></div></div></a>
      <div><span className="mono" style={{"fontSize":"12px","color":"var(--royal)"}}>Latest · November 12, 2026</span><h3 style={{"marginTop":"14px"}}><a href="/insights/lsa-moving-to-performance-max/">Local Services Ads are moving into Performance Max. Here's what to save first.</a></h3><p>Google is changing how Local Services Ads work. Your old reports will not come with you. Here is what to save, what changes and how to move without losing what works.</p><div style={{"marginTop":"26px"}}><a className="btn" href="/insights/lsa-moving-to-performance-max/">Read the article <i aria-hidden="true">↗</i></a></div></div></div><div className="cats rv"><button className="on" data-cat="all" type="button">All</button><button type="button" data-cat="Attribution">Attribution</button><button type="button" data-cat="Google">Google</button><button type="button" data-cat="Tracking">Tracking</button></div><div className="ig2"><a className="it rv" data-cat-item="Google" href="/insights/lsa-moving-to-performance-max/" style={{"transitionDelay":"0.00s"}}><div className="ph"><img src="/img/b1.webp" alt="" style={{"objectPosition":"62% 50%"}} loading="lazy" /><div className="tg"><span className="tag">Google</span><div className="bot"><div className="wd"><div className="lb">Save before the switch</div><div className="r"><span className="ck">✓</span>Lead history</div><div className="r"><span className="ck">✓</span>Call recordings</div><div className="r"><span className="ck">✓</span>Reviews + ratings</div></div><div className="hk">Save this <em>first.</em></div></div></div></div><h3>Local Services Ads are moving into Performance Max. Here's what to save first.</h3><span className="mono">Google · 4 min read</span></a><a className="it rv" data-cat-item="Attribution" href="/insights/30-day-roas-is-lying/" style={{"transitionDelay":"0.08s"}}><div className="ph"><img src="/img/b2.webp" alt="" style={{"objectPosition":"45% 50%"}} loading="lazy" /><div className="tg"><span className="tag">Attribution</span><div className="bot"><div className="wd ch"><div className="lb">Revenue from one month of ads</div><div className="bars"><i style={{"height":"18%"}} /><i style={{"height":"26%"}} /><i style={{"height":"22%"}} /><i className="hi" style={{"height":"48%"}} /><i className="hi" style={{"height":"70%"}} /><i className="hi" style={{"height":"58%"}} /><i className="hi" style={{"height":"88%"}} /><i className="hi" style={{"height":"100%"}} /><i className="hi" style={{"height":"76%"}} /><span className="d30"><b>DAY 30</b></span></div></div><div className="hk">Day 30 is <em>not</em> the finish line.</div></div></div></div><h3>Your 30-day ROAS is lying to you. Cases and jobs close weeks later.</h3><span className="mono">Attribution · 5 min read</span></a><a className="it rv" data-cat-item="Tracking" href="/insights/conversions-are-not-revenue/" style={{"transitionDelay":"0.16s"}}><div className="ph"><img src="/img/b3.webp" alt="" style={{"objectPosition":"78% 50%"}} loading="lazy" /><div className="tg"><span className="tag">Tracking</span><div className="bot"><div className="wd tcmp"><div><span className="lb">Conversions</span><b className="no">142</b></div><div><span className="lb">Paid jobs</span><b className="yes">38</b></div></div><div className="hk">Clicks are <em>not</em> cash.</div></div></div></div><h3>Platform conversions aren't revenue. What to track instead.</h3><span className="mono">Tracking · 3 min read</span></a></div></div></section>
</>);}

function SectionSec2(){return (<>
<section className="sec t-dark tight"><div className="wrap"><div className="aprompt rv"><p>Rather we just look at your account?</p><a className="btn" href="#contact">Book a Free Audit Call <i aria-hidden="true">↗</i></a></div></div></section>
</>);}

export default function Insights(){return (<>
<Header home={false} />
<main id="main">
<SectionPhHero0 />
<SectionSec1 />
<SectionSec2 />
</main>
<Footer home={false} />
<a className="btn audit-float" href="#contact" hidden>Book a Free Audit Call <i aria-hidden="true">↗</i></a>
</>);}
