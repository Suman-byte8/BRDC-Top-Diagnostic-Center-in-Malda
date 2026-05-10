import AboutCTA from "@/components/about-us/AboutCTA";
import AboutHero from "@/components/about-us/AboutHero";
import AboutHistoryPurpose from "@/components/about-us/AboutHistoryPurpose";
import AboutWelcome from "@/components/about-us/AboutWelcome";
import Milestones from "@/components/about-us/Milestones";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutWelcome />
      <AboutHistoryPurpose />
      <Milestones />
      <AboutCTA />
    </main>
  );
}
