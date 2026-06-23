/**
 * Books Section
 * ---------------------------------------
 * Showcases featured books with elegant
 * cards and subtle animations.
 */

import { motion } from "framer-motion";

type Book = {
  title: string;
  category: string;
  description: string;
  cover: string;
};

const books: Book[] = [
  {
    title: "The Learning Mindset",
    category: "Personal Growth",
    description:
      "Develop habits and mental models that help you become a lifelong learner.",
    cover:
      "https://github.com/nitanshdubey/personal-brand/blob/main/nik-z1d-LP8sjuI-unsplash.jpg?raw=true",
  },
  {
    title: "Mastering Knowledge",
    category: "Education",
    description:
      "A practical guide to learning faster, thinking clearly, and applying knowledge.",
    cover:
      "https://github.com/nitanshdubey/personal-brand/blob/main/jaredd-craig-HH4WBGNyltc-unsplash.jpg?raw=true",
  },
  {
    title: "Lead Through Wisdom",
    category: "Leadership",
    description:
      "Timeless principles for leading with clarity, confidence, and integrity.",
    cover:
      "https://github.com/nitanshdubey/personal-brand/blob/main/matteo-vistocco-Dph00R2SwFo-unsplash.jpg?raw=true",
  },
];

const Books = () => {
  return (
    <section id="books" className="py-32">
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
            Books
          </span>

          <h2 className="mb-6">
            Ideas that continue teaching
            <span className="gradient-text"> beyond the classroom.</span>
          </h2>

          <p className="text-lg text-gray-400">
            Every book is written to simplify complex ideas, encourage deeper
            thinking, and inspire meaningful action.
          </p>
        </motion.div>

        {/* Book Grid */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book, index) => (
            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="glass overflow-hidden rounded-3xl"
            >
              {/* Cover */}
              <div className="overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {book.category}
                </span>

                <h3 className="mt-3 mb-4">{book.title}</h3>

                <p className="mb-8 leading-7 text-gray-400">
                  {book.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition"
                  >
                    Read More
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:border-white/30"
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;