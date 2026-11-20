import React from 'react';
import { Header, Footer } from '../components/SiteChrome.jsx';

function SectionArtHero0(){return (<>
<section className="art-hero"><div className="wrap"><div className="meta"><span className="tag">Google</span><span>November 12, 2026</span><span>4 min read</span></div>
    <h1>Local Services Ads are moving into Performance Max. Here's what to save first.</h1><p className="dek">Google is changing how Local Services Ads work. Your old reports will not come with you. Here is what to save, what changes and how to move without losing what works.</p>
    <div className="art-cover"><img src="/img/b1.webp" alt="" style={{"objectPosition":"62% 50%"}} /><div className="tg"><span className="tag">Google</span><div className="bot"><div className="wd"><div className="lb">Save before the switch</div><div className="r"><span className="ck">✓</span>Lead history</div><div className="r"><span className="ck">✓</span>Call recordings</div><div className="r"><span className="ck">✓</span>Reviews + ratings</div></div><div className="hk">Save this <em>first.</em></div></div></div></div></div></section>
</>);}

function SectionArtBody1(){return (<>
<section className="art-body"><div className="art-grid"><nav className="toc" aria-label="On this page"><b>On this page</b><a href="#what-is-changing">What is changing</a><a href="#why-your-history-matters">Why your history matters</a><a href="#what-to-save-before-the-switch">What to save before the switch</a><a href="#how-to-plan-the-move">How to plan the move</a><a href="#the-bottom-line">The bottom line</a></nav>
    <article className="prose"><div className="tldr"><b>The short version</b><ul><li>Google is moving Local Services Ads into Performance Max with pay-per-lead goals.</li><li>Home services went first in August 2026. Professional services follow late 2026, healthcare in 2027.</li><li>Old Local Services reports do not carry over. Export your lead history and recordings now.</li><li>Plan the move around booked jobs, not lead counts.</li></ul></div><h2 id="what-is-changing">What is changing</h2><p>Google is moving Local Services Ads into Performance Max, with pay-per-lead goals. Home service businesses went first in August 2026. Service-area and professional services businesses follow in late 2026, and healthcare and the remaining categories in 2027.</p><p>The ad itself will feel familiar to customers. What changes is how it is bought, reported and optimized behind the scenes.</p><h2 id="why-your-history-matters">Why your history matters</h2><p>Your old Local Services reports do not carry over to the new setup. That history is the only record of which calls you were charged for, which ones were junk and which ones turned into paying customers.</p><div className="callout"><b>What we do for clients</b>We export each Local Services client's full lead history to a spreadsheet every two weeks, so nothing is lost when the switch happens.</div><h2 id="what-to-save-before-the-switch">What to save before the switch</h2><ol><li><strong>Lead history.</strong> Every lead with its date, time, type and charge status.</li><li><strong>Call recordings.</strong> These are how you prove which leads were junk and which were real.</li><li><strong>Disputes and credits.</strong> A record of what Google refunded and why.</li><li><strong>Reviews and ratings.</strong> Screenshot your profile, your rating and your review count.</li><li><strong>Your real results.</strong> If you match leads to jobs, save that match. It is the baseline the new campaigns have to beat.</li></ol><h2 id="how-to-plan-the-move">How to plan the move</h2><p>Do not judge the new campaigns on lead count. Judge them on booked jobs and paid invoices, the same way you should have judged the old ones. That means your calls need to be tracked and matched to customers before the switch, not after.</p><ul><li>Set a clear baseline: cost per booked job and return on paid invoices from your old Local Services data.</li><li>Keep junk-lead reviews going. Wrong numbers and job seekers still cost money.</li><li>Give the new campaign a fair learning window before making big changes.</li></ul><h2 id="the-bottom-line">The bottom line</h2><p>The businesses that come out ahead will be the ones that saved their history and measure on real jobs. If you are not sure what your Local Services Ads actually returned, that is the first thing to find out.</p>
      <div className="byline"><span className="av">DBM</span><span><b>The DBM Team</b><span>Digital Blueprint Marketing, Pittsburgh and Orlando</span></span></div></article></div></section>
</>);}

function SectionSec2(){return (<>
<section className="sec t-ice "><div className="wrap"><div className="faq2"><div><h2 className="words" data-split>Quick answers</h2><p className="lead rv">The questions owners ask us most about this.</p></div><div className="qa"><div className="qi rv"><button type="button" aria-expanded="false">When do Local Services Ads move to Performance Max?<i>+</i></button><div className="a"><p>Home services moved first in August 2026. Service-area and professional services businesses follow in late 2026, and healthcare and remaining categories in 2027.</p></div></div><div className="qi rv"><button type="button" aria-expanded="false">Will I lose my Local Services lead history?<i>+</i></button><div className="a"><p>Old Local Services reports do not carry over to the new setup, so export your lead history, recordings and dispute records before the switch.</p></div></div><div className="qi rv"><button type="button" aria-expanded="false">Will my Google Guaranteed badge go away?<i>+</i></button><div className="a"><p>Ask Google for the latest on your category. Either way, save screenshots of your profile, rating and reviews before the change.</p></div></div></div></div></div></section>
</>);}

function SectionSec3(){return (<>
<section className="sec t-dark tight"><div className="wrap"><p className="rel-h rv">Related services</p><div className="rel" style={{"--c":"2"}}><a className="rv" href="/services/google-ads/"><span>Google Ads + Local Services<small>Search and Local Services Ads tuned to booked jobs</small></span><i aria-hidden="true">↗</i></a><a className="rv" href="/services/tracking-attribution/"><span>Tracking + Attribution<small>Every lead followed from ad click to paid invoice</small></span><i aria-hidden="true">↗</i></a></div></div></section>
</>);}

export default function InsightsLsaMovingToPerformanceMax(){return (<>
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
