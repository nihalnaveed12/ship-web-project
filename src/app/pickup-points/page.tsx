import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CruiseSchedule from "@/components/pickup-points/paphos-transfer";

import BlueLagoonSchedule from "@/components/pickup-points/sea-star";
import ComprehensiveCruiseSchedule from "@/components/pickup-points/blue-lagoon-latchi";
import AdditionalCruiseSchedule from "@/components/pickup-points/limassal-to-paphos";

export default function Page() {
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
            Pickup Points
          </h1>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="py-16 max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold pb-6">Paphos Sea Cruises Schedule</h1>
        <AccordionItem value="item-1" className="font-sans">
          <AccordionTrigger className="text-2xl font-semibold text-[#217EBC] ">
            Paphos Transfer Schedule
          </AccordionTrigger>
          <AccordionContent>
            <CruiseSchedule />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="font-sans">
          <AccordionTrigger className="text-2xl font-semibold text-[#217EBC] ">
            Sea Star Blue Lagoon / Round Trip
          </AccordionTrigger>
          <AccordionContent>
            <BlueLagoonSchedule />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="font-sans">
          <AccordionTrigger className="text-2xl font-semibold text-[#217EBC] ">
            Blue Lagoon / Latchi / Ocean Blue
          </AccordionTrigger>
          <AccordionContent>
            <ComprehensiveCruiseSchedule />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="font-sans">
          <AccordionTrigger className="text-2xl font-semibold text-[#217EBC] ">
            Transfers from Limassol to Paphos
          </AccordionTrigger>
          <AccordionContent>
            <AdditionalCruiseSchedule />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
