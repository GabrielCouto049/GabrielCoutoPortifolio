import { CodeXml, SquareArrowOutUpRight } from "lucide-react";
import Card from "../shared/Card";
import LinkButton from "../shared/LinkButton";
import SectionHeader from "../shared/SectionHeader";
import Stepper from "./Stepper";
import PROJECTS from "../../data/projects";
import { useState } from "react";

export default function Projects() {
  const [currPage, setCurrPage] = useState<number>(1);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <section className="bg-base-50 section dark:bg-base-950" id="projects">
      <div className="container-page" data-reveal>
        <SectionHeader
          eyebrow="Um pouco do meu trabalho"
          title="Meus projetos"
          className="mb-title-content"
        />

        <ul className="gap-grid-default grid sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(
            (isMobile ? 3 : 6) * (currPage - 1),
            (isMobile ? 3 : 6) * currPage,
          ).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ul>

        <Stepper
          isMobile={isMobile}
          className="mt-title-content"
          numOfProjects={PROJECTS.length}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </div>
    </section>
  );
}

function ProjectCard({
  imageURL,
  demoURL,
  stack,
  description,
  githubURL,
  title,
}: {
  imageURL: string;
  title: string;
  stack: string[];
  description: string;
  demoURL: string;
  githubURL: string;
}) {
  return (
    <li className="h-full min-w-0">
      <Card
        as="article"
        className="group hover:shadow-base-950/5 flex h-full flex-col overflow-hidden duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40"
      >
        <div className="bg-base-200 dark:bg-base-800 relative overflow-hidden">
          <img
            className="aspect-3/2 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            src={imageURL}
            alt={`Prévia do projeto ${title}`}
            loading="lazy"
            decoding="async"
          />
          <div
            className="from-base-950/25 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
        <div className="p-card flex flex-1 flex-col">
          <h3 className="heading-3 text-base-950 mb-heading-content dark:text-base-100">
            {title}
          </h3>
          <p className="text-base-800 paragraph-2 mb-grid-default dark:text-base-300">
            {description}
          </p>

          <ul className="mb-grid-default flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="border-base-200 bg-base-100 text-base-800 hover:border-accent-300 hover:gradient-accent-soft hover:text-accent-700 dark:border-base-800 dark:bg-base-900 dark:text-base-300 dark:hover:border-accent-500 dark:hover:text-accent-300 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>

          <footer className="gap-actions mt-auto grid sm:grid-cols-2">
            <LinkButton
              text="Ver Projeto"
              Icon={SquareArrowOutUpRight}
              href={demoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            />
            <LinkButton
              text="Código"
              Icon={CodeXml}
              variant="secondary"
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-base-800/80 dark:text-base-200 dark:border-accent-900 w-full"
            />
          </footer>
        </div>
      </Card>
    </li>
  );
}
