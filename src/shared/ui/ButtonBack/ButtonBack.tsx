import type { InputHTMLAttributes } from "react";
import { motion, type MotionProps } from "motion/react"

type ButtonBackProps = {
    maxButtonSize?: string;
    maxLineSize?: string;
    maxLineHeigth?: string;
    color?: string;
} & InputHTMLAttributes<HTMLButtonElement> & MotionProps;

const ButtonBack = (props: ButtonBackProps) => {
    const { 
        maxButtonSize = 'size-12',
        maxLineSize = 'size-7', 
        color = 'bg-gray-e2', 
        maxLineHeigth = 'h-0.75', 
        onClick,
        ...motionProps } = props

    return (
        <motion.button {...motionProps}
        className={`flex flex-col justify-center items-center cursor-pointer ${maxButtonSize}`} 
        type="button"
        aria-label="Button-back" 
        title="Button Back"
        onClick={onClick}>
            <div className={`flex flex-col relative justify-center items-center ${maxLineSize}`}>
                <span className={`block w-full absolute ${maxLineHeigth} ${color} rotate-45`}></span>
                <span className={`block w-full absolute  ${maxLineHeigth} ${color} rotate-135`}></span>
            </div>
        </motion.button>
    )
}

export default ButtonBack;