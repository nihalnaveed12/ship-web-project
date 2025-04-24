"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Places() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const destinations = [
    {
      id: "locations/blue-lagoon",
      name: "Blue Lagoon - Latchi",
      tours: 6,
      image: "/images/place1.jpg",
    },
    {
      id: "locations/paphos",
      name: "Paphos",
      tours: 6,
      image: "/images/place2.jpg",
    },
  ];

  return (
    <div className="relative top-10 py-10">
      <div className="flex flex-col gap-4 items-center">
        <motion.h4
          initial={{ opacity: 0, x: -300 }}
          whileInView={{
            opacity: 2,
            x: 0,
            transition: { duration: 0.8 },
          }}
          className="text-[18px] text-[#0A71B8] font-serif italic"
        >
          Places to goo
        </motion.h4>
        <motion.h1
          initial={{ opacity: 0, x: -300 }}
          whileInView={{
            opacity: 2,
            x: 0,
            transition: { duration: 0.8 },
          }}
          className="text-5xl font-extrabold font-sans"
        >
          Perfect Destinations
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {destinations.map((destination) => (
          <Link
            href={`/${destination.id}`}
            key={destination.id}
            className="block"
            onMouseEnter={() => setHoveredCard(destination.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-90 rounded-lg overflow-hidden">
              {/* Image with zoom effect */}
              <div
                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform:
                    hoveredCard === destination.id ? "scale(1.05)" : "scale(1)",
                }}
              >
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Default bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Hover shadow effect that animates from bottom to top */}
              <div
                className="absolute inset-0 transition-all duration-300 ease-in-out"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                  opacity: hoveredCard === destination.id ? 1 : 0,
                  backdropFilter:
                    hoveredCard === destination.id ? "blur(0px)" : "blur(0px)",
                  transform:
                    hoveredCard === destination.id
                      ? "translateY(0)"
                      : "translateY(100%)",
                }}
              />

              <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                <div className="flex justify-between items-end">
                  <h3 className="text-white text-2xl font-bold">
                    {destination.name}
                  </h3>
                  <span className="text-white text-sm font-medium">
                    {destination.tours} Tours
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
