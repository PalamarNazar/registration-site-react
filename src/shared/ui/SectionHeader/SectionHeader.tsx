import { motion, type Variants } from "motion/react";

const SectionHeader = (props: Variants) => {
    const { ...varintsProps } = props
    return (
        <motion.header {...varintsProps}
        className='container px-2 mx-auto flex flex-col items-center text-center gap-y-4 md:text-start md:items-start'>
            <h1 className='font-bold text-[2rem] leading-[112%]'>
                Registration
            </h1>

            <p
                className='font-light leading-[137%] max-w-80 text-gray-57 md:max-w-11/12'>
                Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail
            </p>
          </motion.header>
    )
}

export default SectionHeader;