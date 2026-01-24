import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { DebugOverlay } from "@/components/debug-overlay";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <DebugOverlay />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      <footer className="bg-background border-t py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Luis Figueroa. Built with Next.js, shadcn/ui, and Tailwind CSS.
          </p>
          <p>Hardware & IoT Engineer | Custom PCBs | Embedded Systems</p>
        </div>
      </footer>
    </main>
  );
}
