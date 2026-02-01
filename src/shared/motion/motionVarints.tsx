import type { Variants } from "motion/react"

export const motionContainer = {
    visible: { 
        transition: {
            staggerChildren: 0.3,
    }, },
    hidden: {}
} satisfies Variants

export const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
} satisfies Variants