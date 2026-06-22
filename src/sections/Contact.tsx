/**
 * Contact Section
 * ---------------------------------------
 * Allows visitors to connect through
 * a simple contact form.
 */

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
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
            Contact
          </span>

          <h2 className="mb-6">
            Let's start a
            <span className="gradient-text"> conversation.</span>
          </h2>

          <p className="text-lg text-gray-400">
            Whether you have a question, collaboration idea, or simply want to
            connect, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-10"
          >
            <h3 className="mb-8">Get in Touch</h3>

            <div className="space-y-8">
              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-[var(--color-accent)]">
                  Email
                </p>

                <p className="text-gray-300">
                  hello@example.com
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-[var(--color-accent)]">
                  Location
                </p>

                <p className="text-gray-300">
                  New Delhi, India
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-[var(--color-accent)]">
                  Availability
                </p>

                <p className="text-gray-300">
                  Open for speaking, mentoring and collaborations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-10"
          >
            <div className="mb-6">
              <label className="mb-2 block text-sm text-gray-300">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-[var(--color-accent)]"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-[var(--color-accent)]"
              />
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-[var(--color-accent)]"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="rounded-full bg-[var(--color-accent)] px-8 py-4 font-semibold text-white"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;