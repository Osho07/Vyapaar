import React, { useState } from 'react';
import orgImage from './org.webp'; // Adjust the path if needed

const bills = [
  { img: orgImage, label: 'Mobile recharge' },
  { img: orgImage, label: 'DTH / Cable TV' },
  { img: orgImage, label: 'Electricity' },
  { img: orgImage, label: 'FASTag recharge' },
  { img: orgImage, label: 'Metro' },
  { img: orgImage, label: 'Gas Bill' },
  { img: orgImage, label: 'Petrol/Diesel' },
];

const BillsAndRecharges = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold mb-2">Bills & Recharges</h2>
      <div className="grid grid-cols-4 gap-4">
        {bills.slice(0, showAll ? bills.length : 3).map((bill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <img src={bill.img} alt={bill.label} className="w-10 h-10 rounded-full" />
            </div>
            <div className="text-sm text-center">{bill.label}</div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-4">
          <button
            onClick={handleViewAll}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            View all
          </button>
        </div>
      )}
    </div>
  );
};

export default BillsAndRecharges
