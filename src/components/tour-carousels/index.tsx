"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tours } from "@/data/tours";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ToursCarousels() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (!api) return;

    // Set up interval for auto-rotation (3 seconds)
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Update count and current slide

    setCurrent(api.selectedScrollSnap() + 1);

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="pb-8 mx-auto ">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-zinc-600">
            {current} / {Tours.length}
          </span>
        </div>
        {Tours.map((tours, index) => (
          <CarouselItem key={index} className="md:basis-1/2 basis-full lg:basis-1/3">
            <Image
              src={tours.image}
              alt={tours.title}
              height={1000}
              width={1000}
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
  );
}
