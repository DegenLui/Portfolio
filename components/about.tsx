"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground"
        >
          <p>
            I&apos;m a self-taught hardware and IoT builder learning embedded systems through hands-on prototyping. 
            I design custom PCBs, build functional hardware, and test real-world monitoring concepts—teaching 
            myself electrical engineering principles as I go.
          </p>
          
          <p>
            I work with ESP32 microcontrollers (S3, C6, P4), Ethernet controllers, PoE power concepts, 
            and sensors including CO₂, temperature, humidity, and motion detection. My projects range 
            from air quality monitor prototypes to mesh sensor network experiments—each one pushing my 
            skills further and teaching me reliability, debugging, and system integration.
          </p>
          
          <p>
            I prototype enclosures using 3D printing, design PCBs in KiCad, and work through the full 
            stack: schematics, power design, firmware debugging, and network protocols. I learn quickly, 
            document my work, iterate on failures, and focus on building hardware that actually functions 
            reliably on the bench and in pilot testing.
          </p>
          
          <p>
            Currently, I&apos;m building <span className="text-primary font-semibold">AstraRMM</span>, an 
            early-stage hardware monitoring platform for MSPs. I don&apos;t have a formal engineering degree—I 
            have working prototypes, technical documentation, and the persistence to solve hard problems 
            through research and hands-on debugging.
          </p>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-l-4 border-primary">
            <p className="text-xl font-semibold text-foreground">
              What drives me: Proving I can build reliable hardware through practical results, not credentials. 
              I&apos;m ready to contribute to a team and learn from experienced engineers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
