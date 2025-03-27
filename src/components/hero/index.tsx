"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  MapPin,
  Calendar,
  Ship,
  Search,
  Play,
} from "lucide-react";

export default function HeroSection() {
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/images/ship-image.png)" }}
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
        <div className="w-full px-0 pt-6 mx-auto">
          <div className="bg-white rounded-t-lg max-w-6xl mx-auto  flex flex-col md:flex-row relative">
            {/* Destinations */}
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
              <button
                className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setDestinationOpen(!destinationOpen)}
              >
                <div className="flex items-center">
                  <MapPin className="text-[#0099cc] mr-3" size={20} />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Destinations</p>
                    <p className="text-gray-500 text-sm">
                      Where are you going?
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`text-gray-400 transition-transform ${
                    destinationOpen ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>
            </div>

            {/* Cruise Timelines */}
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
              <button
                className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setTimelineOpen(!timelineOpen)}
              >
                <div className="flex items-center">
                  <Calendar className="text-[#0099cc] mr-3" size={20} />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">
                      Cruise Timelines
                    </p>
                    <p className="text-gray-500 text-sm">All</p>
                  </div>
                </div>
                <ChevronDown
                  className={`text-gray-400 transition-transform ${
                    timelineOpen ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>
            </div>

            {/* Cruise Types */}
            <div className="flex-1">
              <button
                className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setTypeOpen(!typeOpen)}
              >
                <div className="flex items-center">
                  <Ship className="text-[#0099cc] mr-3" size={20} />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Cruise Types</p>
                    <p className="text-gray-500 text-sm">All</p>
                  </div>
                </div>
                <ChevronDown
                  className={`text-gray-400 transition-transform ${
                    typeOpen ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>
            </div>

            {/* Search Button */}
            <div className="absolute right-0 bottom-0 md:h-full">
              <button className="bg-[#0099cc] hover:bg-[#0088bb] text-white px-8 py-5 rounded-tr-lg md:h-full flex items-center justify-center transition-colors">
                <Search className="mr-2" size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
