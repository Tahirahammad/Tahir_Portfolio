import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const education = [
  {
    degree: "B.Tech in CSE (Cyber Security)",
    institution: "Sri Venkateswara College of Engineering",
    period: "2023 — 2027",
    detail: "CGPA: 8.29",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    period: "2021 — 2023",
    detail: "90.4%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ratnam High School",
    period: "2021",
    detail: "99.5%",
  },
];

const leadership = [
  {
    role: "Class Representative",
    description:
      "Acted as the bridge between students and faculty — coordinating academic and administrative activities, resolving concerns, and fostering a productive learning environment.",
  },
  {
    role: "Farewell Event Coordinator",
    description:
      "Led end-to-end planning of the senior farewell event — managing team collaboration, logistics, and communication to deliver a memorable and well-executed experience.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-secondary/30 relative" id="experience">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-5xl text-foreground">
              Education
            </h2>
          </div>

          <div className="space-y-12 relative">
            <div className="hidden md:block absolute left-[-28px] top-2 bottom-0 w-[1px] bg-border/40" />
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="hidden md:block absolute left-[-35px] top-2 w-3 h-3 rounded-full bg-primary/50" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-serif text-foreground">{item.degree}</h3>
                  <div className="text-primary font-mono text-sm tracking-widest mt-1 md:mt-0">{item.period}</div>
                </div>
                <div className="flex items-baseline gap-4">
                  <h4 className="text-lg text-muted-foreground font-light">{item.institution}</h4>
                  <span className="text-sm font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded">{item.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-5xl text-foreground">
              Leadership
            </h2>
          </div>

          <div className="space-y-10">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-l-2 border-primary/25 pl-6 hover:border-primary/60 transition-colors duration-300"
              >
                <h3 className="text-xl font-serif text-foreground mb-2">{item.role}</h3>
                <p className="text-foreground/70 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
