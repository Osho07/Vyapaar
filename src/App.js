import React, { useState } from 'react';
import PaymentOptions from './components/PaymentOptions';
import Contacts from './components/Contacts';
import Businesses from './components/Businesses';
import BillsAndRecharges from './components/BillsAndRecharges';
import OffersAndRewards from './components/OffersAndRewards';
import ManageMoney from './components/ManageMoney';
import backgroundImage from './org.webp'; // Adjust the path if needed
import './index.css'; // Ensure this file is imported

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-75 p-4">
         <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl font-semibold">Vyapaar</h1>
          <input
            type="text"
            placeholder="Search contacts"
            className="px-4 py-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <PaymentOptions />
        <Contacts searchTerm={searchTerm} />
        <Businesses />
        <BillsAndRecharges />
        <OffersAndRewards />
        <ManageMoney />
      </div>
    </div>
  );
};

export default App;
