import {createFileRoute} from '@tanstack/react-router';
import {blogPosts} from '@/components/automations/blog-data';
import {ContentPage} from '@/components/automations/content-page';
import {pageHead} from '@/components/automations/seo';
const page=blogPosts[2];
export const Route=createFileRoute('/blog/spreadsheets-to-gohighlevel-checklist')({head:()=>page?pageHead(page.path,page.title,page.description):{},component:()=>page?<ContentPage page={page}/>:null});
