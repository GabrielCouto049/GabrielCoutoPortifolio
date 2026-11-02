import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { buttonClassName, type ButtonVariant } from "./buttonStyles";

type LinkButtonProps = ComponentProps<"a"> & {
  text?: string;
  Icon?: LucideIcon;
  variant?: ButtonVariant;
};

export default function LinkButton({
  text,
  Icon,
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <a
      {...props}
      className={buttonClassName({
        variant,
        hasText: Boolean(text),
        className,
      })}
    >
      {text && <span>{text}</span>}
      {Icon && <Icon size={16} />}
    </a>
  );
}
