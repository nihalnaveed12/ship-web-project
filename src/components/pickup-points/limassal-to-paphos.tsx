import React from 'react';

const LimassolToPaphosTransfers = () => {
  const transferData = [
    { hotel: 'Park Lane Resort & Spa', point: 'Outside Hotel', time: '08:45' },
    { hotel: 'St. Raphael', point: 'Outside Hotel', time: '08:50' },
    { hotel: 'Grand Resort', point: 'Outside Hotel', time: '08:55' },
    { hotel: 'Elias', point: 'Outside Hotel', time: '09:00' },
    { hotel: 'Amare', point: 'Main Road Front Of Hotel', time: '09:05' },
    { hotel: 'Atlantica Bay', point: 'Bus Stop On Main Road Outside Hotel', time: '09:10' },
    { hotel: 'Amathus', point: 'Hotel Steps On Main Road', time: '09:15' },
    { hotel: 'Mediterranean Beach', point: 'Main Road Front Of Hotel', time: '09:20' },
    { hotel: 'Four Seasons', point: 'Main Road Front Of Hotel', time: '09:25' },
    { hotel: 'Navarria', point: 'Bus Stop On Main Road', time: '11:00' },
    { hotel: 'Blue Crane', point: 'Bus Stop On Main Road', time: '11:00' },
    { hotel: 'Caravel', point: 'Outside Poseidonia', time: '11:00' },
    { hotel: 'Poseidonia', point: 'Main Road Outside Hotel', time: '11:00' },
    { hotel: 'Atlantica Oasis', point: 'Outside Hotel', time: '11:00' },
    { hotel: 'Atlantica Gardens', point: 'Outside Atlantica Oasis', time: '11:00' },
    { hotel: 'L\'onda', point: 'Main Road', time: '11:00' },
    { hotel: 'Apollonia', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Ser Criso', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Geo Tanya', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'The Palms Hotel', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'The Palms Studio', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Irene Studios', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Mariana', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Sunquest Gardens', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Tasiana', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Tasiana Star', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Valana', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Tsanotel', point: 'Bus Stop Main Road Apollonia', time: '11:00' },
    { hotel: 'Harmony Bay', point: 'Bus Stop On Main Road', time: '11:00' },
    { hotel: 'Moniatis', point: 'Bus Stop Outside Harmony Bay', time: '11:00' },
    { hotel: 'Miramare', point: 'Bus Stop Outside Hotel', time: '11:00' },
    { hotel: 'Estella', point: 'Bus Stop Outside Harmony Bay', time: '11:00' },
    { hotel: 'Park Beach', point: 'Outside Hotel', time: '11:00' },
    { hotel: 'Jasmine', point: 'Main Road Outside Hotel', time: '11:00' },
    { hotel: 'Crown Plaza', point: 'Outside Hotel', time: '11:00' },
    { hotel: 'Sylva', point: 'Outside Park Beach Hotel', time: '11:00' },
    { hotel: 'Ajax', point: 'Main Road', time: '11:00' },
    { hotel: 'Kapetanios Odessa', point: 'Outside Hotel', time: '11:00' },
    { hotel: 'Kapetanios Limassol', point: 'Main Road Crown Plaza', time: '11:00' },
    { hotel: 'Curium Palace', point: 'In Front Of Tgi Fridays On Main Road', time: '11:00' },
    { hotel: 'Pier Beach', point: 'Main Road Front Of Hotel', time: '11:00' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">TRANSFERS FROM LIMASSOL TO PAPHOS</h1>
      <h2 className="text-xl font-semibold text-[#217EBC] mb-6">2025 CRUISES - CRUISES DEPARTING FROM 11:00 to 15:00</h2>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">HOTELS</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">PICK UP POINT</th>
              <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                TIME
              </th>
            </tr>
          </thead>
          <tbody>
            {transferData.map((row, index) => (
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
        <p className="font-bold text-[#217EBC] text-center">Set Sail From Paphos Harbour</p>
      </div>
    </div>
  );
};

export default LimassolToPaphosTransfers;


