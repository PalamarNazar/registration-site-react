import ButtonBack from '@/shared/ui/ButtonBack/ButtonBack';
import { motion } from "motion/react"
import logo from '@/shared/assets/images/logo.svg';
import { Link, useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.header 
    initial={{ y: 15, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }} 
    className="container mx-auto px-2 lg:px-11 py-2 flex justify-between gap-x-3.25 w-full items-center">
      <Link to="/" className='flex items-center gap-x-[inherit]'>
        <img src={logo} alt="logo" width={24} height={24} />
        <p className="font-bold leading-[112%] whitespace-nowrap uppercase">
          company name
        </p>
      </Link>

      <ButtonBack 
      initial={{ y: 10, opacity: 0}} 
      animate={{ y: 0, opacity: 1}} 
      onClick={() => navigate('/')}
      transition={{ delay: 0.2, duration: 0.4}}  />
    </motion.header>
  );
};

export default Header;
