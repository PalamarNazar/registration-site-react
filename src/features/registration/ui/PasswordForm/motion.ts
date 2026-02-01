import type { Variants } from "motion/react";

export const iconVariants: Variants = {
  idle: { color: '#D4D4D4'},
  hover: { color: "var(--color-blue-007)", transition: { duration: 0.4 } },
  tap: { color: "var(--color-blue-007)", transition: { duration: 0.2 } },
};
