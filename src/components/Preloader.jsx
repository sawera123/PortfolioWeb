import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timeout duration (1000ms = 1 second)

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <>

  
      {isLoading && (
        <div className="preloader">
          <div className="loading">
            <div className="loadingCenter">
              <div className="loadingCenterAbsolute">
              <div className="preloaderRotate">
                <img src="images/logo/image.gif" alt="THAMES" className="logo-rotate" />
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
