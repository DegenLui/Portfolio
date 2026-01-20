"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            I Build Hardware That Works
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Hardware & IoT Engineer | Custom PCBs | ESP32 Systems | Embedded Solutions
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            I design custom PCBs and build production-ready IoT devices. From schematic to deployment, 
            I create ESP32-based hardware that solves real problems—including air quality monitors, 
            network monitoring systems, and enterprise IoT infrastructure. Currently building{" "}
            <span className="text-primary font-semibold">AstraRMM</span>, a hardware-powered remote 
            monitoring platform for MSPs.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg">
              <Link href="#projects">View My Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
