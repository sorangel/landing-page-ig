import React, { useState, useEffect } from "react";

/**
 * StickyDisclaimer Component
 * Displays a persistent legal notice at the bottom of the screen to ensure
 * compliance with non-attorney document preparation regulations.
 */
const StickyDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  // We keep it visible by default as requested ("siempre visible")
  // But we could add logic to hide it if strictly necessary.

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-gray-900/95 backdrop-blur-sm border-t border-red-600/50 p-3 shadow-2xl">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="material-icons text-red-500 mt-0.5">warning</span>
          <p className="text-xs md:text-sm text-gray-200 leading-tight">
            <span className="font-bold text-white uppercase tracking-wider block mb-1 md:inline md:mb-0 mr-2">
              Aviso Importante:
            </span>
            IG Consulting Services, LLC no es un bufete de abogados y no ofrece
            consejo legal ni representación judicial. Somos Consultores de
            Inmigración registrados y vinculados (California Surety Bond
            #423022T).
          </p>
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap">
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar aviso"
          >
            <span className="material-icons text-xl">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyDisclaimer;
