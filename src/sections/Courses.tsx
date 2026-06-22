/**
 * Courses Section
 * ---------------------------------------
 * Displays featured courses with
 * premium cards and call-to-actions.
 */

import { motion } from "framer-motion";

type Course = {
  title: string;
  level: string;
  duration: string;
  description: string;
};

const courses: Course[] = [
  {
    title: "Critical Thinking Masterclass",
    level: "Beginner",
    duration: "6 Weeks",
    description:
      "Develop analytical thinking and practical decision-making skills through structured learning.",
  },
  {
    title: "Modern Learning Strategies",
    level: "Intermediate",
    duration: "8 Weeks",
    description:
      "Master proven techniques to learn faster, retain more knowledge, and apply it effectively.",
  },
  {
    title: "Leadership Through Education",
    level: "Advanced",
    duration: "10 Weeks",
    description:
      "Build leadership qualities by strengthening communication, influence, and lifelong learning habits.",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-32">
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
            Courses
          </span>

          <h2 className="mb-6">
            Learn practical skills that create
            <span className="gradient-text"> lasting impact.</span>
          </h2>

          <p className="text-lg text-gray-400">
            Every course is carefully designed to combine knowledge,
            practical application, and real-world problem solving.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="glass rounded-3xl p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white">
                  {course.level}
                </span>

                <span className="text-sm text-gray-400">
                  {course.duration}
                </span>
              </div>

              <h3 className="mb-4">
                {course.title}
              </h3>

              <p className="mb-8 leading-7 text-gray-400">
                {course.description}
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition"
              >
                Enroll Now
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;