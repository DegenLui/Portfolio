"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Button } from "@/components/ui/button";

const presetWidths = [
  { name: "Mobile (320px)", width: 320 },
  { name: "iPhone (375px)", width: 375 },
  { name: "Tablet (768px)", width: 768 },
  { name: "Laptop (1024px)", width: 1024 },
  { name: "Desktop (1440px)", width: 1440 },
  { name: "1080p (1920px)", width: 1920 },
  { name: "2K (2560px)", width: 2560 },
  { name: "4K (3840px)", width: 3840 },
  { name: "Full Width", width: null },
];

export default function ViewportTest() {
  const [selectedWidth, setSelectedWidth] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const sections: { [key: string]: JSX.Element } = {
    hero: <Hero />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    experience: <Experience />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-4">Viewport Testing Tool</h1>
        
        {/* Width Presets */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="text-lg font-semibold mb-3">Select Viewport Width:</h2>
          <div className="flex flex-wrap gap-2">
            {presetWidths.map((preset) => (
              <Button
                key={preset.name}
                onClick={() => setSelectedWidth(preset.width)}
                variant={selectedWidth === preset.width ? "default" : "outline"}
                size="sm"
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Section Selector */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Select Section to Test:</h2>
          <div className="flex flex-wrap gap-2">
            {Object.keys(sections).map((section) => (
              <Button
                key={section}
                onClick={() => setActiveSection(section)}
                variant={activeSection === section ? "default" : "outline"}
                size="sm"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Container */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4 text-sm text-gray-600">
          Current Width: <span className="font-bold">{selectedWidth ? `${selectedWidth}px` : "100%"}</span>
        </div>
        
        <div className="border-4 border-blue-500 mx-auto overflow-x-auto bg-white">
          <div
            style={{
              width: selectedWidth ? `${selectedWidth}px` : "100%",
              margin: "0 auto",
            }}
            className="bg-background"
          >
            {sections[activeSection]}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-7xl mx-auto mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h3 className="font-bold mb-2">🔍 How to Use:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Select different viewport widths to see how the section responds</li>
          <li>Check for horizontal scrollbars (indicates overflow issues)</li>
          <li>Look for glow/gradient artifacts at larger widths (2K/4K)</li>
          <li>Verify cards don't stretch too wide on ultra-wide displays</li>
          <li>Ensure text is readable and spacing is consistent</li>
        </ul>
      </div>
    </div>
  );
}
