import React, { useState, useEffect } from 'react';
import './Eye.css';
import Resume from './Resume'; // Assuming Resume.jsx is in the same directory
import Header from './Header';

const Eye = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [blink, setBlink] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [password, setPassword] = useState('');

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    setShowResume(true); // Always show resume on password submit
  };

  return (
    <>
    <Header/>
      <div>
        {showResume ? (
          <Resume />
        ) : (
          <div className="password-pg pt-600" onMouseMove={handleMouseMove}>
            <div className="eye-container">
              <div className={`eye ${blink ? 'blink' : ''}`}>
                <div className="pupil-container">
                  <div className='pupil-outer'>
                    <div
                      className="pupil"
                      style={{
                        transform: `translate(${(mouseX - window.innerWidth / 2) / 65}px, ${(mouseY - window.innerHeight / 2) / 60}px)`,
                      }}
                    >
                      <span className='pupil-dot'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='pass-proteted-area pt-100'>
              <h2 className='pass-heading'>This content is protected.</h2>
              <p>To view, please enter any password.</p>
              <br />
              <div className="bio-inputs pass-inputs flex justify-center">
  <input
    type="password"
    placeholder="Enter your password"
    className='w-100 max-w-sm md:max-w-md lg:max-w-lg p-2'
    value={password}
    onChange={handlePasswordChange}
  />
  <button type="button" className="ml-2 p-2" onClick={handlePasswordSubmit}>Submit</button>
</div>

              <div className="flex text-center align-items-center justify-content-center pass-pg-btn pt-40 gap-20 mt-10 ">
                <div>
                <a href="#hero-btn" className="btn position-relative over-hidden theme-bg text-uppercase transition5 mr-3"> Send Request</a></div>
                <div>
                <a href="#hero-btn" className="btn position-relative about-me-btn over-hidden bg-transparent main-border text-uppercase transition5">DM on Insta</a>
                </div> </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Eye;
