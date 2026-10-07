import { ArrowUpRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/tracking";
import type { ReactNode } from "react";

export const BOOKING = "https://calendly.com/cwgsocial1/30min?month=2026-10";
export const WHATSAPP = "https://wa.me/14703178834";
export const EMAIL = "mailto:ceo@cyberworldgroups.com";
export const navLinks = [
  ["Home", "home"],
  ["Industries", "industries"],
  ["How It Works", "how-it-works"],
  ["Results", "results"],
  ["Pricing", "pricing"],
  ["Contact", "contact"],
];
export function Blueprint({
  children = "Get My Free Automation Blueprint",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Button asChild className={`blueprint ${className}`}>
      <a href={BOOKING} onClick={()=>trackEvent("booking_click")} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowUpRight size={17} />
      </a>
    </Button>
  );
}
export function Brand() {
  return (
    <a
      href="/#home"
      className="flex min-w-0 items-center gap-2.5"
      aria-label="CyberWorld Automations home"
    >
      <span className="brand-mark">
        <Zap size={23} fill="currentColor" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-extrabold sm:text-base">
          CyberWorld <span className="text-primary">Automations</span>
        </span>
        <span className="block text-[10px] text-muted-foreground">by CyberWorld Groups</span>
      </span>
    </a>
  );
}
export function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow">
        <span /> {eyebrow}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`page-section ${className}`}>
      <div className="content-width">{children}</div>
    </section>
  );
}
