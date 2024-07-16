import { t } from 'i18next'
import React from 'react'
import { useTranslation} from "react-i18next";

export default function Request() {
    const { t } = useTranslation();
  return (
    <>
       <main className="over-hidden">
        {/* <!-- ====== contact-area-start */}

        <div id="contact" className="contact-area over-hidden  aboutbgdark" style={{"background-color": "black"}}>
            <div id="hero-btn" className="contact-wrapper over-hidden position-relative" style={{"margin-top": "150px"}} >
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                            <div className="title text-center">
                                <span className="meta-text-color text-uppercase d-block mb-6"> {t("CONTACT ME")}</span>
                                <h2>{t("Let’s Start A New Project")}</h2>
                            </div>
                            {/* <!-- /title --> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-12  col-sm-12 col-12">
                            <div className="contact-wrapper mt-70">
                                <ul className="contact-info-content">
                                    <li
                                        className="contact-location s-contact mb-20 transition-3 d-lg-flex align-items-center">
                                        <div className="contact-icon d-inline-block text-center mr-30 transition5">
                                            <span className="d-inline-block">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </span>
                                        </div>
                                        <div className="contact-text d-inline-block">
                                            <h4 className="mb-2">{t("Location")}</h4>
                                            <p className="text-color mb-0">20 Bordeshi, London, Usa</p>
                                        </div>
                                    </li>
                                    {/* <!-- /contact-location --> */}
                                    <li
                                        className="contact-email s-contact mb-20 transition-3 d-lg-flex  align-items-center">
                                        <div className="contact-icon d-inline-block text-center mr-30 transition5">
                                            <span className="d-inline-block">
                                                <i className="fas fa-phone-alt"></i>
                                            </span>
                                        </div>
                                        <div className="contact-text">
                                            <h4 className="mb-2"> {t("Phone")}</h4>
                                            <p className="mb-0">
                                                <a className="text-color primary-hover d-block" href="#">+123 456
                                                    7890</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        className="contact-phone s-contact mb-20 transition-3 d-lg-flex  align-items-center">
                                        <div className="contact-icon d-inline-block text-center mr-30 transition5">
                                            <span className="d-inline-block">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <div className="contact-text d-inline-block">
                                            <h4 className="mb-2"> {t("Email")}</h4>
                                            <p className="mb-0">
                                                <a className="text-color primary-hover d-block"
                                                    href="#">hello@abc.com</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-12  col-sm-12 col-12">
                            <div className="contact-wrapper">
                                <div className="contact-form mt-45">
                                    <form action="https://ethemestudio.com/demo/thames/6_home_minimal/php/mail.php" method="POST" id="contact-form">
                                        <div className="contact-info pt-20">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2000">
                                                    <input
                                                        className="name w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="text" name="inputName" id="inputName"
                                                        placeholder="Your Name"/>
                                                   
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2500">
                                                    <input
                                                        className="email w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="email" name="inputEmail" id="inputEmail"
                                                        placeholder="Your Email"/>
                                                   
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2000">
                                                    <input
                                                        className="phone w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="text" name="inputPhone" id="inputPhone"
                                                        placeholder="Your Phone"/>
                                                   
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2500">
                                                    <input
                                                        className="subject w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="text" name="inputSubject" id="inputSubject"
                                                        placeholder="Your Subject"/>
                                                  
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-12 pr-12 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2000">
                                                    <textarea
                                                        className="massage w-100 theme-border pl-20 pt-15 pr-10 primary-color border-radius5 openS-font-family"
                                                        name="inputMessage" id="inputMessage"
                                                        placeholder="Start writing message here"></textarea>
                                                </div>
                                            </div>
                                            <button
                                                className="slider-content   btn position-relative over-hidden text-white d-inline-block theme-bg white-text text-uppercase"
                                                type="submit" name="submit" data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom" data-aos-duration="2500">Submit
                                                Now</button>
                                        </div>
                                    </form>
                                    <p className="form-message mt-20"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
      



    </main>

    </>
  )
}
