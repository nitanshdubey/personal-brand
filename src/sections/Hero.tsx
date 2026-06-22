import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0B10] pt-28"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="container relative mx-auto grid items-center gap-16 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70 uppercase">
            Educator • Author • Mentor
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] md:text-6xl">
            Teach. Think. Build a
            <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Mind That Lasts
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            I help learners develop clarity of thought, strong fundamentals, and
            practical intelligence through structured learning systems, books,
            and modern education design.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            
            <motion.button
              onClick={() => scrollToSection("books")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg shadow-white/10"
            >
              Explore My Work
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:border-white/30"
            >
              Get In Touch
            </motion.button>

          </div>

          <p className="mt-8 text-xs tracking-wide text-white/40">
            Designed for students, professionals, and lifelong learners
          </p>
        </motion.div>

        {/* RIGHT IMAGE FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[360px]">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
              
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://github.com/nitanshdubey/personal-brand/blob/main/meghna-r-4g0icUXh7FU-unsplash.jpg?raw=true"
                  alt="Nish"
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold tracking-wide text-white">
                  Nish
                </h3>
                <p className="mt-1 text-xs tracking-[0.25em] text-white/40 uppercase">
                  Educator & Creator
                </p>
              </div>

            </div>

            <div className="absolute -z-10 inset-0 scale-110 rounded-3xl bg-purple-500/10 blur-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint (clean, non-overlapping UI element) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 right-8 flex items-center gap-2 text-xs tracking-[0.3em] text-white/40 uppercase"
      >
        <div className="h-px w-10 bg-white/20" />
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;