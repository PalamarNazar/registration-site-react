import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

const ButtonSubmit = (
  props: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>,
) => {

    const { children, className, ...rest} = props
  return (
    <button
      {...rest}
      className={`px-6 py-3 font-medium capitalize text-center leading-[150%] border border-gray-bb rounded-sm w-fit justify-self-center 
              duration-200 hover:scale-105
              md:justify-self-start 
              disabled:pointer-events-none disabled:opacity-50 ${className}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
