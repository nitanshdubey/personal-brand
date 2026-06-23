import { motion } from "framer-motion";
import { Brain, BookOpen, GraduationCap, Clock3, ArrowRight } from "lucide-react";

type Course={
 title:string;level:string;duration:string;description:string;
 gradient:string; icon:"brain"|"book"|"grad";
};

const courses:Course[]=[
{title:"Critical Thinking Masterclass",level:"Beginner",duration:"6 Weeks",description:"Develop analytical thinking and practical decision-making through structured learning.",gradient:"from-sky-500/20",icon:"brain"},
{title:"Modern Learning Strategies",level:"Intermediate",duration:"8 Weeks",description:"Learn faster, retain more and apply knowledge effectively.",gradient:"from-violet-500/20",icon:"book"},
{title:"Leadership Through Education",level:"Advanced",duration:"10 Weeks",description:"Strengthen leadership through communication and lifelong learning.",gradient:"from-amber-500/20",icon:"grad"},
];

const Icon=({name}:{name:Course["icon"]})=>{
 if(name==="brain") return <Brain className="h-7 w-7 text-sky-300"/>;
 if(name==="book") return <BookOpen className="h-7 w-7 text-violet-300"/>;
 return <GraduationCap className="h-7 w-7 text-amber-300"/>;
};

export default function Courses(){
return(
<section id="courses" className="relative overflow-hidden py-32">
<div className="container">
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto mb-20 max-w-3xl text-center">
<span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[.2em] text-[var(--color-accent)]">Courses</span>
<h2 className="mb-6">Learn practical skills with <span className="gradient-text">lasting impact.</span></h2>
<p className="text-lg text-gray-400">Premium learning experiences designed for real-world growth.</p>
</motion.div>
<div className="grid gap-8 lg:grid-cols-3">
{courses.map((c,i)=>(
<motion.article key={c.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}} whileHover={{y:-10}} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-[1px]">
<div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition`} />
<div className="glass relative rounded-[32px] p-8">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><Icon name={c.icon}/></div>
<span className="flex items-center gap-2 text-sm text-gray-400"><Clock3 className="h-4 w-4"/>{c.duration}</span>
</div>
<span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs text-white">{c.level}</span>
<h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
<p className="mt-4 leading-7 text-gray-300">{c.description}</p>
<a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-indigo-600 px-6 py-3 font-semibold text-white">Enroll Now <ArrowRight className="h-4 w-4"/></a>
</div>
</motion.article>
))}
</div>
</div>
</section>
)}