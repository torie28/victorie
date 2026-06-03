"use client";

import { FadeImage } from "@/components/fade-image";

const destinations = [
  {
    id: 1,
    name: "Serengeti National Park",
    description: "The theater of the Great Migration",
    price: "Explore",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
  },
  {
    id: 2,
    name: "Ngorongoro Crater",
    description: "A natural sanctuary of unrivaled beauty",
    price: "Explore",
    image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?q=80&w=800",
  },
  {
    id: 3,
    name: "Mount Kilimanjaro",
    description: "The roof of Africa beckons",
    price: "Explore",
    image: "https://images.unsplash.com/photo-1589553416260-178fb95ee297?q=80&w=800",
  },
  {
    id: 4,
    name: "Tarangire National Park",
    description: "The land of giants and baobabs",
    price: "Explore",
    image: "https://images.unsplash.com/photo-1532581133596-f642456f9160?q=80&w=800",
  },
  {
    id: 5,
    name: "Zanzibar Archipelago",
    description: "White sands and turquoise horizons",
    price: "Explore",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800",
  },
  {
    id: 6,
    name: "Ruaha National Park",
    description: "The wild, untamed heart of Tanzania",
    price: "Explore",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800",
  },
];

export function DestinationShowcase() {
  return (
    <section id="destinations" className="bg-background">
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Iconic Destinations.
        </h2>
      </div>

      <div className="pb-24">
        {/* Mobile carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {destinations.map((dest) => (
            <div key={dest.id} className="group flex-shrink-0 w-[75vw] snap-center">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {dest.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {dest.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {dest.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {destinations.map((dest) => (
            <div key={dest.id} className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {dest.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {dest.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {dest.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
