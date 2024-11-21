import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeComponent() {
  const websiteURL = "https://www.yourwebsite.com"; // Replace with your website URL

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
      <h2 className="text-2xl font-bold mb-4">Scan to Visit Our Website</h2>
      
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <QRCode
          value={websiteURL}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H" // High error correction
        />
      </div>
      
      <p className="mt-4 text-gray-700">
        Point your phone’s camera at this QR code to visit our website!
      </p>
    </div>
  );
}

export default QRCodeComponent;
