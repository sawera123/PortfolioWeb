import React,{useState} from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    const { t } = useTranslation();
  return (
    <>
        <footer>
        <div className="footer-area over-hidden" style={{"background-color": "black", borderTop: "1px solid white"}}> 
            <div className="footer-top ">
                <div className="container">
                    <div className="row p-4">
                        <div className="col-xl-4  col-lg-5  col-md-8  col-sm-7 col-12">
                            <div className="footer-widget footer-logo pb-40">
                                {/* <div className="foot-logo mb-30">
                                    <img src="images/logo/image.gif"
                                    alt="THAMES"/>
                                </div> */}
                                <div 
      className="foot-logo mb-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to='/' className="">
        <img 
          src={isHovered ? "images/logo/hover.gif" : "images/logo/image.gif"} 
         
          alt="THAMES" 
        />
      </Link>
    </div>
                                <div className="copyright-text">
                                    <p className="mb-0"> {t("All rights reserved")}
                                        <a href=""
                                            className="c-theme theme-color f-600 transition5">  SamiAlbin </a>
                                        © 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 offset-xl-2 col-lg-3  col-md-4 col-sm-4 col-12 d-none d-sm-block d-lg-none">
                            <div className="footer-widget pb-40">
                                <h4 className="mb-28 mt-2"> {t("Follow Me")}</h4>
                                <ul className="social social-bg text-center d-flex">
                                 
                                    <li className="mr-2 rotate-hover">
                                        <a className="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                   
                                    <li className="mr-2 rotate-hover">
                                        <a className="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 offset-xl-2 col-lg-3  col-md-4 col-sm-4 col-12  d-sm-none d-lg-block">
                            <div className="footer-widget pb-40">
                                <h4 className="mb-28 mt-2">{t("Follow Me")}</h4>
                                <ul className="social social-bg text-center d-flex">
                                   
                                    <li className="mr-2 rotate-hover">
                                        <a className="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                   
                                    <li className="mr-2 rotate-hover">
                                        <a className="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div id="scroll" className="scrollTop text-right">
        <a href="#" className="theme-bg white-text text-center d-inline-block mr-10 transition5">
            <span><i className="fal fa-angle-double-up"></i></span>
        </a>
    </div>
    </>
  )
}
