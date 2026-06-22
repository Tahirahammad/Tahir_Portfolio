import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-secondary/20 relative" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl text-foreground font-serif mb-6">
            Get in <span className="text-muted-foreground italic">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            I am open to internship opportunities, collaborative projects, and conversations
            about technology. Feel free to reach out — I would love to connect.
          </p>

          <a
            href="mailto:tahirahamed463@gmail.com"
            data-testid="link-email-cta"
            className="inline-block border border-primary/50 text-primary px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            tahirahamed463@gmail.com
          </a>

          <div className="mt-20 flex justify-center gap-8">
            <a
              href="https://github.com/tahirahamed463"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tahirahamed463@gmail.com"
              data-testid="link-email"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+917981095656"
              data-testid="link-phone"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <p className="mt-10 text-muted-foreground/50 text-sm font-mono">+91 79810 95656</p>
        </motion.div>
      </div>
    </section>
  );
}
