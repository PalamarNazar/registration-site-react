import type { HTMLAttributes, PropsWithChildren } from "react";
import { AnimatePresence, motion } from "motion/react";

type ErrorMessageType = PropsWithChildren<HTMLAttributes<HTMLSpanElement> & {
    hasError: boolean
}>

const ErrorMessage = ({children, className, hasError = true}: ErrorMessageType) => {
    return (
        <AnimatePresence>
            {hasError &&
                <motion.span 
                key={'errorMessage'}
                initial={{ y: -5, opacity: 0}} 
                animate={{ y: 0, opacity: 1}} 
                transition={{ duration: 0.2}}
                exit={{ y: -5, opacity: 0}}
                className={`absolute text-[0.75rem] text-red-600 ${className}`}>{children}</motion.span>
            }
        </AnimatePresence>
    )
}

export default ErrorMessage;