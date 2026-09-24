export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  /** Foto real do projeto; sem ela, os cards mostram um painel gráfico. */
  coverImage?: string;
  gallery?: string[];
  categories: string[];
  partners?: string[];
  year?: number;
  location?: string;
  objective?: string;
  methodology?: string;
  results?: string[];
  featured?: boolean;
  /** Ponto no mapa de impacto global (coordenadas aproximadas). */
  geo?: { label: string; lat: number; lng: number }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "smart-coco",
    title: "Smart Cocó",
    subtitle: "Monitoramento inteligente da bacia do Rio Cocó",
    description:
      "Rede de monitoramento ambiental da bacia do Rio Cocó que combina sensoriamento, ciência de dados e escuta comunitária para apoiar decisões sobre um dos maiores ecossistemas urbanos de mangue do Brasil.",
    coverImage: "/images/smart-coco-cover.jpg",
    gallery: ["/images/smart-coco-1.jpg", "/images/smart-coco-2.jpg"],
    categories: ["Tecnologia", "Governança", "Monitoramento"],
    partners: [
      "Fundação Grupo Boticário",
      "UFC / LABOMAR",
      "UNIFOR / Lab Azul",
      "VORTEX",
    ],
    year: 2025,
    location: "Fortaleza, Ceará — Brasil",
    objective:
      "Estruturar um sistema contínuo de monitoramento da qualidade ambiental da bacia do Rio Cocó, gerando dados abertos e indicadores capazes de orientar políticas públicas, licenciamento e ações de restauração no estuário.",
    methodology:
      "Campanhas de campo embarcadas com coleta de parâmetros físico-químicos, instalação de estações de sensoriamento, integração dos dados em painéis analíticos e oficinas participativas com moradores, gestores públicos e pescadores da bacia.",
    results: [
      "Malha de pontos de coleta definida ao longo do estuário e dos principais afluentes",
      "Protocolo compartilhado de monitoramento entre UNIFOR, UFC/LABOMAR e VORTEX",
      "Painel de indicadores ambientais para apoio à decisão pública",
      "Formação de estudantes de graduação e pós-graduação em ciência de dados ambientais",
    ],
    featured: true,
    geo: [{ label: "Fortaleza — Brasil", lat: -3.73, lng: -38.52 }],
  },
  {
    id: 2,
    slug: "mar-de-experiencias",
    title: "Mar de Experiências",
    subtitle: "Turismo regenerativo de base comunitária em Balbino",
    description:
      "Construção coletiva de roteiros de turismo regenerativo na comunidade de Balbino, unindo artesanato, gastronomia azul e narrativas locais como ativos de desenvolvimento territorial.",
    coverImage: "/images/balbino-cover.jpg",
    gallery: ["/images/balbino-1.jpg", "/images/balbino-2.jpg"],
    categories: ["Turismo Azul", "Comunidades", "Economia Azul"],
    partners: [
      "AMPB — Associação de Moradores da Praia de Balbino",
      "UNIFOR / Lab Azul",
    ],
    year: 2025,
    location: "Balbino, Cascavel — Ceará",
    objective:
      "Fortalecer a economia local por meio de experiências turísticas desenhadas pela própria comunidade, com repartição justa de benefícios e valorização do patrimônio cultural costeiro.",
    methodology:
      "Mapeamento participativo de ativos comunitários, laboratórios criativos com artesãs e pescadores, prototipagem de experiências e mentoria em gestão, precificação e comunicação.",
    results: [
      "Portfólio de experiências turísticas criado com a associação de moradores",
      "Coletivo de artesãs envolvido na produção de peças com identidade oceânica",
      "Material de comunicação e identidade visual para o destino comunitário",
    ],
    geo: [{ label: "Balbino — Ceará", lat: -4.17, lng: -38.25 }],
  },
  {
    id: 3,
    slug: "biotec-azul",
    title: "BioTec Azul",
    subtitle: "Jornada de Inovação em Economia Azul",
    description:
      "Jornada de inovação que leva cultura de P&D a micro e pequenas indústrias cearenses da economia do mar, com foco em bioinsumos, bioprocessos, biomateriais e valorização de recursos aquáticos.",
    coverImage: "/images/biotec-cover.jpg",
    categories: ["Biotec", "Economia Azul", "Tecnologia"],
    partners: ["FIEC", "SEBRAE", "UNIFOR", "TEC Unifor"],
    year: 2025,
    location: "Ceará — Brasil",
    objective:
      "Implementar cultura de inovação em micro e pequenas indústrias cearenses da economia do mar, criando pontes entre demanda produtiva e competência científica da universidade.",
    methodology:
      "Diagnóstico de maturidade em inovação, trilhas formativas, conexão com laboratórios da UNIFOR e desenvolvimento de provas de conceito em bioprocessos e valorização de subprodutos aquáticos.",
    results: [
      "Indústrias da economia do mar engajadas na jornada de inovação",
      "Soluções sustentáveis prototipadas em bioinsumos e biomateriais",
      "Governança compartilhada entre Lab Azul, TEC Unifor e setor produtivo",
    ],
    geo: [{ label: "Ceará — Brasil", lat: -4.5, lng: -39.3 }],
  },
  {
    id: 4,
    slug: "resiliamar",
    title: "ResiliaMar",
    subtitle: "Resiliência costeira entre Brasil e Cabo Verde",
    description:
      "Pesquisa transatlântica sobre resiliência de comunidades pesqueiras tradicionais, turismo comunitário e uso de tecnologias imersivas como ferramenta de memória e cultura oceânica.",
    coverImage: "/images/resiliamar-cover.jpg",
    gallery: ["/images/resiliamar-1.jpg", "/images/resiliamar-2.jpg"],
    categories: ["Governança", "Comunidades", "Turismo Azul"],
    partners: ["UNIFOR / Lab Azul", "Instituições de pesquisa de Cabo Verde"],
    year: 2026,
    location: "Brasil · Cabo Verde",
    objective:
      "Compreender e fortalecer as estratégias de resiliência de comunidades pesqueiras tradicionais frente às mudanças climáticas e às pressões sobre o território costeiro.",
    methodology:
      "Pesquisa comparada com trabalho de campo nos dois países, registro audiovisual e imersivo do patrimônio pesqueiro e devolutiva participativa dos resultados às comunidades.",
    results: [
      "Rede de pesquisa entre Brasil e Cabo Verde em funcionamento",
      "Acervo imersivo de memória pesqueira em construção",
      "Indicadores qualitativos de resiliência costeira",
    ],
    geo: [
      { label: "Ceará — Brasil", lat: -3.9, lng: -38.6 },
      { label: "Cabo Verde", lat: 15.12, lng: -23.6 },
    ],
  },
  {
    id: 5,
    slug: "feminino-azul",
    title: "Feminino Azul",
    subtitle: "Mulheres, empreendedorismo azul e território",
    description:
      "Estudo e articulação transcontinental sobre mulheres, empreendedorismo azul e desenvolvimento territorial, conectando experiências do Brasil, da África e da Europa.",
    categories: ["Economia Azul", "Comunidades", "Governança"],
    partners: [
      "UNIFOR / Lab Azul",
      "Redes de pesquisa Brasil · África · Europa",
    ],
    year: 2026,
    location: "Brasil · África · Europa",
    objective:
      "Dar visibilidade e suporte técnico ao protagonismo das mulheres na economia azul, identificando barreiras, arranjos produtivos e políticas capazes de ampliar sua participação.",
    methodology:
      "Perspectiva comparada transcontinental, entrevistas em profundidade com empreendedoras costeiras, análise de cadeias produtivas e construção coletiva de recomendações.",
    results: [
      "Mapa preliminar de arranjos produtivos liderados por mulheres",
      "Rede transcontinental de pesquisadoras e empreendedoras",
      "Recomendações para políticas de fomento ao empreendedorismo feminino azul",
    ],
    geo: [
      { label: "Ceará — Brasil", lat: -3.73, lng: -38.52 },
      { label: "África Ocidental", lat: 14.7, lng: -17.4 },
      { label: "Europa", lat: 38.72, lng: -9.14 },
    ],
  },
  {
    id: 6,
    slug: "cultura-oceanica",
    title: "Cultura Oceânica na Escola",
    subtitle: "Educação ambiental e literacia do oceano",
    description:
      "Programa de literacia oceânica que traduz a pesquisa do laboratório em materiais e experiências para escolas e espaços de educação não formal do litoral cearense.",
    categories: ["Governança", "Comunidades"],
    partners: ["UNIFOR / Lab Azul", "Rede pública de ensino"],
    year: 2025,
    location: "Região Metropolitana de Fortaleza",
    objective:
      "Ampliar a cultura oceânica de estudantes e educadores, aproximando ciência, território e cotidiano das comunidades costeiras.",
    methodology:
      "Oficinas em escolas, produção de material didático com linguagem visual própria e formação continuada de professores.",
    results: [
      "Sequências didáticas sobre economia azul e mangues",
      "Formação de educadores em cultura oceânica",
    ],
    geo: [{ label: "Fortaleza — Brasil", lat: -3.73, lng: -38.52 }],
  },
  {
    id: 7,
    slug: "praias-inteligentes",
    title: "Praias Inteligentes",
    subtitle: "1ª edição na Universidade de Fortaleza",
    description:
      "Encontro que reuniu pesquisadores, setor produtivo e poder público na Unifor para discutir o futuro das praias cearenses, com apoio da Câmara Setorial de Economia Azul do Ceará.",
    coverImage: "/images/praias-inteligentes-cover.jpg",
    gallery: [
      "/images/praias-inteligentes-1.jpg",
      "/images/auditorio-unifor.jpg",
    ],
    categories: ["Governança", "Economia Azul"],
    partners: [
      "UNIFOR / Lab Azul",
      "Câmara Setorial de Economia Azul do Ceará",
    ],
    year: 2026,
    location: "Fortaleza, Ceará — Brasil",
    results: ["1ª edição realizada em 31 de março de 2026, na Unifor"],
    geo: [{ label: "Fortaleza — Brasil", lat: -3.73, lng: -38.52 }],
  },
];

export const projectCategories = [
  "Todos",
  "Biotec",
  "Turismo Azul",
  "Governança",
  "Tecnologia",
  "Economia Azul",
  "Comunidades",
] as const;

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export const secondaryProjects = projects.filter(
  (project) => !project.featured,
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);

  return projects
    .filter((project) => project.slug !== slug)
    .map((project) => ({
      project,
      score: project.categories.filter((category) =>
        current.categories.includes(category),
      ).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.project);
}
