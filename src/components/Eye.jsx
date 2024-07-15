// src/components/Eye.js
import React, { useState, useEffect } from 'react';
import './Eye.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Eye = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [blink, setBlink] = useState(false);

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

  return (
    <>
    <div className="password-pg pt-200" onMouseMove={handleMouseMove}>
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
             <span className='pupil-dot'>

             </span>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className='pass-proteted-area pt-100'>
        <h2>This content is protected.</h2>
        <p>To view, please enter the password.</p>
        <br />
        {/* <input type="password" className='w-full'  /> */}
        <div className="bio-inputs">
                                      <input type="password" placeholder="Enter your password"className='w-full'  />
                                      <button type="password-button" className=""><FaArrowRightLong /></button>
                                  </div>


        <div className="flex pt-40 gap-20 m-10 ">
        <a href="#hero-btn"
                     className="btn position-relative over-hidden theme-bg text-uppercase transition5 mr-3"> Send Request</a>
                  <a href="#hero-btn"
                     className="btn position-relative about-me-btn over-hidden bg-transparent main-border text-uppercase transition5">DM on Insta</a>
              
        </div>
    </div>
    </div>
    </>
  );
};

export default Eye;
