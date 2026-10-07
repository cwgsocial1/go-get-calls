import {createFileRoute} from '@tanstack/react-router';
import {useEffect,useState} from 'react';
import {PageShell} from '@/components/automations/content-page';
import {pageHead} from '@/components/automations/seo';
import {StructuredData} from '@/components/automations/structured-data';
import {InquiryForm} from '@/components/automations/inquiry-form';
export const Route=createFileRoute('/booking-confirmation')({head:()=>pageHead('/booking-confirmation','Call Confirmation | CyberWorld Automations','Prepare for your CyberWorld blueprint call: check your Calendly confirmation, bring your current process and share your industry, CRM and lead problem.'),component:Confirmation});
function Confirmation(){const [booked,setBooked]=useState(false);useEffect(()=>setBooked(sessionStorage.getItem('cw-booked')==='yes'),[]);return <PageShell title="Call confirmation"><StructuredData path="/booking-confirmation" title="Call confirmation"/><h1>{booked?"You're booked. Here's what happens next":"Your call: what happens next"}</h1><p className="answer-first">Your Calendly confirmation is the record of your booking. Check it for your appointment time and meeting details. Visiting this page alone does not book a call.</p><ol className="prepare-list"><li>Check your Calendly confirmation and calendar invite.</li><li>Bring your current process and biggest lead problem.</li><li>We talk through fit and scope before any paid build.</li></ol><InquiryForm precall/><a className="text-primary" href="/book">Return to the booking calendar</a></PageShell>}
