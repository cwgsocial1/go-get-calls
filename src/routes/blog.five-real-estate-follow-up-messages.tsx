import {createFileRoute} from '@tanstack/react-router';
import {blogPosts} from '@/components/automations/blog-data';
import {ContentPage} from '@/components/automations/content-page';
import {pageHead} from '@/components/automations/seo';
const page=blogPosts[1];
export const Route=createFileRoute('/blog/five-real-estate-follow-up-messages')({head:()=>page?pageHead(page.path,page.title,page.description):{},component:()=>page?<ContentPage page={page}/>:null});
