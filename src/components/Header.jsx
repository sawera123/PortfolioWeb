import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    
      <header className="over-hidden">
        <div id="header-sticky" className="transparent-header header-area" style={{ backgroundColor: 'black' }}>
          <div className="header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
                  <div className="logo mt-50 mb-50 transition5">
                    <Link to='/' className="header-logo">
                      <img src="images/logo/image.gif" style={{ width: '50%' }} alt="THAMES" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center">
                  <div className="main-menu d-none d-lg-block">
                    <nav id="mobile-menu">
                      <ul className="d-block">
                        <li><Link to="/" className="active">{t('home')}</Link></li>
                        <li><Link to="/resume">{t('resume')}</Link></li>
                        <li><Link to="/request">{t('requests')}</Link></li>
                        <li><Link to="/journal">{t('journal')}</Link></li>
                        <li><Link to="/store">{t('store')}</Link></li>
                        <li><Link to="/blog">{t('social_media')}</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mobile-m-bar d-block d-lg-none ml-30">
                    <Link to='#' className="mobile-menubar text-white" href="javascript:void(0);" onClick={toggleMenu}>
                      <i className="far fa-bars"></i>
                    </Link>
                  </div>
                  <div className="language-switch ml-30">
                    <button onClick={() => changeLanguage('en')}>EN</button>
                    <button onClick={() => changeLanguage('de')}>DE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`side-mobile-menu pt-15 pb-30 pl-30 pr-20 pb-100 ${menuOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between w-100">
          <div className="close-icon d-inline-block float-right clear-both mt-20 mb-15">
            <a href="javascript:void(0);" onClick={toggleMenu}>
              <span className="icon-clear theme-color">
                <i className="fa fa-times"></i>
              </span>
            </a>
          </div>
        </div>
        <nav className="mobile-menu mt-10">
          <ul>
            <li><Link to="/" className="active">{t('home')}</Link></li>
            <li><Link to="/resume">{t('resume')}</Link></li>
            <li><Link to="/request">{t('requests')}</Link></li>
            <li><Link to="/journal">{t('journal')}</Link></li>
            <li><Link to="/store">{t('store')}</Link></li>
            <li><Link to="/blog">{t('social_media')}</Link></li>
          </ul>
        </nav>
        <h5 className="text-white text-center mt-35 pb-1 d-inline-block ml-3">{t('follow_me')}</h5>
        <ul className="social social-bg text-center d-flex mt-10 ml-3">
          <li className="mr-2 rotate-hover">
            <a className="facebook-bg text-center pr-0 text-white d-block transition-3 rotate" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="mr-2 rotate-hover">
            <a className="twitter-bg text-center pr-0 text-white d-block rotate transition-3" href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="mr-2 rotate-hover">
            <a className="linkedin-bg text-center pr-0 text-white d-block rotate transition-3" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="mr-2 rotate-hover">
            <a className="instagram-bg text-center pr-0 text-white d-block rotate transition-3" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      {menuOpen && <div className="body-overlay" onClick={toggleMenu}></div>}
    </>
  );
}
