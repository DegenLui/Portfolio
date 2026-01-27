"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Ready to Contribute
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I&apos;m seeking hardware and IoT roles where I can deliver production-ready devices and support
            deployments. Whether it&apos;s embedded development, hardware testing, or field support, I bring
            structured documentation, reliability-focused build practices, and fast troubleshooting.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12 md:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="h-full w-full flex flex-col">
              <CardHeader>
                <CardTitle>What I&apos;m Looking For</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {[
                    "Hardware Engineer / IoT Engineer roles",
                    "Embedded Systems / Firmware Support",
                    "Hardware Test & Validation",
                    "Field Deployment & Support",
                    "IT Infrastructure / Network Operations",
                    "Systems / Network Technician",
                    "R&D and Prototyping",
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
            className="flex"
          >
            <Card className="h-full w-full flex flex-col">
              <CardHeader>
                <CardTitle>What I Bring</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {[
                    "Hands-on hardware builds with production-focused iteration",
                    "Strong troubleshooting mindset—comfortable debugging hardware and firmware",
                    "Documentation-driven development and clear handoffs",
                    "Pilot testing and real-world validation experience",
                    "Reliable, detail-oriented, and focused on outcomes",
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
                  href="mailto:Luifig19@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">Luifig19@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/luis-figueroa19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">luis-figueroa19</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/LuiFig19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">LuiFig19</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 p-4 rounded-lg border">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Florida / Remote</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild>
                  <a href="mailto:Luifig19@gmail.com">Send Me an Email</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/Luis_Figueroa_Resume.pdf" download="Luis_Figueroa_Hardware_IoT_Resume.pdf" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
