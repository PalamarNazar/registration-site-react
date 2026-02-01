import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRegistrationContext } from "@/features/registration/model/RegistrationContext";
import { passwordRules } from "./passwordRules";
import { iconVariants } from "./motion";
import greenCheck from '@/shared/assets/icons/green-check.svg'
import ButtonSubmit from "@/shared/ui/ButtonSubmit/ButtonSubmit";
import FormTemplate from "../FormTemplate/FormTemplate";
import Field from "@/shared/ui/Field/Field";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router";

interface PasswordFormTypes {
    variants?: Variants
}

const Email_Base = /^\S+@\S+\.\S+$/
const Email_Template = 'qwerty123@gmail.com' 

const EyeSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={iconVariants} d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
    </svg>
)

const PasswordForm = (props: PasswordFormTypes) => {

    const { variants } = props

    const [hasError, setHasError] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [viewIsPassword, setViewIsPassword] = useState(true)
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    const { addUserData } = useRegistrationContext()

    const callBackCleareValues = () => {
        setEmailValue('') 
        setPasswordValue('')
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailValid = Email_Base.test(emailValue)
        setHasError(!emailValid) 

        if (emailValue.trim().length === 0 || passwordValue.trim().length === 0) return;
        if (!emailValid || passwordError) return;

        // set data in user storage
        addUserData(emailValue, passwordValue, callBackCleareValues)
        navigate('/result')
    }

    const passwordOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.replace(/\s/g, '')
        setPasswordValue(value)

        setPasswordError(!Object.values(passwordRules).every(func => func(value)))
    }

    return (
        <FormTemplate variants={variants}
        id="password-form" 
        wFull={true}
        onSubmit={onSubmit}
        formInnerStyles="grid gap-y-8"
        buttonSubmit={
            <ButtonSubmit className="px-8 py-3 bg-blue-007 text-white">
                Register now
            </ButtonSubmit>
        }>
            <label className="grid gap-y-2 relative">
                <span className="text-[0.875rem]">Enter your email</span>
                <Field 
                id='user-email' 
                type="text"
                name="userEmail" 
                onChange={(event) => setEmailValue(event.currentTarget.value.replace(/\s/g, ''))}
                value={emailValue}
                required
                placeholder="Write your email"
                />
                <ErrorMessage hasError={hasError} className="-bottom-5 left-0">
                    Email must be this format {Email_Template}
                </ErrorMessage>
            </label>

            <label className="grid gap-y-2 relative">
                <span className="text-[0.875rem]">Set a password</span>
                <Field 
                id='user-password' 
                type={viewIsPassword ? 'password' : 'text'}
                autoComplete="off"
                name="userPassword" 
                required
                onChange={passwordOnChange}
                value={passwordValue}
                placeholder="Write your password"
                />
                <motion.button 
                onClick={() => setViewIsPassword(prev => !prev)}
                whileHover="hover" 
                whileTap="tap" 
                initial="idle"
                className="absolute bottom-2 right-3 placeholder-shown:opacity-0" 
                type="button"
                aria-label='Show password'
                title='Show password'>
                
                <EyeSvg />
                </motion.button>
                {passwordValue && 
                passwordError 
                ? <ErrorMessage 
                    className="-bottom-6 left-0 max-h-5 overflow-y-scroll"
                    hasError={passwordError}
                    >
                        Password must contain at least 8 characters, 
                        one uppercase letter, 
                        one number, 
                        and one special symbol.
                    </ErrorMessage>
                : <ErrorMessage 
                    className='flex -bottom-6 left-0'
                    hasError={!passwordError && passwordValue.trim().length > 0}>
                        <img src={greenCheck} alt="" width={18} height={18}/>
                        <span className='text-[0.75rem] text-green-34'>Good password</span>
                    </ErrorMessage>
                }
            </label>
        </FormTemplate>
    )
}

export default PasswordForm;