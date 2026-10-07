import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/siteConfig';
export function CookieConsent(){
 const [choice,setChoice]=useState<string|null>('loading');
 useEffect(()=>{setChoice(localStorage.getItem('cw-consent'));},[]);
 useEffect(()=>{
 if(choice!=='accepted')return;
 const w=window as Window & {dataLayer?:unknown[]};w.dataLayer=w.dataLayer??[];
 const add=(src:string,id:string)=>{if(document.getElementById(id))return;const s=document.createElement('script');s.src=src;s.id=id;s.async=true;document.head.appendChild(s);};
 if(siteConfig.gtmId && /^GTM-[A-Z0-9]+$/.test(siteConfig.gtmId)){w.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});add(`https://www.googletagmanager.com/gtm.js?id=${siteConfig.gtmId}`,'cw-gtm');}
 else if(siteConfig.ga4Id && /^G-[A-Z0-9]+$/.test(siteConfig.ga4Id)){function gtag(..._args:unknown[]){w.dataLayer?.push(arguments);}gtag('js',new Date());gtag('config',siteConfig.ga4Id);add(`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}`,'cw-ga4');}
 },[choice]);
 const choose=(value:string)=>{localStorage.setItem('cw-consent',value);setChoice(value);if(value==='declined')window.location.reload();};
 return <>{choice===null&&<aside className="cookie-banner" aria-label="Cookie choices"><div><h2>Optional analytics cookies</h2><p>We only load analytics if you accept. Essential form and booking functions still work without them. <a href="/privacy">Privacy Policy</a></p></div><div className="flex flex-wrap gap-3"><Button onClick={()=>choose('accepted')}>Accept analytics</Button><Button variant="outline" onClick={()=>choose('declined')}>Reject analytics</Button></div></aside>}<Button className="cookie-settings" variant="ghost" onClick={()=>setChoice(null)}>Cookie settings</Button></>;
}
