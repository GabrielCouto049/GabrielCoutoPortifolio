import Card from "./shared/Card";
import SectionHeader from "./shared/SectionHeader";

export default function About() {
  return (
    <section className="bg-base-100 section dark:bg-base-950" id="about">
      <div className="container-page grid md:grid-cols-2 gap-grid-default" data-reveal>
        <div className="gap-title-content flex w-full flex-col">
          <SectionHeader
            eyebrow="Um pouco mais sobre mim"
            title="Quem sou eu?"
          />
          <p className="paragraph-2 text-base-900 dark:text-base-300 max-w-[65ch]">
            Olá! Sou um desenvolvedor apaixonado por tecnologia, criação de
            interfaces e resolução de problemas. Tenho experiência desenvolvendo
            aplicações modernas, buscando sempre escrever código limpo,
            acessível e eficiente. Minha jornada envolve aprendizado constante,
            colaboração em equipe e a busca por transformar ideias em
            experiências digitais bem construídas.
          </p>
          <ul className="gap-grid-compact grid grid-cols-2">
            <AchievementCard qtt={1} title="Anos de Expêriencia" />
            <AchievementCard qtt={10} title="Projetos Concluidos" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ qtt, title }: { qtt: number; title: string }) {
  return (
    <Card as="li" className="gap-list-item p-card flex flex-col">
      <span className="heading-2 text-gradient-accent-strong">
        {qtt}+
      </span>
      <p className="paragraph-3">{title}</p>
    </Card>
  );
}
