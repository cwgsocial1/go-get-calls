import {createFileRoute} from '@tanstack/react-router';
import {Privacy} from '@/components/automations/legal';
import {pageHead} from '@/components/automations/seo';
export const Route=createFileRoute('/privacy')({head:()=>pageHead('/privacy','Privacy Policy | CyberWorld Automations','How CyberWorld Automations handles contact forms, pre-call notes, Calendly bookings and analytics choices, plus ways to ask about your personal information.'),component:Privacy});
