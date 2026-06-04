"use client";

import { FadeImage } from "@/components/fade-image";
import { MoveRight } from "lucide-react";

const destinationCategories = [
  {
    id: "wildlife",
    title: "Wildlife",
    description:
      "The heartbeat of the African wilderness, home to the Big Five and the legendary Great Migration.",
    destinations: [
      {
        id: 1,
        name: "Serengeti National Park",
        description:
          "Witness the world's most spectacular wildlife migration across endless plains.",
        image:
          "/images/adventure/wildebeest-herd-running-serengeti-eliza-deacon-mr.jpg",
      },
      {
        id: 2,
        name: "Ngorongoro Crater",
        description:
          "A pristine garden of Eden teeming with wildlife inside a massive volcanic caldera.",
        image:
          "/images/adventure/ngorongoro-crater-floor-teaming-with-game.jpg",
      },
    ],
  },
  {
    id: "landscape",
    title: "Landscape",
    description:
      "Breathtaking vistas ranging from snow-capped peaks to the dramatic Great Rift Valley.",
    destinations: [
      {
        id: 3,
        name: "Mount Kilimanjaro",
        description:
          "The snow-capped 'Roof of Africa' and the world's highest free-standing mountain.",
        image: "/images/mountains/Mount-Kilimanjaro.webp",
      },
      {
        id: 4,
        name: "Great Rift Valley",
        description:
          "A geological marvel of escarpments, soda lakes, and unique ecosystems.",
        image: "/images/adventure/Tarangire sunset .jpg",
      },
    ],
  },
  {
    id: "circuit",
    title: "Circuit",
    description:
      "Carefully curated safari routes that weave through Tanzania's most iconic national parks.",
    destinations: [
      {
        id: 5,
        name: "Northern Circuit",
        description:
          "The legendary path through Serengeti, Ngorongoro, Tarangire, and Lake Manyara.",
        image:
          "/images/adventure/serengeti-national-park-tanzania-national-parks-nasikia-camps-game-drives-tours-tanzania-safaris-africa-lion.jpg",
      },
      {
        id: 6,
        name: "Southern Circuit",
        description:
          "A wilder, more remote journey through Ruaha and Nyerere National Parks.",
        image:
          "/images/adventure/Asilia_Camp-Lodges_Jabali-Private-House_Camp-Carousel11-800x800.jpg.webp",
      },
    ],
  },
  {
    id: "beach",
    title: "Beach",
    description:
      "Pristine white sands and turquoise waters where history meets tropical serenity.",
    destinations: [
      {
        id: 7,
        name: "Zanzibar Archipelago",
        description:
          "The exotic Spice Island with turquoise horizons and the historic Stone Town.",
        image: "/images/carousel/zanzibar_beach_with_palm_trees.jpg",
      },
      {
        id: 8,
        name: "Mafia & Pemba Islands",
        description:
          "Untouched marine paradises offering world-class diving and peaceful seclusion.",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
      },
    ],
  },
];

export function DestinationShowcase() {
  return (
    <section id="destinations" className="bg-background py-32">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mb-32">
          <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-semibold mb-6 block">
            EXPLORE TANZANIA
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display mb-10 leading-[1.05] tracking-tight">
            A Land of <br />
            Unrivaled Beauty
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
            Tanzania offers an immersive journey through diverse ecosystems.
            From the vast, wildlife-rich plains of the Serengeti to the
            snow-capped majesty of Kilimanjaro and the serene white sands of
            Zanzibar, each destination is a unique chapter in the story of the
            African continent.
          </p>
        </div>

        <div className="space-y-40">
          {destinationCategories.map((category) => (
            <div key={category.id} className="group">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-border pb-12">
                <div className="max-w-xl">
                  <h3 className="text-4xl md:text-5xl font-display mb-6">
                    {category.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-semibold text-foreground/60 hover:text-foreground transition-colors cursor-pointer group/link">
                  VIEW ALL {category.title.toUpperCase()}
                  <MoveRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {category.destinations.map((dest) => (
                  <div key={dest.id} className="group/item cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-secondary mb-8 shadow-sm">
                      <FadeImage
                        src={dest.image || "/placeholder.svg"}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover/item:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover/item:bg-black/0 transition-colors duration-500" />
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-2xl md:text-3xl font-display mb-3 group-hover/item:text-accent transition-colors">
                          {dest.name}
                        </h4>
                        <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                          {dest.description}
                        </p>
                      </div>
                      <div className="pt-2">
                        <span className="text-[9px] tracking-[0.3em] font-bold border-b border-foreground/20 pb-1">
                          EXPLORE
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
