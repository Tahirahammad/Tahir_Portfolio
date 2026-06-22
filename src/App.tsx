import React from "react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-13 text-center text-sm text-muted-foreground font-light border-t border-border/20 bg-secondary/20">
        <p>© {new Date().getFullYear()} Peddananne Tahir Ahammad. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">Designed with precision.</p>
      </footer>
    </div>
  );
}

export default App;
