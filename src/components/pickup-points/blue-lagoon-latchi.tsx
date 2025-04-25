import React from "react";

const ComprehensiveCruiseSchedule = () => {
  const cruiseTypes = [
    "BLUE LAGOON MORNING",
    "BLUE LAGOON AFTERNOON",
    "CELEBRITY MORNING",
    "CELEBRITY AFTERNOON",
    "CELEBRITY VIP SUNSET",
  ];

  const departureTimes = [
    "10.00 FROM LATCH HARBOUR",
    "14.00 FROM LATCHI HARBOUR",
    "10.00 FROM LATCHI HARBOUR",
    "13:30 FROM LATCHI HARBOUR",
    "17:00 FROM LATCHI HARBOUR",
  ];

  const pickupLocations = [
    {
      hotel: "Veronica",
      point: "Outside Hotel",
      times: ["07:30", "11:30", "07:30", "11:00", "14:30"],
    },
    {
      hotel: "Avanti Hotel",
      point: "Bus Stop Outside Main Entrance",
      times: ["07:30", "11:30", "07:30", "11:00", "14:30"],
    },
    {
      hotel: "Phaethon",
      point: "Bus Stop Outside Hotel",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Pioneer",
      point: "Main Road Outside Hotel",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Asimina Suites",
      point: "Front Of Aqua Mare",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Aqua Mare",
      point: "Main Road Outside Hotel",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Ivi Mare",
      point: "Main Road Outside Hotel",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Cypria Bay",
      point: "Main Road Outside Hotel",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Cypria Maris",
      point: "Main Road Outside Hotel",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Ledra Beach",
      point: "Main Road Front Of Cypria Maris",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Aliathon",
      point: "Main Road Front Of Cypria Maris",
      times: ["07:40", "11:40", "07:40", "11:40", "14:40"],
    },
    {
      hotel: "Athena Beach",
      point: "Main Road Outside Hotel",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Athena Royal",
      point: "Main Road Outside Hotel",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Avanti Village",
      point: "Tea For Two Bus Stop",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Imperial Beach",
      point: "Tea For Two Bus Stop",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Pan Dream",
      point: "Tea For Two Bus Stop",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Olympic Lagoon",
      point: "Main Road In Front Of Hotel",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Amphora",
      point: "Main Road In Front Of Hotel",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Aloe",
      point: "Main Road Outside Hotel",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Paphos Gardens",
      point: "Main Road In Front Of Aloe",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Amavi",
      point: "Main Road Outside Hotel",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Alexander The Great",
      point: "Main Road Outside Hotel",
      times: ["07:50", "11:50", "07:50", "11:50", "14:50"],
    },
    {
      hotel: "Almyra",
      point: "Main Road",
      times: ["08:00", "12:00", "08:00", "11:30", "15:00"],
    },
    {
      hotel: "Annabelle",
      point: "Bus Stop In Front Of Annabelle",
      times: ["08:00", "12:00", "08:00", "11:30", "15:00"],
    },
    {
      hotel: "Anemi",
      point: "Bus Stop In Front Of Annabelle",
      times: ["08:00", "12:00", "08:00", "11:30", "15:00"],
    },
    {
      hotel: "Pyramos",
      point: "Bus Stop In Front Of Annabelle",
      times: ["08:00", "12:00", "08:00", "11:30", "15:00"],
    },
    {
      hotel: "Dionysos",
      point: "Bus Stop In Front Of Annabelle",
      times: ["08:00", "12:00", "08:00", "11:30", "15:00"],
    },
    {
      hotel: "Basillica Gardens",
      point: "Paphos Harbour Kiosk",
      times: ["08:00", "12:00", "08:00", "11:30", "15:00"],
    },
    {
      hotel: "Crystallo Apts",
      point: "Outside Crystallo Apts",
      times: ["08:10", "12:10", "08:10", "11:40", "15:10"],
    },
    {
      hotel: "Nereus",
      point: "Outside Crystallo Apts",
      times: ["08:10", "12:10", "08:10", "11:40", "15:10"],
    },
    {
      hotel: "Sofianna",
      point: "Outside Crystallo Apts",
      times: ["08:10", "12:10", "08:10", "11:40", "15:10"],
    },
    {
      hotel: "Pagona Apts",
      point: "Front Of Apts",
      times: ["08:10", "12:10", "08:10", "11:40", "15:10"],
    },
    {
      hotel: "Agapinor",
      point: "Main Road Alpha Bank",
      times: ["08:15", "12:15", "08:15", "11:45", "15:15"],
    },
    {
      hotel: "Mayfair (Smartline)",
      point: "Mayfair Taxi",
      times: ["08:15", "12:15", "08:15", "11:45", "15:15"],
    },
    {
      hotel: "Paphiessa",
      point: "Main Road (Back Of Hotel)",
      times: ["08:15", "12:15", "08:15", "11:45", "15:15"],
    },
    {
      hotel: "King Jason",
      point: "Bus Stop Main Road (Back Of Hotel)",
      times: ["08:15", "12:15", "08:15", "11:45", "15:15"],
    },
    {
      hotel: "Elysia Park",
      point: "Opposite Aesthetics Gold Gym - Bus Stop",
      times: ["08:15", "12:15", "08:15", "11:45", "15:15"],
    },
    {
      hotel: "Roman",
      point: "Main Road In Front Of Hotel (Opp. Mall)",
      times: ["08:20", "12:20", "08:20", "11:50", "15:20"],
    },
    {
      hotel: "Princessa Vera",
      point: "Outside Hotel",
      times: ["08:20", "12:20", "08:20", "11:50", "15:20"],
    },
    {
      hotel: "Kings Hotel",
      point: "Bus Stop Mcdonalds",
      times: ["08:20", "12:20", "08:20", "11:50", "15:20"],
    },
    {
      hotel: "New York Plaza",
      point: "Bus Stop Mcdonalds",
      times: ["08:20", "12:20", "08:20", "11:50", "15:20"],
    },
    {
      hotel: "Damon",
      point: "Bus Stop Mcdonalds",
      times: ["08:20", "12:20", "08:20", "11:50", "15:20"],
    },
    {
      hotel: "Tasmaria",
      point: "Bus Stop Mcdonalds",
      times: ["08:20", "12:20", "08:20", "11:50", "15:20"],
    },
    {
      hotel: "Kefalonitis",
      point: "Bus Stop Mcdonalds",
      times: ["08:20", "12:20", "08:20", "11:50", "15:20"],
    },
    {
      hotel: "Kissos",
      point: "Front Of Hotel",
      times: ["08:25", "12:25", "08:25", "11:55", "15:25"],
    },
    {
      hotel: "Kefalos",
      point: "Front Of Hotel",
      times: ["08:25", "12:25", "08:25", "11:55", "15:25"],
    },
    {
      hotel: "Elysium",
      point: "Main Gate",
      times: ["08:25", "12:25", "08:25", "11:55", "15:25"],
    },
    {
      hotel: "Panklitos",
      point: "Carlina Restaurant Main Road",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "Avlida",
      point: "Main Road Bus Stop",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "Venus Beach",
      point: "Bus Stop Opposite Lidl",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "Kings Palace",
      point: "Bus Stop Opposite Lidl",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "Capital Coast",
      point: "Main Road",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "Hilltop Gardens",
      point: "Main Road In Front Of Melania Restaurant",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "Paradise Kings Club",
      point: "Main Road In Front Of Melania Restaurant",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "St Nicholas Elegant Residence",
      point: "Main Road In Front Of Melania Restaurant",
      times: ["08:30", "12:30", "08:30", "12:00", "15:30"],
    },
    {
      hotel: "King Evelthon",
      point: "Outside Reception",
      times: ["08:35", "12:35", "08:35", "12:05", "15:35"],
    },
    {
      hotel: "Louis Paphos Breeze",
      point: "Front Of Hotel",
      times: ["08:35", "12:35", "08:35", "12:05", "15:35"],
    },
    {
      hotel: "Akti Beach",
      point: "Front Of Hotel",
      times: ["08:35", "12:35", "08:35", "12:05", "15:35"],
    },
    {
      hotel: "Sunny Hill Apts",
      point: "Main Rd Angelika Rest",
      times: ["08:45", "12:45", "08:45", "12:15", "15:45"],
    },
    {
      hotel: "St George Hotel",
      point: "Outside Saint Giorgio Restaurant",
      times: ["08:45", "12:45", "08:45", "12:15", "15:45"],
    },
    {
      hotel: "St George Gardens",
      point: "Front Of Hotel",
      times: ["08:45", "12:45", "08:45", "12:15", "15:45"],
    },
    {
      hotel: "Eleni Holiday Village",
      point: "Front Of Hotel",
      times: ["08:45", "12:45", "08:45", "12:15", "15:45"],
    },
    {
      hotel: "Akteon",
      point: "Tennis Courts",
      times: ["08:45", "12:45", "08:45", "12:15", "15:45"],
    },
    {
      hotel: "Laura Beach",
      point: "Bus Stop Waterpark",
      times: ["08:50", "12:50", "08:50", "12:20", "15:50"],
    },
    {
      hotel: "Azia",
      point: "Main Road",
      times: ["08:50", "12:50", "08:50", "12:20", "15:50"],
    },
    {
      hotel: "Helios Bay",
      point: "Main Road",
      times: ["08:50", "12:50", "08:50", "12:20", "15:50"],
    },
    {
      hotel: "Atlantica Golden Beach",
      point: "Hotel Steps",
      times: ["08:50", "12:50", "08:50", "12:20", "15:50"],
    },
    {
      hotel: "Atlantica Mare Village",
      point: "Main Road",
      times: ["08:50", "12:50", "08:50", "12:20", "15:50"],
    },
    {
      hotel: "Cynthiana",
      point: "Front Of Hotel",
      times: ["09:00", "13:00", "09:00", "12:30", "16:00"],
    },
    {
      hotel: "Vrachia Hotel",
      point: "Main Road In Front Of Theo Sunset",
      times: ["09:00", "13:00", "09:00", "12:30", "16:00"],
    },
    {
      hotel: "Queens Bay",
      point: "Tennis Courts",
      times: ["09:00", "13:00", "09:00", "12:30", "16:00"],
    },
    {
      hotel: "Theo Sunset Bay",
      point: "Main Road Front Of Hotel",
      times: ["09:00", "13:00", "09:00", "12:30", "16:00"],
    },
    {
      hotel: "Marica's Boutique",
      point: "Main Road In Front Of Theo Sunset",
      times: ["09:00", "13:00", "09:00", "12:30", "16:00"],
    },
    {
      hotel: "Aqua Sol",
      point: "Front Of Ascos Beach",
      times: ["09:05", "13:05", "09:05", "12:35", "16:05"],
    },
    {
      hotel: "Ascos Beach",
      point: "Front Of Hotel",
      times: ["09:05", "13:05", "09:05", "12:35", "16:05"],
    },
    {
      hotel: "Crown Resort",
      point: "Opp. Blazing Saddles",
      times: ["09:05", "13:05", "09:05", "12:35", "16:05"],
    },
    {
      hotel: "Thalassa",
      point: "Corner On Main Road",
      times: ["09:05", "13:05", "09:05", "12:35", "16:05"],
    },
    {
      hotel: "Coral Beach",
      point: "Main Road",
      times: ["09:05", "13:05", "09:05", "12:35", "16:05"],
    },
    {
      hotel: "Panareti Coral Bay",
      point: "Outside Reception",
      times: ["09:05", "13:05", "09:05", "12:35", "16:05"],
    },
    {
      hotel: "Corallia Beach Apts",
      point: "Main Road",
      times: ["09:05", "13:05", "09:05", "12:35", "16:05"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">HOTELS</h1>
      <h2 className="text-2xl font-semibold mb-6">PAPHOS PICK UP POINT</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {cruiseTypes.map((type, index) => (
          <div key={index} className="bg-blue-50 p-3 rounded-lg">
            <h3 className="font-bold text-lg mb-1">{type}</h3>
            <p className="text-blue-700 font-medium">{departureTimes[index]}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left sticky left-0 bg-gray-100 z-10">
                Hotel/Apartment
              </th>
              <th className="py-3 px-4 text-left sticky left-[200px] bg-gray-100 z-10">
                Pickup Point
              </th>
              {cruiseTypes.map((type, index) => (
                <th key={index} className="py-3 px-4 text-left min-w-[120px]">
                  {type}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pickupLocations.map((location, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium sticky left-0 bg-white">
                  {location.hotel}
                </td>
                <td className="py-3 px-4 sticky left-[200px] bg-white">
                  {location.point}
                </td>
                {location.times.map((time, timeIndex) => (
                  <td key={timeIndex} className="py-3 px-4">
                    {time}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-3">
          Departure Times From Latchi Harbour
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {cruiseTypes.map((type, index) => (
            <div key={index}>
              <h4 className="font-semibold">{type}</h4>
              <p className="font-medium text-blue-700">
                {departureTimes[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCruiseSchedule;
