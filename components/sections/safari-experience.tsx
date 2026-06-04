"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SafariCard {
  title: string;
  description: string;
  image: string;
}

const safariCards: SafariCard[] = [
  {
    title: "The Soul of the Wild",
    description:
      "From Kilimanjaro’s snow-capped peaks to the thundering plains of the Serengeti, discover a land of untamed wonder. Witness the epic Great Migration, explore the ancient Ngorongoro Crater, and immerse yourself in the rich heritage of the Maasai and the spice-scented shores of Zanzibar",
    image: "/images/animals/safari-serengeti-national-park.jpg",
  },
  {
    title: "Tanzania – Home of the Great Migration",
    description:
      "Journey beyond the extraordinary. From the wilderness of the Serengeti and the depths of Ngorongoro to the vibrant culture of Zanzibar, Tanzania offers an unparalleled escape into nature.",
    image:
      "/images/animals/wildebeest-migration-river-crossing-serengeti-safaris.jpg",
  },
  {
    title: "Nature’s Greatest Spectacle",
    description:
      "The Serengeti is famous for the Great Migration, and is one of the seven Natural Wonders of Africa",
    image:
      "/images/adventure/serengeti-national-park-tanzania-national-parks-nasikia-camps-game-drives-tours-tanzania-safaris-africa-lion.jpg",
  },
];

export function SafariExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % safariCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? safariCards.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-white">
      {/* Header Section */}
      <div className="px-6 py-24 md:px-16 md:py-32 lg:px-28 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          {/* Top Navigation */}
          <div className="mb-12 text-base tracking-widest text-gray-600 font-medium">
            WILDERNESS
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight max-w-2xl">
                Start planning your Tanzanian adventure today
              </h1>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-between">
              <p className="mb-12 text-lg leading-relaxed text-gray-600 md:text-xl lg:text-2xl">
                Begin crafting your ultimate Tanzanian safari with expert
                insights on the ideal seasons, investment costs, exceptional
                wilderness lodges, and the secrets to designing a seamless
                itinerary across the Serengeti plains.
              </p>

              {/* Carousel Counter */}
              <div className="flex items-center gap-6">
                <span className="text-xl font-semibold text-gray-800">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(safariCards.length).padStart(2, "0")}
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="rounded-full p-4 hover:bg-gray-100 transition-colors border border-gray-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-8 w-8 text-orange-600" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="rounded-full p-4 hover:bg-gray-100 transition-colors border border-gray-200"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-8 w-8 text-orange-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Carousel Section */}
      <div className="overflow-hidden bg-white px-6 py-12 md:px-16 lg:px-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {safariCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-xl bg-gray-50"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden md:h-[500px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col justify-between p-10">
                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
