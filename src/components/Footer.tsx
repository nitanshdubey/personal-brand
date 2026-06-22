/**
 * Footer Component
 * ---------------------------------------
 * Displays the website footer with
 * branding, navigation and social links.
 */

import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#hero"
              className="text-2xl font-semibold tracking-wide text-white"
            >
              Educator
              <span className="text-[var(--color-accent)]">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-400">
              Empowering learners through knowledge, books,
              courses and meaningful educational experiences.
            </p>
          </motion.div>

          {/* Navigation */}

          <motion.nav
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a
              href="#about"
              className="text-gray-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#books"
              className="text-gray-400 transition hover:text-white"
            >
              Books
            </a>

            <a
              href="#courses"
              className="text-gray-400 transition hover:text-white"
            >
              Courses
            </a>

            <a
              href="#testimonials"
              className="text-gray-400 transition hover:text-white"
            >
              Testimonials
            </a>

            <a
              href="#contact"
              className="text-gray-400 transition hover:text-white"
            >
              Contact
            </a>
          </motion.nav>

          {/* Social Links */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-5"
          >
            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              X
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              YouTube
            </a>
          </motion.div>
        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-gray-500"
        >
          © {year} Educator. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;