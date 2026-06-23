/**
 * About Section
 * ---------------------------------------
 * Introduces the educator's mission,
 * philosophy and approach to learning.
 */

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            About Me
          </span>

          <h2 className="mb-8">
            Education is not about
            <span className="gradient-text"> memorising facts</span>.
            <br />
            It's about transforming lives.
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
            I believe that great education should inspire curiosity,
            encourage critical thinking, and empower individuals to solve
            real-world problems. Every lesson, book, and learning experience
            I create is designed to help people grow with confidence and
            purpose.
          </p>

        </motion.div>

        {/* ==========================
      Premium Mission Cards
========================== */}

<div className="mt-24 grid gap-8 lg:grid-cols-3">

{/* Mission */}

<motion.div
  whileHover={{
    y: -12,
    rotate: -1,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 20,
  }}
  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-sky-500/10 via-white/5 to-cyan-500/10 p-[1px]"
>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,.25),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="glass relative h-full rounded-[32px] p-8">

    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/20 text-3xl shadow-[0_0_40px_rgba(56,189,248,.35)]">
      🚀
    </div>

    <span className="text-xs uppercase tracking-[0.35em] text-sky-400">
      Purpose
    </span>

    <h3 className="mt-3 text-3xl font-bold">
      Mission
    </h3>

    <div className="my-6 h-px w-20 bg-gradient-to-r from-sky-400 to-transparent" />

    <p className="leading-8 text-gray-300">
      To make exceptional education accessible,
      practical, and transformational for every
      learner through modern teaching, innovation,
      and real-world application.
    </p>

  </div>

</motion.div>



{/* Vision */}

<motion.div
  whileHover={{
    y: -12,
    rotate: 1,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 20,
  }}
  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/5 to-fuchsia-500/10 p-[1px]"
>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,.25),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="glass relative h-full rounded-[32px] p-8">

    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/20 text-3xl shadow-[0_0_40px_rgba(168,85,247,.35)]">
      🌍
    </div>

    <span className="text-xs uppercase tracking-[0.35em] text-violet-400">
      Future
    </span>

    <h3 className="mt-3 text-3xl font-bold">
      Vision
    </h3>

    <div className="my-6 h-px w-20 bg-gradient-to-r from-violet-400 to-transparent" />

    <p className="leading-8 text-gray-300">
      Building a future where lifelong learning,
      critical thinking, and innovation empower
      people to create meaningful impact in society.
    </p>

  </div>

</motion.div>



{/* Philosophy */}

<motion.div
  whileHover={{
    y: -12,
    rotate: -1,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 20,
  }}
  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-amber-500/10 via-white/5 to-orange-500/10 p-[1px]"
>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,.25),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="glass relative h-full rounded-[32px] p-8">

    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-3xl shadow-[0_0_40px_rgba(251,191,36,.35)]">
      🧠
    </div>

    <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
      Mindset
    </span>

    <h3 className="mt-3 text-3xl font-bold">
      Philosophy
    </h3>

    <div className="my-6 h-px w-20 bg-gradient-to-r from-amber-400 to-transparent" />

    <p className="leading-8 text-gray-300">
      Learn deeply.
      Think independently.
      Apply consistently.
      Grow continuously.
      Excellence is built through disciplined action.
    </p>

  </div>

</motion.div>

</div>

      </div>
    </section>
  );
};

export default About;