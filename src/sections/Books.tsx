import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

type Book={
 title:string;category:string;description:string;cover:string;accent:string;
};

const books:Book[]=[
{
 title:"The Learning Mindset",
 category:"Personal Growth",
 description:"Develop habits and mental models that help you become a lifelong learner.",
 cover:"https://github.com/nitanshdubey/personal-brand/blob/main/nik-z1d-LP8sjuI-unsplash.jpg?raw=true",
 accent:"from-emerald-500/20"
},
{
 title:"Mastering Knowledge",
 category:"Education",
 description:"A practical guide to learning faster, thinking clearly and applying knowledge.",
 cover:"https://github.com/nitanshdubey/personal-brand/blob/main/jaredd-craig-HH4WBGNyltc-unsplash.jpg?raw=true",
 accent:"from-sky-500/20"
},
{
 title:"Lead Through Wisdom",
 category:"Leadership",
 description:"Timeless principles for leading with clarity, confidence and integrity.",
 cover:"https://github.com/nitanshdubey/personal-brand/blob/main/matteo-vistocco-Dph00R2SwFo-unsplash.jpg?raw=true",
 accent:"from-violet-500/20"
}
];

export default function Books(){
return(
<section id="books" className="relative overflow-hidden py-32">
<div className="container">

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="mx-auto mb-20 max-w-3xl text-center">

<span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[.2em] text-[var(--color-accent)]">
Books
</span>

<h2 className="mb-6">
Ideas that continue teaching
<span className="gradient-text"> beyond the classroom.</span>
</h2>

<p className="text-lg text-gray-400">
Every book is designed to simplify complex ideas and inspire meaningful action.
</p>

</motion.div>

<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

{books.map((book,index)=>(

<motion.article
key={book.title}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*.12}}
whileHover={{y:-10}}
className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-[1px]">

<div className={`absolute inset-0 bg-gradient-to-br ${book.accent} via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100`} />

<div className="glass relative overflow-hidden rounded-[34px]">

<div className="overflow-hidden">

<img
src={book.cover}
alt={book.title}
className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
/>

</div>

<div className="p-8">

<div className="mb-5 flex items-center justify-between">

<span className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs uppercase tracking-[.2em] text-white">
{book.category}
</span>

<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
<BookOpen className="h-5 w-5 text-[var(--color-accent)]"/>
</div>

</div>

<h3 className="mb-4 text-2xl font-bold">
{book.title}
</h3>

<p className="mb-8 leading-7 text-gray-300">
{book.description}
</p>

<div className="flex gap-4">

<a
href="#"
className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-105">

Read More

<ArrowRight className="h-4 w-4"/>

</a>

<a
href="#contact"
className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/10">

Contact

</a>

</div>

</div>

</div>

</motion.article>

))}

</div>

</div>

</section>
)}
