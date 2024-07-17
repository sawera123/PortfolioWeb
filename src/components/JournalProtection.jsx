import React, { useState, useEffect } from 'react';
import './Eye.css';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import Journal from "./Journal";
const JournalProtection = () => {
  const { t, i18n } = useTranslation();

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
          <Journal />
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
              <h2 className='pass-heading'> {t("This content is protected.")}</h2>
              <p> {t("To view, please enter any password.")}</p>
              <br />
              <div className="bio-inputs pass-inputs flex justify-center">
  <input
    type="password"
    placeholder="Enter your password"
    className='w-70 '
    value={password}
    onChange={handlePasswordChange}
  />
  <button type="button" className="ml-2 p-2" onClick={handlePasswordSubmit}> Submit</button>
</div>

              <div className="flex text-center align-items-center justify-content-center pass-pg-btn pt-40 gap-20 mt-10 ">
                <div>
                <a href="#hero-btn" className="btn position-relative over-hidden theme-bg text-uppercase transition5 mr-3">{t("Send Request")} </a></div>
                <div>
                <a href="#hero-btn" className="btn position-relative about-me-btn over-hidden bg-transparent main-border text-uppercase transition5"> {t("DM on Insta")}</a>
                </div> </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JournalProtection;
