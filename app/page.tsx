import { Navigation } from "@/components/navigation";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ExperienceSection } from "@/components/experience-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { NavMobile } from "@/components/nav-mobile";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavMobile />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ExperienceSection />
      <HowWeWorkSection />
      <FAQSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
