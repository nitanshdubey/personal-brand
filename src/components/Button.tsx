/**
 * Button Component
 * ---------------------------------------
 * Reusable animated button component.
 */

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition duration-300";

const variants = {
  primary:
    "bg-[var(--color-accent)] text-white hover:opacity-90",

  secondary:
    "border border-white/10 text-white hover:border-white/30",
};

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) => {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
};

export default Button;