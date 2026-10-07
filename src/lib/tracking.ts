export function trackEvent(name:string) {
 if(typeof window==='undefined' || localStorage.getItem('cw-consent')!=='accepted') return;
 const w = window as Window & {dataLayer?:unknown[]};
 w.dataLayer=w.dataLayer ?? []; w.dataLayer.push({event:name});
}
