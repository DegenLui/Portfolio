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
            I'm a hardware and IoT builder with hands-on experience designing custom PCBs, 
            integrating embedded systems, and deploying real-world monitoring devices.
          </p>
          
          <p>
            I work with ESP32 microcontrollers (S3, C6, P4), Ethernet controllers, PoE power systems, 
            and sensors including CO₂, temperature, humidity, and motion detection. My projects range 
            from industrial air quality monitors to distributed sensor networks—all designed with real 
            deployment in mind, not just prototypes.
          </p>
          
          <p>
            I prototype enclosures using 3D printing, design PCBs in KiCad, and understand the full 
            stack: schematics, power design, firmware, and network integration. I learn fast, build 
            iteratively, and focus on solutions that actually work in the field.
          </p>
          
          <p>
            Currently, I'm building <span className="text-primary font-semibold">AstraRMM</span>, a 
            startup creating hardware-powered Remote Monitoring & Management tools for Managed Service 
            Providers. I don't have a formal engineering degree—I have real builds, working hardware, 
            and the ability to ship.
          </p>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-l-4 border-primary">
            <p className="text-xl font-semibold text-foreground">
              What drives me: Turning complex technical problems into physical devices that people can 
              deploy and rely on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
