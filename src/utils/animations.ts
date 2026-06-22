/**
 * animations.ts
 * ---------------------------------------
 * Reusable Framer Motion animation
 * variants and transitions.
 */

import type { Variants, Transition } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.25,
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.25,
  },
};

export const tapScale = {
  scale: 0.97,
};