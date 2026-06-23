/**
 * Premium Courses Section
 * ---------------------------------------
 * Premium glassmorphism course cards
 * with elegant animations and modern UI.
 */

import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  GraduationCap,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type Course = {
  title: string;
  level: string;
  duration: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
};

const courses: Course[] = [
  {
    title: "Critical Thinking Masterclass",
    level: "Beginner",
    duration: "6 Weeks",
    description:
      "Develop analytical thinking and practical decision-making skills through structured learning.",
    icon: <Brain className="h-9 w-9 text-sky-300" />,
    gradient: "from-sky-500/20 via-cyan-500/5 to-transparent",
  },
  {
    title: "Modern Learning Strategies",
    level: "Intermediate",
    duration: "8 Weeks",
    description:
      "Master proven techniques to learn faster, retain more knowledge, and apply it effectively.",
    icon: <BookOpen className="h-9 w-9 text-violet-300" />,
    gradient: "from-violet-500/20 via-fuchsia-500/5 to-transparent",
  },
  {
    title: "Leadership Through Education",
    level: "Advanced",
    duration: "10 Weeks",
    description:
      "Build leadership qualities by strengthening communication, influence, and lifelong learning habits.",
    icon: <GraduationCap className="h-9 w-9 text-amber-300" />,
    gradient: "from-amber-500/20 via-orange-500/5 to-transparent",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[180px]" />

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
            Courses
          </span>

          <h2 className="mb-6">
            Learn practical skills that create
            <span className="gradient-text">
              {" "}lasting impact.
            </span>
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Carefully crafted learning experiences designed
            to combine deep knowledge with practical execution.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">

          {courses.map((course, index) => (

            <motion.article
              key={course.title}
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

              {/* Gradient */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              {/* Card */}

              <div className="glass relative h-full rounded-[32px] p-8">

                {/* Glow */}

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/5 blur-3xl transition duration-500 group-hover:bg-[var(--color-accent)]/20" />

                {/* Icon */}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 shadow-[0_0_40px_rgba(99,102,241,.25)]">

                  {course.icon}

                </div>

                {/* Badges */}

                <div className="mb-8 flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white">

                    {course.level}

                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">

                    <Clock3 className="h-4 w-4" />

                    {course.duration}

                  </span>

                </div>

                {/* Title */}

                <h3 className="mb-5 text-2xl font-bold">

                  {course.title}

                </h3>

                {/* Description */}

                <p className="mb-8 leading-8 text-gray-300">

                  {course.description}

                </p>

                {/* Features */}

                <div className="mb-10 space-y-3">

                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 text-green-400" />

                    <span className="text-gray-300">
                      Practical assignments
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 text-green-400" />

                    <span className="text-gray-300">
                      Real-world projects
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 text-green-400" />

                    <span className="text-gray-300">
                      Lifetime learning mindset
                    </span>

                  </div>

                </div>

                {/* CTA */}

                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .97,
                  }}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-indigo-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,.45)]"
                >

                  Enroll Now

                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

                </motion.a>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Courses;