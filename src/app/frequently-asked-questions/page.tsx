import FindAnswersSection from "@/components/FAQ";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Frequently asked Questions - Paphos Sea Cruises",
  description: "Frequently asked questions about our tours and services.",
}


export default function FAQ() {
  return (
    <div className="">
     <div className="relative top-10 bottom-10 ">
        <img
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          className="h-[400px] w-full mb-14"
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
           FAQ
          </h1>
        </div>
      </div>
      <FindAnswersSection />
    </div>
  );
}
