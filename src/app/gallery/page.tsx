import Galleri from "@/components/gallery";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="">
      <div className="relative h-[450px] ">
        <Image
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          fill
          className=""
          priority
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
            FAQ
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Galleri />
      </div>
    </div>
  );
}
