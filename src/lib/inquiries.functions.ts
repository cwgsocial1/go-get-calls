import { createServerFn } from '@tanstack/react-start';
import { getRequest } from '@tanstack/react-start/server';
import { inquirySchema } from './inquiry-schema';
export const submitInquiry = createServerFn({method:'POST'}).inputValidator(data => inquirySchema.parse(data)).handler(async ({data}) => {
 const request = getRequest();
 const origin = request.headers.get('origin');
 if (origin && new URL(origin).host !== new URL(request.url).host) throw new Error('Please submit from our website.');
 const address = request.headers.get('cf-connecting-ip') ?? data.email.toLowerCase();
 const digest = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(address));
 const requestHash = Array.from(new Uint8Array(digest)).map(v=>v.toString(16).padStart(2,'0')).join('');
 const {supabaseAdmin} = await import('@/integrations/supabase/client.server');
 const {count,error:limitError} = await supabaseAdmin.from('website_inquiries').select('id',{count:'exact',head:true}).eq('request_hash',requestHash).gte('created_at',new Date(Date.now()-600000).toISOString());
 if(limitError) throw new Error('We could not save your message. Please try again.');
 if((count ?? 0)>=5) throw new Error('Please wait ten minutes before sending another message.');
 const {error} = await supabaseAdmin.from('website_inquiries').insert({name:data.name,email:data.email,phone:data.phone,industry:data.industry,message:data.message,kind:data.kind,crm:data.crm,consent:data.consent,request_hash:requestHash});
 if(error) throw new Error('We could not save your message. Please try again.');
 return {saved:true, emailed:false};
});
