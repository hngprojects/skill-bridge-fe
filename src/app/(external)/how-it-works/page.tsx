import { HeroSection } from "@/components/how-it-works/how-it-works";
import { ProcessSection } from "@/components/how-it-works/process";
import { ReadyForHireSection } from "@/components/landing-page/ready-to-hire";

export const metadata = {
  title: "How It Works | SkillBridge",
  description:
    "SkillBridge helps professionals prove what they can actually do through structured assessments, verified profiles, and skill-based opportunities.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <ReadyForHireSection />
    </main>
  );
}
