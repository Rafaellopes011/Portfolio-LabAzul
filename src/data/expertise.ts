export interface ExpertiseArea {
  index: string;
  title: string;
  lead: string;
  topics: string[];
  image: string;
  /** Profundidade simbólica da área — usada nas etiquetas de "sonda". */
  depth: string;
  /** Categoria correspondente na página de projetos. */
  filter: string;
}

export const expertise: ExpertiseArea[] = [
  {
    index: "01",
    title: "Turismo Azul",
    lead: "Experiências costeiras que regeneram território, cultura e economia local.",
    topics: [
      "Turismo costeiro de base comunitária",
      "Turismo regenerativo",
      "Turismo de experiência e esportes náuticos",
      "Turismo imersivo azul",
      "Gastronomia Azul",
    ],
    image: "/images/coastal-tourism.jpg",
    depth: "0–10 m",
    filter: "Turismo Azul",
  },
  {
    index: "02",
    title: "Biotec Azul",
    lead: "Biotecnologia aplicada aos recursos aquáticos e às cadeias da pesca.",
    topics: ["Pesca", "Aquicultura", "Bioprocessos", "Bioinsumos"],
    image: "/images/biotec-equipe.jpg",
    depth: "10–40 m",
    filter: "Biotec",
  },
  {
    index: "03",
    title: "Gestão e Economia da Inovação Azul",
    lead: "Novos arranjos econômicos e redes de inovação para a economia do mar.",
    topics: [
      "Empreendedorismo Feminino Azul",
      "Economia Criativa Azul",
      "Orquestração de redes de inovação",
    ],
    image: "/images/innovation.jpg",
    depth: "40–120 m",
    filter: "Economia Azul",
  },
  {
    index: "04",
    title: "Áreas complementares",
    lead: "Frentes transversais que sustentam a cultura oceânica e novos negócios.",
    topics: [
      "Educação ambiental",
      "Cultura oceânica",
      "Ciência de cidades",
      "Novos negócios azuis",
    ],
    image: "/images/education-cover.jpg",
    depth: "120 m +",
    filter: "Comunidades",
  },
];
