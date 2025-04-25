import React from 'react';

const AdditionalCruiseSchedule = () => {
  const pickupLocations = [
    { hotel: 'Park Lane Resort & Spa', point: 'Outside Hotel', time: '08:45' },
    { hotel: 'St. Raphael', point: 'Outside Hotel', time: '08:45' },
    { hotel: 'Grand Resort', point: 'Outside Hotel', time: '08:45' },
    { hotel: 'Elias', point: 'Outside Hotel', time: '08:45' },
    { hotel: 'Amare', point: 'Main Road Front Of Hotel', time: '08:50' },
    { hotel: 'Atlantica Bay', point: 'Bus Stop On Main Road Outside Hotel', time: '08:50' },
    { hotel: 'Amathus', point: 'Hotel Steps On Main Road', time: '08:55' },
    { hotel: 'Mediterranean Beach', point: 'Main Road Front Of Hotel', time: '08:55' },
    { hotel: 'Four Seasons', point: 'Main Road Front Of Hotel', time: '08:55' },
    { hotel: 'Navarria', point: 'Bus Stop On Main Road', time: '09:00' },
    { hotel: 'Blue Crane', point: 'Bus Stop On Main Road', time: '09:00' },
    { hotel: 'Caravel', point: 'Outside Poseidonia', time: '09:00' },
    { hotel: 'Poseidonia', point: 'Main Road Outside Hotel', time: '09:00' },
    { hotel: 'Atlantica Oasis', point: 'Outside Hotel', time: '09:05' },
    { hotel: 'Atlantica Gardens', point: 'Outside Atlantica Oasis', time: '09:05' },
    { hotel: 'Londa', point: 'Main Road', time: '09:10' },
    { hotel: 'Apollonia', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Ser Criso', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Geo Tanya', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'The Palms Hotel', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'The Palms Studio', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Irene Studios', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Mariana', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Sunquest Gardens', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Tasiana', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Tasiana Star', point: 'Bus Stop Main Road Apollonia', time: '09:10' },
    { hotel: 'Valana', point: 'Bus Stop On Main Road', time: '09:10' },
    { hotel: 'Tsanotel', point: 'Bus Stop Outside Harmony Bay', time: '09:10' },
    { hotel: 'Harmony Bay', point: 'Bus Stop Outside Hotel', time: '09:10' },
    { hotel: 'Moniatis', point: 'Bus Stop Outside Harmony Bay', time: '09:10' },
    { hotel: 'Miramare', point: 'Outside Hotel', time: '09:10' },
    { hotel: 'Estella', point: 'Main Road Outside Hotel', time: '09:10' },
    { hotel: 'Park Beach', point: 'Outside Hotel', time: '09:15' },
    { hotel: 'Jasmine', point: 'Outside Park Beach Hotel', time: '09:15' },
    { hotel: 'Crown Plaza', point: 'Main Road', time: '09:15' },
    { hotel: 'Sylva', point: 'Outside Hotel', time: '09:15' },
    { hotel: 'Ajax', point: 'Main Road Crown Plaza', time: '09:15' },
    { hotel: 'Kapetanios Odessa', point: 'In Front Of Tgi Fridays On Main Road', time: '09:20' },
    { hotel: 'Kapetanios Limassol', point: 'Main Road Front Of Hotel', time: '09:20' },
    { hotel: 'Curium Palace', point: 'Outside Kapetanios Limassol', time: '09:20' },
    { hotel: 'Pier Beach', point: 'Main Road Front Of Hotel', time: '09:25' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">HOTELS</h1>
      <h2 className="text-2xl font-semibold mb-6">PAPHOS PICK UP POINT</h2>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-4">TIME</h3>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left w-1/3">Hotel/Apartment</th>
                <th className="py-3 px-4 border-b text-left w-1/3">Pickup Point</th>
                <th className="py-3 px-4 border-b text-left w-1/3">Pickup Time</th>
              </tr>
            </thead>
            <tbody>
              {pickupLocations.map((location, index) => (
                <tr 
                  key={index} 
                  className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
                >
                  <td className="py-3 px-4">{location.hotel}</td>
                  <td className="py-3 px-4">{location.point}</td>
                  <td className="py-3 px-4 font-medium">{location.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h4 className="text-lg font-bold mb-2">Set Sail From Paphos Harbour</h4>
        <p className="font-medium text-blue-700">11:00</p>
      </div>
    </div>
  );
};

export default AdditionalCruiseSchedule;