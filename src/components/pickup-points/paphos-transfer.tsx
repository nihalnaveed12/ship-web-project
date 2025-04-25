
const CruiseSchedule = () => {
  const cruiseDepartures = [
    {
      type: 'MORNING CRUISES',
      departures: [
        {
          time: '10:00',
          boats: 'OCEANVISION, OCEAN FLYER, SEA STAR, JOLLY ROGGER II'
        },
        {
          time: '11:00',
          boats: 'OCEANVISION, OCEAN FLYER, SEA STAR'
        }
      ]
    },
    {
      type: 'EVENING CRUISES',
      departures: [
        {
          time: '18:00',
          boats: 'OCEAN VISION'
        },
        {
          time: '19:00',
          boats: 'OCEAN VISION'
        }
      ]
    }
  ];

  const pickupLocations = [
    { hotel: 'Panareti Coral Bay', point: 'Outside Reception', morning: ['8:00', '9:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Corallia Beach Apts', point: 'Main Road', morning: ['8:00', '9:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Coral Beach', point: 'Main Road', morning: ['8:00', '9:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Thalassa', point: 'Corner On Main Road', morning: ['8:00', '9:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Crown Resort', point: 'Opp. Blazing Saddles', morning: ['8:10', '9:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Ascos Beach', point: 'Front Of Hotel', morning: ['8:10', '9:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Aqua Sol', point: 'Front Of Ascos Beach', morning: ['8:10', '9:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Marica\'s Boutique', point: 'Main Road In Front Of Theo Sunset', morning: ['8:20', '9:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Theo Sunset Bay', point: 'Main Road Front Of Hotel', morning: ['8:20', '9:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Queens Bay', point: 'Tennis Courts', morning: ['8:20', '9:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Vrachia Hotel', point: 'Main Road In Front Of Theo Sunset', morning: ['8:20', '9:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Cynthiana', point: 'Front Of Hotel', morning: ['8:20', '9:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Atlantica Mare Village', point: 'Main Road', morning: ['8:30', '9:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Atlantica Golden Beach', point: 'Main Road', morning: ['8:30', '9:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Helios Bay', point: 'Main Road', morning: ['8:30', '9:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Azia', point: 'Main Road', morning: ['8:30', '9:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Laura Beach', point: 'Bus Stop Opp. Waterpark', morning: ['8:30', '9:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Sunny Hill Apts', point: 'Main Rd Angelika Rest', morning: ['8:35', '9:35'], evening: ['16:35', '17:35'] },
    { hotel: 'St George Hotel', point: 'Outside Saint Giorgio Restaurant', morning: ['8:35', '9:35'], evening: ['16:35', '17:35'] },
    { hotel: 'St George Gardens', point: 'Front Of Hotel', morning: ['8:35', '9:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Eleni Holiday Village', point: 'Front Of Hotel', morning: ['8:35', '9:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Akteon', point: 'Tennis Courts', morning: ['8:35', '9:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Akti Beach', point: 'Front Of Hotel', morning: ['8:40', '9:40'], evening: ['16:40', '17:40'] },
    { hotel: 'Louis Paphos Breeze', point: 'Corner Of The Road Outside Hotel', morning: ['8:40', '9:40'], evening: ['16:40', '17:40'] },
    { hotel: 'King Evelthon', point: 'Outside Reception', morning: ['8:40', '9:40'], evening: ['16:40', '17:40'] },
    { hotel: 'St Nicholas Elegant Residence', point: 'Main Rd In Front Of Melania Restaurant', morning: ['8:50', '9:50'], evening: ['16:50', '17:50'] },
    { hotel: 'Paradise Kings Club', point: 'Main Rd In Front Of Melania Restaurant', morning: ['8:50', '9:50'], evening: ['16:50', '17:50'] },
    { hotel: 'Hilltop Gardens', point: 'Main Rd In Front Of Melania Restaurant', morning: ['8:50', '9:50'], evening: ['16:50', '17:50'] },
    { hotel: 'Capital Coast', point: 'Hickory Restaurant', morning: ['8:50', '9:50'], evening: ['16:50', '17:50'] },
    { hotel: 'Kings Palace', point: 'Bus Stop In Front Of Lidl', morning: ['8:50', '9:50'], evening: ['16:50', '17:50'] },
    { hotel: 'Venus Beach', point: 'Bus Stop In Front Of Lidl', morning: ['8:50', '9:50'], evening: ['16:50', '17:50'] },
    { hotel: 'Avlida', point: 'Main Rd Bus Stop', morning: ['8:50', '9:50'], evening: ['16:50', '17:50'] },
    { hotel: 'Panklitos', point: 'Carlina Restaurant Main Road', morning: ['8:55', '9:55'], evening: ['16:55', '17:55'] },
    { hotel: 'Kefalonitis', point: 'Bus Stop Opposite Mcdonalds', morning: ['8:55', '9:55'], evening: ['16:55', '17:55'] },
    { hotel: 'Tasmaria', point: 'Bus Stop Opposite Mcdonalds', morning: ['8:55', '9:55'], evening: ['16:55', '17:55'] },
    { hotel: 'Kings Hotel', point: 'Bus Stop Opposite Mcdonalds', morning: ['8:55', '9:55'], evening: ['16:55', '17:55'] },
    { hotel: 'New York Plaza', point: 'Bus Stop Opposite Mcdonalds', morning: ['8:55', '9:55'], evening: ['16:55', '17:55'] },
    { hotel: 'Damon', point: 'Bus Stop Opposite Mcdonalds', morning: ['8:55', '9:55'], evening: ['16:55', '17:55'] },
    { hotel: 'Kissos', point: 'Front Of Hotel', morning: ['9:00', '10:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Kefalos', point: 'Front Of Hotel', morning: ['9:00', '10:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Elysium', point: 'Main Gate', morning: ['9:00', '10:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Princessa Vera', point: 'Bus Stop Opposite Hotel', morning: ['9:00', '10:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Roman', point: 'Opp. Roman Front Of Saint James Medical Center', morning: ['9:00', '10:00'], evening: ['16:00', '17:00'] },
    { hotel: 'Agapinor', point: 'Main Road Alpha Bank', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Mayfair (Smartline)', point: 'Mayfair Taxi', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Paphiessa', point: 'Main Road (Back Of Hotel)', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'King Jason', point: 'Bus Stop Main Road (Back Of Hotel)', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Elysia Park', point: 'Opposite Aesthetics Gold Gym - Bus Stop', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Crystallo Apts', point: 'Outside Crystallo Apts', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Nereus', point: 'Outside Crystallo Apts', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Sofianna', point: 'Outside Crystallo Apts', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Pagona Apts', point: 'Front Of Apts', morning: ['9:10', '10:10'], evening: ['16:10', '17:10'] },
    { hotel: 'Veronica', point: 'Outside Hotel', morning: ['9:15', '10:15'], evening: ['16:15', '17:15'] },
    { hotel: 'Avanti Hotel', point: 'Bus Stop Outside Main Entrance', morning: ['9:15', '10:15'], evening: ['16:15', '17:15'] },
    { hotel: 'Phaethon', point: 'Bus Stop Outisde Hotel', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Pioneer', point: 'Main Road Outisde Hotel', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Asimina Suites', point: 'Front Of Aqua Mare', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Aqua Mare', point: 'Main Road Outisde Hotel', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Ivi Mare', point: 'Main Road Outisde Hotel', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Cypria Bay', point: 'Main Road Outisde Hotel', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Cypria Maris', point: 'Main Road Outisde Hotel', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Ledra Beach', point: 'Main Road In Front Of Cypria Maris', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Aliathon', point: 'Main Road In Front Of Cypria Maris', morning: ['9:20', '10:20'], evening: ['16:20', '17:20'] },
    { hotel: 'Athena Beach', point: 'Main Road Outisde Hotel', morning: ['9:25', '10:25'], evening: ['16:25', '17:25'] },
    { hotel: 'Athena Royal', point: 'Main Road Outisde Hotel', morning: ['9:25', '10:25'], evening: ['16:25', '17:25'] },
    { hotel: 'Avanti Village', point: 'Tea For Two Bus Stop', morning: ['9:25', '10:25'], evening: ['16:25', '17:25'] },
    { hotel: 'Imperial Beach', point: 'Tea For Two Bus Stop', morning: ['9:25', '10:25'], evening: ['16:25', '17:25'] },
    { hotel: 'Pan Dream', point: 'Tea For Two Bus Stop', morning: ['9:25', '10:25'], evening: ['16:25', '17:25'] },
    { hotel: 'Olympic Lagoon', point: 'Main Road In Front Of Hotel', morning: ['9:30', '10:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Amphora', point: 'Main Road In Front Of Hotel', morning: ['9:30', '10:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Aloe', point: 'Main Road Outisde Hotel', morning: ['9:30', '10:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Paphos Gardens', point: 'Main Road In Front Of Aloe', morning: ['9:30', '10:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Amavi', point: 'Main Road Outisde Hotel', morning: ['9:30', '10:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Alexander The Great', point: 'Main Road Outisde Hotel', morning: ['9:30', '10:30'], evening: ['16:30', '17:30'] },
    { hotel: 'Almyra', point: 'Main Road', morning: ['9:35', '10:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Annabelle', point: 'Bus Stop In Front Of Annabelle', morning: ['9:35', '10:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Anemi', point: 'Bus Stop In Front Of Annabelle', morning: ['9:35', '10:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Pyramos', point: 'Bus Stop In Front Of Annabelle', morning: ['9:35', '10:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Dionysos', point: 'Bus Stop In Front Of Annabelle', morning: ['9:35', '10:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Basillica Gardens', point: 'Make Own Way', morning: ['9:35', '10:35'], evening: ['16:35', '17:35'] },
    { hotel: 'Aphrodite Hills', point: 'Outside Of Reception', morning: ['8:30', '9:30'], evening: ['15:30', '16:30'] }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">HOTEL</h1>
      <h2 className="text-2xl font-semibold mb-6">PAPHOS PICKUP POINT</h2>

      <div className="mb-8">
        {cruiseDepartures.map((cruiseType, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold bg-blue-50 p-2 rounded mb-2">{cruiseType.type}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Departure Time</th>
                    <th className="py-2 px-4 border-b">Boats</th>
                    <th className="py-2 px-4 border-b">Pickup Locations</th>
                  </tr>
                </thead>
                <tbody>
                  {cruiseType.departures.map((departure, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{departure.time}</td>
                      <td className="py-2 px-4 border-b">{departure.boats}</td>
                      <td className="py-2 px-4 border-b">See pickup schedule below</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-4">Pickup Schedule</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hotel/Apartment</th>
              <th className="py-2 px-4 border-b">Pickup Point</th>
              <th className="py-2 px-4 border-b">Morning Pickup Times</th>
              <th className="py-2 px-4 border-b">Evening Pickup Times</th>
            </tr>
          </thead>
          <tbody>
            {pickupLocations.map((location, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{location.hotel}</td>
                <td className="py-2 px-4 border-b">{location.point}</td>
                <td className="py-2 px-4 border-b">{location.morning.join(', ')}</td>
                <td className="py-2 px-4 border-b">{location.evening.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <table className="bg-white border border-gray-200">
          <tbody>
            <tr>
              <th className="py-2 px-4 border-b">Set Sail From Paphos Harbour</th>
              <td className="py-2 px-4 border-b">10:00, 11:00, 17:00, 18:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CruiseSchedule;