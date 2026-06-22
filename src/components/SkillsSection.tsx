import React from "react";
import { motion } from "framer-motion";
import { SiC, SiPython, SiMysql, SiGit, SiGithub, SiLinux, SiIntellijidea } from "react-icons/si";
import { Terminal, Code2 } from "lucide-react";

const skills = [
  { name: "Java", icon: Code2 },
  { name: "C", icon: SiC },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Linux", icon: SiLinux },
  { name: "IntelliJ IDEA", icon: SiIntellijidea },
];

const concepts = [
  "Object-Oriented Programming",
  "Database Management Systems",
  "Cyber Security Fundamentals",
  "CRUD Application Design",
  "Problem Solving",
  "Leadership & Teamwork",
];

export function SkillsSection() {
  return (
    <section className="py-32 px-6 lg:px-12 relative overflow-hidden" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Core <span className="text-muted-foreground italic">Capabilities</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center p-6 bg-card/10 border border-border/40 hover:border-primary/50 hover:bg-card/30 transition-all duration-300 group"
            >
              <skill.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-3" />
              <span className="text-xs tracking-wider font-light text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl text-muted-foreground font-light mb-6 flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary" />
            Concepts &amp; Principles
          </h3>
          <div className="flex flex-wrap gap-3">
            {concepts.map((concept, index) => (
              <motion.span
                key={concept}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="text-sm font-mono text-primary/80 bg-primary/5 border border-primary/15 px-4 py-2 rounded-sm"
              >
                {concept}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
