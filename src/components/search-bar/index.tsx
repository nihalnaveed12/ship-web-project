"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();

  const Destinations = ["ALL Destination", "Blue Lagoon Latchi", "Paphos", "Protaras"];
  const cruiseTimeLines = ["All Cruise Timelines", "Day", "Afternoon", "Evening"];
  const CruiseType = [
    "All Cruise Types",
    "Adults Only",
    "All Inclusive",
    "Family Friendly",
    "Half board",
    "Other",
  ];

  const [destination, setDestination] = useState("");
  const [timeline, setTimeline] = useState("");
  const [cruiseType, setCruiseType] = useState("");

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (destination) query.set("destination", destination);
    if (timeline) query.set("timeline", timeline);
    if (cruiseType) query.set("cruiseType", cruiseType);

    router.push(`/tours?${query.toString()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col md:flex-row gap-4">

        {/* Destination */}
        <div className="flex-1 border rounded-md p-2 relative">
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-white outline-none"
          >
            {Destinations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div className="flex-1 border rounded-md p-2 relative">
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full bg-white outline-none"
          >
            {cruiseTimeLines.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Cruise Type */}
        <div className="flex-1 border rounded-md p-2 relative">
          <select
            value={cruiseType}
            onChange={(e) => setCruiseType(e.target.value)}
            className="w-full bg-white outline-none"
          >
            {CruiseType.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="md:w-40">
          <button
            onClick={handleSearch}
            className="w-full h-full cursor-pointer bg-[#0A71B8] hover:bg-[#0A7148] text-white rounded-md flex items-center justify-center py-3 px-4"
          
          >
            <Search className="w-5 h-5 mr-2" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}



// import { Search } from "lucide-react";

// export default function SearchBar() {

//   const Destinations = ["ALL Destination" , "Blue Lagoon Latchi" , "Paphos"]
//   const cruiseTimeLines = ["All Cruise Timelines" , "Day" , "Afternoon" , "Evening"]
//   const CruiseType = ["All Cruise Types" , "Adults Only" , "All Inclusive", "Family Friendly", "Half board" , "Other"]
 
//   return (
//     <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
//       <div className="bg-white rounded-md shadow-md p-4 flex flex-col md:flex-row gap-4">
//         {/* Destinations */}
//         <div className="flex-1 border rounded-md p-2 relative">
//           <div className="flex items-center">
//             <div className="mr-2 text-emerald-600">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <circle cx="12" cy="12" r="3" />
//               </svg>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-sm font-medium">Destinations</span>
//               <span className="text-sm text-gray-500">
//                 Where are you going?
//               </span>
//             </div>
//           </div>
//           <div className="absolute right-2 top-1/2 -translate-y-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5 text-gray-400"
//             >
//               <path d="m6 9 6 6 6-6" />
//             </svg>
//           </div>
//         </div>

//         {/* Cruise Timelines */}
//         <div className="flex-1 border rounded-md p-2 relative">
//           <div className="flex items-center">
//             <div className="mr-2 text-blue-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5"
//               >
//                 <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                 <line x1="16" x2="16" y1="2" y2="6" />
//                 <line x1="8" x2="8" y1="2" y2="6" />
//                 <line x1="3" x2="21" y1="10" y2="10" />
//               </svg>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-sm font-medium">Cruise Timelines</span>
//               <span className="text-sm text-gray-500">All</span>
//             </div>
//           </div>
//           <div className="absolute right-2 top-1/2 -translate-y-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5 text-gray-400"
//             >
//               <path d="m6 9 6 6 6-6" />
//             </svg>
//           </div>
//         </div>

//         {/* Cruise Types */}
//         <div className="flex-1 border rounded-md p-2 relative">
//           <div className="flex items-center">
//             <div className="mr-2 text-[#0A71B8]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5"
//               >
//                 <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//                 <line x1="4" x2="4" y1="22" y2="15" />
//               </svg>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-sm font-medium">Cruise Types</span>
//               <span className="text-sm text-gray-500">All</span>
//             </div>
//           </div>
//           <div className="absolute right-2 top-1/2 -translate-y-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5 text-gray-400"
//             >
//               <path d="m6 9 6 6 6-6" />
//             </svg>
//           </div>
//         </div>

//         {/* Search Button */}
//         <div className="md:w-40">
//           <button className="w-full h-full bg-[#0A71B8] hover:bg-[#0A71B8] text-white rounded-md flex items-center justify-center py-3 px-4">
//             <Search className="w-5 h-5 mr-2" />
//             <span>Search</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
