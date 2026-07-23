import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-5 py-2.5 rounded-2xl font-medium text-sm transition-all duration-200 cursor-pointer",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-sm hover:shadow-lg",
        variant === "secondary" && "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 active:scale-95 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
