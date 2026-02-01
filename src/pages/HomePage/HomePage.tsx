import { Link } from "react-router";
import { motion } from "motion/react";

const HomePage = () => {

    
    return (
        <motion.div 
        initial={{ y: 10, opacity: 0}} 
        animate={{ y: 0, opacity: 1}} 
        transition={{ duration: 0.4}}
        className="grid gap-y-6 w-full justify-center py-10">
            <h1 className="font-bold text-2xl">Registration</h1>
            <Link to={'registration'} className="border rounded-lg border-gray-57 px-4 py-2 text-center">Registration</Link>
        </motion.div>
    )
}

export default HomePage;