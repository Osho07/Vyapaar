import React from 'react';

const businesses = [
  { name: 'REKHAB', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'ARAVIND K', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
  { name: 'Airtel Prepaid', img: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' },
];

const Businesses = () => {
  return (
    <div className="mt-6">
      <div className="text-lg mb-4">Businesses</div>
      <div className="flex space-x-4">
        {businesses.map((business) => (
          <div key={business.name} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mb-2 bg-blue-600 flex items-center justify-center">
              <span>{business.name.charAt(0)}</span>
            </div>
            <div className="text-sm">{business.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Businesses;
