"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "KEY FACTS" | "HABITATS" | "WILDLIFE" | "WEATHER" | "WHEN TO GO";

interface GalleryCard {
  title: string;
  description: string;
  image: string;
}

const TAB_DATA: Record<TabType, GalleryCard[]> = {
  "WHEN TO GO": [
    {
      title: "January–March",
      description:
        "Calving season. The influx of newborn animals attracts a range of predators including lion, cheetah and hyena.",
      image: "/images/animals/Lion-and-Cub-in-Serengeti-National.jpg",
    },
    {
      title: "April–July",
      description:
        "This is known as the wet season and can bring heavy downpours, resulting in lush landscapes.",
      image: "/images/galleries/elephant3.jpg",
    },
    {
      title: "July–October",
      description:
        "River crossings in the Serengeti are at their most dramatic, with lions and crocodiles lying in wait.",
      image:
        "/images/animals/wildebeest-migration-river-crossing-serengeti-safaris.jpg",
    },
    {
      title: "November–December",
      description:
        "A secondary rainy season, this one is typically characterised by scattered, periodic showers.",
      image: "/images/adventure/elephant-family-migrating.jpg",
    },
  ],
  HABITATS: [
    {
      title: "Serengeti Plains",
      description:
        "Endless grasslands that host the world's largest terrestrial mammal migration.",
      image: "/images/adventure/Central Serengeti (Seronera Valley).jpg",
    },
    {
      title: "Ngorongoro Crater",
      description:
        "A pristine caldera offering a unique ecosystem with dense wildlife populations.",
      image: "/images/adventure/ngorongoro-crater-floor-teaming-with-game.jpg",
    },
    {
      title: "Tarangire",
      description:
        "Known for its ancient baobab trees and massive elephant herds along the river.",
      image: "/images/adventure/Tarangire National Park Animals.jpg",
    },
    {
      title: "Zanzibar",
      image: "/images/carousel/zanzibar_beach_with_palm_trees.jpg",
      description:
        "Pristine white sand beaches and turquoise waters of the Indian Ocean.",
    },
  ],
  WILDLIFE: [
    {
      title: "The Big Five",
      description:
        "Encounter the lion, leopard, elephant, buffalo, and the rare black rhino.",
      image: "/images/adventure/lion.jpg",
    },
    {
      title: "Great Migration",
      description:
        "Witness millions of wildebeest and zebra moving across the Serengeti ecosystem.",
      image: "/images/adventure/serengeti_wildbeast_migration.jpg",
    },
    {
      title: "Big Cats",
      description:
        "Tanzania is home to some of the highest densities of cheetahs and leopards in Africa.",
      image:
        "/images/adventure/istock_19471790_cheetah_serengeti_national_park_3000x1000.jpg",
    },
    {
      title: "Primates",
      description:
        "Explore the Gombe Stream for chimpanzee trekking in their natural forest habitat.",
      image: "/images/galleries/monkey looking at the camera.JPG",
    },
  ],
  "KEY FACTS": [
    {
      title: "Geography",
      description:
        "Home to Mount Kilimanjaro, the highest peak in Africa and the world's highest free-standing mountain.",
      image: "/images/mountains/Mount-Kilimanjaro-Tanzania.webp",
    },
    {
      title: "Culture",
      description:
        "Over 120 ethnic groups, including the iconic Maasai people with their rich traditions.",
      image: "/images/adventure/LCC-FCC-Activities-1-scaled.jpg",
    },
    {
      title: "Conservation",
      description:
        "Approximately 38% of Tanzania's land area is set aside in protected areas for conservation.",
      image: "/images/adventure/Sanctuary-Retreats-Swala-Campa-Tanzania.jpg",
    },
    {
      title: "History",
      description:
        "The 'Cradle of Mankind' where some of the oldest hominid fossils were discovered.",
      image:
        "/images/adventure/645e6f74a93d9dead13addd5_Serengeti introduction.jpg",
    },
  ],
  WEATHER: [
    {
      title: "Dry Season",
      description:
        "June to October. Clear skies and optimal wildlife viewing as animals gather at water sources.",
      image: "/images/adventure/Tarangire sunset .jpg",
    },
    {
      title: "Green Season",
      description:
        "November to May. Dust-free air, lush landscapes, and excellent bird watching opportunities.",
      image: "/images/adventure/baloonpic.jpg",
    },
    {
      title: "Coastal Climate",
      description:
        "Tropical and humid year-round, with sea breezes providing relief on the islands.",
      image: "/images/carousel/zanzibar_beach_with_palm_trees.jpg",
    },
    {
      title: "Highlands",
      description:
        "Cooler temperatures, especially at night and early morning in areas like Ngorongoro.",
      image: "/images/carousel/giraffe_at_ngorongoro_highland.jpg",
    },
  ],
};

const TABS: TabType[] = [
  "KEY FACTS",
  "HABITATS",
  "WILDLIFE",
  "WEATHER",
  "WHEN TO GO",
];

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<TabType>("WHEN TO GO");

  return (
    <section
      id="gallery"
      className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6 block">
              WHAT YOU NEED TO KNOW
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] leading-[1.1]">
              Why visit
              <br />
              Tanzania
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-xl">
              Ranked among the world's 12 mega-diverse nations, Tanzania holds a staggering biological wealth,
              nurturing over 30% of Africa's entire plant life and placing 12th globally for its rich bird diversity.
              The country’s vast network of protected sanctuaries spans an area larger than Germany.
              This massive wilderness provides a safe haven for iconic, majestic mammals alongside a fascinating collection of endemic reptiles and amphibians found nowhere else on Earth.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between border-y border-gray-100 py-6 mb-16 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 md:gap-12 mx-auto">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-[10px] font-bold tracking-[0.2em] transition-all duration-300 pb-1 relative",
                  activeTab === tab
                    ? "text-[#1a1a1a]"
                    : "text-gray-400 hover:text-gray-600",
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#d4a373]"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "KEY FACTS" ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start py-12">
                  {/* Left Side: Title & Description */}
                  <div className="lg:col-span-5">
                    <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-8 leading-tight">
                      Tanzania key facts
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                      Tanzania is the ultimate "bush to beach" destination, combining world-class safaris with tropical island escapes.
                      It is home to Africa’s highest peak, the snow-capped Mount Kilimanjaro, and the endless plains of the Serengeti,
                      where millions of animals participate in the epic Great Migration. Beyond this spectacle lie the wildlife-rich Ngorongoro Crater and the remote wilds of Ruaha and Selous.
                      Rich in culture, Tanzania invites travelers to meet the Maasai people and explore the historic, spice-scented shores of Zanzibar. Expert planning simplifies your journey by guiding you through optimal travel seasons, c
                      osts, premier lodges, and custom Serengeti itineraries.
                    </p>
                  </div>

                  {/* Vertical Divider (Desktop Only) */}
                  <div className="hidden lg:flex lg:col-span-1 justify-center self-stretch">
                    <div className="w-[1px] bg-gray-200" />
                  </div>

                  {/* Right Side: Stats Grid */}
                  <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                        POPULATION SIZE
                      </span>
                      <p className="text-2xl font-serif text-[#1a1a1a]">
                        7.5 million
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                        CURRENCY
                      </span>
                      <p className="text-2xl font-serif text-[#1a1a1a]">
                        Tanzanian shilling (TZS)
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                        GEOGRAPHICAL SIZE
                      </span>
                      <p className="text-2xl font-serif text-[#1a1a1a]">
                        947,300 km²
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                        BEST TIME TO GO
                      </span>
                      <p className="text-2xl font-serif text-[#1a1a1a]">
                        All year round
                      </p>
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                        TRIBES
                      </span>
                      <p className="text-2xl font-serif text-[#1a1a1a]">
                        120+ tribes
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {TAB_DATA[activeTab].map((card, index) => (
                    <div key={`${activeTab}-${index}`} className="group">
                      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                      <h3 className="text-xl font-serif text-[#1a1a1a] mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-24 border-t border-gray-100" />
      </div>
    </section>
  );
}
