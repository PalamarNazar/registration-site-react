import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { RegisterContext } from './registration.types'
import { useRegistration } from "./useRegistration";

type contextPropsTypes = {
    children: ReactNode;
}

const RegistrationContext = createContext<RegisterContext | null>(null);

export const RegistrationProvider = ({ children }: contextPropsTypes) => {
    const {
        addTel,
        privacyOpen, 
        setPrivacyOpen,
        newCode,
        resendCode,
        addUserData,
        userTel,
        TelToggleConfirm,
        userTelConfirm
    } = useRegistration();

    const TelRegistration = useMemo(() => {
        return {
            addTel,
            privacyOpen,
            setPrivacyOpen,
            newCode,
            resendCode,
            addUserData,
            userTel,
            TelToggleConfirm,
            userTelConfirm
        }
    }, [
        addTel,
        privacyOpen,
        setPrivacyOpen,
        newCode,
        resendCode,
        addUserData,
        userTel,
        TelToggleConfirm,
        userTelConfirm
    ])

    return (
        <RegistrationContext.Provider value={TelRegistration}>
            {children}
        </RegistrationContext.Provider>
    )
}

export const useRegistrationContext = () => {
    const context = useContext(RegistrationContext);
    if (!context) throw new Error('RegistrationContext not provided');
    return context
}