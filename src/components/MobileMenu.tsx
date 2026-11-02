import {
  FolderKanban,
  House,
  Mail,
  UserRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

const linkIcons: Record<string, LucideIcon> = {
  "#home": House,
  "#about": UserRound,
  "#skills": Wrench,
  "#projects": FolderKanban,
  "#contact": Mail,
};

interface MobileMenuProps {
  open: boolean;
  links: {
    label: string;
    to: string;
  }[];
  onClose: () => void;
}

export default function MobileMenu({
  open,
  links,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={twMerge(
        "border-base-200 bg-base-50/95 absolute inset-x-0 top-full origin-top border-b shadow-xl backdrop-blur-xl transition-all duration-200 lg:hidden dark:border-base-800 dark:bg-base-950/95",
        open
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-2 opacity-0",
      )}
    >
      <nav aria-label="Navegação mobile" className="container-page py-4">
        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const Icon = linkIcons[link.to];

            return (
              <li key={link.to}>
                <a
                  href={link.to}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="text-base-800 hover:gradient-accent-soft hover:text-accent-700 focus-visible:outline-accent-600 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-base-200 dark:hover:text-accent-300 dark:focus-visible:outline-accent-400"
                >
                  {link.label}
                  {Icon && (
                    <Icon
                      size={18}
                      aria-hidden="true"
                      className="text-accent-600 shrink-0 dark:text-accent-400"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
