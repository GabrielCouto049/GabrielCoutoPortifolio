# Todo de design — Portfólio

Análise de design da página, organizada por prioridade.

A base visual é boa: paleta consistente, tipografia bem escolhida, contraste corrigido e componentes reutilizáveis. O principal problema hoje é que a interface foi construída para desktop e ainda tem vários elementos de “placeholder” que quebram a percepção de produto acabado.

---

## P0 — Crítico

- [ ] **Responsividade praticamente inexistente**
  - Só existem duas regras responsivas no projeto: `sm:grid-cols-3` e `lg:grid-cols-4` em `Skills.tsx`.
  - Header, Hero, About, Projects, Contact e Footer usam larguras fixas como `px-24`/`px-30`, grids fixos de 2/3/4 colunas e tipografia fixa.
  - Em telas móveis isso deve gerar conteúdo espremido, overflow horizontal e navegação inutilizável.
  - **Ação:** adotar mobile-first com container central e breakpoints em todas as seções.

- [ ] **Hero não tem controle correto da imagem de fundo**
  - `Hero.tsx:7` usa apenas `bg-[url(...)]`. Falta `bg-cover bg-center bg-no-repeat`.
  - A imagem tem 1536×1024; em telas largas pode repetir ou cortar de forma imprevisível.
  - **Ação:** definir `bg-cover`, `bg-center`, overlay/gradiente para legibilidade e `min-h-svh` em vez de altura fixa.

- [ ] **CTAs sem ação**
  - “Baixar Currículo” no Header e no Hero não baixa nada.
  - “Entrar em Contato” no Hero é um `<button>` sem ação; deveria levar para `#contact`.
  - O botão de tema (`Sun`) não alterna tema.
  - **Impacto:** parece interface quebrada.
  - **Ação:** usar `LinkButton`, adicionar arquivo real de currículo e remover ou implementar o tema.

- [ ] **Conteúdo ainda é placeholder**
  - Hero e Contact têm “Lorem ipsum”.
  - About tem um quadrado cinza com `...` no lugar da foto.
  - Projetos apontam para `example.com` e `github.com` genéricos.
  - **Ação:** substituir por textos reais, foto/ilustração e links verdadeiros.

- [ ] **Menu mobile não existe**
  - `MobileMenu.tsx` está vazio.
  - Não há hambúrguer nem navegação compacta.
  - **Ação:** implementar menu mobile ou esconder a navegação desktop com um menu funcional.

- [ ] **Âncoras ficam escondidas pelo header sticky**
  - Falta `scroll-mt` nas seções com `id`.
  - **Ação:** adicionar `scroll-mt-24`/`scroll-mt-28` nas seções.

---

## P1 — Importante

- [ ] **Falta container e alinhamento entre header e conteúdo**
  - Header usa `px-24`; seções usam `px-30`. Em telas grandes tudo fica muito afastado das bordas e sem largura máxima.
  - **Ação:** criar um container padrão, por exemplo `mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12`, e reutilizar.

- [ ] **Ritmo vertical inconsistente**
  - About usa `py-18`; Skills/Projects/Contact usam `py-24`; Footer usa `pt-24 pb-16`.
  - **Ação:** padronizar espaçamento por seção e usar variações somente quando houver intenção.

- [ ] **About destoa visualmente**
  - Fundo `base-300` cria uma faixa cinza pesada entre seções claras.
  - O placeholder usa `bg-slate-300`, fora da paleta customizada.
  - **Ação:** usar `base-50`/`accent-50` ou gradiente sutil; substituir o placeholder por foto real com moldura/efeito.

- [ ] **Cards de projeto ainda parecem incompletos**
  - Existe um espaço reservado para badges, mas está vazio.
  - Todos os projetos têm o mesmo peso visual; não há destaque.
  - Não há hover de card, zoom de imagem ou indicação de clique.
  - **Ação:** adicionar tags de tecnologia, destacar um projeto principal e criar hover com elevação/zoom.

- [ ] **Tipografia não escala**
  - `heading-1` é fixo em `text-8xl` (96px). Em mobile, “Gabriel Couto” provavelmente estoura.
  - **Ação:** usar `clamp()` para títulos fluidos, mantendo a escala definida.

- [ ] **Footer precisa de acabamento**
  - Ícones de GitHub, LinkedIn e Instagram usam `ArrowUp` em vez dos SVGs de marca que já existem em `src/assets/images`.
  - URLs apontam para as homepages genéricas.
  - Grid de 4 colunas e barra inferior não têm comportamento mobile.
  - **Ação:** usar ícones corretos, links reais e layout responsivo.

- [ ] **Formulário sem feedback**
  - Campos agora têm `name`/`required`, mas não há estado de envio, erro, sucesso ou loading.
  - Também não há endpoint configurado.
  - **Ação:** adicionar estado de envio e mensagens acessíveis de sucesso/erro.

- [ ] **Skills têm inconsistência de ícones**
  - “GitHub” e “Figma” estão com `icon: null`, criando cards sem ícone.
  - **Ação:** usar ícones adequados ou um fallback visual consistente.

---

## P2 — Polimento e dinamismo

- [ ] **Microinterações**
  - Adicionar `hover:-translate-y-1`, sombras suaves e zoom leve em imagens de projetos.
  - Botões podem ganhar `active:scale-[0.98]`, sombra e transição de 150–250ms.
  - Links do header podem ter sublinhado animado em vez de borda.

- [ ] **Navegação ativa**
  - Destacar o link da seção visível usando `IntersectionObserver` e `aria-current="page"`.
  - Isso deixa a navegação mais dinâmica e orienta o usuário.

- [ ] **Animações de entrada**
  - Reveal suave por seção, stagger nos cards e crossfade ao trocar abas de Skills.
  - Usar CSS/IntersectionObserver, sem adicionar biblioteca pesada.
  - Respeitar `prefers-reduced-motion`.

- [ ] **Hero mais marcante**
  - Badge de disponibilidade (“Disponível para projetos”).
  - Foto/terminal/card flutuante à direita para equilibrar a composição.
  - Gradiente/glow sutil no accent e indicador de scroll.
  - Nome com gradiente ou destaque tipográfico mais editorial.

- [ ] **Projetos mais ricos**
  - Layout “bento” ou primeiro projeto em destaque ocupando 2 colunas.
  - Tags de stack, links clicáveis na imagem/título e overlay no hover.
  - Filtros por categoria, se fizer sentido.

- [ ] **Sobre mais humano**
  - Foto real com moldura accent, textura ou cartão de código.
  - Números com animação de contagem.
  - Corrigir “Experiência” e “Concluídos”.

- [ ] **Contato mais completo**
  - CTA final antes do footer.
  - Links sociais próximos ao formulário.
  - Campos com ícones, estados visuais e texto de apoio.
  - Placeholder com contraste melhor.

- [ ] **Profundidade visual**
  - Gradientes muito sutis entre seções.
  - Glows/radial gradients atrás de elementos-chave.
  - Sombras e bordas com alpha, evitando muitos blocos cinza chapados.
  - Manter o accent como cor de ação, não como cor dominante.

- [ ] **Dark mode**
  - O botão de tema sugere que existe. Ou implemente tokens escuros, ou remova o botão até estar pronto.

- [ ] **Performance percebida**
  - Fontes somam ~584 KB; vale usar `preload` e considerar subset.
  - Imagens externas de projetos podem ganhar `decoding="async"` e dimensões explícitas.
  - Adicionar `prefers-reduced-motion` também melhora a experiência.

---

## Direção visual recomendada

Seguir um estilo **minimalista técnico com toque editorial**: muito espaço em branco, tipografia grande e fluida, accent roxo usado em poucos pontos, cards com bordas suaves, microinterações discretas e uma seção final de CTA forte. Evitar excesso de gradientes, sombras e animações ao mesmo tempo.

## Ordem sugerida de execução

1. Responsividade + container + hero background + `scroll-mt`.
2. CTAs reais, menu mobile, conteúdo placeholder e ícones sociais.
3. Cards de projeto com tags/hover e formulário com feedback.
4. Animações, navegação ativa, dark mode e refinamentos visuais.

opencode -s ses_e72f483b4ffeTf2oHH7IlOuyu5