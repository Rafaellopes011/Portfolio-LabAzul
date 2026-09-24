export interface Publication {
  id: number;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: "Artigos" | "Congressos" | "Relatórios" | "Livros";
  url?: string;
}

/** Dados provisórios — substituir pela produção oficial (repositório CNPq). */
export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Governança azul e arranjos institucionais para o desenvolvimento costeiro no Nordeste brasileiro",
    authors: "Lopes, J.; Lab Azul Unifor",
    year: 2025,
    venue: "Revista de Gestão Costeira Integrada",
    type: "Artigos",
    url: "#",
  },
  {
    id: 2,
    title:
      "Turismo regenerativo de base comunitária: aprendizados da experiência de Balbino (CE)",
    authors: "Lab Azul Unifor; AMPB",
    year: 2025,
    venue: "Seminário Internacional de Turismo e Sustentabilidade",
    type: "Congressos",
    url: "#",
  },
  {
    id: 3,
    title:
      "Valorização de subprodutos da pesca: rotas biotecnológicas para bioinsumos e biomateriais",
    authors: "Lab Azul Unifor; TEC Unifor",
    year: 2025,
    venue: "Journal of Blue Biotechnology",
    type: "Artigos",
    url: "#",
  },
  {
    id: 4,
    title:
      "Smart Cocó: relatório técnico de monitoramento da bacia hidrográfica do Rio Cocó",
    authors: "UNIFOR / Lab Azul; UFC / LABOMAR; VORTEX",
    year: 2025,
    venue: "Fundação Grupo Boticário",
    type: "Relatórios",
    url: "#",
  },
  {
    id: 5,
    title:
      "Mulheres na economia azul: empreendedorismo e território em perspectiva transcontinental",
    authors: "Lopes, J.; rede Feminino Azul",
    year: 2026,
    venue: "Congresso Ibero-Americano de Economia do Mar",
    type: "Congressos",
    url: "#",
  },
  {
    id: 6,
    title:
      "Cultura oceânica: caminhos para a literacia do mar na educação básica",
    authors: "Lab Azul Unifor",
    year: 2025,
    venue: "Editora Universidade de Fortaleza",
    type: "Livros",
    url: "#",
  },
  {
    id: 7,
    title:
      "Tecnologias imersivas como instrumento de memória em comunidades pesqueiras tradicionais",
    authors: "Lab Azul Unifor; rede ResiliaMar",
    year: 2026,
    venue: "International Conference on Ocean Literacy",
    type: "Congressos",
    url: "#",
  },
  {
    id: 8,
    title:
      "Indicadores de resiliência climática para territórios costeiros urbanos",
    authors: "Lab Azul Unifor",
    year: 2025,
    venue: "Ocean & Coastal Management",
    type: "Artigos",
    url: "#",
  },
];

export const publicationFilters = [
  "Todos",
  "Artigos",
  "Congressos",
  "Relatórios",
  "Livros",
] as const;
