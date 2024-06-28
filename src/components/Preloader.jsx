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
        <div id="preloader">
          <div id="loading">
            <div id="loading-center">
              <div id="loading-center-absolute">
                <div className="object" id="object_one"></div>
                <div className="object" id="object_two"></div>
                <div className="object" id="object_three"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
