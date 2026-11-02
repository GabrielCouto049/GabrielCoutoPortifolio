import { twMerge } from "tailwind-merge";

export type ButtonVariant = "primary" | "secondary";

const variants: Record<ButtonVariant, string> = {
  primary:
    "gradient-accent-strong text-accent-50 shadow-sm shadow-accent-950/10 hover:brightness-115 hover:shadow-md dark:shadow-black/30",
  secondary:
    "border border-accent-300 bg-base-50/80 text-accent-700 hover:border-accent-500 hover:gradient-accent-soft hover:text-accent-800 dark:border-accent-900 dark:bg-base-900/80 dark:text-accent-200 dark:hover:border-accent-500 dark:hover:text-accent-200",
};

interface ButtonClassNameOptions {
  variant?: ButtonVariant;
  hasText?: boolean;
  className?: string;
}

export function buttonClassName({
  variant = "primary",
  hasText = true,
  className = "",
}: ButtonClassNameOptions) {
  return twMerge(
    `paragraph-3 focus-visible:outline-accent-600 cursor-pointer inline-flex h-10 shrink-0 items-center justify-center gap-icon-text whitespace-nowrap rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] sm:h-11 dark:focus-visible:outline-accent-400 ${
      variants[variant]
    } ${hasText ? "px-button-x" : "aspect-square"}`,
    className,
  );
}
