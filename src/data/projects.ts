export type Project = {
  id: number;
  imageURL: string;
  title: string;
  description: string;
  stack: string[];
  demoURL: string;
  githubURL: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    imageURL:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualizar métricas, gráficos e indicadores de desempenho.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    demoURL: "https://example.com",
    githubURL: "https://github.com",
  },
  {
    id: 2,
    imageURL:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    title: "Shopify Store",
    description:
      "Loja virtual responsiva com catálogo de produtos, filtros e carrinho de compras.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    demoURL: "https://example.com",
    githubURL: "https://github.com",
  },
  {
    id: 3,
    imageURL:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    title: "Task Manager",
    description:
      "Aplicação de gerenciamento de tarefas com organização por categorias e prioridades.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zod"],
    demoURL: "https://example.com",
    githubURL: "https://github.com",
  },
  {
    id: 4,
    imageURL:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    title: "Learning Platform",
    description:
      "Plataforma de estudos com cursos, acompanhamento de progresso e organização de conteúdo.",
    stack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    demoURL: "https://example.com",
    githubURL: "https://github.com",
  },
  {
    id: 5,
    imageURL:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    title: "Creative Studio",
    description:
      "Landing page para um estúdio criativo com foco em identidade visual e experiência do usuário.",
    stack: ["HTML", "CSS", "JavaScript", "Figma"],
    demoURL: "https://example.com",
    githubURL: "https://github.com",
  },
  {
    id: 6,
    imageURL:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    title: "Team Workspace",
    description:
      "Interface colaborativa para equipes organizarem projetos, atividades e prazos.",
    stack: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"],
    demoURL: "https://example.com",
    githubURL: "https://github.com",
  },
];

export default PROJECTS;