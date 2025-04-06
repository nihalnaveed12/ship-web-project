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
    answer:
      "Yes, you can arrange a cruise booking for longer than one month. Please contact our customer service team for assistance with extended bookings.",
  },
  {
    id: "item-2",
    question:
      "I made my booking online. Do I require another ticket, or can I use this as my ticket?",
    answer:
      "Your online booking confirmation serves as your ticket. You can either print it or show it on your mobile device when boarding.",
  },
  {
    id: "item-3",
    question:
      "I need to change my booking to another day. Can I do this without any extra charge?",
    answer:
      "Yes, you can change your booking to another day without extra charges if done at least 48 hours before departure. Please contact our customer service.",
  },
  {
    id: "item-4",
    question: "I didn't attend my cruise, could I still join for another day?",
    answer:
      "If you missed your cruise, please contact us as soon as possible. Depending on availability, we may be able to reschedule your trip.",
  },
  {
    id: "item-5",
    question:
      "I booked your cruises with another provider; how do I change my departure day?",
    answer:
      "For bookings made through third-party providers, you'll need to contact them directly to make any changes to your departure day.",
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
                <span className="text-base pr-8">{item.question}</span>
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
