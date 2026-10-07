import {createFileRoute} from '@tanstack/react-router';
import {contentPages} from '@/components/automations/content';
import {ContentPage} from '@/components/automations/content-page';
import {pageHead} from '@/components/automations/seo';
const page=contentPages[4];
export const Route=createFileRoute('/about')({head:()=>page? pageHead(page.path,page.title,page.description):{},component:()=>page?<ContentPage page={page}/>:null});
