import ConfirmForm from "@/features/registration/ui/ConfirmForm";
import NumberStatus from "@/features/registration/ui/NumberStatus";
import { itemVariants } from "@/shared/motion/motionVarints";
import SectionHeader from "@/shared/ui/SectionHeader/SectionHeader";


const ConfirmContent = () => {
    return (
        <>
            <SectionHeader variants={itemVariants} />
            <NumberStatus variants={itemVariants} status="unconfirm" />
            <ConfirmForm variants={itemVariants} />
        </>
    )
}

export default ConfirmContent;