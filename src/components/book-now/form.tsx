"use client";

import type React from "react";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TourBookingForm({
  adultFee,
  childFee,
  slug,
}: {
  adultFee: number;
  childFee: number;
  slug: string;
}) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  const ADULT_PRICE = adultFee;
  const CHILD_PRICE = childFee;

  const adultsTotal = adults * ADULT_PRICE;
  const childrenTotal = children * CHILD_PRICE;
  const totalAmount = adultsTotal + childrenTotal - promoDiscount;
  const depositValue = totalAmount; // In this case deposit is 100%
  const remainingBalance = 0; // Since deposit is 100%, remaining is 0

  const handleAdultsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0;
    setAdults(Math.max(0, value));
  };

  const handleChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0;
    setChildren(Math.max(0, value));
  };

  const validatePromo = () => {
    // Mock promo validation - in a real app, this would call an API
    if (promoCode === "DISCOUNT10") {
      setPromoDiscount(10);
    } else {
      setPromoDiscount(0);
      alert("Invalid promo code");
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-md font-sans py-12 px-4">
      <h2 className="text-2xl font-bold text-gray-900">
        Availability and Prices
      </h2>
      <div className="flex md:flex-row flex-col gap-10">

      <div className="pt-6 md:w-[65%]">
        <div className="p-4 shadow-xl rounded-[14px]">
          <h3 className="font-bold text-gray-900 mb-4">Book the Tour</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Select Your Day of Departure:
            </label>
            <div className="flex gap-2 mb-1">
              <div className="relative flex-1">
                <input
                  type="text"
                  value="25 May, 2025"
                  className="w-full pl-10 py-2 bg-gray-50 border border-gray-300 text-gray-700 rounded-md"
                  readOnly
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="text-xs text-gray-500">
              (Availability: 186 Adults and Children)
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Price Type:
            </label>
            <div className="relative">
              <input
                type="text"
                value="Standard Prices"
                className="w-full py-2 px-3 bg-gray-50 border border-gray-300 text-gray-700 rounded-md"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80px] gap-4 mb-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium">№ of Adults</label>
              </div>
              <input
                type="number"
                value={adults}
                onChange={handleAdultsChange}
                min="0"
                className="w-full py-2 px-3 bg-gray-50 border border-gray-300 text-gray-700 rounded-md"
              />
            </div>
            <div className="text-right flex items-center justify-end">
              <span className="font-medium">{adultsTotal.toFixed(2)} €</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80px] gap-4 mb-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium">
                  № of Children
                </label>
              </div>
              <input
                type="number"
                value={children}
                onChange={handleChildrenChange}
                min="0"
                className="w-full py-2 px-3 bg-gray-50 border border-gray-300 text-gray-700 rounded-md"
              />
            </div>
            <div className="text-right flex items-center justify-end">
              <span className="font-medium">{childrenTotal.toFixed(2)} €</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80px] gap-4 mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code"
                className="w-full py-2 px-3 bg-gray-50 border border-gray-300 text-gray-700 rounded-md"
              />
              <button
                onClick={validatePromo}
                className="bg-[#0070c0] hover:bg-[#005a9e] text-white font-medium px-4 rounded-md"
              >
                Validate
              </button>
            </div>
            <div className="text-right flex items-center justify-end">
              <span className="font-medium">
                {promoDiscount > 0
                  ? `-${promoDiscount.toFixed(2)} €`
                  : "0.00 €"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80px] gap-4 py-2 border-t border-b mb-4">
            <div>
              <span className="font-medium text-sm">Total amount</span>
            </div>
            <div className="text-right">
              <span className="font-medium text-[#0070c0]">
                {totalAmount.toFixed(2)} €
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80px] gap-4 mb-2">
            <div>
              <span className="font-medium text-sm">Deposit Value</span>
            </div>
            <div className="text-right">
              <span className="font-medium">{depositValue.toFixed(2)} €</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80px] gap-4 mb-4">
            <div>
              <span className="font-medium text-sm">Remaining Balance</span>
            </div>
            <div className="text-right">
              <span className="font-medium">
                {remainingBalance.toFixed(2)} €
              </span>
            </div>
          </div>
<Link href={`/final-booking/${slug}`}>

          <Button className="w-full bg-[#0070c0] hover:bg-[#005a9e] text-white font-medium py-2 rounded-md">
            Book It
          </Button>
</Link>
        </div>
      </div>
 
      <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-[#00b0f0] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">€</span>
              </div>
              <span className="text-[#00b0f0] font-bold text-xl">PRICE</span>
            </div>
            <div className="text-sm text-zinc-600">
              <span className="font-semibold">€75 Adult</span> /{" "}
              <span className="font-semibold">€39 Child</span>
            </div>
          </div>
          <Link href={`/tours/${slug}`}>
            <Button className="bg-[#0070c0] cursor-pointer hover:bg-[#005a9e] text-white font-medium px-6 py-2 rounded-md">
              MORE INFO
            </Button>
          </Link>
        </div>
    
      </div>
    </div>
  );
}
