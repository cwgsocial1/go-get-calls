export interface CaseStudy { who: string; problem: string; built: string; result: string; period: string; quote?: string; photo?: string; permission: boolean }
export interface Testimonial { name: string; role: string; quote: string; photo?: string; permission: boolean }
export interface SiteConfig {
 founderPhoto?: string; teamPhotos?: Partial<Record<string,string>>; videoUrl?: string; isAIVideo?: boolean; videoThumbnail?: string; videoCaptions?: string;
 linkedinUrls?: Partial<Record<string,string>>; certificateImage?: string; certificateVerifyUrl?: string;
 ownSystemStats?: { period?: string; leads?: string; firstResponseTime?: string; appointments?: string };
 terms?: { dataOwnership?: string; contractLength?: string; paymentTerms?: string; supportAfterBuild?: string; refundPolicy?: string };
 socialProfiles?: Record<string,string>; businessAddress?: string; ga4Id?: string; gtmId?: string; searchConsoleVerification?: string; bingVerification?: string;
 realCaseStudies?: CaseStudy[]; realTestimonials?: Testimonial[];
}
export const siteConfig: SiteConfig = {
 isAIVideo:true,
 founderPhoto:'', teamPhotos:{'Ahmed Akash':'','Sammy Ogundele':'','Heather Fulmer':''},
 videoUrl:'', videoThumbnail:'', videoCaptions:'',
 linkedinUrls:{'Ayodele Ezekiel':'','Ahmed Akash':'','Sammy Ogundele':'','Heather Fulmer':'',company:''},
 certificateImage:'', certificateVerifyUrl:'',
 ownSystemStats:{period:'',leads:'',firstResponseTime:'',appointments:''},
 terms:{dataOwnership:'',contractLength:'',paymentTerms:'',supportAfterBuild:'',refundPolicy:''},
 socialProfiles:{TikTok:'',LinkedIn:'',Instagram:'',YouTube:''},businessAddress:'',
 ga4Id:'',gtmId:'',searchConsoleVerification:'',bingVerification:'',
 realCaseStudies:[],realTestimonials:[],
};
export const business = { name: 'CyberWorld Automations', parent: 'CyberWorld Groups', url: 'https://automation.cyberworldgroups.com', parentUrl: 'https://cyberworldgroups.com', email: 'ceo@cyberworldgroups.com', phone: '+1 (470) 317-8834', telephone: '+14703178834', booking: 'https://calendly.com/cwgsocial1/30min?month=2026-10', whatsapp: 'https://wa.me/14703178834' };
export const team = [
 {name:'Ayodele Ezekiel',role:'Founder',description:'Leads strategy and designs your automation blueprint.'},
 {name:'Ahmed Akash',role:'Social Media Expert',description:'Handles social content and campaign assets.'},
 {name:'Sammy Ogundele',role:'Full Stack Developer',description:'Builds custom integrations and site features.'},
 {name:'Heather Fulmer',role:'Content Writer',description:'Writes the emails, SMS and funnel copy your leads read.'},
];
