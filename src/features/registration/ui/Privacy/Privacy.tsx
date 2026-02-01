import { useRegistrationContext } from '@/features/registration/model/RegistrationContext';
import iconPrivacy from '@/shared/assets/icons/privacy.svg'
import ButtonBack from '@/shared/ui/ButtonBack/ButtonBack';
import { motion, AnimatePresence, type Variants } from 'motion/react';

const Privacy = (props: Variants) => {
  const { ...varintsProps } = props
    const { privacyOpen, setPrivacyOpen } = useRegistrationContext();

    return (
      <AnimatePresence>
        {privacyOpen ? 
        <motion.div layout
        {...varintsProps}
        exit={{ y: -20, opacity: 0, height: 0, padding: 0, margin: 0, transition: { duration: 0.3 }}}
        className={`container px-2 mx-auto bg-gray-f0 py-4 sm:w-fit sm:rounded-lg md:p-4`} >
            <div className="flex justify-center items-start gap-x-4">
              <img src={iconPrivacy} alt="privacy" width="24" height="24" />
              <p className='text-[0.81rem] text-dark-24en6 max-w-61.5 leading-[138%] md:max-w-full'>
                We take privacy issues seriously. You can be sure that your personal data is securely protected.
              </p> 
              <ButtonBack maxButtonSize='size-6' 
              maxLineSize='size-3.5' 
              maxLineHeigth='h-[0.07rem]' 
              color='bg-gray-79'
              onClick={() => setPrivacyOpen(false)}/>
            </div>
          </motion.div> : null}
      </AnimatePresence>
    )
}

export default Privacy;