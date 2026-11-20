import React from 'react';
import { Header, Footer } from '../components/SiteChrome.jsx';

function SectionPhHero0(){return (<>
<section className="ph-hero"><canvas className="gl" data-k=".9" aria-hidden="true" /><div className="vig" /><div className="grain" /><div className="wrap"><div className="ph-grid">
      <div><h1 className="words in" data-split>Let’s find<br /><em>your leaks.</em></h1><div className="hsub rv in" style={{"transitionDelay":".35s"}}>A free audit. <b>Real answers.</b></div>
        <p className="hp rv in" style={{"transitionDelay":".45s"}}>We look at your ads, your phones and your follow-up, then show you where leads come from and where the money leaks out. Plain English, no pitch deck.</p>
        <ul className="ticks rv in" style={{"listStyle":"none","display":"flex","flexDirection":"column","gap":"12px","marginTop":"6px"}}><li style={{"display":"flex","gap":"12px","fontSize":"17px","color":"#e4ecfb"}}><span style={{"color":"#3DDC84"}}>✓</span>Where your best leads really come from</li><li style={{"display":"flex","gap":"12px","fontSize":"17px","color":"#e4ecfb"}}><span style={{"color":"#3DDC84"}}>✓</span>What is quietly wasting budget</li><li style={{"display":"flex","gap":"12px","fontSize":"17px","color":"#e4ecfb"}}><span style={{"color":"#3DDC84"}}>✓</span>Missed calls and slow follow-up</li><li style={{"display":"flex","gap":"12px","fontSize":"17px","color":"#e4ecfb"}}><span style={{"color":"#3DDC84"}}>✓</span>The first three fixes, ranked by impact</li></ul></div>
      <div><div className="af rv in" id="audit-form"><h2>Book your free audit call</h2><p className="sm">Takes about a minute. We reply within one business day.</p>
          <form data-stage action="/thank-you/" aria-label="Free audit request" method="dialog">
            <label>First name<input name="first_name" autoComplete="given-name" required /></label><label>Last name<input name="last_name" autoComplete="family-name" required /></label>
            <label>Email<input type="email" name="email" autoComplete="email" required /></label><label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
            <label>Business name<input name="business" autoComplete="organization" required /></label><label>Website<input name="website" placeholder="yourcompany.com" /></label>
            <label>Industry<select defaultValue="" name="industry" required><option value disabled>Choose one</option><option>Roofing</option><option>Plumbing / HVAC</option><option>Remodeling / Building</option><option>Home Services</option><option>Law Firm</option><option>Health / Wellness</option><option>Fitness Studio</option><option>Retail / E-commerce</option><option>Franchise</option><option>Other</option></select></label><label>Monthly ad spend<select defaultValue="" name="spend"><option value disabled>Choose one</option><option>Not running ads yet</option><option>Under $2,500 / month</option><option>$2,500 to $10,000 / month</option><option>$10,000 to $25,000 / month</option><option>$25,000+ / month</option></select></label>
            <label className="w">What is the biggest thing you want fixed?<textarea name="goal" placeholder="e.g. Lots of leads, not enough jobs" defaultValue={""} /></label>
            <button className="btn" type="submit">Book a Free Audit Call</button></form>
          <div className="trustrow"><span>No contracts to see the audit</span><span>Senior team on the call</span><span>Your data stays private</span></div></div></div></div></div></section>
</>);}

function SectionSec1(){return (<>
<section className="sec t-ice "><div className="wrap"><div className="hd2 c"><h2 className="words" data-split>What audits <em>usually find</em></h2><p className="lead rv">Real findings from real accounts. Most owners had no idea.</p></div><div className="fband" style={{"--n":"3"}}><div className="fc rv" style={{"transitionDelay":"0.00s"}}><p className="q"><b>16%</b> of a builder's paid calls never reached a human. Phone tree, closed office, voicemail.</p><div className="who"><i className="ind"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9 M18 15l4-4 M21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" /></svg></i><div><strong>Custom Home Builder</strong>Finding from a DBM audit</div></div></div><div className="fc rv hot" style={{"transitionDelay":"0.08s"}}><p className="q"><b>83%</b> of one roofer's Local Services leads in winter were snow removal, not roofing.</p><div className="who"><i className="ind"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 11 9-8 9 8M6 9v11h12V9M10 20v-6h4v6" /></svg></i><div><strong>Roofing Contractor</strong>Finding from a DBM audit</div></div></div><div className="fc rv" style={{"transitionDelay":"0.16s"}}><p className="q"><b>226 leads</b> never got a phone call. Most got one automated text.</p><div className="who"><i className="ind"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.5 5.5a5 5 0 0 0-7 0L12 7l-1.5-1.5a5 5 0 0 0-7 7L12 21l8.5-8.5a5 5 0 0 0 0-7Z" /><path d="M5 11h4l2-3 2 7 2-4h4" /></svg></i><div><strong>Wellness Clinic</strong>Finding from a DBM audit</div></div></div></div></div></section>
</>);}

function SectionSec2(){return (<>
<section className="sec t-dark "><div className="wrap"><div className="hd2"><h2 className="words" data-split>What happens next</h2></div><div className="tl" style={{"--n":"3"}}><div className="s rv" style={{"transitionDelay":"0.00s"}}><span className="when">Step 1</span><h3>Send the form</h3><p>Tell us about your business and what you want fixed.</p></div><div className="s rv" style={{"transitionDelay":"0.08s"}}><span className="when">Step 2</span><h3>We dig in</h3><p>We review what we can before the call, so it is not a sales pitch.</p></div><div className="s rv" style={{"transitionDelay":"0.16s"}}><span className="when">Step 3</span><h3>Get your leak report</h3><p>A short call where we walk you through what we found and what to fix first.</p></div></div></div></section>
</>);}

function SectionSec3(){return (<>
<section className="sec t-ice "><div className="wrap"><div className="faq2"><div><h2 className="words" data-split>Questions owners ask us</h2><p className="lead rv">Straight answers. If yours isn't here, ask us on the call.</p></div><div className="qa"><div className="qi rv"><button type="button" aria-expanded="false">Is the audit really free?<i>+</i></button><div className="a"><p>Yes. No contract and no obligation. If we can help, we will show you how. If we cannot, we will tell you.</p></div></div><div className="qi rv"><button type="button" aria-expanded="false">What do you need from me?<i>+</i></button><div className="a"><p>A few minutes on the form, then view access to your ad accounts if you want the deep version. We will walk you through it.</p></div></div><div className="qi rv"><button type="button" aria-expanded="false">How long is the call?<i>+</i></button><div className="a"><p>About 30 minutes. You leave with a list of the leaks we found and what to fix first.</p></div></div></div></div></div></section>
</>);}

export default function FreeAudit(){return (<>
<Header home={false} />
<main id="main">
<SectionPhHero0 />
<SectionSec1 />
<SectionSec2 />
<SectionSec3 />
</main>
<Footer home={false} />
<a className="btn audit-float" href="#audit-form" hidden>Book a Free Audit Call <i aria-hidden="true">↗</i></a>
</>);}
