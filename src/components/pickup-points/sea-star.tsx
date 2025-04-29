import React from 'react';

const BlueLagoonSchedule = () => {
  const pickupData = [
    { hotel: 'Veronica', point: 'Outside Hotel', time: '07:30' },
    { hotel: 'Avanti Hotel', point: 'Bus Stop Outside Main Entrance', time: '07:30' },
    { hotel: 'Phaethon', point: 'Bus Stop Outisde Hotel', time: '07:40' },
    { hotel: 'Pioneer', point: 'Main Road Outisde Hotel', time: '07:40' },
    { hotel: 'Asimina Suites', point: 'Front Of Aqua Mare', time: '07:40' },
    { hotel: 'Aqua Mare', point: 'Main Road Outisde Hotel', time: '07:40' },
    { hotel: 'Ivi Mare', point: 'Main Road Outisde Hotel', time: '07:40' },
    { hotel: 'Cypria Bay', point: 'Main Road Outisde Hotel', time: '07:40' },
    { hotel: 'Cypria Maris', point: 'Main Road Outisde Hotel', time: '07:40' },
    { hotel: 'Ledra Beach', point: 'Main Road Front Of Cypria Maris', time: '07:40' },
    { hotel: 'Aliathon', point: 'Main Road Front Of Cypria Maris', time: '07:40' },
    { hotel: 'Athena Beach', point: 'Main Road Outisde Hotel', time: '07:50' },
    { hotel: 'Athena Royal', point: 'Main Road Outisde Hotel', time: '07:50' },
    { hotel: 'Avanti Village', point: 'Tea For Two Bus Stop', time: '07:50' },
    { hotel: 'Imperial Beach', point: 'Tea For Two Bus Stop', time: '07:50' },
    { hotel: 'Pan Dream', point: 'Tea For Two Bus Stop', time: '07:50' },
    { hotel: 'Olympic Lagoon', point: 'Main Road In Front Of Hotel', time: '07:50' },
    { hotel: 'Amphora', point: 'Main Road In Front Of Hotel', time: '07:50' },
    { hotel: 'Aloe', point: 'Main Road Outisde Hotel', time: '07:50' },
    { hotel: 'Paphos Gardens', point: 'Main Road In Front Of Aloe', time: '07:50' },
    { hotel: 'Amavi', point: 'Main Road Outisde Hotel', time: '07:50' },
    { hotel: 'Alexander The Great', point: 'Main Road Outisde Hotel', time: '07:50' },
    { hotel: 'Almyra', point: 'Main Road', time: '08:00' },
    { hotel: 'Annabelle', point: 'Bus Stop In Front Of Annabelle', time: '08:00' },
    { hotel: 'Anemi', point: 'Bus Stop In Front Of Annabelle', time: '08:00' },
    { hotel: 'Pyramos', point: 'Bus Stop In Front Of Annabelle', time: '08:00' },
    { hotel: 'Dionysos', point: 'Bus Stop In Front Of Annabelle', time: '08:00' },
    { hotel: 'Basillica Gardens', point: 'Paphos Harbour Kiosk', time: '08:00' },
    { hotel: 'Crystallo Apts', point: 'Outside Crystallo Apts', time: '08:10' },
    { hotel: 'Nereus', point: 'Outside Crystallo Apts', time: '08:10' },
    { hotel: 'Sofianna', point: 'Outside Crystallo Apts', time: '08:10' },
    { hotel: 'Pagona Apts', point: 'Front Of Apts', time: '08:10' },
    { hotel: 'Agapinor', point: 'Main Road Alpha Bank', time: '08:15' },
    { hotel: 'Mayfair (Smartline)', point: 'Mayfair Taxi', time: '08:15' },
    { hotel: 'Paphiessa', point: 'Main Road (Back Of Hotel)', time: '08:15' },
    { hotel: 'King Jason', point: 'Bus Stop Main Road (Back Of Hotel)', time: '08:15' },
    { hotel: 'Elysia Park', point: 'Opposite Aesthetics Gold Gym - Bus Stop', time: '08:15' },
    { hotel: 'Roman', point: 'Main Road In Front Of Hotel (Opp. Mall)', time: '08:20' },
    { hotel: 'Princessa Vera', point: 'Outside Hotel', time: '08:20' },
    { hotel: 'Kings Hotel', point: 'Bus Stop Mcdonalds', time: '08:20' },
    { hotel: 'New York Plaza', point: 'Bus Stop Mcdonalds', time: '08:20' },
    { hotel: 'Damon', point: 'Bus Stop Mcdonalds', time: '08:20' },
    { hotel: 'Tasmaria', point: 'Bus Stop Mcdonalds', time: '08:20' },
    { hotel: 'Kefalonitis', point: 'Bus Stop Mcdonalds', time: '08:20' },
    { hotel: 'Kissos', point: 'Front Of Hotel', time: '08:25' },
    { hotel: 'Kefalos', point: 'Front Of Hotel', time: '08:25' },
    { hotel: 'Elysium', point: 'Main Gate', time: '08:25' },
    { hotel: 'Panklitos', point: 'Carlina Restaurant Main Road', time: '08:30' },
    { hotel: 'Avlida', point: 'Main Road Bus Stop', time: '08:30' },
    { hotel: 'Venus Beach', point: 'Bus Stop Opposite Lidl', time: '08:30' },
    { hotel: 'Kings Palace', point: 'Bus Stop Opposite Lidl', time: '08:30' },
    { hotel: 'Capital Coast', point: 'Main Road', time: '08:30' },
    { hotel: 'Hilltop Gardens', point: 'Main Road In Front Of Melania Restaurant', time: '08:30' },
    { hotel: 'Paradise Kings Club', point: 'Main Road In Front Of Melania Restaurant', time: '08:30' },
    { hotel: 'St Nicholas Elegant Residence', point: 'Main Road In Front Of Melania Restaurant', time: '08:30' },
    { hotel: 'King Evelthon', point: 'Outside Reception', time: '08:35' },
    { hotel: 'Louis Paphos Breeze', point: 'Front Of Hotel', time: '08:35' },
    { hotel: 'Akti Beach', point: 'Front Of Hotel', time: '08:35' },
    { hotel: 'Sunny Hill Apts', point: 'Main Rd Angelika Rest', time: '08:45' },
    { hotel: 'St George Hotel', point: 'Outside Saint Giorgio Restaurant', time: '08:45' },
    { hotel: 'St George Gardens', point: 'Front Of Hotel', time: '08:45' },
    { hotel: 'Eleni Holiday Village', point: 'Front Of Hotel', time: '08:45' },
    { hotel: 'Akteon', point: 'Tennis Courts', time: '08:45' },
    { hotel: 'Laura Beach', point: 'Bus Stop Waterpark', time: '08:50' },
    { hotel: 'Azia', point: 'Main Road', time: '08:50' },
    { hotel: 'Helios Bay', point: 'Main Road', time: '08:50' },
    { hotel: 'Atlantica Golden Beach', point: 'Hotel Steps', time: '08:50' },
    { hotel: 'Atlantica Mare Village', point: 'Main Road', time: '08:50' },
    { hotel: 'Cynthiana', point: 'Front Of Hotel', time: '09:00' },
    { hotel: 'Vrachia Hotel', point: 'Main Road In Front Of Theo Sunset', time: '09:00' },
    { hotel: 'Queens Bay', point: 'Tennis Courts', time: '09:00' },
    { hotel: 'Theo Sunset Bay', point: 'Main Road Front Of Hotel', time: '09:00' },
    { hotel: 'Marica\'s Boutique', point: 'Main Road In Front Of Theo Sunset', time: '09:00' },
    { hotel: 'Aqua Sol', point: 'Front Of Ascos Beach', time: '09:05' },
    { hotel: 'Ascos Beach', point: 'Front Of Hotel', time: '09:05' },
    { hotel: 'Crown Resort', point: 'Opp. Blazing Saddles', time: '09:05' },
    { hotel: 'Thalassa', point: 'Corner On Main Road', time: '09:05' },
    { hotel: 'Coral Beach', point: 'Main Road', time: '09:05' },
    { hotel: 'Panareti Coral Bay', point: 'Outside Reception', time: '09:05' },
    { hotel: 'Corallia Beach Apts', point: 'Main Road', time: '09:05' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">2025 CRUISES SEA STAR BLUE LAGOON / ROUND TRIP</h1>
      <h2 className="text-xl font-semibold text-[#217EBC] mb-6">LATCHI - PAPHOS</h2>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">HOTELS</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">PAPHOS PICK UP POINT</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">PICKUP TIME</th>
            </tr>
          </thead>
          <tbody>
            {pickupData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-4 border-b text-gray-800 font-medium">{row.hotel}</td>
                <td className="py-3 px-4 border-b text-gray-600">{row.point}</td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <p className="font-medium text-gray-800">Set Sail From Latchi Harbour: 
          <span className="ml-2 font-bold text-[#217EBC]">10:00 FROM LATCHI HARBOUR</span>
        </p>
      </div>
    </div>
  );
};

export default BlueLagoonSchedule;