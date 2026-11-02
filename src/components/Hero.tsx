import { Download, Phone } from "lucide-react";
import Button from "./shared/Button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-3.5rem)] items-center bg-[url(../assets/images/heroBackgroundLight.webp)] bg-cover bg-center bg-no-repeat py-10 sm:min-h-[calc(100svh-4rem)] sm:py-16 lg:py-20 dark:bg-[url(../assets/images/heroBackgroundDark.webp)]"
      id="home"
    >
      <div aria-hidden="true" />

      <div className="container-page relative">
        <div className="sm:gap-title-content flex max-w-3xl flex-col gap-6">
          <header>
            <h1 className="heading-1">
              Gabriel
              <span className="text-gradient-accent-strong"> Couto</span>
            </h1>
            <p className="heading-2 text-gradient-accent-soft">
              Desenvolvedor Front-End
            </p>
          </header>
          <p className="paragraph-1 text-base-800 dark:text-base-200 max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse
            accusantium eum praesentium exercitationem omnis deserunt porro,
            dolorum, laudantium saepe fugit, facere quis quibusdam eos.
          </p>
          <div className="gap-actions grid grid-cols-1 sm:flex sm:flex-wrap">
            <Button
              text="Baixar Currículo"
              Icon={Download}
              className="w-full sm:w-auto"
            />
            <Button
              text="Entrar em Contato"
              Icon={Phone}
              variant="secondary"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
