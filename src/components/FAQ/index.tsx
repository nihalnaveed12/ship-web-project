"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// FAQ data array
const faqData = [
  {
    id: "item-1",
    question: "Can I arrange a cruise booking for longer than one month?",
    answer:"Yes, please follow these steps:  1. Navigate to paphosseacruises.com  click the Book Now button. 2. You will see search tours: For the start date, please specify the exact date you would like to book, for example, August 20. The end date can be the same as the start date if you need a specific date, or you can leave it as default to search for a one-month period. 3. Please click the “Perform Tour Search” button. 4. Scroll down until you find your desired cruise or use the next page if needed. 5. Click the “Book It” button. You should be able to proceed with your booking."
  },
  {
    id: "item-2",
    question:
      "I made my booking online. Do I require another ticket, or can I use this as my ticket?",
    answer:
      "No, this is your actual ticket.",
  },
  {
    id: "item-3",
    question:
      "I need to change my booking to another day. Can I do this without any extra charge?",
    answer:
      "Yes, our team can change your booking without any extra charge. Please email us at info@paphosseacruises.com to do this for you.",
  },
  {
    id: "item-4",
    question: "I didn't attend my cruise, could I still join for another day?",
    answer:
      "Yes, this is possible. Please let us know via email to perform this operation for you.",
  },
  {
    id: "item-5",
    question:
      "I booked your cruises with another provider; how do I change my departure day?",
    answer:
      "You will need to contact our partner for further assistance.",
  },
  {
    id: "item-6",
    question:
      "My hotel is not listed in the droplist when I choose transfer. How to find my hotel?",
    answer:
      "If your hotel is not listed, please select the closest pick-up point, or contact us for further assistance.",
  },
  {
    id: "item-7",
    question:
      "Do you provide transportation from Private Villas?",
    answer:
      "Unfortunately, we currently do not offer transportation from private villas; we only provide pickups from predefined points.",
  },
  {
    id: "item-8",
    question:
      "Do you provide transportation within a given range?",
    answer:
      "Our predefined pick-up points and times are detailed in our cruise manual, which can be found on our website, or you can choose them during the online booking process.",
  },
  {
    id: "item-9",
    question:
      "If I do not want the transfer service, how can I arrive at Paphos Harbour",
    answer:
      "You could arrive at Paphos Harbour either by taxi, public transportation, rental car if you are renting one or your own car if you are local.",
  },
  {
    id: "item-10",
    question:
      "Where can I park my car in Paphos Harbour?",
    answer:
      "There is a free parking area available for use in front of the Paphos Archaeological site.",
  },
  {
    id: "item-11",
    question:
      "Can I use my own transportation to arrive at Latchi Harbour?",
    answer:
      "Specific tours start and finish in different places therefore if you are to park at Latchi Harbour you will not be able to meet your car after the cruise. We highly recommend to use our transportation service for all cruises based in Latchi.",
  },
  {
    id: "item-12",
    question:
      "If the cruise starts and finishes in Latchi Harbour can I use my own transportation service?",
    answer:
      "It is possible if you have your own car and use navigation assistance. There is a free parking space in Latchi Harbour close to our docking points. If not, transportation fees could be expensive and difficult to arrive. We always recommend using our own transportation service included in your ticket price.",
  },
  {
    id: "item-13",
    question:
      "In case of cancellation due to weather conditions do I get my money back?",
    answer:
      "Yes, a full refund will be offered if you do not wish to select the next day available.",
  },
];

export default function FindAnswersSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const filteredFaqs = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-16">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900">
          Find Answers
        </h1>

        <h2 className="text-xl font-sans font-medium text-gray-800">
          Useful Information
        </h2>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 py-6 text-base rounded-full border border-gray-300 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="w-full">
          {filteredFaqs.map((item) => (
            <div key={item.id} className="border-b border-gray-200 py-2">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="flex items-center justify-between w-full py-4 text-left font-medium text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <span className="text-base font-semibold font-sans pr-8">{item.question}</span>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full cursor-pointer">
                  <Plus className="h-6 w-6 text-blue-600 shrink-0" />
                </div>
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-in-out",
                  openItem === item.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="pt-2 pb-4 text-gray-700">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
