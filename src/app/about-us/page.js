import AboutCTA from "@/components/about-us/AboutCTA";
import AboutHero from "@/components/about-us/AboutHero";
import AboutHistoryPurpose from "@/components/about-us/AboutHistoryPurpose";
import AboutWelcome from "@/components/about-us/AboutWelcome";
import Milestones from "@/components/about-us/Milestones";

export const metadata = {
  title: "About BRDC Malda",
  description: "Learn about the history, purpose, and milestones of Bisweswari Roy Diagnostic & Polyclinic Centre (BRDC), Malda's most trusted healthcare organization since 2001.",
};

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
