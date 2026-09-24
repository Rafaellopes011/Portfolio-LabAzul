export interface TeamMember {
  id: number;
  name: string;
  role: string;
  group:
    | "Liderança"
    | "Pesquisadores"
    | "Professores"
    | "Bolsistas"
    | "Colaboradores";
  area: string;
  photo: string;
  linkedin?: string;
  lattes?: string;
}

/** Dados provisórios — substituir pelas informações oficiais da equipe. */
export const team: TeamMember[] = [
  {
    id: 1,
    name: "Profa. Janaina Lopes",
    role: "Liderança científica",
    group: "Liderança",
    area: "Economia azul e governança costeira",
    photo: "/images/janaina-lopes.jpg",
    linkedin: "https://www.linkedin.com/in/janaina-lopes-0838a937/",
    // lattes: aguardando a URL
  },
  {
    id: 2,
    name: "Pesquisador(a) — vaga",
    role: "Pesquisador(a) sênior",
    group: "Pesquisadores",
    area: "Biotecnologia azul e bioprocessos",
    photo: "",
    linkedin: "#",
    lattes: "#",
  },
  {
    id: 3,
    name: "Pesquisador(a) — vaga",
    role: "Pesquisador(a)",
    group: "Pesquisadores",
    area: "Monitoramento ambiental e ciência de dados",
    photo: "",
    linkedin: "#",
    lattes: "#",
  },
  {
    id: 4,
    name: "Professor(a) — vaga",
    role: "Professor(a) colaborador(a)",
    group: "Professores",
    area: "Turismo costeiro e desenvolvimento territorial",
    photo: "",
    linkedin: "#",
    lattes: "#",
  },
  {
    id: 5,
    name: "Professor(a) — vaga",
    role: "Professor(a) colaborador(a)",
    group: "Professores",
    area: "Gestão da inovação e novos negócios azuis",
    photo: "",
    linkedin: "#",
    lattes: "#",
  },
  {
    id: 6,
    name: "Bolsista — vaga",
    role: "Iniciação científica",
    group: "Bolsistas",
    area: "Cultura oceânica e educação ambiental",
    photo: "",
    lattes: "#",
  },
  {
    id: 7,
    name: "Bolsista — vaga",
    role: "Mestrado",
    group: "Bolsistas",
    area: "Tecnologias imersivas aplicadas ao oceano",
    photo: "",
    lattes: "#",
  },
  {
    id: 8,
    name: "Colaborador(a) — vaga",
    role: "Parceria institucional",
    group: "Colaboradores",
    area: "Articulação com setor produtivo",
    photo: "",
    linkedin: "#",
  },
];

export const teamGroups = [
  "Pesquisadores",
  "Professores",
  "Bolsistas",
  "Colaboradores",
] as const;
