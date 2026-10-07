import {createFileRoute} from '@tanstack/react-router';
import {blogPosts} from '@/components/automations/blog-data';
import {PageShell} from '@/components/automations/content-page';
import {pageHead} from '@/components/automations/seo';
import {StructuredData} from '@/components/automations/structured-data';
export const Route=createFileRoute('/blog/')({head:()=>pageHead('/blog','Automation Blog | CyberWorld Automations','Practical GoHighLevel articles by Ayodele Ezekiel on lead response, real estate follow-up and CRM migration. Read clear advice before planning your build.'),component:()=> <PageShell title="Blog"><StructuredData path="/blog" title="Blog"/><h1>Practical automation notes</h1><p className="answer-first">By Ayodele Ezekiel. Clear steps for the follow-up work your team does every day.</p><div className="grid gap-6 md:grid-cols-2">{blogPosts.map(p=><article className="service-card" key={p.path}><p className="eyebrow">AYODELE EZEKIEL · 6 OCT 2026</p><h2><a href={p.path}>{p.h1}</a></h2><p>{p.intro}</p><a className="text-primary" href={p.path}>Read {p.h1.toLowerCase()}</a></article>)}</div></PageShell>});
