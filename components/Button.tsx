"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  children: React.ReactNode;
  type: string;
  className?: string;
  spinner?: string;
} & ComponentProps<"button">;

function Button({ children, type, className, spinner, ...props }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button {...props} type={type} className={`${className}`} disabled={pending}>
      {pending && <span className={spinner} />}
      {children}
    </button>
  );
}

export default Button;
