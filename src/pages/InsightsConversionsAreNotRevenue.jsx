import React from 'react';
import { Header, Footer } from '../components/SiteChrome.jsx';

function SectionArtHero0(){return (<>
<section className="art-hero"><div className="wrap"><div className="meta"><span className="tag">Tracking</span><span>October 29, 2026</span><span>3 min read</span></div>
    <h1>Platform conversions aren't revenue. What to track instead.</h1><p className="dek">Conversions are up. Revenue is flat. If that sounds familiar, the problem is probably what you are counting.</p>
    <div className="art-cover"><img src="/img/b3.webp" alt="" style={{"objectPosition":"78% 50%"}} /><div className="tg"><span className="tag">Tracking</span><div className="bot"><div className="wd tcmp"><div><span className="lb">Conversions</span><b className="no">142</b></div><div><span className="lb">Paid jobs</span><b className="yes">38</b></div></div><div className="hk">Clicks are <em>not</em> cash.</div></div></div></div></div></section>
</>);}

function SectionArtBody1(){return (<>
<section className="art-body"><div className="art-grid"><nav className="toc" aria-label="On this page"><b>On this page</b><a href="#what-a-conversion-really-is">What a conversion really is</a><a href="#how-conversions-get-inflated">How conversions get inflated</a><a href="#what-to-track-instead">What to track instead</a><a href="#make-the-ads-smarter">Make the ads smarter</a><a href="#the-bottom-line">The bottom line</a></nav>
    <article className="prose"><div className="tldr"><b>The short version</b><ul><li>A conversion is anything the ad platform was told to count, not a sale.</li><li>Junk, repeat callers and double counting all inflate conversions.</li><li>Track qualified leads, booked jobs and paid revenue instead.</li><li>Send the real numbers back so the ads learn from buyers.</li></ul></div><h2 id="what-a-conversion-really-is">What a conversion really is</h2><p>A conversion is whatever you told Google or Meta to count. A form fill. A call over 60 seconds. A page view. None of those are a sale. They are a guess that a sale might happen.</p><h2 id="how-conversions-get-inflated">How conversions get inflated</h2><ul><li><strong>Junk leads count.</strong> At one roofer, 83% of winter Local Services leads were snow removal. Every one counted as a lead.</li><li><strong>Past clients count.</strong> At one law firm, the records showed 20 new clients from ads. 18 were past clients calling back.</li><li><strong>One call can count twice.</strong> Google notes that tracking calls from ads and the same calls through imported call tracking counts two conversions per call.</li><li><strong>Typos count.</strong> One deal was logged at $3.1M+. The paid invoice said $425.</li></ul><h2 id="what-to-track-instead">What to track instead</h2><ol><li><strong>Qualified leads.</strong> Real people, in your area, asking for what you sell.</li><li><strong>Booked appointments or estimates.</strong> Proof they are serious.</li><li><strong>Won jobs or signed cases.</strong> The sale itself.</li><li><strong>Paid revenue.</strong> The money that actually landed.</li></ol><div className="callout"><b>The test</b>If your report cannot show paid revenue by channel, it cannot tell you whether your marketing works.</div><h2 id="make-the-ads-smarter">Make the ads smarter</h2><p>Once you track the real numbers, send them back to Google and Meta. Google reports that advertisers who connect offline data see an average 26% increase in incremental return on ad spend. Meta reports a 17.8% lower cost per result on average for advertisers using its Conversions API.</p><p>The ad platforms are very good at finding more of whatever you count. So count buyers.</p><h2 id="the-bottom-line">The bottom line</h2><p>Conversions are a means, not the goal. Follow every lead to the paid invoice and you will know exactly what your marketing returns.</p>
      <div className="byline"><span className="av">DBM</span><span><b>The DBM Team</b><span>Digital Blueprint Marketing, Pittsburgh and Orlando</span></span></div></article></div></section>
</>);}

function SectionSec2(){return (<>
<section className="sec t-ice "><div className="wrap"><div className="faq2"><div><h2 className="words" data-split>Quick answers</h2><p className="lead rv">The questions owners ask us most about this.</p></div><div className="qa"><div className="qi rv"><button type="button" aria-expanded="false">Why do my conversions not match my sales?<i>+</i></button><div className="a"><p>Platform conversions often count junk leads, repeat callers and duplicate events. Sales only count real paying customers, so the two rarely match.</p></div></div><div className="qi rv"><button type="button" aria-expanded="false">What is the difference between a lead and a conversion?<i>+</i></button><div className="a"><p>A conversion is any action you tell the platform to count. A lead is a person who reached out. A qualified lead is a lead who could actually buy from you.</p></div></div><div className="qi rv"><button type="button" aria-expanded="false">What should a local business track?<i>+</i></button><div className="a"><p>Qualified leads, booked appointments, won jobs and paid revenue, by channel.</p></div></div></div></div></div></section>
</>);}

function SectionSec3(){return (<>
<section className="sec t-dark tight"><div className="wrap"><p className="rel-h rv">Related services</p><div className="rel" style={{"--c":"3"}}><a className="rv" href="/services/tracking-attribution/"><span>Tracking + Attribution<small>Every lead followed from ad click to paid invoice</small></span><i aria-hidden="true">↗</i></a><a className="rv" href="/services/qualified-lead-signal/"><span>Qualified Lead Signal<small>Teach Google and Meta what a real buyer looks like</small></span><i aria-hidden="true">↗</i></a><a className="rv" href="/services/roi-dashboards/"><span>Live ROI Dashboards<small>Every dollar in, every dollar back, live</small></span><i aria-hidden="true">↗</i></a></div></div></section>
</>);}

export default function InsightsConversionsAreNotRevenue(){return (<>
<Header home={false} />
<main id="main">
<SectionArtHero0 />
<SectionArtBody1 />
<SectionSec2 />
<SectionSec3 />
</main>
<Footer home={false} />
<a className="btn audit-float" href="#contact" hidden>Book a Free Audit Call <i aria-hidden="true">↗</i></a>
</>);}
