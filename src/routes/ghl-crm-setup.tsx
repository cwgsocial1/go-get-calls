import {createFileRoute} from '@tanstack/react-router';
import {contentPages} from '@/components/automations/content';
import {ContentPage} from '@/components/automations/content-page';
import {pageHead} from '@/components/automations/seo';
const page=contentPages[3];
export const Route=createFileRoute('/ghl-crm-setup')({head:()=>page? pageHead(page.path,page.title,page.description):{},component:()=>page?<ContentPage page={page}/>:null});
