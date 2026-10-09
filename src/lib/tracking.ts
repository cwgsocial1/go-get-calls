import { siteConfig } from "@/config/siteConfig";
export function trackEvent(name:string) {
 if(typeof window==='undefined' || localStorage.getItem('cw-consent')!=='accepted') return;
 const w = window as Window & {dataLayer?:unknown[]};
 w.dataLayer=w.dataLayer ?? [];
 if(siteConfig.gtmId) w.dataLayer.push({event:name});
 else if(siteConfig.ga4Id){function gtag(..._args:unknown[]){w.dataLayer?.push(arguments);}gtag("event",name);}
}
