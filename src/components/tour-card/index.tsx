import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function TourCard() {
  return (
    <div className="w-[340px] bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Card Image */}
      <div className="relative h-[180px] w-full overflow-hidden rounded-t-[20px]">
        <Image
          src="/images/pop-tours.jpg"
          alt="Luxury yacht on Blue Lagoon Afternoon tour"
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Icons Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-red-500" />
            </div>
            <span className="text-sm text-gray-600 ml-1.5">4 hours</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-sm">
              <Users className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <span className="text-sm text-gray-600 ml-1.5">7</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-bold text-gray-900 mb-3 leading-tight">
          Blue Lagoon Afternoon
        </h3>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-[15px]">
            <span className="font-semibold text-gray-700">€65</span> Adult /
            <span className="font-semibold text-gray-700"> €32</span> Child
          </div>
          <button className="flex items-center text-[#2a3990] font-medium text-[15px]">
            Explore
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
