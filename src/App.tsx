import { useState } from 'react';
import { ArrowRight, ShieldCheck, Fingerprint, LockKeyhole, Activity, Smartphone, FileCheck2, CheckCircle2, Menu, X, Network, Eye, ChevronRight } from 'lucide-react';

const portal = `${import.meta.env.BASE_URL}portal/`;
const logo = `${import.meta.env.BASE_URL}brand/aimetics-logo.svg`;
export default function App() {
  const [menu, setMenu] = useState(false);
  const jump = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  return <div className="site">
    <nav className="site-nav">
      <a className="logo-link" href="#top"><img src={logo} alt="AiMetics — AI Action Security Infrastructure" /></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
      <div className={`site-links ${menu ? 'open' : ''}`}>
        <a onClick={() => jump('platform')}>Platform</a><a onClick={() => jump('how-it-works')}>How it works</a><a onClick={() => jump('industries')}>Industries</a><a onClick={() => jump('trust')}>Trust</a><a onClick={() => jump('company')}>Company</a>
        <a className="nav-portal" href={portal}>Open CounterSign <ArrowRight size={15}/></a>
      </div>
    </nav>
    <header className="site-hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><i/> INDEPENDENT CONTROL FOR AI ACTIONS</div>
        <h1>Let AI operate.<br/><span>Keep control.</span></h1>
        <p className="hero-lead">The second signature for AI. AiMetics is building the independent control layer that checks, authorises and records sensitive actions initiated by AI agents.</p>
        <div className="hero-actions"><a className="button button-teal" href={portal}>Enter CounterSign portal <ArrowRight size={17}/></a><a className="button button-outline" href="#platform">Explore the platform</a></div>
        <div className="hero-claim"><ShieldCheck size={19}/> No AI moves money alone.</div>
      </div>
      <div className="hero-art" aria-label="AiMetics control layer illustration">
        <div className="art-halo halo-a"/><div className="art-halo halo-b"/>
        <div className="art-core"><img src={logo} alt="AiMetics"/></div>
        <div className="art-chip chip-one"><Fingerprint/> <span>IDENTITY</span></div>
        <div className="art-chip chip-two"><LockKeyhole/> <span>AUTHORITY</span></div>
        <div className="art-chip chip-three"><Activity/> <span>RISK</span></div>
        <div className="art-chip chip-four"><FileCheck2/> <span>PROOF</span></div>
      </div>
      <div className="hero-footnote">AI ACTION SECURITY INFRASTRUCTURE <span>•</span> MODEL-INDEPENDENT BY DESIGN</div>
    </header>
    <div className="control-ribbon"><div><b>IDENTITY</b><span>Who is acting?</span></div><div><b>AUTHORITY</b><span>What may they do?</span></div><div><b>RISK</b><span>What could go wrong?</span></div><div><b>DECISION</b><span>Allow · Hold · Block</span></div></div>
    <section className="content-section problem" id="problem"><div className="section-heading"><div className="eyebrow">THE CONTROL GAP</div><h2>AI can decide.<br/><em>But should it act?</em></h2><p>AI agents are moving beyond recommendations and into execution. Sensitive actions need independent checks outside the agent and outside the model that produced the instruction.</p></div><div className="feature-grid three">
      <article><div className="feature-icon"><Fingerprint/></div><h3>Know who is acting</h3><p>Identify the agent, its owner, credentials and the authority attached to the request.</p></article>
      <article><div className="feature-icon"><LockKeyhole/></div><h3>Define what is allowed</h3><p>Check whether an action fits customer mandates, institutional policy and configured limits.</p></article>
      <article><div className="feature-icon"><Activity/></div><h3>Understand what is at risk</h3><p>Evaluate the context and potential exposure before a sensitive action is allowed to proceed.</p></article>
    </div></section>
    <section className="platform-section" id="platform"><div className="platform-top"><div><div className="eyebrow">THE AIMETICS CONTROL PLANE</div><h2>One independent layer.<br/><em>Four connected capabilities.</em></h2></div><p>CounterSign is designed to sit between AI agents and the systems where sensitive actions take place.</p></div>
      <div className="module-grid">
        <article className="module-card module-primary"><div className="module-index">01 / CORE CONTROL</div><ShieldCheck/><h3>CounterSign</h3><p>The authorisation and enforcement layer. Evaluate requests and return an explicit allow, hold or block decision.</p><a href={portal}>Open the portal <ChevronRight size={16}/></a></article>
        <article className="module-card"><div className="module-index">02 / INTELLIGENCE</div><Activity/><h3>Mizani</h3><p>Risk intelligence to assess contextual signals and the value exposed by a proposed action.</p></article>
        <article className="module-card"><div className="module-index">03 / AUTHORISATION</div><Smartphone/><h3>Assent</h3><p>Customer authorisation workflows, including a planned USSD-based confirmation path.</p></article>
        <article className="module-card"><div className="module-index">04 / EVIDENCE</div><FileCheck2/><h3>Proof</h3><p>Verifiable records of decisions, evidence, outcomes and receipts.</p></article>
      </div>
    </section>
    <section className="how-section" id="how-it-works"><div className="how-copy"><div className="eyebrow">HOW IT WORKS</div><h2>Every sensitive action<br/><em>faces a second signature.</em></h2><p>An agent proposes an action. CounterSign evaluates identity, authority and risk. Policy determines the next step, and the decision is recorded for review.</p><a className="text-link" href={portal}>Experience the CounterSign simulation <ArrowRight size={16}/></a></div><div className="flow-list">
      {[["01","Request","An AI agent submits a structured action request."],["02","Evaluate","Identity, authority, policy and risk signals are checked."],["03","Decide","Allow, hold or block. Silence defaults to hold."],["04","Record","Decision evidence and outcome are captured for review."]].map(([n,t,d])=><div className="flow-row" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div><ChevronRight/></div>)}
    </div></section>
    <section className="industries-section" id="industries"><div className="eyebrow">WHERE CONTROL MATTERS</div><h2>Built for high-consequence actions.</h2><div className="industry-grid">{['Digital lending','SACCOs & cooperatives','Banks & payment providers','Telecommunications','Embedded finance','Enterprise AI operations'].map(x=><div key={x}><CheckCircle2/>{x}</div>)}</div><p className="fineprint">These are target application areas, not claims of existing deployments or signed partnerships.</p></section>
    <section className="trust-section" id="trust"><div><div className="eyebrow">TRUST BY DESIGN</div><h2>Control that can be<br/><em>inspected and challenged.</em></h2><p>Our development approach prioritises explicit policy, fail-safe outcomes, auditable decisions and independent testing before production use.</p></div><div className="trust-points">
      <div><ShieldCheck/><section><b>Fail-safe default</b><p>Unresolved or silent decisions should hold, not silently pass.</p></section></div>
      <div><Network/><section><b>Model independent</b><p>Control logic should not depend on a single model provider.</p></section></div>
      <div><Eye/><section><b>Evidence first</b><p>Decision records should be reviewable and verifiable.</p></section></div>
      <div><Activity/><section><b>Test before trust</b><p>Security and performance claims require measured, independent validation.</p></section></div>
    </div></section>
    <section className="portal-cta"><div className="eyebrow">EXPLORE THE PRODUCT</div><h2>See the second signature<br/>in action.</h2><p>Open the CounterSign demonstration portal to simulate an AI-initiated transaction, evaluate risk signals and inspect the authorisation decision.</p><a className="button button-teal" href={portal}>Launch CounterSign portal <ArrowRight size={17}/></a><small>Demonstration environment · Synthetic data only · No live financial rails connected</small></section>
    <footer className="site-footer"><img src={logo} alt="AiMetics"/><div><span>The second signature for AI.</span><small>© 2026 AiMetics · Product in development</small></div><a href={portal}>CounterSign portal <ArrowRight size={15}/></a></footer>
  </div>;
}