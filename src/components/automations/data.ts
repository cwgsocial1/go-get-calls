import {
  Building2,
  Wrench,
  Laptop,
  Database,
  LayoutTemplate,
  Send,
  CalendarDays,
  Star,
  Workflow,
  Phone,
  FileCheck,
  Rocket,
  Users,
} from "lucide-react";
export const industries = [
  {
    name: "Real Estate",
    icon: Building2,
    tone: "estate",
    pain: [
      "Leads come in but nobody follows up fast enough",
      "You're manually sending texts and emails to every prospect",
      "Your CRM is a mess or you don't even have one",
    ],
    description:
      "It's 9pm. A Zillow lead comes in while you're at your kid's game. By morning, they may have called other agents. I connect your inquiries to a reply and a clear next step.",
    bullets: [
      "Zillow & Facebook lead capture with instant SMS follow-up",
      "Automated showing appointments and reminders",
      "Buyer, seller & tenant nurturing sequences",
      "Post-closing review and referral requests",
    ],
  },
  {
    name: "Home Services",
    icon: Wrench,
    tone: "services",
    pain: [
      "You're missing calls and losing jobs to competitors",
      "No system to collect reviews after every job",
      "Scheduling and follow-ups are all manual",
    ],
    description:
      "You're on a job and the phone rings. You can't answer, and a potential customer still needs help. I connect missed calls, estimate follow-up and scheduling for home service teams.",
    bullets: [
      "Missed-call text-back and instant lead responses",
      "Estimate follow-ups and easy job scheduling",
      "Automated review requests after every job",
      "Seasonal re-engagement and repeat booking campaigns",
    ],
  },
  {
    name: "Online Coaches",
    icon: Laptop,
    tone: "coaches",
    pain: [
      "Your funnel is leaking leads everywhere",
      "You spend hours DMing and emailing instead of coaching",
      "No automated system to onboard and nurture clients",
    ],
    description:
      "You've finished a coaching session and there are unread inquiries in three places. I bring the next reply, call booking and onboarding into one GHL system.",
    bullets: [
      "Webinar and course registration funnels",
      "Email & SMS nurturing and sales call booking",
      "Client onboarding and check-in reminders",
      "Retention and referral program automation",
    ],
  },
];
export const services = [
  {
    icon: Database,
    title: "CRM Setup & Migration",
    description:
      "We build your entire GHL CRM from scratch or migrate from HubSpot, Salesforce, or spreadsheets.",
  },
  {
    icon: LayoutTemplate,
    title: "Sales Funnel Building",
    description:
      "I build focused landing pages that collect inquiries and give each visitor a clear next step.",
  },
  {
    icon: Send,
    title: "Automated Follow-Up Sequences",
    description: "Email, SMS, and voicemail drops that follow up with every lead instantly — 24/7.",
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking Automation",
    description:
      "Prospects book directly into your calendar. No back-and-forth. No missed opportunities.",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "I connect completed jobs or sessions to a request for honest feedback.",
  },
  {
    icon: Workflow,
    title: "Pipeline & Workflow Automation",
    description:
      "Visual pipelines so you always know where every lead is. Automated task triggers and notifications.",
  },
];
export const steps = [
 {icon:Phone,title:"Free call",description:"We talk for 30 minutes about your leads, your tools and where follow-up gets stuck."},
 {icon:FileCheck,title:"Written blueprint",description:"I write down the proposed system and scope. You see the plan before you pay."},
 {icon:Workflow,title:"Build (about 14 days)",description:"We set up the agreed CRM, funnels and workflows. Larger integrations may need longer."},
 {icon:Users,title:"Handover and training",description:"We walk your team through the system, test the handoffs and show you how to use it."},
 {icon:Rocket,title:"30 days of optimization",description:"Growth includes 30 days of optimization. Enterprise includes 60 days; Starter does not include extended optimization."},
];
export const projects = [
 {industry:0,title:"Real Estate Brokerage",description:"Property inquiries flow into one pipeline, with an initial reply and showing reminders.",result:"Faster follow-up and clearer showing requests",type:"pipeline"},
 {industry:0,title:"Property Management Firm",description:"Tenant inquiries are organized in a CRM with response workflows and review requests.",result:"Less manual administration",type:"workflow"},
 {industry:1,title:"HVAC Company",description:"Estimate follow-ups, review requests and seasonal reminders share one system.",result:"Consistent estimate follow-up",type:"reviews"},
 {industry:1,title:"Cleaning Company",description:"A booking funnel connects confirmations, reminders and repeat-service follow-up.",result:"Simpler repeat bookings",type:"calendar"},
 {industry:2,title:"Business Coach",description:"A registration funnel connects webinar reminders, email follow-up and call booking.",result:"A clearer path from inquiry to consultation",type:"funnel"},
 {industry:2,title:"Fitness Coach",description:"Client onboarding, check-in reminders and referral requests are organized together.",result:"More consistent client communication",type:"workflow"},
];
export const plans = [
  {
    name: "Starter",
    price: "$1,500",
    note: "one-time",
    best: "Best for solopreneurs & small teams",
    features: [
      "CRM setup",
      "1 sales funnel",
      "Basic follow-up sequence (email + SMS)",
      "Calendar booking integration",
      "About 14-day build",
    ],
  },
  {
    name: "Growth",
    price: "$3,000",
    note: "one-time",
    best: "Best for growing businesses",
    features: [
      "Everything in Starter",
      "Advanced multi-step follow-up sequences",
      "Reputation management automation",
      "Pipeline setup with workflow triggers",
      "2 funnels",
      "30-day optimization support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    note: "built around your business",
    best: "Best for agencies & large teams",
    features: [
      "Full system build",
      "Multiple funnels & pipelines",
      "Custom integrations (Zapier, API, etc.)",
      "Team training & onboarding",
      "60-day optimization & support",
      "Dedicated account manager",
    ],
  },
];
export const faqs = [
  [
    "What is GoHighLevel?",
    "GoHighLevel (GHL) is an all-in-one platform for managing leads, sales funnels, calendars, email, SMS, reviews and automated workflows. We connect those tools into a system tailored to your business.",
  ],
  [
    "Do I need to have GHL already?",
    "No. We can help you get started with GoHighLevel, or build inside your existing account. We’ll clarify your account and subscription needs on your free Blueprint call.",
  ],
  [
    "How long does setup take?",
    "A typical build takes about 14 days. Larger builds and custom integrations can take longer; we agree on your timeline before building.",
  ],
  [
    "Do you offer ongoing support?",
    "Growth includes 30-day optimization support. Enterprise includes 60-day optimization and support with a dedicated account manager. We can discuss your longer-term needs on your call.",
  ],
  [
    "Can I upgrade my plan later?",
    "Yes. Your system can grow with your business. We’ll scope additional funnels, workflows or integrations with you before making changes.",
  ],
];
