import React from 'react';

const BlueLagoonSchedule = () => {
  const pickupLocations = [
    { hotel: 'Veronica', point: 'Outside Hotel', time: '7:30' },
    { hotel: 'Avanti Hotel', point: 'Bus Stop Outside Main Entrance', time: '7:30' },
    { hotel: 'Phaethon', point: 'Bus Stop Outside Hotel', time: '7:40' },
    { hotel: 'Pioneer', point: 'Main Road Outside Hotel', time: '7:40' },
    { hotel: 'Asimina Suites', point: 'Front Of Aqua Mare', time: '7:40' },
    { hotel: 'Aqua Mare', point: 'Main Road Outside Hotel', time: '7:40' },
    { hotel: 'Ivi Mare', point: 'Main Road Outside Hotel', time: '7:40' },
    { hotel: 'Cypria Bay', point: 'Main Road Outside Hotel', time: '7:40' },
    { hotel: 'Cypria Maris', point: 'Main Road Outside Hotel', time: '7:40' },
    { hotel: 'Ledra Beach', point: 'Main Road Front Of Cypria Maris', time: '7:40' },
    { hotel: 'Aliathon', point: 'Main Road Front Of Cypria Maris', time: '7:40' },
    { hotel: 'Athena Beach', point: 'Main Road Outside Hotel', time: '8:00' },
    { hotel: 'Athena Royal', point: 'Main Road Outside Hotel', time: '8:00' },
    { hotel: 'Avanti Village', point: 'Tea For Two Bus Stop', time: '8:00' },
    { hotel: 'Imperial Beach', point: 'Tea For Two Bus Stop', time: '8:00' },
    { hotel: 'Pan Dream', point: 'Tea For Two Bus Stop', time: '8:00' },
    { hotel: 'Olympic Lagoon', point: 'Main Road In Front Of Hotel', time: '8:00' },
    { hotel: 'Amphora', point: 'Main Road In Front Of Hotel', time: '8:00' },
    { hotel: 'Aloe', point: 'Main Road Outside Hotel', time: '8:00' },
    { hotel: 'Paphos Gardens', point: 'Main Road In Front Of Aloe', time: '8:00' },
    { hotel: 'Amavi', point: 'Main Road Outside Hotel', time: '8:00' },
    { hotel: 'Alexander The Great', point: 'Main Road Outside Hotel', time: '8:00' },
    { hotel: 'Almyra', point: 'Main Road', time: '8:10' },
    { hotel: 'Annabelle', point: 'Bus Stop In Front Of Annabelle', time: '8:10' },
    { hotel: 'Anemi', point: 'Bus Stop In Front Of Annabelle', time: '8:10' },
    { hotel: 'Pyramos', point: 'Bus Stop In Front Of Annabelle', time: '8:10' },
    { hotel: 'Dionysos', point: 'Bus Stop In Front Of Annabelle', time: '8:10' },
    { hotel: 'Basillica Gardens', point: 'Paphos Harbour Kiosk', time: '8:10' },
    { hotel: 'Crystallo Apts', point: 'Outside Crystallo Apts', time: '8:15' },
    { hotel: 'Nereus', point: 'Outside Crystallo Apts', time: '8:15' },
    { hotel: 'Sofianna', point: 'Outside Crystallo Apts', time: '8:15' },
    { hotel: 'Pagona Apts', point: 'Front Of Apts', time: '8:15' },
    { hotel: 'Agapinor', point: 'Main Road Alpha Bank', time: '8:20' },
    { hotel: 'Mayfair (Smartline)', point: 'Mayfair Taxi', time: '8:20' },
    { hotel: 'Paphiessa', point: 'Main Road (Back Of Hotel)', time: '8:20' },
    { hotel: 'King Jason', point: 'Bus Stop Main Road (Back Of Hotel)', time: '8:20' },
    { hotel: 'Elysia Park', point: 'Opposite Aesthetics Gold Gym - Bus Stop', time: '8:20' },
    { hotel: 'Roman', point: 'Main Road In Front Of Hotel (Opp. Mall)', time: '8:25' },
    { hotel: 'Princessa Vera', point: 'Outside Hotel', time: '8:25' },
    { hotel: 'Kings Hotel', point: 'Bus Stop Mcdonalds', time: '8:25' },
    { hotel: 'New York Plaza', point: 'Bus Stop Mcdonalds', time: '8:25' },
    { hotel: 'Damon', point: 'Bus Stop Mcdonalds', time: '8:25' },
    { hotel: 'Tasmaria', point: 'Bus Stop Mcdonalds', time: '8:25' },
    { hotel: 'Kefalonitis', point: 'Bus Stop Mcdonalds', time: '8:25' },
    { hotel: 'Kissos', point: 'Front Of Hotel', time: '8:30' },
    { hotel: 'Kefalos', point: 'Front Of Hotel', time: '8:30' },
    { hotel: 'Elysium', point: 'Main Gate', time: '8:30' },
    { hotel: 'Panklitos', point: 'Carlina Restaurant Main Road', time: '8:30' },
    { hotel: 'Avlida', point: 'Main Road Bus Stop', time: '8:30' },
    { hotel: 'Venus Beach', point: 'Bus Stop Opposite Lidl', time: '8:30' },
    { hotel: 'Kings Palace', point: 'Bus Stop Opposite Lidl', time: '8:30' },
    { hotel: 'Capital Coast', point: 'Main Road', time: '8:30' },
    { hotel: 'Hilltop Gardens', point: 'Main Road In Front Of Melania Restaurant', time: '8:30' },
    { hotel: 'Paradise Kings Club', point: 'Main Road In Front Of Melania Restaurant', time: '8:30' },
    { hotel: 'St Nicholas Elegant Residence', point: 'Main Road In Front Of Melania Restaurant', time: '8:30' },
    { hotel: 'King Evelthon', point: 'Outside Reception', time: '8:35' },
    { hotel: 'Louis Paphos Breeze', point: 'Front Of Hotel', time: '8:35' },
    { hotel: 'Akti Beach', point: 'Front Of Hotel', time: '8:35' },
    { hotel: 'Sunny Hill Apts', point: 'Main Rd Angelika Rest', time: '8:45' },
    { hotel: 'St George Hotel', point: 'Outside Saint Giorgio Restaurant', time: '8:45' },
    { hotel: 'St George Gardens', point: 'Front Of Hotel', time: '8:45' },
    { hotel: 'Eleni Holiday Village', point: 'Front Of Hotel', time: '8:45' },
    { hotel: 'Akteon', point: 'Tennis Courts', time: '8:45' },
    { hotel: 'Laura Beach', point: 'Bus Stop Waterpark', time: '8:50' },
    { hotel: 'Azia', point: 'Main Road', time: '8:50' },
    { hotel: 'Helios Bay', point: 'Main Road', time: '8:50' },
    { hotel: 'Atlantica Golden Beach', point: 'Hotel Steps', time: '8:50' },
    { hotel: 'Atlantica Mare Village', point: 'Main Road', time: '8:50' },
    { hotel: 'Cynthiana', point: 'Front Of Hotel', time: '9:00' },
    { hotel: 'Vrachia Hotel', point: 'Main Road In Front Of Theo Sunset', time: '9:00' },
    { hotel: 'Queens Bay', point: 'Tennis Courts', time: '9:00' },
    { hotel: 'Theo Sunset Bay', point: 'Main Road Front Of Hotel', time: '9:00' },
    { hotel: 'Marica\'s Boutique', point: 'Main Road In Front Of Theo Sunset', time: '9:00' },
    { hotel: 'Aqua Sol', point: 'Front Of Ascos Beach', time: '9:05' },
    { hotel: 'Ascos Beach', point: 'Front Of Hotel', time: '9:05' },
    { hotel: 'Crown Resort', point: 'Opp. Blazing Saddles', time: '9:05' },
    { hotel: 'Thalassa', point: 'Corner On Main Road', time: '9:05' },
    { hotel: 'Coral Beach', point: 'Main Road', time: '9:05' },
    { hotel: 'Panareti Coral Bay', point: 'Outside Reception', time: '9:05' },
    { hotel: 'Corallia Beach Apts', point: 'Main Road', time: '9:05' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">HOTEL</h1>
      <h2 className="text-2xl font-semibold mb-6">PAPHOS PICK UP POINT</h2>
      <h3 className="text-xl font-bold mb-6 bg-blue-100 p-2 rounded">SEA STAR BLUE LAGOON ROUND TRIP LATCHI PAPHOS</h3>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Hotel/Apartment</th>
              <th className="py-2 px-4 border-b text-left">Pickup Point</th>
              <th className="py-2 px-4 border-b text-left">Pickup Time</th>
            </tr>
          </thead>
          <tbody>
            {pickupLocations.map((location, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{location.hotel}</td>
                <td className="py-2 px-4 border-b">{location.point}</td>
                <td className="py-2 px-4 border-b font-medium">{location.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-lg font-bold mb-2">Set Sail From Latchi Harbour</h4>
        <p className="font-medium">10:00 FROM LATCHI HARBOUR</p>
      </div>
    </div>
  );
};

export default BlueLagoonSchedule;