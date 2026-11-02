import { twMerge } from "tailwind-merge";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  id?: string;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  id,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={twMerge("max-w-2xl", className)}>
      <p className="subheading mb-1 flex items-center gap-icon-text">
        <span className="gradient-accent-strong size-1.5 rounded-full" />
        <span className="text-gradient-accent-strong">{eyebrow}</span>
      </p>
      <h2 className="heading-2 text-base-950 dark:text-base-200" id={id}>
        {title}
      </h2>
    </header>
  );
}
