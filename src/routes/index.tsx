import { createFileRoute } from "@tanstack/react-router";
import { Website } from "@/components/automations/website";
import { pageHead } from "@/components/automations/seo";
export const Route = createFileRoute("/")({
 head:()=>pageHead('/', 'GoHighLevel Automation Agency for Real Estate, Home Services & Coaches | CyberWorld', 'We build GoHighLevel CRM, funnel and follow-up automation for real estate agents, home service companies and online coaches in the US, Canada and Europe. Free blueprint call.'),
 component:Website,
});
