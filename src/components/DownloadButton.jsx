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
    <>
    {/* <button id="#hero-btn"  >{buttonText}</button> */}
    {/* <a href="#hero-btn"
    className="btn position-relative over-hidden theme-bg text-uppercase transition5 mr-3" > {buttonText}</a> */}
 {/* <a href="#hero-btn"
    className="btn position-relative about-me-btn over-hidden bg-transparent main-border text-uppercase transition5 mr-10" onClick={handleDownload}>{buttonText}</a> */}
    <div className=' mt-50'>
       <a href="#hero-btn" className="btn position-relative about-me-btn over-hidden bg-transparent main-border text-uppercase transition5 mt-10 mb-5" onClick={handleDownload}>{buttonText}</a>
       </div>       

</>
  );
};

export default DownloadButton;
