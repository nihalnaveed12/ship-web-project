
import Link from "next/link";
import {
  
  Play,
} from "lucide-react";

export default function HeroSection() {
 

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/images/ship-image.png" }}
    >
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Main Content */}
        <div className="container mx-auto px-6 pt-24 md:pt-28">
          <div className="max-w-xl">
            <p className="text-white font-script text-3xl mb-2">
              Luxury Cruising
            </p>

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              The best day &<br />
              night cruises in
              <br />
              Cyprus
            </h1>

            <Link
              href="#tours"
              className="inline-flex items-center bg-[#0099cc] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0088bb] transition-colors"
            >
              Explore Tours Now
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Play Button */}
        <div className="absolute right-10 md:right-16 top-1/2 transform -translate-y-1/2">
          <button
            className="w-6 h-6 md:w-24 md:h-24 rounded-full bg-white bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 text-[#0099cc] ml-1" fill="#0099cc" />
          </button>
        </div>

        {/* Search Bar */}
        
      </div>
    </div>
  );
}
