import React from "react";
import { motion } from "framer-motion";
import { Github, Cloud, MapPin, Wind, Droplets } from "lucide-react";

const project = {
  title: "Weather Now",
  description:
    "A real-time weather web app that fetches live data from the Open-Meteo API. Search any city or use your device's geolocation to instantly see current temperature, humidity, wind speed, feels-like temperature, and a 7-day forecast — all without any API key.",
  highlights: [
    { icon: Cloud, label: "Live weather from Open-Meteo API" },
    { icon: MapPin, label: "Geolocation support" },
    { icon: Wind, label: "Wind speed & feels-like temperature" },
    { icon: Droplets, label: "Humidity & 7-day forecast" },
  ],
  tech: ["HTML", "CSS", "JavaScript", "Open-Meteo API", "Geolocation API", "Fetch API"],
  links: { github: "https://github.com/tahirahamed463" },
};

export function ProjectsSection() {
  return (
    <section className="py-32 px-6 lg:px-12 relative" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Featured <span className="text-muted-foreground italic">Project</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border/50 hover:border-primary/30 transition-colors duration-300 group"
        >
          {/* Left — description */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-secondary/60 flex items-center justify-center text-primary">
                  <Cloud className="w-7 h-7" />
                </div>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-project-github"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-3xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-primary/70 bg-primary/5 border border-primary/15 px-3 py-1.5 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right — feature highlights */}
          <div className="border-t lg:border-t-0 lg:border-l border-border/50 bg-card/10 p-10 flex flex-col justify-center gap-6">
            {project.highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/75 font-light">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
