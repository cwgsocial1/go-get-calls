import {describe,it,expect} from 'vitest';
import {contentPages,generalFaq} from '@/components/automations/content';
import {blogPosts} from '@/components/automations/blog-data';
import {inquirySchema} from '@/lib/inquiry-schema';
import {projects} from '@/components/automations/data';
describe('Website corrections',()=>{
 it('has substantial written content',()=>{for(const p of [...contentPages,...blogPosts]){expect([p.intro,...p.sections.map(s=>s.text),...p.faq.map(([,a])=>a)].join(' ').split(/\s+/).length,p.path).toBeGreaterThanOrEqual(600);}});
 it('has all requested FAQ topics',()=>expect(generalFaq).toHaveLength(8));
 it('rejects missing consent and honeypot spam',()=>{const valid={name:'Test',email:'test@example.com',industry:'Real Estate',message:'Test inquiry',consent:true};expect(inquirySchema.safeParse(valid).success).toBe(true);expect(inquirySchema.safeParse({...valid,consent:false}).success).toBe(false);expect(inquirySchema.safeParse({...valid,website:'spam'}).success).toBe(false);});
 it('keeps six examples without claimed metrics',()=>{expect(projects).toHaveLength(6);for(const p of projects)expect(p).not.toHaveProperty('metric');});
});
