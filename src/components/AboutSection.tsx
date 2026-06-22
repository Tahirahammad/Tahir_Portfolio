import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-card/30 relative" id="about">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl text-foreground mb-8">
            About <span className="text-muted-foreground italic">Me</span>
          </h2>
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
            <p>
              I am a Computer Science Engineering student specialising in Cyber Security at
              Sri Venkateswara College of Engineering, currently in my second year with a
              CGPA of 8.29.
            </p>
            <p>
              My foundation is built on Java, MySQL, and core programming concepts — and I
              am actively growing those skills through hands-on projects and a drive to
              understand how software works at every layer.
            </p>
            <p>
              Beyond the code, I enjoy leading people. As Class Representative, I have
              learned that clear communication and accountability are just as important as
              technical skill when building something meaningful.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto"
        >
          <div className="absolute inset-0 border border-primary/20 -translate-x-4 -translate-y-4" />
          <div className="absolute inset-0 bg-secondary" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
            <div className="text-center">
              <div className="text-primary font-mono text-sm tracking-widest uppercase mb-2">CGPA</div>
              <div className="text-5xl font-serif text-foreground">8.29</div>
              <div className="text-muted-foreground font-light text-sm mt-1">Sri Venkateswara College of Engineering</div>
            </div>
            <div className="w-12 h-[1px] bg-primary/30" />
            <div className="text-center">
              <div className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Intermediate</div>
              <div className="text-4xl font-serif text-foreground">90.4%</div>
              <div className="text-muted-foreground font-light text-sm mt-1">Narayana Junior College</div>
            </div>
            <div className="w-12 h-[1px] bg-primary/30" />
            <div className="text-center">
              <div className="text-primary font-mono text-sm tracking-widest uppercase mb-2">SSC</div>
              <div className="text-4xl font-serif text-foreground">99.5%</div>
              <div className="text-muted-foreground font-light text-sm mt-1">Ratnam High School</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
