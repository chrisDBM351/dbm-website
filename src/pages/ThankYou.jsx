import React from 'react';
import { Header, Footer } from '../components/SiteChrome.jsx';

function SectionPhHero0(){return (<>
<section className="ph-hero c"><canvas className="gl" data-k=".9" aria-hidden="true" /><div className="vig" /><div className="grain" /><div className="wrap"><div className="ph-grid"><div>
        <div className="rv in" style={{"width":"84px","height":"84px","margin":"0 auto 30px","borderRadius":"50%","display":"grid","placeItems":"center","background":"var(--royal)","boxShadow":"0 0 0 10px rgba(31,79,224,.18),0 0 60px rgba(31,79,224,.8)","fontSize":"34px"}}>✓</div>
        <h1 className="words in" data-split>You’re in.<br /><em>We’re on it.</em></h1>
        <p className="hp rv in" style={{"transitionDelay":".4s"}}>Thanks for reaching out. A member of our team will email you within one business day to set up your free audit call.</p>
        <div className="acts rv in" style={{"transitionDelay":".55s"}}><a className="btn" href="/case-studies/">See our results <i aria-hidden="true">↗</i></a><a className="btn ghost" href="/">Back to home <i aria-hidden="true">↗</i></a></div></div></div></div></section>
</>);}

function SectionSec1(){return (<>
<section className="sec t-dark "><div className="wrap"><div className="hd2"><h2 className="words" data-split>What happens now</h2></div><div className="tl" style={{"--n":"3"}}><div className="s rv" style={{"transitionDelay":"0.00s"}}><span className="when">Next</span><h3>Check your inbox</h3><p>We will email you to pick a time for the call.</p></div><div className="s rv" style={{"transitionDelay":"0.08s"}}><span className="when">Before the call</span><h3>We dig in</h3><p>We review what we can, so the call is about your numbers, not a pitch.</p></div><div className="s rv" style={{"transitionDelay":"0.16s"}}><span className="when">On the call</span><h3>Get your leak report</h3><p>What we found, and the first three fixes, ranked by impact.</p></div></div></div></section>
</>);}

function SectionSec2(){return (<>
<section className="sec t-ice tight"><div className="wrap"><div className="hd2 c"><h2 className="words" data-split>While you wait</h2></div><div className="rel" style={{"--c":"3"}}><a className="rv" href="/insights/30-day-roas-is-lying/"><span>Your 30-day ROAS is lying to you<small>Why high-ticket sales need patience</small></span><i aria-hidden="true">↗</i></a><a className="rv" href="/case-studies/roofing-contractor/"><span>12.5x on Google Ads<small>A roofing case study</small></span><i aria-hidden="true">↗</i></a><a className="rv" href="/how-it-works/"><span>How It Works<small>Your first 90 days</small></span><i aria-hidden="true">↗</i></a></div></div></section>
</>);}

export default function ThankYou(){return (<>
<Header home={false} />
<main id="main">
<SectionPhHero0 />
<SectionSec1 />
<SectionSec2 />
</main>
<Footer home={false} />
<a className="btn audit-float" href="/free-audit/" hidden>Book a Free Audit Call <i aria-hidden="true">↗</i></a>
</>);}
