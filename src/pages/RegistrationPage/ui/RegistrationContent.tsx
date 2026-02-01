import TelForm from '@/features/registration/ui/TelFForm';
import Privacy from '@/features/registration/ui/Privacy/Privacy';
import SectionHeader from '@/shared/ui/SectionHeader/SectionHeader';
import { itemVariants } from '@/shared/motion/motionVarints';

const RegistrationContent = () => {
    return (
        <>
            <SectionHeader variants={itemVariants} />
            <Privacy variants={itemVariants} />
            <TelForm variants={itemVariants} />
        </>
    )
}

export default RegistrationContent;