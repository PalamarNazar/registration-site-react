import { type InputHTMLAttributes, type PropsWithChildren, type RefObject } from "react";

type FieldProps = PropsWithChildren<{
    labelClassName?: string;
    id: string;
    ref?: RefObject<HTMLInputElement | null>
}> & InputHTMLAttributes<HTMLInputElement>


const Field =  (props: FieldProps) => {
    const { 
        labelClassName = '', 
        className = '', 
        id, 
        children, 
        type = 'text', 
        name, 
        onChange, 
        ref,
        ...rest
    } = props

    return (
        <>
            <label htmlFor={id} className={labelClassName}>{children}</label>
            <input className={`${className} py-2 px-4 border-b border-gray-e2`}
            type={type} 
            name={name} 
            id={id}  
            ref={ref}
            onChange={onChange}
            {...rest} />
        </>
    )
}

export default Field;