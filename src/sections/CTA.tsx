/**
 * Premium CTA Section
 * ---------------------------------------
 * Luxury call-to-action inspired by
 * Apple, Linear & Stripe design.
 */

import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-36"
    >
      {/* Background Glows */}

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/15 blur-[180px]" />

      <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-sky-500/10 blur-[150px]" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="container relative">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="group relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-[1px]"
        >

          {/* Animated Gradient */}

          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 via-white/5 to-violet-500/20 opacity-70 transition duration-700 group-hover:opacity-100" />

          {/* Glass */}

          <div className="glass relative rounded-[40px] px-10 py-24 text-center md:px-20">

            {/* Floating Glow */}

            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

            <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px]" />

            {/* Badge */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]"
            >

              <Sparkles className="h-4 w-4" />

              Ready to Begin

            </motion.div>

            {/* Heading */}

            <h2 className="mx-auto mb-8 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">

              Invest in knowledge that creates

              <span className="gradient-text">
                {" "}lifelong impact.
              </span>

            </h2>

            {/* Text */}

            <p className="mx-auto mb-12 max-w-3xl text-lg leading-9 text-gray-300">

              Every great journey begins with a single decision.
              Whether you're a student, educator, entrepreneur,
              or lifelong learner, the next chapter starts today.

            </p>

            {/* Buttons */}

            <div className="mb-14 flex flex-wrap justify-center gap-6">

              <motion.a
                href="#courses"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .97,
                }}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-indigo-600 px-9 py-4 font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,.45)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(99,102,241,.65)]"
              >

                <GraduationCap className="h-5 w-5" />

                Explore Courses

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .97,
                }}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-9 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
              >

                Contact Me

              </motion.a>

            </div>

            {/* Bottom Stats */}

            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10">

              <div className="flex items-center gap-3">

                <Users className="h-5 w-5 text-[var(--color-accent)]" />

                <span className="text-gray-300">
                  10,000+ Learners
                </span>

              </div>

              <div className="flex items-center gap-3">

                <GraduationCap className="h-5 w-5 text-[var(--color-accent)]" />

                <span className="text-gray-300">
                  Premium Courses
                </span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck className="h-5 w-5 text-[var(--color-accent)]" />

                <span className="text-gray-300">
                  Lifetime Support
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;