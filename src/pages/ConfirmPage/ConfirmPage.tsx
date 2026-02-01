import Section from "@/shared/ui/Section/Section";
import Stepper from "@/features/registration/ui/Stepper/Stepper";
import ConfirmContent from "./ui/ConfirmContent";
import { useRegistrationContext } from "@/features/registration/model/RegistrationContext";
import NotVerificateTel from "@/shared/ui/NotVerificateTel/NotVerificateTel";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const ConfirmPage = () => {

    const { userTel } = useRegistrationContext();
    const navigate = useNavigate()

    useEffect(() => {
        if (userTel.status === 'confirm') navigate('/password')

    }, [userTel.status, navigate])


    return (
        <>
        {userTel.tel.length > 0 ?
            <>
            <Stepper step="confirm" />
            <Section>
                    <ConfirmContent />
            </Section>
            </>
            : <NotVerificateTel />
        }
        </>
    )
}

export default ConfirmPage;