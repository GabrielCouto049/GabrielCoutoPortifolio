import { Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import SectionHeader from "./shared/SectionHeader";

export default function Contacts() {
  return (
    <section className="section" id="contact">
      <div
        className="container-page gap-grid-spacious grid items-center lg:grid-cols-2"
        data-reveal
      >
        <div className="flex flex-col">
          <SectionHeader
            eyebrow="Vamos conversar?"
            title="Contatos"
            id="contact-title"
            className="mb-title-content"
          />

          <p className="paragraph-2 text-base-950 mb-title-content dark:text-base-200 max-w-[60ch]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            totam libero deserunt laboriosam magnam fugiat, deleniti illo
            assumenda mollitia fuga.
          </p>

          <ul className="gap-list-item flex flex-col">
            {[
              {
                Icon: Mail,
                title: "Email",
                value: "gabrielCouto993@gmail.com",
                href: "mailto:gabrielCouto993@gmail.com",
              },
              {
                Icon: Phone,
                title: "Telefone",
                value: "+55 (51) 99641-3890",
                href: "tel:+5551996413890",
              },
              {
                Icon: MapPin,
                title: "Localização",
                value: "Camaquã-RS Brasil",
                href: undefined,
              },
            ].map((item) => {
              const { Icon, title, value, href } = item;

              return (
                <Card
                  key={title}
                  as="li"
                  className="gap-icon-text flex min-w-0 items-center p-4"
                >
                  <div className="gradient-accent-soft text-accent-200 ring-accent-200/40 dark:ring-accent-500 flex size-10 shrink-0 items-center justify-center rounded-xl">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="heading-4">{title}</h3>
                    {href ? (
                      <a
                        className="link text-base-700 dark:text-base-300 wrap-break-word"
                        href={href}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="paragraph-3 text-base-700 dark:text-base-300">
                        {value}
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </ul>
        </div>

        <form
          aria-labelledby="contact-title"
          className="border-base-200 bg-base-100 gap-field p-card dark:border-base-800 dark:bg-base-900 grid h-full w-full grid-cols-1 rounded-2xl border shadow-lg shadow-black/5 sm:grid-cols-2 dark:shadow-black/30"
        >
          <label className="paragraph-2 text-base-900 dark:text-base-200 gap-field-label flex flex-col">
            Nome
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="border-base-200 bg-base-50 placeholder:text-base-400 hover:border-base-300 focus:border-accent-500 focus:bg-base-50 focus:ring-accent-200/60 dark:border-base-800 dark:bg-base-950 dark:text-base-100 dark:placeholder:text-base-500 dark:hover:border-base-600 dark:focus:border-accent-400 dark:focus:bg-base-950 dark:focus:ring-accent-900/60 rounded-xl border px-3 py-2.5 transition outline-none focus:ring-4"
            />
          </label>

          <label className="paragraph-2 text-base-900 dark:text-base-200 gap-field-label flex flex-col">
            Email
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              required
              className="border-base-200 bg-base-50 placeholder:text-base-400 hover:border-base-300 focus:border-accent-500 focus:bg-base-50 focus:ring-accent-200/60 dark:border-base-800 dark:bg-base-950 dark:text-base-100 dark:placeholder:text-base-500 dark:hover:border-base-600 dark:focus:border-accent-400 dark:focus:bg-base-950 dark:focus:ring-accent-900/60 rounded-xl border px-3 py-2.5 transition outline-none focus:ring-4"
            />
          </label>

          <label className="paragraph-2 text-base-900 dark:text-base-200 gap-field-label flex flex-col sm:col-span-2">
            Mensagem
            <textarea
              name="message"
              rows={5}
              placeholder="Como posso ajudar?"
              required
              className="border-base-200 bg-base-50 placeholder:text-base-400 hover:border-base-300 focus:border-accent-500 focus:bg-base-50 focus:ring-accent-200/60 dark:border-base-800 dark:bg-base-950 dark:text-base-100 dark:placeholder:text-base-500 dark:hover:border-base-600 dark:focus:border-accent-400 dark:focus:bg-base-950 dark:focus:ring-accent-900/60 resize-none rounded-xl border p-3 transition outline-none focus:ring-4"
            />
          </label>

          <Button
            type="submit"
            text="Enviar Mensagem"
            Icon={Send}
            className="w-full sm:col-span-2"
          />
        </form>
      </div>
    </section>
  );
}
