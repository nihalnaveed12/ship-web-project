import Galleri from "@/components/gallery";
import Image from "next/image";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gallery - Paphos Sea Cruises",
  description:
    "Explore our gallery of stunning images from our tours and experiences.",
};

export default function Gallery() {
  return (
    <div className="">
      <div className="relative top-10 bottom-10 ">
        <img
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          className="h-[400px] w-full mb-14"
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
           Gallery
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Galleri />
      </div>
    </div>
  );
}
