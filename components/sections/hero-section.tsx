"use client";

import Image from "next/image";

const word = "Victoria";

export function HeroSection() {
  return (
    <section className="relative bg-background">
      <div className="relative h-[70vh] md:h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-full w-full items-stretch justify-center">
            {/* Main Hero Image - Center */}
            <div className="relative w-full h-full">
              <Image
                src="/images/animals/safari-serengeti-national-park.jpg"
                alt="Mountain landscape with camping tent at sunset"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-end overflow-hidden">
                <h1 className="w-full text-[22vw] font-medium leading-[0.8] tracking-tighter text-white">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
