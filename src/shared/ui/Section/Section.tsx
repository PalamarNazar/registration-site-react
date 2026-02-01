import { motionContainer } from '@/shared/motion/motionVarints';
import { motion } from 'motion/react';
import type { ReactNode } from "react";

type SectionProps =  { 
    children: ReactNode
}

const Section = ({ children }: SectionProps) => {
    return (
        <motion.section 
        variants={motionContainer}
        initial={'hidden'}
        animate={'visible'}
        className={`flex flex-col items-center py-12 child-margin w-full md:items-start`}>
            {children}
        </motion.section>
    )
}

export default Section;