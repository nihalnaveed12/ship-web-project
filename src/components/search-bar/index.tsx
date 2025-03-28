"use client";
import {
  ChevronDown,
  MapPin,
  Calendar,
  Ship,
  Search,
 
} from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
    const [destinationOpen, setDestinationOpen] = useState(false);
    const [timelineOpen, setTimelineOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    return(
        <div className="absolute -bottom-26 w-full px-0 pt-6 mx-auto">
          <div className="bg-white rounded-[16px] max-w-6xl mx-auto  flex flex-col md:flex-row relative">
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
            <div className="absolute right-0 bottom-0 md:h-full rounded-[16px]">
              <button className="bg-[#0099cc] hover:bg-[#0088bb] text-white px-8 py-5 rounded-tr-lg md:h-full flex items-center justify-center transition-colors">
                <Search className="mr-2" size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
    )
}