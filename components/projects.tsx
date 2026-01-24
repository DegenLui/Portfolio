"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            What I&apos;ve Built
          </h2>
        </motion.div>
        
        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow w-full">
                <div className="md:flex">
                  <div className="md:w-1/3 relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 overflow-hidden">
                    <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Project Image</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-accent font-semibold">
                        {project.tagline}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {project.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-sm italic text-muted-foreground">
                        <strong>Status:</strong> {project.status}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
