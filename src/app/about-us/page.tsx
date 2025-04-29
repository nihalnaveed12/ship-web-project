import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us - Paphos Sea Cruises",
  description:
    "Discover everything about Paphos Sea Cruises, a family-owned business offering the best day and night cruises in Cyprus since 1983.",
};

export default function AboutUs() {
  return (
    <div className="">
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
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
            About Us
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Everything About{" "}
            <span className="text-[#0e8ece] relative">
              Paphos Sea Cruises
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,10 C30,20 70,0 100,10 C130,20 170,0 200,10 C230,20 270,0 300,10"
                  fill="none"
                  stroke="#0e8ece"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h1>
        </div>

        <div className="flex  lg:flex-row flex-col-reverse  gap-8 max-w-5xl mx-auto px-6">
          <div className="lg:w-[50%] relative">
            <div className="">
              <Image
                src={"/about.png"}
                alt="About Us"
                height={1000}
                width={1000}
                className="relative "
              />
            </div>
            <Image
              src={"/about1.png"}
              alt="About Us"
              height={1000}
              width={1000}
              className="absolute hidden lg:block left-90 bottom-0 w-24 "
            />
          </div>
          <div className="lg:w-[40%] flex flex-col gap-6 ">
            <h1 className="font-sans text-5xl font-bold">
              The best day & Night Cruises in Cyprus
            </h1>
            <p className="font-sans text-[14px] text-zinc-600">
              Paphos Sea Cruises is a member of the Masouras Bros Shipping
              Company Ltd and is known worldwide for its coastal cruises. We
              offer a wide variety of cruises, ranging from Full Day, Half Day,
              Sunset, Pirate, Catamaran, along with Wedding Receptions, Private
              Charters, Special Events, and Water Sports.
            </p>
            <p className="font-sans text-[14px] text-zinc-600">
              
              With a reputation for being experienced, reliable,
              methodical and passionate, we have been trusted by more than a
              million customers during all those years. Teamwork is a core
              tenant of our work, and such we offer pleasant and quality cruises
              around Cyprus. Feel free to explore our services and welcome
              aboard to discover the beauties of Cyprus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
