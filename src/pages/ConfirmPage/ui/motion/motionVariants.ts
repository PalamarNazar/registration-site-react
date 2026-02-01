import type { Variants } from "motion/react";

export const buttonVariants: Variants = {
  idle: {},
  hover: {},
};

export const imgVariants: Variants = {
  idle: { rotate: 0 },
  hover: { rotate: 180, transition: { duration: 0.4 } },
};
