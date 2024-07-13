import React from 'react';

const offers = [
  { icon: 'rewards', label: 'Rewards' },
  { icon: 'offers', label: 'Offers' },
  { icon: 'referrals', label: 'Referrals' },
];

const OffersAndRewards = () => {
  return (
    <div className="mt-6">
      <div className="text-lg mb-4">Offers & rewards</div>
      <div className="grid grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer.label} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-2">
              <span className="material-icons">{offer.icon}</span>
            </div>
            <div className="text-sm">{offer.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersAndRewards;
