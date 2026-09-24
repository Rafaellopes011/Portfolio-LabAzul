import { Hero } from "@/components/Hero";
import { ConceptSection } from "@/sections/ConceptSection";
import { AboutSection } from "@/sections/AboutSection";
import { StatsSection } from "@/sections/StatsSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { LeadershipSection } from "@/sections/LeadershipSection";
import { TeamSection } from "@/sections/TeamSection";
import { PublicationsSection } from "@/sections/PublicationsSection";
import { ImpactSection } from "@/sections/ImpactSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ConceptSection />
      <AboutSection />
      <StatsSection />
      <ExpertiseSection />
      <ProjectsSection />
      <LeadershipSection />
      <TeamSection />
      <PublicationsSection />
      <ImpactSection />
      <PartnersSection />
      <FinalCTA />
    </>
  );
}
