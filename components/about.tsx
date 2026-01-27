"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
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
            I&apos;m a hardware and IoT engineer focused on shipping production-ready devices. I design custom
            PCBs, integrate sensors, and deliver reliable monitoring hardware for real-world deployments.
          </p>
          
          <p>
            I work with ESP32 microcontrollers (S3, C3), Ethernet/PoE systems, and sensors including CO₂,
            temperature/humidity, mmWave presence, and air quality. My projects span PoE air sensors, mesh
            presence networks, and network monitoring appliances built for continuous operation.
          </p>
          
          <p>
            I prototype enclosures with 3D printing, design PCBs in KiCad, and own the full stack: schematics,
            power design, firmware, and network integration. I prioritize reliability, test plans, and
            maintainability so devices can be deployed and supported at scale.
          </p>
          
          <p>
            Currently, I&apos;m building <span className="text-primary font-semibold">AstraRMM</span>, a hardware
            monitoring platform for MSPs with production-ready devices and pilot deployments.
          </p>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-l-4 border-primary relative overflow-hidden">
            <p className="text-xl font-semibold text-foreground">
              What drives me: Shipping reliable hardware that teams can deploy with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
