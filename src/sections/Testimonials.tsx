import { motion } from "framer-motion";
import { Quote, Star, GraduationCap, Briefcase, Rocket } from "lucide-react";

type T={name:string;role:string;quote:string;accent:string;kind:"student"|"developer"|"founder"};
const data:T[]=[
{name:"Aarav Sharma",role:"Engineering Student",quote:"The teaching style completely changed the way I approach learning. Complex topics became surprisingly easy to understand.",accent:"from-sky-500/20",kind:"student"},
{name:"Priya Mehta",role:"Software Developer",quote:"Every lesson was practical and immediately applicable. The clarity and structure made a huge difference in my career.",accent:"from-violet-500/20",kind:"developer"},
{name:"Rahul Verma",role:"Entrepreneur",quote:"These courses helped me develop better decision-making skills and a lifelong learning mindset.",accent:"from-amber-500/20",kind:"founder"},
];
const Icon=({k}:{k:T["kind"]})=>k=="student"?<GraduationCap className="h-5 w-5"/>:k=="developer"?<Briefcase className="h-5 w-5"/>:<Rocket className="h-5 w-5"/>;
export default function Testimonials(){
return(<section id="testimonials" className="relative overflow-hidden py-32">
<div className="container">
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto mb-20 max-w-3xl text-center">
<span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[.2em] text-[var(--color-accent)]">Testimonials</span>
<h2 className="mb-6">Trusted by learners <span className="gradient-text">around the world.</span></h2>
<p className="text-lg text-gray-400">Real experiences from students and professionals.</p>
</motion.div>
<div className="grid gap-8 lg:grid-cols-3">
{data.map((t,i)=><motion.article key={t.name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}} whileHover={{y:-10}} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-[1px]">
<div className={`absolute inset-0 bg-gradient-to-br ${t.accent} via-transparent to-transparent opacity-0 transition group-hover:opacity-100`}/>
<div className="glass relative h-full rounded-[32px] p-8">
<div className="mb-6 flex items-center justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><Quote className="h-7 w-7 text-[var(--color-accent)]"/></div><div className="flex gap-1">{[...Array(5)].map((_,x)=><Star key={x} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>)}</div></div>
<p className="leading-8 text-gray-300">“{t.quote}”</p>
<div className="my-6 h-px bg-white/10"/>
<div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]"><Icon k={t.kind}/></div><div><h3 className="font-semibold">{t.name}</h3><p className="text-sm text-gray-400">{t.role}</p></div></div>
</div></motion.article>)}
</div></div></section>)}
