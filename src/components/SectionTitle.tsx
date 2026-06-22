/**
 * SectionTitle Component
 * ---------------------------------------
 * Reusable section heading with
 * subtitle, title and description.
 */

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionTitleProps = {
  badge: string;
  title: ReactNode;
  description: string;
  align?: "left" | "center";
};

const SectionTitle = ({
  badge,
  title,
  description,
  align = "center",
}: SectionTitleProps) => {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-20 ${alignment}`}
    >
      <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {badge}
      </span>

      <h2 className="mb-6">
        {title}
      </h2>

      <p className="text-lg leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionTitle;