import { ArrowUp, CodeXml, Heart, ExternalLink } from "lucide-react";
import BrandIcon, { type Brand } from "./shared/BrandIcon";

const navigation = [
  { to: "#home", title: "Início" },
  { to: "#about", title: "Sobre mim" },
  { to: "#skills", title: "Habilidades" },
  { to: "#projects", title: "Projetos" },
  { to: "#contact", title: "Contato" },
];

const services = [
  { title: "Desenvolvimento web", to: "#projects" },
  { title: "Interfaces responsivas", to: "#projects" },
  { title: "Aplicações React", to: "#projects" },
];

const socialLinks: { title: string; to: string; brand: Brand }[] = [
  { title: "GitHub", to: "https://github.com/", brand: "github" },
  { title: "LinkedIn", to: "https://linkedin.com/", brand: "linkedin" },
  { title: "Instagram", to: "https://instagram.com/", brand: "instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-base-950">
      <div
        className="container-page grid grid-cols-1 gap-grid-spacious pt-16 pb-12 sm:grid-cols-2 sm:pt-20 sm:pb-16 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr] lg:pt-24"
        data-reveal
      >
        <div>
          <a
            href="#home"
            className="mb-heading-content focus-visible:outline-accent-400 flex w-fit items-center gap-icon-text rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Gabriel Couto - Início"
          >
            <CodeXml className="text-accent-500" strokeWidth={2.5} />
            <span className="heading-3 text-base-200">GabrielCouto</span>
          </a>

          <p className="paragraph-3 text-base-300 max-w-[40ch]">
            Desenvolvedor front-end focado na criação de interfaces modernas,
            responsivas e funcionais para a web.
          </p>
        </div>

        <nav aria-labelledby="footer-navigation">
          <h3
            id="footer-navigation"
            className="heading-3 text-base-200 mb-heading-content"
          >
            Navegação
          </h3>

          <ul className="flex flex-col gap-list-item">
            {navigation.map((item) => (
              <li key={item.to}>
                <a
                  href={item.to}
                  className="text-base-300 hover:text-accent-400 focus-visible:outline-accent-400 flex items-center gap-icon-text text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <span
                    aria-hidden="true"
                    className="gradient-accent-strong size-1.5 shrink-0 rounded-full"
                  />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="heading-3 text-base-200 mb-heading-content">
            Serviços
          </h3>

          <ul className="flex flex-col gap-list-item">
            {services.map((item) => (
              <li key={item.title}>
                <a
                  href={item.to}
                  className="text-base-300 hover:text-accent-400 focus-visible:outline-accent-400 flex items-center gap-icon-text text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <span
                    aria-hidden="true"
                    className="gradient-accent-strong size-1.5 shrink-0 rounded-full"
                  />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-3 text-base-200 mb-heading-content">
            Redes sociais
          </h3>

          <ul className="flex flex-col gap-list-item">
            {socialLinks.map(({ title, to, brand }) => (
              <li key={title}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-300 hover:text-accent-400 focus-visible:outline-accent-400 flex w-fit items-center gap-icon-text text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <BrandIcon brand={brand} />
                  {title}
                  <ExternalLink
                    size={12}
                    aria-hidden="true"
                    className="opacity-60"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-base-800 border-t">
        <div className="container-page flex flex-col items-center justify-between gap-actions py-5 text-center md:flex-row md:text-left">
          <p className="paragraph-3 text-base-300">
            &copy; {new Date().getFullYear()} GabrielCouto. Alguns direitos
            reservados.
          </p>

          <p className="paragraph-3 text-base-300 flex items-center gap-1">
            Feito com{" "}
            <Heart size={13} className="fill-accent-500 text-accent-500" /> para
            a web
          </p>

          <a
            href="#home"
            className="text-base-300 hover:text-accent-400 focus-visible:outline-accent-400 flex items-center gap-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Voltar ao topo
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
