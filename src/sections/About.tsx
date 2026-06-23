import { motion } from "framer-motion";
import { Rocket, Globe2, BrainCircuit } from "lucide-react";

const cards=[
{title:"Mission",label:"Purpose",icon:<Rocket className="h-8 w-8 text-sky-300"/>,gradient:"from-sky-500/15 via-cyan-500/5 to-transparent",text:"To make exceptional education accessible, practical and transformational for every learner."},
{title:"Vision",label:"Future",icon:<Globe2 className="h-8 w-8 text-violet-300"/>,gradient:"from-violet-500/15 via-fuchsia-500/5 to-transparent",text:"Building a future where lifelong learning empowers meaningful innovation and impact."},
{title:"Philosophy",label:"Mindset",icon:<BrainCircuit className="h-8 w-8 text-amber-300"/>,gradient:"from-amber-500/15 via-orange-500/5 to-transparent",text:"Learn deeply. Think independently. Apply consistently. Grow continuously."}
];

export default function About(){
return(
<section id="about" className="relative overflow-hidden py-32">
<div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[140px]" />
<div className="container relative">
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto max-w-4xl text-center">
<span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[.25em] text-[var(--color-accent)]">About Me</span>
<h2 className="mb-8">Education is not about <span className="gradient-text">memorising facts</span>.<br/>It's about transforming lives.</h2>
<p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">I believe great education inspires curiosity, critical thinking and practical action.</p>
</motion.div>
<div className="mt-20 grid gap-8 lg:grid-cols-3">{cards.map((c,i)=><motion.article key={c.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.15}} whileHover={{y:-10,scale:1.02,rotate:i%2?1:-1}} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-[1px]"><div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 transition group-hover:opacity-100`} /><div className="glass relative h-full rounded-[32px] p-8"><div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15">{c.icon}</div><p className="text-xs uppercase tracking-[.3em] text-[var(--color-accent)]">{c.label}</p><h3 className="mt-3 text-3xl font-bold">{c.title}</h3><div className="my-6 h-px w-20 bg-gradient-to-r from-[var(--color-accent)] to-transparent"/><p className="leading-8 text-gray-300">{c.text}</p></div></motion.article>)}</div>
</div>
</section>
)}