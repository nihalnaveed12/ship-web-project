import SearchBar from "@/components/search-bar";
import ToursCards from "@/components/tours-page";
import { Suspense } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tours - Paphos Sea Cruises",
  description: "Explore our tours and book your adventure today!",

  keywords: "tours, cruises, Paphos, Cyprus, adventure, travel",

  authors: [{ name: "Paphos Sea Cruises" }],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Background Image */}
        <div className="relative top-10 bottom-10 ">
          <img
            src="/backgrounds/blue.jpg"
            alt="Blue wave background"
            className="h-[400px] w-full mb-14"
          />

          {/* Tours Title */}
          <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
            <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
              Tours
            </h1>
          </div>
        </div>

        {/* Search Form */}
        <SearchBar />

        {/* ✅ Wrap this in Suspense because it uses useSearchParams */}
        <Suspense
          fallback={<div className="text-center py-10">Loading tours...</div>}
        >
          <ToursCards />
        </Suspense>
      </div>
    </main>
  );
}
