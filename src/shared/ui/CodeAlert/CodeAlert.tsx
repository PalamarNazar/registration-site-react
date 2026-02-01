import { motion } from "motion/react"

const CodeAlert = ({ code }: { code: number | null}) => {
    if (!code) return null;
    return (
    <motion.div 
    initial={{ top: 30, opacity: 0}} 
    animate={{ top: 50, opacity: 1}} 
    transition={{ duration: 0.4}}
    exit={{ top: 30, opacity: 0}}
    className="fixed left-[50%] translate-x-[-50%] p-3 bg-gray-57 rounded-2xl whitespace-nowrap shadow-2xl">
        <span className="text-white">Code send, your code: {code}</span>
    </motion.div>)
}

export default CodeAlert;