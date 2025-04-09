import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

type propTypes = {
  image: string,
  title: string,
  hours: number,
  adutlFee: number,
  childFee: number,
}

export default function TourCard(prop : propTypes) {
  return (
    <div className="w-auto max-w-92 mx-auto bg-white rounded-[20px] shadow-md overflow-hidden">
      {/* Card Image */}
      <div className="relative overflow-hidden h-[250px]  rounded-[20px] ">
        <Image
          src={prop.image}
          alt="Luxury yacht on Blue Lagoon Afternoon tour"
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 relative">
        {/* Icons Row */}
        <div className="absolute bottom-28 bg-white rounded-[10px] mb-2 z-10 w-[90%] mx-auto border">
          <div className="flex items-center justify-between p-3 ">
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-red-500" />
              </div>
              <span className="text-sm text-gray-600 ml-1.5">{prop.hours}</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-sm">
                <Users className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <span className="text-sm text-gray-600 ml-1.5">7</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-bold text-gray-900 mb-3 leading-tight">
          {prop.title}
        </h3>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-[15px]">
            <span className="font-semibold text-gray-700">€{prop.adutlFee}</span> Adult /
            <span className="font-semibold text-gray-700"> €{prop.childFee}</span> Child
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
