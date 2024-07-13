import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-xl">"Pay through Vyapaar"</div>
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src="https://photos.onedrive.com/photo/57B45B8622266A1A!1206?view=moment%2CMXxzPTAwMDEtMDEtMDFUMDA6MDA6MDBaJmU9OTk5OS0xMi0zMVQyMzo1OTo1OS45OTlaJnJ0PTE2Jg&fallback=%2Fmoments%2FRecentPhotos%2FMXxzPTAwMDEtMDEtMDFUMDA6MDA6MDBaJmU9OTk5OS0xMi0zMVQyMzo1OTo1OS45OTlaJnJ0PTE2Jg" alt="Profile" />
      </div>
    </div>
  );
};

export default Header;
