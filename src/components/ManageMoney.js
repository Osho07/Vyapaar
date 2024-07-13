import React from 'react';

const manageOptions = [
  { label: 'Get a loan', action: 'Apply now' },
  { label: 'Check your CIBIL score for free', action: '' },
  { label: 'See transaction history', action: '' },
];

const ManageMoney = () => {
  return (
    <div className="mt-6">
      <div className="text-lg mb-4">Manage your money</div>
      <div className="space-y-4">
        {manageOptions.map((option) => (
          <div key={option.label} className="flex justify-between items-center">
            <div className="text-sm">{option.label}</div>
            {option.action && (
              <div className="text-blue-500 text-sm">{option.action}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMoney;
