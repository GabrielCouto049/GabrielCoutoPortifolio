import { useState, type KeyboardEvent } from "react";
import { twMerge } from "tailwind-merge";
import Card from "./shared/Card";
import SectionHeader from "./shared/SectionHeader";
import { SKILLSETS, type Skill, type Tab } from "../data/skills";

export default function Skills() {
  const [currTab, setCurrTab] = useState<Tab>("frontEnd");

  const currentSkills = SKILLSETS.find((skillSet) => skillSet.tab === currTab);

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;

    event.preventDefault();

    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % SKILLSETS.length;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + SKILLSETS.length) % SKILLSETS.length;
    }

    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = SKILLSETS.length - 1;

    const nextTab = SKILLSETS[nextIndex];
    setCurrTab(nextTab.tab);
    document.getElementById(`skills-tab-${nextTab.tab}`)?.focus();
  };

  return (
    <section className="section dark:bg-base-900" id="skills">
      <div className="container-page" data-reveal>
        <SectionHeader
          eyebrow="Minhas Ferramentas"
          title="Habilidades"
          className="mb-title-content"
        />

        <div
          role="tablist"
          aria-label="Categorias de habilidades"
          className="border-base-200 bg-base-100 grid w-full grid-cols-2 gap-1 rounded-2xl border p-1 sm:inline-flex sm:w-fit sm:max-w-full sm:flex-wrap dark:border-base-700 dark:bg-base-800"
        >
          {SKILLSETS.map((skillSet, index) => {
            const isActive = currTab === skillSet.tab;

            return (
              <button
                key={skillSet.tab}
                id={`skills-tab-${skillSet.tab}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="skills-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setCurrTab(skillSet.tab)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={twMerge(
                  "focus-visible:outline-accent-600 w-full rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto sm:px-4 cursor-pointer dark:focus-visible:outline-accent-400",
                  isActive
                    ? "bg-base-50 text-gradient-accent-strong shadow-sm dark:bg-base-700"
                    : "text-base-600 hover:bg-base-50/70 hover:text-base-900 dark:text-base-400 dark:hover:bg-base-700/70 dark:hover:text-base-100",
                )}
              >
                {skillSet.title}
              </button>
            );
          })}
        </div>

        {currentSkills && (
          <ul
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${currTab}`}
            className="mt-title-content gap-grid-compact grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          >
            {currentSkills.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <Card
      as="li"
      className="group gap-icon-text flex min-h-16 min-w-0 items-center p-4 dark:border-base-700 dark:bg-base-800"
    >
      <span className="gradient-accent-soft text-accent-200 ring-accent-200/40 dark:ring-accent-500 group-hover:brightness-110 flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 transition-all">
        {Icon ? (
          <Icon size={20} aria-hidden="true" />
        ) : (
          <span
            aria-hidden="true"
            className="gradient-accent-soft size-2.5 rounded-full"
          />
        )}
      </span>

      <span className="paragraph-2 text-base-900 min-w-0 dark:text-base-100">
        {skill.name}
      </span>
    </Card>
  );
}
