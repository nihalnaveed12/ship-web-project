"use client";
import { useSearchParams } from "next/navigation";
import { Tours } from "@/data/tours";
import TourCard from "../tour-card";

export default function ToursCards() {
  const searchParams = useSearchParams();

  const destination = searchParams.get("destination");
  const timeline = searchParams.get("timeline");
  const cruiseType = searchParams.get("cruiseType");

  const filteredTours = Tours.filter((tour) => {
    const matchesDestination =
      !destination || destination === "ALL Destination" || tour.destination === destination;

    const matchesTimeline =
      !timeline || timeline === "All Cruise Timelines" || tour.timeline === timeline;

    const matchesCruiseType =
      !cruiseType || cruiseType === "All Cruise Types" || tour.cruiseType === cruiseType;

    return matchesDestination && matchesTimeline && matchesCruiseType;
  });

  return (
    <div className="grid lg:grid-cols-3 max-w-6xl mx-auto sm:grid-cols-2 px-4 gap-y-8 py-16 gap-x-8 ">
      {filteredTours.map((tours, index) => (
        <TourCard
          key={index}
          image={tours.image}
          adutlFee={tours.adultFee}
          childFee={tours.childFee}
          hours={tours.hours}
          title={tours.title}
          href={`/tours/${tours.slug}`}
        />
      ))}
    </div>
  );
}

