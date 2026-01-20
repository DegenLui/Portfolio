"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { Cpu, Hammer, Wrench, Code } from "lucide-react";

const iconMap: { [key: string]: any } = {
  "Hardware Design": Cpu,
  "Embedded Systems": Hammer,
  "Prototyping & Manufacturing": Wrench,
  "Software & Tools": Code,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical Skills
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = iconMap[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                      <CardTitle className="text-xl">{category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
