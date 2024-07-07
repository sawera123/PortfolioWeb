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
        <div style={styles.preloader}>
          <div style={styles.loading}>
            <div style={styles.loadingCenter}>
              <div style={styles.loadingCenterAbsolute}>
                <img src="images/logo/image.gif" alt="THAMES" style={styles.logo} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Styles for the preloader
const styles = {
  preloader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loadingCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loadingCenterAbsolute: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    maxWidth: '100%', // Ensures the logo is responsive
    height: 'auto', // Maintains the aspect ratio
  },
};

export default Preloader;
