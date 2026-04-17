import type { Variants, Transition } from "framer-motion";

// ============================================================
// qawave.ai — Framer Motion Preset Variants
// Reusable animation presets for the landing page.
// All animations respect prefers-reduced-motion via
// useReducedMotion() in consuming components.
// ============================================================

// --- Default transition preset ---

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
};

// --- fadeInUp ---
// Usage: cards, text blocks, any element entering on scroll
// Behavior: opacity 0 -> 1, translateY 24px -> 0

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// --- staggerContainer ---
// Usage: parent of card groups (Problem stats, UVP pillars, How It Works steps)
// Behavior: children animate with a delay between each

export const staggerContainer = (staggerDelay: number = 0.15): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// --- scaleOnHover ---
// Usage: CTA buttons, interactive cards
// Behavior: scale 1 -> 1.03 on hover, 1 -> 0.98 on tap/press

export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

// --- counterAnimationConfig ---
// Usage: AnimatedCounter component (numbers in stat boxes and metrics)
// Behavior: animate from 0 to target value via useMotionValue + useSpring
// NOTE: This is NOT a Variants object — it's a config for useSpring hook

export const counterAnimationConfig = {
  duration: 1.2,
  bounce: 0,
  ease: "easeOut" as const,
};

// --- heroTextReveal ---
// Usage: hero section text elements with staggered reveal
// Behavior: each element fades in and slides up with increasing delay

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...defaultTransition, delay },
  }),
};

// --- pathDraw ---
// Usage: connector lines in How It Works (SVG path animation)
// Behavior: SVG path draws from left to right

export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// --- cardLift ---
// Usage: hover effect on cards (UVP, Problem, Tech badges)
// Behavior: translateY -4px + border glow

export const cardLift: Variants = {
  initial: { y: 0 },
  hover: { y: -4, transition: { duration: 0.2 } },
};
