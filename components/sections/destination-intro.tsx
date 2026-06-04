"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function DestinationIntro() {
  return (
    <section className="relative h-auto lg:h-[90vh] w-full bg-white overflow-hidden flex flex-col lg:flex-row">
      {/* Left Content Column */}
      <div className="flex-1 flex items-center justify-center lg:justify-end py-20 lg:py-0 px-6 md:px-12 lg:pr-12 bg-white z-10">
        <div className="max-w-md w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-black/40 mb-10">
            <span className="opacity-30">·</span>
            <span>Africa</span>
            <span className="opacity-30">·</span>
            <span className="text-black/80 font-medium">Tanzania</span>
          </nav>

          <span className="block text-[9px] uppercase tracking-[0.3em] text-black/40 mb-6">
            NATURE'S SPECTACLE
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-display text-black leading-[1.1] mb-10 tracking-tight">
            Tanzania – <br />
            stage of the <br />
            Great <br />
            Migration
          </h2>

          <div className="max-w-sm">
            <p className="text-[12px] leading-relaxed text-black/60 mb-10 font-light">
              From the snow-capped majesty of Mount Kilimanjaro to the endless,
              wildlife-carved plains of the Serengeti, Tanzania is an open
              invitation to discovery. Beyond the legendary path of the Great
              Migration lies the Ngorongoro Crater—the world’s largest intact
              caldera—and the untouched, hidden wilderness.
            </p>

            <button className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-black/80 hover:text-black transition-colors">
              <span className="relative flex items-center justify-center w-6 h-6 border border-black/10 rounded-full group-hover:border-black/30 transition-colors">
                <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              EXPLORE TANZANIA
            </button>
          </div>
        </div>
      </div>

      {/* Middle Vertical Element (Line + Text) - Narrower Gutter */}
      <div className="hidden lg:flex w-12 flex-col items-center justify-center relative bg-white">
        <div className="absolute top-0 bottom-0 w-[1px] bg-black/5" />
        <div className="bg-white py-6 z-10 transform -rotate-90">
          <span className="text-[8px] uppercase tracking-[0.6em] text-black/20 transform origin-center whitespace-nowrap">
            TANZANIA
          </span>
        </div>
      </div>

      {/* Right Image Column (Small-sized image style) - Closer to center */}
      <div className="flex-1 h-[60vh] lg:h-full bg-white flex items-center justify-center lg:justify-start px-6 lg:pl-12">
        <div className="relative w-full h-[80%] max-w-[500px] overflow-hidden rounded-sm shadow-xl">
          <Image
            src="/images/animals/wildebeests-migration-safari__1920x864-5.jpg"
            alt="Wildebeest Migration"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
