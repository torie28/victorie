"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Private Safaris",
    description: "Exclusivity",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800",
  },
  {
    title: "Kilimanjaro Treks",
    description: "Challenge",
    image: "/images/mountains/Mount-Kilimanjaro.webp",
  },
  {
    title: "Zanzibar Retreats",
    description: "Relaxation",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800",
  },
  {
    title: "Photography Tours",
    description: "Perspective",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800",
  },
  {
    title: "Mountain Adventures",
    description: "Heritage",
    image: "/images/mountains/mountkilimanjaro2.jpg",
  },
  {
    title: "Wilderness Retreats",
    description: "Sanctuary",
    image: "/images/adventure/Sanctuary-Retreats-Swala-Campa-Tanzania.jpg",
  },
];

export function ExpeditionPillars() {
  return (
    <section id="expeditions" className="bg-background">
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          The Pillars of African Exploration.
          <br />
          Curated for the Extraordinary.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Our Specializations
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
