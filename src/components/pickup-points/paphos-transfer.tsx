import React from 'react';

const UpdatedCruiseSchedule = () => {
  const cruiseData = [
    { hotel: 'Panareti Coral Bay', point: 'Outside Reception', morning10: '8:00', morning11: '9:00', evening18: '16:00', evening19: '17:00' },
    { hotel: 'Corallia Beach Apts', point: 'Main Road', morning10: '8:00', morning11: '9:00', evening18: '16:00', evening19: '17:00' },
    { hotel: 'Coral Beach', point: 'Main Road', morning10: '8:00', morning11: '9:00', evening18: '16:00', evening19: '17:00' },
    { hotel: 'Thalassa', point: 'Corner On Main Road', morning10: '8:00', morning11: '9:00', evening18: '16:00', evening19: '17:00' },
    { hotel: 'Cali Resort (ex Crown Resort)', point: 'Opp. Blazing Saddles', morning10: '8:10', morning11: '9:10', evening18: '16:10', evening19: '17:10' },
    { hotel: 'Ascos Beach', point: 'Front Of Hotel', morning10: '8:10', morning11: '9:10', evening18: '16:10', evening19: '17:10' },
    { hotel: 'Aqua Sol', point: 'Front Of Ascos Beach', morning10: '8:10', morning11: '9:10', evening18: '16:10', evening19: '17:10' },
    { hotel: 'Marica\'s Boutique', point: 'Main Road In Front Of Theo Sunset', morning10: '8:20', morning11: '9:20', evening18: '16:20', evening19: '17:20' },
    { hotel: 'Theo Sunset Bay', point: 'Main Road Front Of Hotel', morning10: '8:20', morning11: '9:20', evening18: '16:20', evening19: '17:20' },
    { hotel: 'Queens Bay', point: 'Tennis Courts', morning10: '8:20', morning11: '9:20', evening18: '16:20', evening19: '17:20' },
    { hotel: 'Vrachia Hotel', point: 'Main Road In Front Of Theo Sunset', morning10: '8:20', morning11: '9:20', evening18: '16:20', evening19: '17:20' },
    { hotel: 'Cynthiana', point: 'Front Of Hotel', morning10: '8:20', morning11: '9:20', evening18: '16:20', evening19: '17:20' },
    { hotel: 'Atlantica Mare Village', point: 'Main Road', morning10: '8:30', morning11: '9:30', evening18: '16:30', evening19: '17:30' },
    { hotel: 'Atlantica Golden Beach', point: 'Main Road', morning10: '8:30', morning11: '9:30', evening18: '16:30', evening19: '17:30' },
    { hotel: 'Helios Bay', point: 'Main Road', morning10: '8:30', morning11: '9:30', evening18: '16:30', evening19: '17:30' },
    { hotel: 'Azia', point: 'Main Road', morning10: '8:30', morning11: '9:30', evening18: '16:30', evening19: '17:30' },
    { hotel: 'Laura Beach', point: 'Bus Stop Opp. Waterpark', morning10: '8:30', morning11: '9:30', evening18: '16:30', evening19: '17:30' },
    { hotel: 'Sunny Hill Apts', point: 'Main Rd Angelika Rest', morning10: '8:35', morning11: '9:35', evening18: '16:35', evening19: '17:35' },
    { hotel: 'St George Hotel', point: 'Outside Saint Giorgio Restaurant', morning10: '8:35', morning11: '9:35', evening18: '16:35', evening19: '17:35' },
    { hotel: 'St George Gardens', point: 'Front Of Hotel', morning10: '8:35', morning11: '9:35', evening18: '16:35', evening19: '17:35' },
    { hotel: 'Eleni Holiday Village', point: 'Front Of Hotel', morning10: '8:35', morning11: '9:35', evening18: '16:35', evening19: '17:35' },
    { hotel: 'Akteon', point: 'Tennis Courts', morning10: '8:35', morning11: '9:35', evening18: '16:35', evening19: '17:35' },
    { hotel: 'Akti Beach', point: 'Front Of Hotel', morning10: '8:40', morning11: '9:40', evening18: '16:40', evening19: '17:40' },
    { hotel: 'Louis Paphos Breeze', point: 'Corner Of The Road Outside Hotel', morning10: '8:40', morning11: '9:40', evening18: '16:40', evening19: '17:40' },
    { hotel: 'King Evelthon', point: 'Outside Reception', morning10: '8:40', morning11: '9:40', evening18: '16:40', evening19: '17:40' },
    { hotel: 'St Nicholas Elegant Residence', point: 'Main Rd In Front Of Melania Restaurant', morning10: '8:50', morning11: '9:50', evening18: '16:50', evening19: '17:50' },
    { hotel: 'Paradise Kings Club', point: 'Main Rd In Front Of Melania Restaurant', morning10: '8:50', morning11: '9:50', evening18: '16:50', evening19: '17:50' },
    { hotel: 'Hilltop Gardens', point: 'Main Rd In Front Of Melania Restaurant', morning10: '8:50', morning11: '9:50', evening18: '16:50', evening19: '17:50' },
    { hotel: 'Capital Coast', point: 'Hickory Restaurant', morning10: '8:50', morning11: '9:50', evening18: '16:50', evening19: '17:50' },
    { hotel: 'Kings Palace', point: 'Bus Stop In Front Of Lidl', morning10: '8:50', morning11: '9:50', evening18: '16:50', evening19: '17:50' },
    { hotel: 'Venus Beach', point: 'Bus Stop In Front Of Lidl', morning10: '8:50', morning11: '9:50', evening18: '16:50', evening19: '17:50' },
    { hotel: 'Avlida', point: 'Main Rd Bus Stop', morning10: '8:50', morning11: '9:50', evening18: '16:50', evening19: '17:50' },
    { hotel: 'Panklitos', point: 'Carlina Restaurant Main Road', morning10: '8:55', morning11: '9:55', evening18: '16:55', evening19: '17:55' },
    { hotel: 'Kefalonitis', point: 'Bus Stop Opposite Mcdonalds', morning10: '8:55', morning11: '9:55', evening18: '16:55', evening19: '17:55' },
    { hotel: 'Tasmaria', point: 'Bus Stop Opposite Mcdonalds', morning10: '8:55', morning11: '9:55', evening18: '16:55', evening19: '17:55' },
    { hotel: 'Kings Hotel', point: 'Bus Stop Opposite Mcdonalds', morning10: '8:55', morning11: '9:55', evening18: '16:55', evening19: '17:55' },
    { hotel: 'New York Plaza', point: 'Bus Stop Opposite Mcdonalds', morning10: '8:55', morning11: '9:55', evening18: '16:55', evening19: '17:55' },
    { hotel: 'Damon', point: 'Bus Stop Opposite Mcdonalds', morning10: '8:55', morning11: '9:55', evening18: '16:55', evening19: '17:55' },
    { hotel: 'Kissos', point: 'Front Of Hotel', morning10: '9:00', morning11: '10:00', evening18: '17:00', evening19: '18:00' },
    { hotel: 'Kefalos', point: 'Front Of Hotel', morning10: '9:00', morning11: '10:00', evening18: '17:00', evening19: '18:00' },
    { hotel: 'Elysium', point: 'Main Gate', morning10: '9:00', morning11: '10:00', evening18: '17:00', evening19: '18:00' },
    { hotel: 'Princessa Vera', point: 'Bus Stop Opposite Hotel', morning10: '9:00', morning11: '10:00', evening18: '17:00', evening19: '18:00' },
    { hotel: 'Roman', point: 'Opp. Roman Front Of Saint James Medical Center', morning10: '9:00', morning11: '10:00', evening18: '17:00', evening19: '18:00' },
    { hotel: 'Agapinor', point: 'Main Road Alpha Bank', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Mayfair (Smartline)', point: 'Mayfair Taxi', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Paphiessa', point: 'Main Road (Back Of Hotel)', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'King Jason', point: 'Bus Stop Main Road (Back Of Hotel)', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Elysia Park', point: 'Opposite Aesthetics Gold Gym - Bus Stop', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Crystallo Apts', point: 'Outside Crystallo Apts', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Nereus', point: 'Outside Crystallo Apts', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Sofianna', point: 'Outside Crystallo Apts', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Pagona Apts', point: 'Front Of Apts', morning10: '9:10', morning11: '10:10', evening18: '17:10', evening19: '18:10' },
    { hotel: 'Veronica', point: 'Outside Hotel', morning10: '9:15', morning11: '10:15', evening18: '17:15', evening19: '18:15' },
    { hotel: 'Avanti Hotel', point: 'Bus Stop Outside Main Entrance', morning10: '9:15', morning11: '10:15', evening18: '17:15', evening19: '18:15' },
    { hotel: 'Phaethon', point: 'Bus Stop Outisde Hotel', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Pioneer', point: 'Main Road Outisde Hotel', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Asimina Suites', point: 'Front Of Aqua Mare', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Aqua Mare', point: 'Main Road Outisde Hotel', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Ivi Mare', point: 'Main Road Outisde Hotel', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Cypria Bay', point: 'Main Road Outisde Hotel', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Cypria Maris', point: 'Main Road Outisde Hotel', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Ledra Beach', point: 'Main Road In Front Of Cypria Maris', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Aliathon', point: 'Main Road In Front Of Cypria Maris', morning10: '9:20', morning11: '10:20', evening18: '17:20', evening19: '18:20' },
    { hotel: 'Athena Beach', point: 'Main Road Outisde Hotel', morning10: '9:25', morning11: '10:25', evening18: '17:25', evening19: '18:25' },
    { hotel: 'Athena Royal', point: 'Main Road Outisde Hotel', morning10: '9:25', morning11: '10:25', evening18: '17:25', evening19: '18:25' },
    { hotel: 'Avanti Village', point: 'Tea For Two Bus Stop', morning10: '9:25', morning11: '10:25', evening18: '17:25', evening19: '18:25' },
    { hotel: 'Imperial Beach', point: 'Tea For Two Bus Stop', morning10: '9:25', morning11: '10:25', evening18: '17:25', evening19: '18:25' },
    { hotel: 'Pan Dream', point: 'Tea For Two Bus Stop', morning10: '9:25', morning11: '10:25', evening18: '17:25', evening19: '18:25' },
    { hotel: 'Olympic Lagoon', point: 'Main Road In Front Of Hotel', morning10: '9:30', morning11: '10:30', evening18: '17:30', evening19: '18:30' },
    { hotel: 'Amphora', point: 'Main Road In Front Of Hotel', morning10: '9:30', morning11: '10:30', evening18: '17:30', evening19: '18:30' },
    { hotel: 'Aloe', point: 'Main Road Outisde Hotel', morning10: '9:30', morning11: '10:30', evening18: '17:30', evening19: '18:30' },
    { hotel: 'Paphos Gardens', point: 'Main Road In Front Of Aloe', morning10: '9:30', morning11: '10:30', evening18: '17:30', evening19: '18:30' },
    { hotel: 'Amavi', point: 'Main Road Outisde Hotel', morning10: '9:30', morning11: '10:30', evening18: '17:30', evening19: '18:30' },
    { hotel: 'Alexander The Great', point: 'Main Road Outisde Hotel', morning10: '9:30', morning11: '10:30', evening18: '17:30', evening19: '18:30' },
    { hotel: 'Almyra', point: 'Main Road', morning10: '9:35', morning11: '10:35', evening18: '17:35', evening19: '18:35' },
    { hotel: 'Annabelle', point: 'Bus Stop In Front Of Annabelle', morning10: '9:35', morning11: '10:35', evening18: '17:35', evening19: '18:35' },
    { hotel: 'Anemi', point: 'Bus Stop In Front Of Annabelle', morning10: '9:35', morning11: '10:35', evening18: '17:35', evening19: '18:35' },
    { hotel: 'Pyramos', point: 'Bus Stop In Front Of Annabelle', morning10: '9:35', morning11: '10:35', evening18: '17:35', evening19: '18:35' },
    { hotel: 'Dionysos', point: 'Bus Stop In Front Of Annabelle', morning10: '9:35', morning11: '10:35', evening18: '17:35', evening19: '18:35' },
    { hotel: 'Basillica Gardens', point: 'Make Own Way', morning10: '9:35', morning11: '10:35', evening18: '17:35', evening19: '18:35' },
    { hotel: 'Aphrodite Hills', point: 'Outside Of Reception', morning10: '8:30', morning11: '9:30', evening18: '16:30', evening19: '17:30' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">HOTEL PICKUP SCHEDULE</h1>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">HOTEL</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">PICKUP POINT</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                MORNING CRUISES DEPARTING 10:00<br/>
                <span className="text-sm font-normal">SEA STAR</span>
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                MORNING CRUISES DEPARTING 11:00<br/>
                <span className="text-sm font-normal">OCEAN VISION, OCEAN FLYER, SEA STAR</span>
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                EVENING CRUISES DEPARTING 18:00<br/>
                <span className="text-sm font-normal">OCEAN VISION</span>
              </th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                EVENING CRUISES DEPARTING 19:00<br/>
                <span className="text-sm font-normal">OCEAN VISION</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cruiseData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-4 border-b text-gray-800 font-medium">{row.hotel}</td>
                <td className="py-3 px-4 border-b text-gray-600">{row.point}</td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">{row.morning10}</td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">{row.morning11}</td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">{row.evening18}</td>
                <td className="py-3 px-4 border-b text-center font-medium text-[#217EBC]">{row.evening19}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <p className="font-medium text-gray-800">Set Sail From Paphos Harbour: 
          <span className="ml-2 font-bold text-[#217EBC]">10:00, 11:00, 18:00, 19:00</span>
        </p>
      </div>
    </div>
  );
};

export default UpdatedCruiseSchedule;