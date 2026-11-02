import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { buttonClassName, type ButtonVariant } from "./buttonStyles";

type ButtonProps = ComponentProps<"button"> & {
  text?: string;
  Icon?: LucideIcon;
  variant?: ButtonVariant;
};

export default function Button({
  text,
  Icon,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonClassName({
        variant,
        hasText: Boolean(text),
        className,
      })}
    >
      {text && <span>{text}</span>}
      {Icon && <Icon size={16} />}
    </button>
  );
}
