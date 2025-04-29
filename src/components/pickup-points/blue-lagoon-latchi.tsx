import React from "react";

const BlueLagoonCelebritySchedule = () => {
  const cruiseData = [
    {
      hotel: "Veronica",
      point: "Outside Hotel",
      morningBL: "07:30",
      afternoonBL: "11:30",
      morningCelebrity: "07:30",
      afternoonCelebrity: "11:00",
    },
    {
      hotel: "Avanti Hotel",
      point: "Bus Stop Outside Main Entrance",
      morningBL: "07:30",
      afternoonBL: "11:30",
      morningCelebrity: "07:30",
      afternoonCelebrity: "11:00",
    },
    {
      hotel: "Phaethon",
      point: "Bus Stop Outisde Hotel",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Pioneer",
      point: "Main Road Outisde Hotel",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Asimina Suites",
      point: "Front Of Aqua Mare",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Aqua Mare",
      point: "Main Road Outisde Hotel",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Ivi Mare",
      point: "Main Road Outisde Hotel",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Cypria Bay",
      point: "Main Road Outisde Hotel",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Cypria Maris",
      point: "Main Road Outisde Hotel",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Ledra Beach",
      point: "Main Road Front Of Cypria Maris",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Aliathon",
      point: "Main Road Front Of Cypria Maris",
      morningBL: "07:40",
      afternoonBL: "11:40",
      morningCelebrity: "07:40",
      afternoonCelebrity: "11:10",
    },
    {
      hotel: "Athena Beach",
      point: "Main Road Outisde Hotel",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Athena Royal",
      point: "Main Road Outisde Hotel",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Avanti Village",
      point: "Tea For Two Bus Stop",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Imperial Beach",
      point: "Tea For Two Bus Stop",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Pan Dream",
      point: "Tea For Two Bus Stop",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Olympic Lagoon",
      point: "Main Road In Front Of Hotel",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Amphora",
      point: "Main Road In Front Of Hotel",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Aloe",
      point: "Main Road Outisde Hotel",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Paphos Gardens",
      point: "Main Road In Front Of Aloe",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Amavi",
      point: "Main Road Outisde Hotel",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Alexander The Great",
      point: "Main Road Outisde Hotel",
      morningBL: "07:50",
      afternoonBL: "11:50",
      morningCelebrity: "07:50",
      afternoonCelebrity: "11:20",
    },
    {
      hotel: "Almyra",
      point: "Main Road",
      morningBL: "08:00",
      afternoonBL: "12:00",
      morningCelebrity: "08:00",
      afternoonCelebrity: "11:30",
    },
    {
      hotel: "Annabelle",
      point: "Bus Stop In Front Of Annabelle",
      morningBL: "08:00",
      afternoonBL: "12:00",
      morningCelebrity: "08:00",
      afternoonCelebrity: "11:30",
    },
    {
      hotel: "Anemi",
      point: "Bus Stop In Front Of Annabelle",
      morningBL: "08:00",
      afternoonBL: "12:00",
      morningCelebrity: "08:00",
      afternoonCelebrity: "11:30",
    },
    {
      hotel: "Pyramos",
      point: "Bus Stop In Front Of Annabelle",
      morningBL: "08:00",
      afternoonBL: "12:00",
      morningCelebrity: "08:00",
      afternoonCelebrity: "11:30",
    },
    {
      hotel: "Dionysos",
      point: "Bus Stop In Front Of Annabelle",
      morningBL: "08:00",
      afternoonBL: "12:00",
      morningCelebrity: "08:00",
      afternoonCelebrity: "11:30",
    },
    {
      hotel: "Basillica Gardens",
      point: "Paphos Harbour Kiosk",
      morningBL: "08:00",
      afternoonBL: "12:00",
      morningCelebrity: "08:00",
      afternoonCelebrity: "11:30",
    },
    {
      hotel: "Crystallo Apts",
      point: "Outside Crystallo Apts",
      morningBL: "08:10",
      afternoonBL: "12:10",
      morningCelebrity: "08:10",
      afternoonCelebrity: "11:40",
    },
    {
      hotel: "Nereus",
      point: "Outside Crystallo Apts",
      morningBL: "08:10",
      afternoonBL: "12:10",
      morningCelebrity: "08:10",
      afternoonCelebrity: "11:40",
    },
    {
      hotel: "Sofianna",
      point: "Outside Crystallo Apts",
      morningBL: "08:10",
      afternoonBL: "12:10",
      morningCelebrity: "08:10",
      afternoonCelebrity: "11:40",
    },
    {
      hotel: "Pagona Apts",
      point: "Front Of Apts",
      morningBL: "08:10",
      afternoonBL: "12:10",
      morningCelebrity: "08:10",
      afternoonCelebrity: "11:40",
    },
    {
      hotel: "Agapinor",
      point: "Main Road Alpha Bank",
      morningBL: "08:15",
      afternoonBL: "12:15",
      morningCelebrity: "08:15",
      afternoonCelebrity: "11:45",
    },
    {
      hotel: "Mayfair (Smartline)",
      point: "Mayfair Taxi",
      morningBL: "08:15",
      afternoonBL: "12:15",
      morningCelebrity: "08:15",
      afternoonCelebrity: "11:45",
    },
    {
      hotel: "Paphiessa",
      point: "Main Road (Back Of Hotel)",
      morningBL: "08:15",
      afternoonBL: "12:15",
      morningCelebrity: "08:15",
      afternoonCelebrity: "11:45",
    },
    {
      hotel: "King Jason",
      point: "Bus Stop Main Road (Back Of Hotel)",
      morningBL: "08:15",
      afternoonBL: "12:15",
      morningCelebrity: "08:15",
      afternoonCelebrity: "11:45",
    },
    {
      hotel: "Elysia Park",
      point: "Opposite Aesthetics Gold Gym - Bus Stop",
      morningBL: "08:15",
      afternoonBL: "12:15",
      morningCelebrity: "08:15",
      afternoonCelebrity: "11:45",
    },
    {
      hotel: "Roman",
      point: "Main Road In Front Of Hotel (Opp. Mall)",
      morningBL: "08:20",
      afternoonBL: "12:20",
      morningCelebrity: "08:20",
      afternoonCelebrity: "11:50",
    },
    {
      hotel: "Princessa Vera",
      point: "Outside Hotel",
      morningBL: "08:20",
      afternoonBL: "12:20",
      morningCelebrity: "08:20",
      afternoonCelebrity: "11:50",
    },
    {
      hotel: "Kings Hotel",
      point: "Bus Stop Mcdonalds",
      morningBL: "08:20",
      afternoonBL: "12:20",
      morningCelebrity: "08:20",
      afternoonCelebrity: "11:50",
    },
    {
      hotel: "New York Plaza",
      point: "Bus Stop Mcdonalds",
      morningBL: "08:20",
      afternoonBL: "12:20",
      morningCelebrity: "08:20",
      afternoonCelebrity: "11:50",
    },
    {
      hotel: "Damon",
      point: "Bus Stop Mcdonalds",
      morningBL: "08:20",
      afternoonBL: "12:20",
      morningCelebrity: "08:20",
      afternoonCelebrity: "11:50",
    },
    {
      hotel: "Tasmaria",
      point: "Bus Stop Mcdonalds",
      morningBL: "08:20",
      afternoonBL: "12:20",
      morningCelebrity: "08:20",
      afternoonCelebrity: "11:50",
    },
    {
      hotel: "Kefalonitis",
      point: "Bus Stop Mcdonalds",
      morningBL: "08:20",
      afternoonBL: "12:20",
      morningCelebrity: "08:20",
      afternoonCelebrity: "11:50",
    },
    {
      hotel: "Kissos",
      point: "Front Of Hotel",
      morningBL: "08:25",
      afternoonBL: "12:25",
      morningCelebrity: "08:25",
      afternoonCelebrity: "11:55",
    },
    {
      hotel: "Kefalos",
      point: "Front Of Hotel",
      morningBL: "08:25",
      afternoonBL: "12:25",
      morningCelebrity: "08:25",
      afternoonCelebrity: "11:55",
    },
    {
      hotel: "Elysium",
      point: "Main Gate",
      morningBL: "08:25",
      afternoonBL: "12:25",
      morningCelebrity: "08:25",
      afternoonCelebrity: "11:55",
    },
    {
      hotel: "Panklitos",
      point: "Carlina Restaurant Main Road",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "Avlida",
      point: "Main Road Bus Stop",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "Venus Beach",
      point: "Bus Stop Opposite Lidl",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "Kings Palace",
      point: "Bus Stop Opposite Lidl",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "Capital Coast",
      point: "Main Road",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "Hilltop Gardens",
      point: "Main Road In Front Of Melania Restaurant",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "Paradise Kings Club",
      point: "Main Road In Front Of Melania Restaurant",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "St Nicholas Elegant Residence",
      point: "Main Road In Front Of Melania Restaurant",
      morningBL: "08:30",
      afternoonBL: "12:30",
      morningCelebrity: "08:30",
      afternoonCelebrity: "12:00",
    },
    {
      hotel: "King Evelthon",
      point: "Outside Reception",
      morningBL: "08:35",
      afternoonBL: "12:35",
      morningCelebrity: "08:35",
      afternoonCelebrity: "12:05",
    },
    {
      hotel: "Louis Paphos Breeze",
      point: "Front Of Hotel",
      morningBL: "08:35",
      afternoonBL: "12:35",
      morningCelebrity: "08:35",
      afternoonCelebrity: "12:05",
    },
    {
      hotel: "Akti Beach",
      point: "Front Of Hotel",
      morningBL: "08:35",
      afternoonBL: "12:35",
      morningCelebrity: "08:35",
      afternoonCelebrity: "12:05",
    },
    {
      hotel: "Sunny Hill Apts",
      point: "Main Rd Angelika Rest",
      morningBL: "08:45",
      afternoonBL: "12:45",
      morningCelebrity: "08:45",
      afternoonCelebrity: "12:15",
    },
    {
      hotel: "St George Hotel",
      point: "Outside Saint Giorgio Restaurant",
      morningBL: "08:45",
      afternoonBL: "12:45",
      morningCelebrity: "08:45",
      afternoonCelebrity: "12:15",
    },
    {
      hotel: "St George Gardens",
      point: "Front Of Hotel",
      morningBL: "08:45",
      afternoonBL: "12:45",
      morningCelebrity: "08:45",
      afternoonCelebrity: "12:15",
    },
    {
      hotel: "Eleni Holiday Village",
      point: "Front Of Hotel",
      morningBL: "08:45",
      afternoonBL: "12:45",
      morningCelebrity: "08:45",
      afternoonCelebrity: "12:15",
    },
    {
      hotel: "Akteon",
      point: "Tennis Courts",
      morningBL: "08:45",
      afternoonBL: "12:45",
      morningCelebrity: "08:45",
      afternoonCelebrity: "12:15",
    },
    {
      hotel: "Laura Beach",
      point: "Bus Stop Waterpark",
      morningBL: "08:50",
      afternoonBL: "12:50",
      morningCelebrity: "08:50",
      afternoonCelebrity: "12:20",
    },
    {
      hotel: "Azia",
      point: "Main Road",
      morningBL: "08:50",
      afternoonBL: "12:50",
      morningCelebrity: "08:50",
      afternoonCelebrity: "12:20",
    },
    {
      hotel: "Helios Bay",
      point: "Main Road",
      morningBL: "08:50",
      afternoonBL: "12:50",
      morningCelebrity: "08:50",
      afternoonCelebrity: "12:20",
    },
    {
      hotel: "Atlantica Golden Beach",
      point: "Hotel Steps",
      morningBL: "08:50",
      afternoonBL: "12:50",
      morningCelebrity: "08:50",
      afternoonCelebrity: "12:20",
    },
    {
      hotel: "Atlantica Mare Village",
      point: "Main Road",
      morningBL: "08:50",
      afternoonBL: "12:50",
      morningCelebrity: "08:50",
      afternoonCelebrity: "12:20",
    },
    {
      hotel: "Cynthiana",
      point: "Front Of Hotel",
      morningBL: "09:00",
      afternoonBL: "13:00",
      morningCelebrity: "09:00",
      afternoonCelebrity: "12:30",
    },
    {
      hotel: "Vrachia Hotel",
      point: "Main Road In Front Of Theo Sunset",
      morningBL: "09:00",
      afternoonBL: "13:00",
      morningCelebrity: "09:00",
      afternoonCelebrity: "12:30",
    },
    {
      hotel: "Queens Bay",
      point: "Tennis Courts",
      morningBL: "09:00",
      afternoonBL: "13:00",
      morningCelebrity: "09:00",
      afternoonCelebrity: "12:30",
    },
    {
      hotel: "Theo Sunset Bay",
      point: "Main Road Front Of Hotel",
      morningBL: "09:00",
      afternoonBL: "13:00",
      morningCelebrity: "09:00",
      afternoonCelebrity: "12:30",
    },
    {
      hotel: "Marica's Boutique",
      point: "Main Road In Front Of Theo Sunset",
      morningBL: "09:00",
      afternoonBL: "13:00",
      morningCelebrity: "09:00",
      afternoonCelebrity: "12:30",
    },
    {
      hotel: "Aqua Sol",
      point: "Front Of Ascos Beach",
      morningBL: "09:05",
      afternoonBL: "13:05",
      morningCelebrity: "09:05",
      afternoonCelebrity: "12:35",
    },
    {
      hotel: "Ascos Beach",
      point: "Front Of Hotel",
      morningBL: "09:05",
      afternoonBL: "13:05",
      morningCelebrity: "09:05",
      afternoonCelebrity: "12:35",
    },
    {
      hotel: "Cali Resort (ex Crown Resort)",
      point: "Opp. Blazing Saddles",
      morningBL: "09:05",
      afternoonBL: "13:05",
      morningCelebrity: "09:05",
      afternoonCelebrity: "12:35",
    },
    {
      hotel: "Thalassa",
      point: "Corner On Main Road",
      morningBL: "09:05",
      afternoonBL: "13:05",
      morningCelebrity: "09:05",
      afternoonCelebrity: "12:35",
    },
    {
      hotel: "Coral Beach",
      point: "Main Road",
      morningBL: "09:05",
      afternoonBL: "13:05",
      morningCelebrity: "09:05",
      afternoonCelebrity: "12:35",
    },
    {
      hotel: "Panareti Coral Bay",
      point: "Outside Reception",
      morningBL: "09:05",
      afternoonBL: "13:05",
      morningCelebrity: "09:05",
      afternoonCelebrity: "12:35",
    },
    {
      hotel: "Corallia Beach Apts",
      point: "Main Road",
      morningBL: "09:05",
      afternoonBL: "13:05",
      morningCelebrity: "09:05",
      afternoonCelebrity: "12:35",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        HOTELS BLUE LAGOON & CELEBRITY CRUISES
      </h1>
      <h2 className="text-xl font-semibold text-[#217EBC] mb-6">
        PAPHOS PICK UP SCHEDULE
      </h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                HOTELS
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                PICK UP POINT
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                BLUE LAGOON MORNING
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                BLUE LAGOON AFTERNOON
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                CELEBRITY MORNING
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                CELEBRITY AFTERNOON
              </th>
            </tr>
          </thead>
          <tbody>
            {cruiseData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4 border-b text-gray-800 font-medium">
                  {row.hotel}
                </td>
                <td className="py-3 px-4 border-b text-gray-600">
                  {row.point}
                </td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">
                  {row.morningBL}
                </td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">
                  {row.afternoonBL}
                </td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">
                  {row.morningCelebrity}
                </td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">
                  {row.afternoonCelebrity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <p className="font-medium text-gray-800">
            Set Sail From Latchi Harbour:
          </p>
          <p className="font-bold text-[#217EBC]">10:00 FROM LATCHI HARBOUR</p>
        </div>
        <div>
          <p className="font-medium text-gray-800">
            Set Sail From Latchi Harbour:
          </p>
          <p className="font-bold text-[#217EBC]">10:00 FROM LATCHI HARBOUR</p>
        </div>
        <div>
          <p className="font-medium text-gray-800">
            Set Sail From Latchi Harbour:
          </p>
          <p className="font-bold text-[#217EBC]">14:00 FROM LATCHI HARBOUR</p>
        </div>
        <div>
          <p className="font-medium text-gray-800">
            Set Sail From Latchi Harbour:
          </p>
          <p className="font-bold text-[#217EBC]">13:30 FROM LATCHI HARBOUR</p>
        </div>
      </div>
    </div>
  );
};

export default BlueLagoonCelebritySchedule;
