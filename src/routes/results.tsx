import {createFileRoute} from '@tanstack/react-router';
import {PageShell} from '@/components/automations/content-page';
import {pageHead} from '@/components/automations/seo';
import {StructuredData} from '@/components/automations/structured-data';
import {Proof} from '@/components/automations/trust';
export const Route=createFileRoute('/results')({head:()=>pageHead('/results','Results | CyberWorld Automations','See how CyberWorld shares automation results with context and permission. Our example dashboards use sample data; start with a free blueprint for your system.'),component:()=> <PageShell title="Results"><StructuredData path="/results" title="Results"/><h1>Proof, with context</h1><p className="answer-first">We only publish results that have been supplied and approved for sharing. Example dashboards are not client outcomes.</p><Proof/><a className="text-primary" href="/#results">Explore example GoHighLevel systems</a></PageShell>});
