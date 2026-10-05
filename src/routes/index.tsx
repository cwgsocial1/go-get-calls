import { createFileRoute } from "@tanstack/react-router";
import { Website } from "@/components/automations/website";
const title = "GHL Automation for Real Estate, Home Services & Coaches | CyberWorld Automations";
const description =
  "We build GoHighLevel automation systems that capture, nurture, and convert leads on autopilot for real estate, home services, and online coaches across the US, Canada & Europe.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Website,
});
