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

        {/* Mission Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="mb-4 text-2xl">
              Mission
            </h3>

            <p>
              To make quality education accessible,
              practical and inspiring for every learner.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="mb-4 text-2xl">
              Vision
            </h3>

            <p>
              Building a future where learning never
              stops and knowledge creates meaningful impact.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="mb-4 text-2xl">
              Philosophy
            </h3>

            <p>
              Learn deeply.
              Think independently.
              Apply consistently.
              Grow continuously.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;