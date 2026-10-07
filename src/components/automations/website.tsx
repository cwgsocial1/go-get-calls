import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  Globe2,
  Menu,
  MessageCircle,
  ShieldCheck,
  Star,
  X,
  Zap,
  Linkedin,
  Instagram,
  Youtube,
  Music2,
  Mail,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Blueprint, Brand, EMAIL, WHATSAPP, Heading, Section, navLinks } from "./shared";
import { industries, services, steps, projects, plans, faqs } from "./data";
import { Mockup } from "./mockup";
import { siteConfig, business } from "@/config/siteConfig";
import { FounderIntro, FounderVideo, TeamSection, Credibility, Proof, Fit, ClearTerms } from "./trust";
import { InquiryForm } from "./inquiry-form";
import { trackEvent } from "@/lib/tracking";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="content-width header-row">
        <Brand />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map(([label, id]) => (
            <a key={id} href={`/#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Blueprint>Get Free Blueprint</Blueprint>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-menu lg:hidden" aria-label="Mobile navigation">
          {navLinks.map(([label, id]) => (
            <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Blueprint>Get Free Blueprint</Blueprint>
        </nav>
      )}
    </header>
  );
}
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="content-width relative z-10">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="status-dot" /> CYBERWORLD AUTOMATIONS · GOHIGHLEVEL SPECIALISTS
          </div>
          <h1>GoHighLevel automation for <span className="text-primary">Real Estate, Home Services & Online Coaches</span></h1>
          <p className="mt-5 font-semibold">Founder-led. You talk to Ayodele, not a call center.</p>
          <p className="hero-description">I'm Ayodele. I build CRM, funnel and follow-up systems so each new inquiry has a reply, a next step and someone responsible for it.</p>
          <div className="hero-actions">
            <Blueprint />
            <Button asChild variant="outline" className="secondary-cta">
              <a href="#results">
                See Example Systems <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="hero-assurances">
            <span>
              <CheckCircle2 /> Free 30-minute strategy call
            </span>
            <span>
              <CheckCircle2 /> No obligation
            </span>
            <span>
              <CheckCircle2 /> Typical build: about 14 days
            </span>
          </div>
        </div>
        <div className="hero-trust"><p>Built on GoHighLevel · Serving the US, Canada & Europe</p></div>
      </div>
      <div className="hero-bottom content-width">
        <span>THREE INDUSTRIES. ONE SPECIALIZED PARTNER.</span>
        <div>
          {industries.map((i) => (
            <span key={i.name}>
              <i.icon size={17} />
              {i.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
function IntroSections() {
  return (
    <>
      <Section className="pain-section">
        <Heading eyebrow="THE COST OF DOING IT MANUALLY" title="Sound Familiar?" />
        <div className="grid gap-5 md:grid-cols-3">
          {industries.map((i) => (
            <article className={`industry-pain reveal ${i.tone}`} key={i.name}>
              <span className="icon-tile">
                <i.icon size={23} />
              </span>
              <h3>{i.name}</h3>
              <ul>
                {i.pain.map((p) => (
                  <li key={p}>
                    <X size={14} />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="section-bottom-line reveal">
          If any of this sounds like you,{" "}
          <span className="text-primary">let’s map out a better follow-up system.</span>
        </p>
      </Section>
      <Section className="alternate">
        <Heading eyebrow="LESS BUSYWORK. MORE BUSINESS." title="What We Automate For You" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article className="service-card reveal" key={s.title}>
              <div className="flex justify-between">
                <span className="icon-tile">
                  <s.icon size={23} />
                </span>
                <span className="card-number">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <Blueprint />
        </div>
      </Section>
      <Section id="how-it-works">
        <Heading eyebrow="A CLEAR PLAN, THEN A BUILD" title="How I work with you" />
        <div className="build-timeline">
          {steps.map((s, i) => (
            <article className="step reveal" key={s.title}>
              <div className="step-top">
                <span className="step-number">0{i + 1}</span>
                <s.icon size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
        <aside className="expectations"><h3>What you can expect from us</h3><p>Replies within one business day · A short video update each week · One point of contact</p></aside>
        <div className="center-cta">
          <p className="mb-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock3 size={16} className="text-success" />
            A typical build takes about 14 days. We agree on scope first.
          </p>
          <Blueprint>Get My Free Blueprint</Blueprint>
        </div>
      </Section>
    </>
  );
}
function Results() {
  return (
    <Section id="results" className="alternate">
      <Heading eyebrow="EXAMPLE SCENARIOS" title="What Your System Could Look Like" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            className={`project-card reveal ${industries[p.industry]?.tone ?? "estate"}`}
            key={p.title}
          >
            <div className="project-preview">
              <Mockup type={p.type} compact /><p className="mockup-caption">Example dashboard. Sample data.</p>
            </div>
            <div className="project-body">
              <span className="industry-tag">
                {p.industry === 2
                  ? "Online Coach"
                  : (industries[p.industry]?.name ?? "Real Estate")}
              </span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="example-badge">Example scenario</span>
              <div className="project-result"><span><b>Target outcome:</b> {p.result}</span></div>
              <Blueprint className="scenario-cta">Get a Blueprint Like This</Blueprint>
            </div>
          </article>
        ))}
      </div>
      <div className="center-cta">
        <p className="mb-6 text-sm text-muted-foreground">
          Every project starts with a free blueprint. You see the full plan before we build anything.
        </p>
        <Blueprint />
      </div>
    </Section>
  );
}
function IndustryTabs() {
  return (
    <Section id="industries" className="alternate">
      <Heading
        eyebrow="NOT GENERALISTS. YOUR SPECIALISTS."
        title="Tailored Automation for Your Industry"
      />
      <Tabs defaultValue="Real Estate">
        <TabsList className="industry-tabs">
          {industries.map((i) => (
            <TabsTrigger key={i.name} value={i.name}>
              <i.icon size={17} />
              <span>{i.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {industries.map((i) => (
          <TabsContent key={i.name} value={i.name} className="industry-panel">
            <div className="min-w-0">
              <span className={`industry-tag ${i.tone}`}>{i.name}</span>
              <h3>
                {i.name === "Real Estate"
                  ? "More conversations. More closings."
                  : i.name === "Home Services"
                    ? "More booked jobs. Less busywork."
                    : "More clients. More time to coach."}
              </h3>
              <p>{i.description}</p>
              <ul>
                {i.bullets.map((b) => (
                  <li key={b}>
                    <CheckCircle2 size={17} />
                    {b}
                  </li>
                ))}
              </ul>
              <Blueprint className="industry-blueprint">Get My Custom {i.name} Blueprint</Blueprint>
            </div>
            <Mockup
              type={
                i.name === "Real Estate"
                  ? "pipeline"
                  : i.name === "Home Services"
                    ? "calendar"
                    : "funnel"
              }
            />
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
function Pricing() {
  return (
    <Section id="pricing">
      <Heading eyebrow="INVEST IN YOUR NEXT STAGE OF GROWTH" title="Simple, Transparent Pricing" />
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <article key={p.name} className={`pricing-card reveal ${i === 1 ? "popular" : ""}`}>
            {i === 1 && (
              <div className="popular-label">
                <Zap size={12} /> GROWING TEAMS
              </div>
            )}
            <div className="pricing-content">
              <div className="flex justify-between">
                <h3>{p.name}</h3>
                <span className="text-primary">
                  {i === 0 ? (
                    <Zap size={20} />
                  ) : i === 1 ? (
                    <Star size={20} />
                  ) : (
                    <Globe2 size={20} />
                  )}
                </span>
              </div>
              <div className={`plan-price ${i === 2 ? "custom-price" : ""}`}>{p.price}</div>
              <p className="plan-note">{p.note}</p>
              <p className="plan-best">{p.best}</p>
              <div className="plan-divider" />
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="plan-exclusions"><b>Not included:</b> {i===0?'Advanced workflows, reputation management, custom integrations or extended optimization.':i===1?'Custom API integrations, multiple pipelines or a dedicated account manager.':'Any service outside your agreed written scope.'}</p>
              <Blueprint className="w-full">{i===2?'Discuss my blueprint':'Get My Blueprint'}</Blueprint>
            </div>
          </article>
        ))}
      </div>
      <p className="pricing-footnote">
        All plans start with a free Automation Blueprint call.
        <br className="sm:hidden" /> Not sure which plan? Let's figure it out together.
      </p>
      <ClearTerms/>
      <div className="faq-wrap">
        <div className="eyebrow justify-center">A LITTLE MORE CLARITY</div>
        <h3 className="mb-6 text-center text-2xl font-bold">Frequently asked questions</h3>
        <Accordion type="single" collapsible>
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 text-base">{q}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
function Stats(){return <div className="stats-band"><div className="content-width stats-grid">{[["3","Industries We Specialize In"],["14-Day","Typical Delivery"],["30-Min","Free Strategy Call"],["24/7","Automated Follow-Up"]].map(([value,label])=><div key={label}><strong>{value}</strong><p>{label}</p></div>)}</div></div>}
function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <div className="contact-heading reveal">
        <div className="eyebrow justify-center">
          <span /> LET’S BUILD YOUR NEXT CHAPTER
        </div>
        <h2>Let's talk about your follow-up</h2><p>Bring your current process and your biggest lead problem. I’ll help you work out what to automate and what still needs a person.</p>
        <Blueprint />
        <p className="no-pressure">
          No obligation. No pressure. Just a clear plan you can keep — even if you never hire us.
        </p>
      </div>
      <InquiryForm/>
      <div className="direct-contact">
        <span>Or reach us directly:</span>
        <a href={EMAIL}>
          <Mail size={15} />
          ceo@cyberworldgroups.com
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={15} />
          +1 (470) 317-8834
        </a>
      </div>
    </Section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-width">
        <div className="footer-top">
          <div>
            <Brand />
            <p className="mt-4 text-xs text-muted-foreground">
              CyberWorld Automations — A CyberWorld Groups Company
            </p>
            <div className="mt-4">
              <a href={business.parentUrl} target="_blank" rel="noopener noreferrer" className="text-primary">Visit CyberWorld Groups <ArrowUpRight size={13}/></a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              {navLinks.map(([label, id]) => (
                <a key={id} href={`/#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4>Let’s connect</h4>
            <a className="footer-contact" href={EMAIL}>
              ceo@cyberworldgroups.com
            </a>
            <a className="footer-contact" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              +1 (470) 317-8834
            </a>
            <div className="social-links">{Object.entries(siteConfig.socialProfiles??{}).filter(([,url])=>url).map(([name,url])=><a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>)}</div>
          </div>
        </div>
        <p className="serving">
          <Globe2 size={14} />
          Serving businesses across the United States, Canada & Europe
        </p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CyberWorld Groups. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function Website() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FounderIntro />
        {!siteConfig.founderPhoto && <FounderVideo/>}
        <Credibility/>
        <IntroSections />
        <Results />
        <Proof />
        <TeamSection />
        <Fit/>
        <IndustryTabs />
        <Pricing />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <div className="sticky-booking"><Blueprint>{siteConfig.founderPhoto&&<img src={siteConfig.founderPhoto} alt="Ayodele Ezekiel" width={32} height={32}/>}Book a free 30-minute call</Blueprint></div>
      <Button asChild className="whatsapp-float">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={()=>trackEvent("whatsapp_click")} title="Hi, I’m Ayodele’s team. Ask us anything about automation.">
          <MessageCircle size={20} />
          <span>Chat on WhatsApp</span>
        </a>
      </Button>
    </>
  );
}
