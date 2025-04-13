"use client";
import { Tour, Tours } from "@/data/tours";
import { useEffect, useState } from "react";
import TourCard from "../tour-card";

export default function ToursCards() {
  const [ToursData, setTours] = useState<Tour[]>([]);
  useEffect(() => {
    setTours(Tours);
  },[]);
  return (
    <div className="grid lg:grid-cols-3 max-w-6xl mx-auto sm:grid-cols-2 px-4 gap-y-8 py-16 gap-x-8 ">
      {ToursData.map((tours, index) => (
        <TourCard
          key={index}
          image={tours.image}
          adutlFee={tours.adultFee}
          childFee={tours.childFee}
          hours={tours.hours}
          title={tours.title}
        />
      ))}
    </div>
  );
}
