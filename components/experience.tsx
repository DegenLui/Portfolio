"use client";

import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Experience & Builds
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground italic mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg border-l-2 border-primary">
                    <p className="text-sm font-semibold text-foreground">
                      <strong>Key Achievement:</strong> {exp.keyAchievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
