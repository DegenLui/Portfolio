"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Luis Figueroa
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-sm hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="text-sm hover:text-primary transition-colors">
            Experience
          </Link>
          <Button asChild size="sm">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
