import { useEffect, useState } from "react";
import { CodeXml, Download, Menu, Sun, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Button from "./shared/Button";
import MobileMenu from "./MobileMenu";

const links: {
  label: string;
  to: string;
}[] = [
  {
    label: "Home",
    to: "#home",
  },
  {
    label: "Sobre",
    to: "#about",
  },
  {
    label: "Habilidades",
    to: "#skills",
  },
  {
    label: "Projetos",
    to: "#projects",
  },
  {
    label: "Contato",
    to: "#contact",
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.to))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <header className="border-base-200/70 dark:border-base-700/70 bg-base-50/85 dark:bg-base-950/85 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-actions sm:h-20">
        <a
          href="#home"
          className="focus-visible:outline-accent-600 flex min-w-0 items-center gap-icon-text rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-accent-400"
          aria-label="Gabriel Couto - Início"
        >
          <CodeXml
            className="text-accent-600 shrink-0 dark:text-accent-400"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <span className="font-heading truncate text-xl font-medium sm:text-2xl">
            GabrielCouto
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-sm lg:flex"
        >
          {links.map((link) => {
            const isActive = activeSection === link.to;

            return (
              <a
                key={link.to}
                className={twMerge(
                  "focus-visible:outline-accent-600 relative border-b-2 py-1.5 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 dark:focus-visible:outline-accent-400",
                  isActive
                    ? "border-accent-500 text-accent-700 dark:border-accent-400 dark:text-accent-300"
                    : "border-transparent text-base-700 hover:border-accent-300 hover:text-accent-700 dark:text-base-300 dark:hover:border-accent-500 dark:hover:text-accent-300",
                )}
                href={link.to}
                aria-current={isActive ? "location" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-actions">
          <Button
            text="Baixar Currículo"
            Icon={Download}
            className="hidden sm:flex"
            
          />
          <Button
            Icon={Sun}
            variant="secondary"
            aria-label="Alternar tema"
            className=" md:flex"
            onClick={toggleDarkMode}
          />
          <Button
            Icon={menuOpen ? X : Menu}
            variant="secondary"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden"
          />
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        links={links}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
