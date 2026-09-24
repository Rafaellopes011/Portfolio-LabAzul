# Lab Azul — site institucional

Site do **Lab Azul**, Laboratório de Pesquisa em Governança Azul e Cultura Oceânica
da Universidade de Fortaleza (UNIFOR).

Stack: **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start
```

---

## Direção de arte

O sistema visual é uma **coluna d'água**: a página desce do abissal para a luz e
volta, alternando blocos escuros e claros.

| Papel | Token | Hex |
| --- | --- | --- |
| Abissal (hero, números, impacto, rodapé) | `abyss` | `#0A2240` |
| Profundo (conceito, liderança) | `deep` | `#102F58` |
| Institucional | `institutional` | `#174F7A` |
| Oceano (links, destaques em fundo claro) | `ocean` | `#167FA3` |
| Ciano (acento, uma cor por tela) | `cyan` | `#25B7C9` |
| Espuma (acento sobre fundo escuro) | `foam` | `#BCE8ED` |
| Superfícies de leitura | `shell` / `paper` | `#F4F7F8` / `#FDFDFC` |

**Tipografia** (via `next/font`, quatro papéis bem definidos):

- `font-display` — **Manrope** 800: títulos, números, botões.
- `font-body` — **DM Sans**: texto corrido.
- `editorial` — **Instrument Serif** itálico: a palavra-chave de cada título
  (“oceano”, “impacto”, “fronteiras”). É o acento editorial da marca.
- `font-mono` / `eyebrow` — **IBM Plex Mono**: etiquetas de seção, coordenadas,
  índices e profundidades — a “instrumentação” do laboratório.

**Gestos gráficos recorrentes** (todos em `src/components/Decor.tsx`):

- `Bathymetry` — curvas batimétricas em fundos escuros;
- `WaveEdge` — crista de onda que costura cada bloco escuro ao claro seguinte;
- `DepthRule` — régua vertical de sonda;
- `SectionTag` — índice + nome da seção;
- régua de marcações no rodapé do hero e coordenadas de Fortaleza.

**Movimento**: reveals discretos (`Reveal`), máscara linha a linha nos títulos
(`HeadingReveal`), paralaxe mínima no hero, contagem dos números, traçado das
rotas no mapa e marquee lento dos parceiros. Tudo respeita
`prefers-reduced-motion`.

---

## Estrutura

```
src/
  app/
    layout.tsx                 fontes, metadata, header/footer, skip link
    page.tsx                   home (composição das seções)
    projetos/page.tsx          listagem com filtros (?categoria=…)
    projetos/[slug]/page.tsx   template de projeto (SSG)
    not-found.tsx
  components/                  Header, Hero, Logo, Decor, Reveal, ActionLink,
                               ExpertiseCard, ProjectCard, ProjectFeatured,
                               PublicationRow, TeamCard, PortraitPlaceholder,
                               PageHero, ProjectsExplorer, CountUp, Footer
  sections/                    Concept, About, Stats, Expertise, Projects,
                               Leadership, Team, Publications, Impact,
                               Partners, FinalCTA
  data/                        projects.ts · team.ts · publications.ts ·
                               partners.ts · expertise.ts · site.ts
scripts/                       coleta das imagens de trabalho
public/images/                 imagens (substituíveis) + CREDITS.json
```

Toda a informação editável vive em `src/data`. Trocar um texto, um projeto, uma
publicação ou um contato não exige tocar em componente.

### Adicionar um projeto

Inclua um objeto em `src/data/projects.ts` seguindo a interface `Project`
(`slug`, `coverImage`, `categories`, `partners`, `objective`, `methodology`,
`results`, `gallery`…). A página `/projetos/<slug>` é gerada automaticamente,
entra nos filtros e aparece em “projetos relacionados”.

---

## Imagens e créditos

As fotos em `public/images` são **placeholders de trabalho** obtidas no Wikimedia
Commons (temas: oceano, Ceará, mangue, pesca artesanal, laboratório). Cada
arquivo está creditado em `public/images/CREDITS.json` (autor, licença, origem).

Para publicar com o material oficial do Lab Azul: **sobrescreva os arquivos
mantendo os mesmos nomes** — nada mais precisa mudar. Se mantiver alguma imagem
do Commons, preserve a atribuição exigida pela licença.

Para rebaixar/reobter os placeholders: `python scripts/fetch_images.py`
(`--force` refaz todos).

### Retratos

Não há fotos de pessoas reais fazendo as vezes da equipe. Enquanto os retratos
oficiais não chegam, `PortraitPlaceholder` desenha um painel de profundidade com
o número de registro da posição. Basta preencher `photo` em `src/data/team.ts`
com o caminho da foto para que ela passe a ser usada.

### Logos dos parceiros

Exibidos como lockup tipográfico provisório (`src/data/partners.ts`). Ao receber
os logos oficiais, troque o campo `mark` por um `<Image>` em
`src/sections/PartnersSection.tsx`.

---

## Conteúdo provisório

- **Publicações** (`publications.ts`): mock — substituir pela produção real do
  repositório CNPq.
- **Equipe** (`team.ts`): posições em aberto.
- **Contato** (`site.ts`): e-mail, Instagram e LinkedIn a confirmar.

## Acessibilidade

HTML semântico, `aria-label`/`aria-labelledby` nas seções e controles, foco
visível em ciano, skip link, alternativas textuais nas imagens de conteúdo
(imagens decorativas com `alt=""`), respeito a `prefers-reduced-motion` e
contraste verificado nos pares texto/fundo do sistema.
