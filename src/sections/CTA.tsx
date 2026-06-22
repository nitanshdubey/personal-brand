/**
 * CTA Section
 * ---------------------------------------
 * Final call-to-action encouraging
 * visitors to connect and start learning.
 */

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="cta" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mx-auto max-w-5xl rounded-3xl px-8 py-20 text-center md:px-16"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Ready to Begin?
          </span>

          <h2 className="mb-6">
            Invest in knowledge that creates
            <span className="gradient-text"> lifelong impact.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you're a student, professional, or lifelong learner,
            every journey begins with one decision—to keep learning.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-[var(--color-accent)] px-8 py-4 font-semibold text-white transition"
            >
              Explore Courses
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-white/30"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;