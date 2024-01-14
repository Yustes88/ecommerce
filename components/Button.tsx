"use client";

import { ComponentProps } from "react";

type ButtonProps = {
  children: React.ReactNode;
  type: string,
  className?: string;
} & ComponentProps<"button">;

function Button({ children, type, className }: ButtonProps) {
  return (
    <button type={type} className={`${className}`}>
      {children}
    </button>
  );
}

export default Button;
