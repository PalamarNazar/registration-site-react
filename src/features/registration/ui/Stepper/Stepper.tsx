import { Fragment } from "react";
import { motion } from "motion/react";
import { RegistrationStep, type StepperStepsType } from "./StepperTypes";
import styles from "./Stepper.module.css";


const steps = [
    RegistrationStep.Regestration,
    RegistrationStep.Confirm,
    RegistrationStep.SetPassword,
] as const

const Stepper = ({ step }: { step: StepperStepsType }) => {
    const activeIndex = steps.indexOf(step)

    return (
        <motion.div
        className="flex items-center gap-x-2">
        {steps.map((stepItem, index) => (
            <Fragment key={stepItem}>
                <motion.div 
                    initial={{ y: 10, opacity: 0}} 
                    animate={{ y: 0, opacity: 1}} 
                    transition={{ delay: 0.1 * (index + 1)}} 
                    className={`${styles.blueCircle} ${activeIndex >= index ? styles.isActive : ''}`}>
                </motion.div>

                {steps.length - 1 > index
                 && <motion.div
                initial={{ x: -20, opacity: 0,}} 
                animate={{x: 0, opacity: 1}} 
                transition={{ delay: 0.1 * (index + 1)}}  
                className={`w-10 h-px ${activeIndex > index  ? 'bg-blue-007' : 'bg-gray-b9'}`}></motion.div>}     
            </Fragment>
        ))}
        </motion.div>
    )
} 

export default Stepper