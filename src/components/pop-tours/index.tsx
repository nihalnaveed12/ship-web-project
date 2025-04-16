"use client";

import { useState, useEffect } from "react";
import TourCard from "../tour-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Tour, Tours } from "@/data/tours";

export default function PopularToursCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [ToursData, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    setTours(Tours);
  }, []);

  useEffect(() => {
    if (!api) return;

    // Set up interval for auto-rotation (3 seconds)
    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    // Update count and current slide
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto md:px-0  pb-20 pt-10 relative ">
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          className="text-center text-[#0A71B8] font-script text-xl mb-2"
        >
          What&apos;s new
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          className="text-center text-4xl font-bold mb-10"
        >
          Popular Tours
        </motion.h2>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-8 mx-auto ">
            {ToursData.map((tours, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TourCard
                  image={tours.image}
                  adutlFee={tours.adultFee}
                  childFee={tours.childFee}
                  hours={tours.hours}
                  title={tours.title}
                  href={`/tours/${tours.slug}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-0 hover:bg-[#0A71B8] hover:text-white w-10 h-10 cursor-pointer mr-2"
            size="icon"
          />
          <CarouselNext className="right-0 hover:bg-[#0A71B8] hover:text-white w-10 h-10 cursor-pointer " />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6 ">
          {Tours.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === current % count
                  ? "w-6 bg-blue-600"
                  : "w-2 bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
    </div>
  );
}
