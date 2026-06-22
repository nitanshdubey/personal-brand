/**
 * Testimonials Section
 * ---------------------------------------
 * Displays testimonials from students
 * and professionals.
 */

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Engineering Student",
    quote:
      "The teaching style completely changed the way I approach learning. Complex topics became surprisingly easy to understand.",
  },
  {
    name: "Priya Mehta",
    role: "Software Developer",
    quote:
      "Every lesson was practical and immediately applicable. The clarity and structure made a huge difference in my career.",
  },
  {
    name: "Rahul Verma",
    role: "Entrepreneur",
    quote:
      "These courses helped me develop better decision-making skills and a lifelong learning mindset.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32">
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Testimonials
          </span>

          <h2 className="mb-6">
            Trusted by learners
            <span className="gradient-text"> around the world.</span>
          </h2>

          <p className="text-lg text-gray-400">
            Real feedback from students and professionals who have experienced
            meaningful growth through learning.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="glass rounded-3xl p-8"
            >
              <div className="mb-6 text-5xl text-[var(--color-accent)]">
                "
              </div>

              <p className="mb-8 leading-8 text-gray-400">
                {testimonial.quote}
              </p>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl">
                  {testimonial.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;