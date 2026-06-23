/**
 * Premium Testimonials Section
 * ---------------------------------------
 * Modern glassmorphism testimonials with
 * premium lighting, gradients and animations.
 */

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Engineering Student",
    quote:
      "The teaching style completely transformed how I learn. Difficult concepts became intuitive, practical, and enjoyable.",
    accent:
      "from-sky-500/20 via-cyan-500/5 to-transparent",
  },
  {
    name: "Priya Mehta",
    role: "Software Developer",
    quote:
      "Every lesson delivered immediate value. The clarity, structure, and real-world examples accelerated my professional growth.",
    accent:
      "from-violet-500/20 via-fuchsia-500/5 to-transparent",
  },
  {
    name: "Rahul Verma",
    role: "Entrepreneur",
    quote:
      "More than courses, it completely changed my way of thinking. I now solve problems with far greater confidence.",
    accent:
      "from-amber-500/20 via-orange-500/5 to-transparent",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[160px]" />

      <div className="container relative">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Testimonials
          </span>

          <h2 className="mb-6">
            Trusted by learners
            <span className="gradient-text">
              {" "}around the world.
            </span>
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Thousands of students, educators and professionals
            continue their journey with confidence through
            meaningful learning experiences.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (

            <motion.article
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-[1px]"
            >

              {/* Gradient Border */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              {/* Card */}

              <div className="glass relative h-full rounded-[32px] p-8">

                {/* Glow */}

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/5 blur-3xl transition duration-500 group-hover:bg-[var(--color-accent)]/20" />

                {/* Quote */}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 shadow-[0_0_40px_rgba(99,102,241,.25)]">

                  <Quote
                    className="h-8 w-8 text-[var(--color-accent)]"
                  />

                </div>

                {/* Stars */}

                <div className="mb-6 flex gap-1">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

                {/* Quote */}

                <p className="leading-8 text-gray-300">
                  "{testimonial.quote}"
                </p>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-white/20 to-transparent" />

                {/* Author */}

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-indigo-600 text-lg font-bold text-white shadow-lg">

                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">

                      {testimonial.name}

                    </h3>

                    <p className="mt-1 text-sm tracking-wide text-gray-400">

                      {testimonial.role}

                    </p>

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;