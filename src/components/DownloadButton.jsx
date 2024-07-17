import React from 'react';

const DownloadButton = ({ certificateUrl, fileName, buttonText }) => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button id="#hero-btn"  onClick={handleDownload}>{buttonText}</button>
  );
};

export default DownloadButton;
