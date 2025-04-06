import FindAnswersSection from "@/components/FAQ";
import Image from "next/image";

export default function FAQ() {
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
            FAQ
          </h1>
        </div>
      </div>
      <FindAnswersSection />
    </div>
  );
}
