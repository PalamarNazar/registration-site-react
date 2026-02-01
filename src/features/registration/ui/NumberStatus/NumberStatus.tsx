import editIcon from '@/shared/assets/icons/edit-icon.svg';
import checkIcon from '@/shared/assets/icons/check.svg'
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import styles from './NumberStatus.module.css'
import { useRegistrationContext } from '@/features/registration/model/RegistrationContext';

type Status = 'confirm' | 'unconfirm'

interface NumberStatusTypes { 
    variants?: Variants, 
    status: Status,
}

const NumberStatus = (props: NumberStatusTypes) => {

    const {variants, status} = props

    const { userTel } = useRegistrationContext();
    const navigate = useNavigate();

    const activeNumber = userTel ? userTel.telIndex + userTel.tel : 'You don\'t have an active number'

    return (
        <motion.div variants={variants} className="w-full bg-blue-ef md:bg-transparent">
            <div className={`container mx-auto px-6 py-4 max-w-93.5 ${styles.EditField} gap-y-0.5 
                md:p-4 md:border md:rounded-lg md:border-gray-e2 md:max-w-114`}>
                <span className={`${styles.number} text-[1.125rem] leading-[156%]`}>{activeNumber}</span>
                
                {
                    status === 'unconfirm' 
                        ? <p className="text-[0.81rem] leading-[138%] text-gray-57">Number not confirmed yet</p> 
                        : (<div className='flex gap-x-1 text-[0.81rem] leading-[138%] text-gray-57'>
                        <img src={checkIcon} alt="" width={18} height={18} />
                        <span>Number confirmed</span>
                        </div>)
                }
                {
                    status === 'unconfirm' && <motion.button whileHover={{ scale: 1.1 }} className='justify-self-end' 
                    type='button' 
                    onClick={() => navigate('/registration')}
                    aria-label='Edit-number' 
                    title='Edit number'>
                        <img src={editIcon} alt="Edit phone number" width={24} height={24} />
                    </motion.button>
                }
            </div>
        </motion.div>
    )
}

export default NumberStatus;