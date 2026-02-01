import NumberStatus from "@/features/registration/ui/NumberStatus";
import PasswordForm from "@/features/registration/ui/PasswordForm";
import { itemVariants } from "@/shared/motion/motionVarints";
import SectionHeader from "@/shared/ui/SectionHeader/SectionHeader";


const SetPasswordContent = () => {
    return (
        <>
            <SectionHeader variants={itemVariants} />
            <NumberStatus variants={itemVariants} status="confirm" />
            <PasswordForm variants={itemVariants} />
        </>
    )
}

export default SetPasswordContent;
