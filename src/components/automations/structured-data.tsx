import { business, siteConfig } from '@/config/siteConfig';
import { services } from './data';
export function StructuredData({path='/',title='CyberWorld Automations',faq=[]}:{path?:string;title?:string;faq?:[string,string][]}){
 const org={ '@type':'Organization','@id':business.url+'/#organization',name:business.name,url:business.url,logo:business.url+'/favicon.svg',email:business.email,telephone:business.telephone,parentOrganization:{'@type':'Organization',name:business.parent,url:business.parentUrl},sameAs:Object.values(siteConfig.socialProfiles??{}).filter(Boolean)};
 const nodes:object[]=[org,{'@type':'WebSite','@id':business.url+'/#website',name:business.name,url:business.url,publisher:{'@id':org['@id']}},{'@type':'ProfessionalService',name:business.name,url:business.url,email:business.email,telephone:business.telephone,areaServed:['United States','Canada','Europe'],...(siteConfig.businessAddress?{address:siteConfig.businessAddress}:{})},{'@type':'Person',name:'Ayodele Ezekiel',jobTitle:'Founder',worksFor:{'@id':org['@id']},...(siteConfig.linkedinUrls?.['Ayodele Ezekiel']?{sameAs:[siteConfig.linkedinUrls['Ayodele Ezekiel']]}:{})}];
 if(path==='/')nodes.push(...services.map(s=>({'@type':'Service',name:s.title,description:s.description,provider:{'@id':org['@id']},areaServed:['United States','Canada','Europe']})));
 if(path!=='/')nodes.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:business.url+'/'},{'@type':'ListItem',position:2,name:title,item:business.url+path}]});
 if(faq.length)nodes.push({'@type':'FAQPage',mainEntity:faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))});
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':nodes}).replace(/</g,'\\u003c')}}/>;
}
