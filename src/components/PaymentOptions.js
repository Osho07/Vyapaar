import React from 'react';
import ott from './org.webp';

const options = [
  { img: ott, label: 'Scan any QR code' },
  { img: ott, label: 'Pay contacts' },
  { img: ott, label: 'Pay phone number' },
  { img: ott, label: 'Bank transfer' },
  { img: ott, label: 'Pay UPI ID or number' },
  { img: ott, label: 'Self transfer' }, // Corrected 'Img' to 'img'
  { img: ott, label: 'Pay bills' },
  { img: ott, label: 'Mobile recharge' },
];

const PaymentOptions = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {options.map((option) => (
        <div key={option.label} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <img src={option.img} alt={option.label} className="w-10 h-10 rounded-full" />
          </div>
          <div className="text-sm text-center">{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PaymentOptions;
