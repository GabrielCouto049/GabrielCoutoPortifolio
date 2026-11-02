import {
  Code2,
  Palette,
  Braces,
  FileCode2,
  Atom,
  Wind,
  GitBranch,
  Smartphone,
  Monitor,
  Database,
  Terminal,
  Boxes,
  Globe,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Tab = "frontEnd" | "tools" | "libraries" | "uiUx";

interface Skill {
  name: string;
  icon: LucideIcon | null;
}

interface SkillSet {
  title: string;
  tab: Tab;
  skills: Skill[];
}

const SKILLSETS: SkillSet[] = [
  {
    title: "Front-End",
    tab: "frontEnd",
    skills: [
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileCode2 },
      { name: "React", icon: Atom },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Next.js", icon: Globe },
      { name: "Vite", icon: Zap },
    ],
  },
  {
    title: "Ferramentas",
    tab: "tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: null },
      { name: "Figma", icon: null },
      { name: "VS Code", icon: Monitor },
      { name: "Terminal", icon: Terminal },
    ],
  },
  {
    title: "Bibliotecas",
    tab: "libraries",
    skills: [
      { name: "React Router", icon: Globe },
      { name: "Zustand", icon: Boxes },
      { name: "Zod", icon: FileCode2 },
      { name: "TanStack Query", icon: Database },
    ],
  },
  {
    title: "UI/UX Design",
    tab: "uiUx",
    skills: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "UI Design", icon: Palette },
      { name: "Accessibility", icon: Globe },
      { name: "Prototyping", icon: null },
    ],
  },
];

export { SKILLSETS, type Tab, type Skill, type SkillSet };
