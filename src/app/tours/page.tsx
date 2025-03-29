import Image from "next/image";
import SearchBar from "@/components/search-bar";
import TourCard from "@/components/tour-card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Background Image */}
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
            <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">Tours</h1>
          </div>
        </div>

        {/* Search Form */}
        <SearchBar />

      
      <div className="grid lg:grid-cols-3 max-w-6xl mx-auto md:grid-cols-2 px-4 gap-y-8 py-16 place-items-center">
        {[1,2,3,4,5,6,7,8,9].map((index) => (
            <TourCard key={index}/>
        ))}
      </div>

      </div>
    </main>
  );
}
