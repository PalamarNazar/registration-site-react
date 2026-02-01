import Section from "@/shared/ui/Section/Section";
import SetPasswordContent from "./ui/SetPasswordContent";
import { useRegistrationContext } from "@/features/registration/model/RegistrationContext";
import NotVerificateTel from "@/shared/ui/NotVerificateTel/NotVerificateTel";

const SetPasswordPage = () => {

    const { userTelConfirm } = useRegistrationContext();

    return (
        <>
        {userTelConfirm === 'confirm' 
        ? <Section>
                <SetPasswordContent />
            </Section>
        : <NotVerificateTel />
        }
        </>
    )
}

export default SetPasswordPage;