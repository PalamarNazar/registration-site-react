import { motion, type Variants } from "motion/react";
import type { FormEvent, ReactNode } from "react";

interface FormTemplateProps {
    children: ReactNode;
    id: string;
    variants?: Variants;
    formInnerStyles?: string;
    buttonSubmit: ReactNode
    wFull?: boolean;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FormTemplate = (props: FormTemplateProps) => {

    const { 
        children, 
        id, 
        variants, 
        formInnerStyles = '', 
        onSubmit, 
        buttonSubmit, 
        wFull = false} = props
    return (
        <motion.form variants={variants}
        id={id} className={`${wFull ? 'container mx-auto max-w-81.5 w-full md:max-w-full' : ''} grid gap-y-8 md:w-full`} onSubmit={onSubmit}>
              <div className={`${formInnerStyles} md:w-full md:p-8 md:border md:border-gray-e2 md:rounded-lg`}>
                {children}
              </div>
              {buttonSubmit}
          </motion.form>
    )
}

export default FormTemplate;