import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState, type ChangeEvent, type FormEvent, type MouseEvent } from "react";
import iconAgain from "@/shared/assets/icons/send-again.svg";
import styles from "./ConfirmForm.module.css";
import ButtonSubmit from "@/shared/ui/ButtonSubmit/ButtonSubmit";
import { buttonVariants, imgVariants } from "@/pages/ConfirmPage/ui/motion/motionVariants";
import CodeAlert from "@/shared/ui/CodeAlert/CodeAlert";
import { useRegistrationContext } from "@/features/registration/model/RegistrationContext";
import { useNavigate } from "react-router";
import { useResendTimer } from "./hooks/useResendTimer";
import { useKeyDownNavigate } from "./hooks/useKeyDownNavigate";

interface ConfirmFormProps {
  variants?: Variants;
};

const ClosestTimeCodeAlertWin = 5000;

const ConfirmForm = (props: ConfirmFormProps) => {
  const { variants } = props;
  
  const { newCode, resendCode, TelToggleConfirm } = useRegistrationContext()
  const { startTimer, resendTimer, buttonDisabled } = useResendTimer()
  const { inputsRef, onKeyDown } = useKeyDownNavigate()

  const [codeAlertOpen, setCodeAlertOpen] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
      if (!newCode) return;

      const alertOpen = () => setCodeAlertOpen(true);
      alertOpen()
      const timer = setTimeout(() => {
          setCodeAlertOpen(false);
        }, ClosestTimeCodeAlertWin)
        
        return () => clearTimeout(timer)
    }, [newCode])
  
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const child = event.currentTarget.querySelectorAll("input");

    [...child].find((child) => child.value.length === 0)?.focus()
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formInputs = event.currentTarget.querySelectorAll('input');
    let code = '';

    if (formInputs.length === 0) return;
        const inputValues = [...formInputs].map((input) => {
            code += input.value
            return input.value.length > 0
        });

        const isValidForm = !inputValues.includes(false)


    if (!isValidForm) return;
    if (Number(code) !== newCode) return;

    TelToggleConfirm('confirm')
    formInputs.forEach(input => input.value = '')
    navigate('/password');
  }

  const onChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '')
    
    const input = inputsRef.current

    if (input[index].value.length > 0) {
        input[index + 1]?.focus()
    }
  }

  const onChangeCode = () => {
    resendCode()
    startTimer();
  } 

  return (
    <>
        <AnimatePresence>
            {codeAlertOpen && <CodeAlert code={newCode}/>}
        </AnimatePresence>
        <motion.form onSubmit={onSubmit}
        variants={variants}
        className="container mx-auto px-6 grid gap-y-8"
        >
        <div className="grid gap-y-4 relative">
            <div className="grid gap-y-2">
            <h2 className="text-[0.81rem]">Confirmation code</h2>
            <div className="flex border-b gap-x-2 px-2 py-2.5 duration-200 border-b-gray-e2 has-[input:focus]:border-b-blue-007"
                onClick={onClick}
            >

                {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className={`max-w-4 ${styles.field}`}>
                <label className="visually-hidden" htmlFor={`code-input-${index}`}>number {index}</label>
                <input className="max-w-4"
                    id={`code-input-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    onChange={onChange(index)}
                    onKeyDown={onKeyDown(index)}
                    maxLength={1}
                    ref={(input) => {if (input) inputsRef.current[index] = input}}
                    placeholder=" "
                />
                </div>
                ))}
                
            </div>
            <p className="text-[0.75rem] text-gray-57">
                Confirm phone number with code from sms message
            </p>
            </div>
            <motion.button
            disabled={buttonDisabled}
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            className="flex gap-x-2 text-blue-007 font-medium leading-[150%] w-fit disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            onClick={onChangeCode}
            aria-label="Send code again"
            title="Send code again"
            >
            <motion.img
                variants={imgVariants}
                src={iconAgain}
                alt="Send confirm code again"
                width={24}
                height={24}
            />
            Send again
            </motion.button>
            {buttonDisabled && <span className="text-[0.75rem] absolute -bottom-4.5 left-0">Change code for {resendTimer} seconds</span>}
        </div>
        <ButtonSubmit>Confirm</ButtonSubmit>
        </motion.form>
    </>
  );
};

export default ConfirmForm;
