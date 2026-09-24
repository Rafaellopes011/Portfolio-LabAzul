import { ActionLink } from "@/components/ActionLink";
import { Bathymetry } from "@/components/Decor";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80vh] items-center overflow-hidden bg-abyss py-32 text-paper">
      <Bathymetry
        className="absolute inset-x-0 bottom-0 h-2/3 w-full text-foam"
        lines={9}
        opacity={0.16}
      />
      <div className="shell relative">
        <p className="eyebrow text-cyan">Erro 404</p>
        <h1 className="mt-6 text-[clamp(2.4rem,6vw,4.6rem)]">
          Esta página submergiu
          <span className="text-cyan">.</span>
        </h1>
        <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-paper/65">
          O endereço acessado não existe ou foi movido. Volte à superfície e
          explore os projetos do laboratório.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ActionLink href="/">Voltar ao início</ActionLink>
          <ActionLink href="/projetos" variant="outline">
            Ver projetos
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
