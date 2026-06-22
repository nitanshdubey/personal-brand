/**
 * Loader Component
 * ---------------------------------------
 * Displays a fullscreen loading screen
 * with a rotating spinner.
 */

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-background)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <motion.div
          className="h-14 w-14 rounded-full border-4 border-white/10 border-t-[var(--color-accent)]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Loading Text */}
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-gray-400"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;