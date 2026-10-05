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
      "Turn every property inquiry into a conversation. From agents and brokerages to property managers, your GHL system keeps leads engaged and your calendar full.",
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
      "Win more jobs without adding more admin. We build GHL systems for HVAC, plumbing, roofing, cleaning, landscaping and electrical businesses.",
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
      "Spend your time coaching, not chasing leads. Business, fitness and life coaches, consultants and course creators get a connected journey from first click to loyal client.",
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
      "High-converting landing pages and funnels designed to capture and convert leads automatically.",
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
      "Automated review requests after every job or session. Build 5-star credibility on autopilot.",
  },
  {
    icon: Workflow,
    title: "Pipeline & Workflow Automation",
    description:
      "Visual pipelines so you always know where every lead is. Automated task triggers and notifications.",
  },
];
export const steps = [
  {
    icon: Phone,
    title: "Free Strategy Call",
    description:
      "We hop on a 30-minute call to understand your business, your current systems, and where you're losing leads.",
  },
  {
    icon: FileCheck,
    title: "Your Custom Automation Blueprint",
    description:
      "We design a tailored GHL automation system specifically for your industry and business model. You see the full plan before we build anything.",
  },
  {
    icon: Rocket,
    title: "Build, Launch & Optimize",
    description:
      "We build everything inside GoHighLevel, launch it, train your team, and optimize for results over 30 days.",
  },
];
export const projects = [
  {
    industry: 0,
    title: "Texas Brokerage",
    description:
      "Built a full GHL system with automated lead capture from Zillow & Facebook Ads, instant SMS follow-up, and appointment booking.",
    metric: "340%",
    result: "increase in booked showings",
    type: "pipeline",
  },
  {
    industry: 0,
    title: "Canadian Property Management Firm",
    description:
      "CRM migration from spreadsheets to GHL. Automated tenant inquiry responses and review collection.",
    metric: "60%",
    result: "less admin time",
    type: "workflow",
  },
  {
    industry: 1,
    title: "Florida HVAC Company",
    description:
      "Automated estimate follow-ups, job completion review requests, and seasonal re-engagement campaigns.",
    metric: "127",
    result: "new 5-star reviews in 90 days",
    type: "reviews",
  },
  {
    industry: 1,
    title: "UK Cleaning Company",
    description:
      "Built a complete booking funnel with automated confirmations, reminders, and upsell sequences.",
    metric: "45%",
    result: "increase in repeat bookings",
    type: "calendar",
  },
  {
    industry: 2,
    title: "US Business Coach",
    description:
      "Sales funnel + automated webinar registration + email nurture sequence + calendar booking.",
    metric: "5 → 22",
    result: "sales calls per week",
    type: "funnel",
  },
  {
    industry: 2,
    title: "European Fitness Coach",
    description: "Automated client onboarding, check-in reminders, and referral program.",
    metric: "35%",
    result: "increase in client retention",
    type: "workflow",
  },
];
export const testimonials = [
  {
    quote:
      "CyberWorld completely transformed how we handle leads. We went from missing 70% of our inquiries to responding in under a minute. Game changer.",
    name: "James R.",
    role: "Real Estate Broker, Texas",
    industry: 0,
  },
  {
    quote:
      "I was drowning in admin work. Now everything from booking to follow-up is automated. I got 10 hours of my week back.",
    name: "Sarah M.",
    role: "HVAC Business Owner, Florida",
    industry: 1,
  },
  {
    quote:
      "My coaching business finally feels scalable. The funnel they built converts at 12% and the follow-up sequences close deals while I sleep.",
    name: "David K.",
    role: "Online Business Coach, UK",
    industry: 2,
  },
  {
    quote:
      "Professional, fast, and they actually understand our industry. Best investment we made this year.",
    name: "Lisa T.",
    role: "Property Manager, Ontario, Canada",
    industry: 0,
  },
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
      "14-day delivery",
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
    "Most systems are fully live within 14 days. Larger builds and custom integrations can take longer; we agree on your timeline before building.",
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
