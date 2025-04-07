import Image from "next/image";
import SearchBar from "@/components/search-bar";
import ToursCards from "@/components/tours-page";

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

      
      <ToursCards />

      </div>
    </main>
  );
}
