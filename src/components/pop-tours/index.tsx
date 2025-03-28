"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Clock,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Tour {
  id: number;
  title: string;
  image: string;
  duration: number;
  rating: number;
  adultPrice: number;
  childPrice: number;
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Blue Lagoon Morning",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 9,
    adultPrice: 65,
    childPrice: 32,
  },
  {
    id: 2,
    title: "Blue Lagoon Afternoon",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 7,
    adultPrice: 65,
    childPrice: 32,
  },
  {
    id: 3,
    title: "Fireworks Show & Dance Night",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 7,
    adultPrice: 79,
    childPrice: 39,
  },
  {
    id: 4,
    title: "Sunset Cruise",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 8,
    adultPrice: 70,
    childPrice: 35,
  },
  {
    id: 5,
    title: "Island Hopping Adventure",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 9,
    adultPrice: 85,
    childPrice: 42,
  },
  {
    id: 6,
    title: "Island Hopping Adventure",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 9,
    adultPrice: 85,
    childPrice: 42,
  },
  {
    id: 7,
    title: "Island Hopping Adventure",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 9,
    adultPrice: 85,
    childPrice: 42,
  },
  {
    id: 8,
    title: "Island Hopping Adventure",
    image: "/images/pop-tours.jpg",
    duration: 4,
    rating: 9,
    adultPrice: 85,
    childPrice: 42,
  },
];

export default function PopularToursCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const maxIndex = Math.max(0, Math.ceil(tours.length / cardsPerView) - 1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:px-0 px-4 py-12 relative ">
      <div className="relative z-10">
        <p className="text-center text-blue-500 font-script text-xl mb-2">
          What&apos;s new
        </p>
        <h2 className="text-center text-4xl font-bold mb-10">Popular Tours</h2>

        <div className="relative px-16">
          <button
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center",
              activeIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:bg-gray-50"
            )}
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {Array.from({
                length: Math.ceil(tours.length / cardsPerView),
              }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex gap-6">
                  {tours
                    .slice(
                      slideIndex * cardsPerView,
                      slideIndex * cardsPerView + cardsPerView
                    )
                    .map((tour) => (
                      <div
                        key={tour.id}
                        className={`flex-1 min-w-0 ${
                          cardsPerView === 1
                            ? "w-full"
                            : cardsPerView === 2
                            ? "w-1/2"
                            : "w-1/3"
                        }`}
                      >
                        <div className="bg-white rounded-xl overflow-hidden shadow-md h-[350px] mb-3">
                          <div className="relative">
                            <Image
                              src={tour.image || "/placeholder.svg"}
                              alt={tour.title}
                              width={400}
                              height={250}
                              className="w-full h-[200px] object-cover"
                            />
                            <div className="absolute bottom-3 left-3 bg-white rounded-md px-2 py-1 flex items-center gap-1 text-sm">
                              <Clock className="h-4 w-4 text-blue-500" />
                              <span>{tour.duration} hours</span>
                            </div>
                            <div className="absolute bottom-3 right-3 bg-white rounded-md px-2 py-1 flex items-center gap-1 text-sm">
                              <Star className="h-4 w-4 text-blue-500" />
                              <span>{tour.rating}</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-4">
                              {tour.title}
                            </h3>
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm">
                                  <span className="font-medium">
                                    €{tour.adultPrice} Adult
                                  </span>{" "}
                                  /
                                  <span className="text-gray-600">
                                    {" "}
                                    €{tour.childPrice} Child
                                  </span>
                                </p>
                              </div>
                              <div className="text-blue-600 flex items-center text-sm font-medium cursor-pointer hover:text-blue-800">
                                Explore <ArrowRight className="h-4 w-4 ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-blue-500 text-white shadow-md flex items-center justify-center",
              activeIndex === maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:bg-blue-600"
            )}
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 rounded-full transition-all",
                activeIndex === index ? "bg-blue-500 w-6" : "bg-gray-300 w-2"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-contain bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=200&width=200')",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-contain bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=200&width=200')",
        }}
      ></div>
    </div>
  );
}
