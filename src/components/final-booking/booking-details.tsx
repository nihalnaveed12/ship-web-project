import Image from "next/image";
import { CalendarIcon, Clock, MapPin } from "lucide-react";

type BookingDetailsProps = {
    name: string;
    location: string;
    image: string;
    
    duration: number;
    totalAmount: number;
    depositValue: number;
    totalPayableNow: number;
};

export default function BookingDetails({ image , name , location  , duration , totalAmount , depositValue , totalPayableNow  }: BookingDetailsProps) {
  return (
    <div className="h-full ">
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={image}
            alt="Ocean Vision Show"
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="font-bold text-lg mb-2">Name & Location</h2>
            <div className="flex items-start gap-2">
              <div className="text-blue-500 mt-1">
                <MapPin size={16} />
              </div>
              <div>
                <p className="font-medium">{name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1 text-gray-600 text-sm">
              <MapPin size={14} className="text-orange-500" />
              <span>{location}</span>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Travel Date</h2>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <CalendarIcon size={14} className="text-blue-500" />
              <span>Day of departure: 2/5/25</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-gray-600 text-sm">
              <Clock size={14} className="text-blue-500" />
              <span>Duration: {duration} hours</span>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Booking Information</h2>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1">Price Type:</td>
                  <td className="py-1 text-right">Standard Ticket</td>
                </tr>
                <tr>
                  <td className="py-1">No. of Adults:</td>
                  <td className="py-1 text-right">1</td>
                </tr>
                <tr>
                  <td className="py-1">No. of Children:</td>
                  <td className="py-1 text-right">0</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-1 font-medium">Total amount:</td>
                  <td className="py-1 text-right font-medium">
                    {totalAmount} €
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Deposit Value:</td>
                  <td className="py-1 text-right">{depositValue} €</td>
                </tr>
                <tr>
                  <td className="py-1">Service Charge:</td>
                  <td className="py-1 text-right">0.00 €</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-1 font-medium">Total Payable Now:</td>
                  <td className="py-1 text-right font-medium">
                    {totalPayableNow} €
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Remaining Balance:</td>
                  <td className="py-1 text-right">0.00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
