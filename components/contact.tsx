"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Let's Work Together
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I'm looking for opportunities where I can apply my hands-on hardware skills to real problems. 
            Whether it's prototyping new devices, building IoT systems, or supporting hardware teams—I 
            learn fast and deliver results.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>What I'm Looking For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Hardware Technician roles",
                    "IoT Technician positions",
                    "Junior Embedded Engineer roles (skills-based)",
                    "Prototyping and R&D positions",
                    "Field or Lab Technician work",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>What I Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Proven ability to design and build working hardware",
                    "Strong troubleshooting and debugging skills",
                    "Self-directed learning and rapid skill acquisition",
                    "Real-world deployment experience",
                    "Startup mindset: scrappy, resourceful, and focused on outcomes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">your.email@example.com</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my code</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 p-4 rounded-lg border">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Your Location / Remote</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" asChild>
                  <a href="mailto:your.email@example.com">Send Me an Email</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
