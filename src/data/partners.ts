export interface Partner {
  name: string;
  /** Sigla/lockup tipográfico usado enquanto não há o logo oficial. */
  mark: string;
  kind: string;
}

export const partners: Partner[] = [
  { name: "Universidade de Fortaleza", mark: "UNIFOR", kind: "Universidade" },
  {
    name: "Federação das Indústrias do Estado do Ceará",
    mark: "FIEC",
    kind: "Setor produtivo",
  },
  { name: "SEBRAE", mark: "SEBRAE", kind: "Fomento" },
  {
    name: "Fundação Grupo Boticário",
    mark: "Fundação Grupo Boticário",
    kind: "Financiador",
  },
  { name: "Universidade Federal do Ceará", mark: "UFC", kind: "Universidade" },
  {
    name: "Instituto de Ciências do Mar",
    mark: "LABOMAR",
    kind: "Pesquisa marinha",
  },
  { name: "Vortex", mark: "VORTEX", kind: "Tecnologia" },
  { name: "AMPB — Praia de Balbino", mark: "AMPB", kind: "Comunidade" },
];
