import {createFileRoute} from '@tanstack/react-router';
import {Terms} from '@/components/automations/legal';
import {pageHead} from '@/components/automations/seo';
export const Route=createFileRoute('/terms')({head:()=>pageHead('/terms','Terms of Service | CyberWorld Automations','Read CyberWorld Automations service scope, free-call details and published plan information. Project-specific payment, data and refund terms need agreement.'),component:Terms});
