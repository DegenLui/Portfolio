"use client";

import { useEffect, useState } from "react";

export function DebugOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    // Check for ?debug=1 in URL ONLY
    const params = new URLSearchParams(window.location.search);
    const debugMode = params.get("debug") === "1";
    setIsVisible(debugMode);

    if (!debugMode) return;

    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewport({ width, height });

      // Tailwind breakpoints
      if (width < 640) setBreakpoint("xs (<640px)");
      else if (width < 768) setBreakpoint("sm (640-767px)");
      else if (width < 1024) setBreakpoint("md (768-1023px)");
      else if (width < 1280) setBreakpoint("lg (1024-1279px)");
      else if (width < 1536) setBreakpoint("xl (1280-1535px)");
      else setBreakpoint("2xl (≥1536px)");
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Debug Info Panel */}
      <div className="fixed top-20 right-4 z-[9999] bg-black/90 text-white p-4 rounded-lg shadow-2xl border border-yellow-500 font-mono text-xs max-w-xs">
        <div className="text-yellow-400 font-bold mb-2 text-sm">🔍 DEBUG MODE</div>
        <div className="space-y-1">
          <div>
            <span className="text-gray-400">Viewport:</span>{" "}
            <span className="text-green-400 font-bold">
              {viewport.width} × {viewport.height}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Breakpoint:</span>{" "}
            <span className="text-blue-400 font-bold">{breakpoint}</span>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-700 text-gray-400">
            Add <span className="text-yellow-400">?debug=1</span> to URL to enable
          </div>
        </div>
      </div>

      {/* Layout Outlines */}
      <style jsx global>{`
        [data-debug-container] {
          outline: 2px dashed rgba(255, 0, 0, 0.5) !important;
          outline-offset: -2px;
        }
        [data-debug-glow] {
          outline: 3px solid rgba(255, 255, 0, 0.8) !important;
          outline-offset: -3px;
        }
        [data-debug-card] {
          outline: 2px dotted rgba(0, 255, 0, 0.5) !important;
          outline-offset: -2px;
        }
      `}</style>
    </>
  );
}
