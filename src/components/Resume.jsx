import React from 'react'
import NavBar from './NavBar'
import RequestFooter from './ResumeFooter'
import { useTranslation } from "react-i18next";

export default function Resume() {
    const { t } = useTranslation();
  return (
    <>
  
       <main className="over-hiddenn">

{/* <!-- ====== about-area-start */}
{/* ==================================================== --> */}
<div id="about" className="about-area over-hidden aboutbgdark" style={{"background-color": "black"}}>
    <div className="about-content-wrapper about-margin mt-170 mb-110 position-relative">
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-xl-6 col-lg-6 col-md-8 offset-md-0 col-sm-10 col-10">
                    <div className="about-img-wrapper position-relative mb-90">
                        <div className="about-img position-relative z-index11" data-aos="fade-right"
                            data-aos-duration="2000" data-aos-delay="100">
                            <div className="about-img-over pl-50 transition5 d-inline-block position-relative">
                                <div className="position-relative z-index11" data-tilt data-tilt-max="10">
                                    <img className="border-radius10 position-relative z-index11"
                                        src="images/about/about-img.jpg" alt="about image 1"/>
                                </div>

                                <div className="about-shape1 position-absolute" data-aos="fade-right"
                                    data-aos-duration="2000" data-aos-delay="800"></div>
                                <div className="about-shape2 position-absolute z-index11" data-aos="fade-right"
                                    data-aos-duration="2000" data-aos-delay="800"></div>
                                <div className="about-download-wrapper position-absolute z-index11">
                                    <img className="download-bg rotate-animation d-inline-block"
                                        src="images/about/download-bg.png" alt="about image 2"/>
                                    <a href="#" className="cv-download-link transition5">
                                        <img className="d-icon d-inline-block position-absolute"
                                            src="images/icon/download-icon.png" alt="about image 3"/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12">
                    <div className="about-content position-relative mb-50">
                        <div className="position-relative">
                            <div className="title">
                                <span className="meta-text-color text-uppercase d-block mb-1 mt--5">{t("About Me")}</span>
                                <h2 className="mb-30"> {t("I Develop System that Works")} </h2>
                            </div>
                        </div>
                        <p className="mb-25">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia dese runt mollit anim id est laboru doloremque laudantium, totaeaque ipsa
                            quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                        <p>Oremque laudantium, totaeaque ipsa quae </p>
                        <div className="about-info-wrapper pt-25 pb-20 mt-25">
                            <div className="row">
                                <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                                    <ul className="about-info">
                                        <li className="d-inline-block pr-50">
                                            <p className="jostMedium-font-family mb-6">{t("Name")}</p>
                                            <p className="jostMedium-font-family mb-6">{t("Age")}</p>
                                            <p className="jostMedium-font-family mb-6">{t("Occupation")}</p>
                                        </li>
                                        <li className="d-inline-block">
                                            <p className="mb-6">Sami Albin</p>
                                            <p className="mb-6">29 Years</p>
                                            <p className="mb-6">System Engineer</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                                    <ul className="about-info">
                                        <li className="d-inline-block pr-50">
                                            <p className="jostMedium-font-family mb-6">{t("Phone")}</p>
                                            <p className="jostMedium-font-family mb-6">Email</p>
                                            <p className="jostMedium-font-family mb-6">{t("Nationality")}</p>
                                        </li>
                                        <li className="d-inline-block">
                                            <p className="mb-6">+123 456 7890</p>
                                            <p className="mb-6">hello@thames.com</p>
                                            <p className="mb-6">Bangladeshi</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-footer-content d-sm-flex align-items-center mt-lg-2 mt-sm-4 mt-3">
                            <div className="signature pt-12 pr-45">
                                <img src="images/about/signature.png" alt="signature"/>
                            </div>
                            <div className="about-footer-content-right mt-20 text-left">
                                <h6 className="d-xl-inline-block text-uppercase pr5 mb-0">Bruce Wayne</h6>
                                <span className="openS-font-family meta-text-color">Software Architect, Google
                                    Inc.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
{/* <!-- about-area-end --> */}

  {/* <!-- Education Area start --> */}
  <div className="education-area over-hidden aboutbgdark pt-100">
    <div className="container">
        <div className="row position-relative">
            <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12">
                <div className="position-relative">
                    <div className="title">
                        <span className="meta-text-color text-uppercase d-block mb-1"> {t("Education")}</span>
                        <h2 className="mb-25"> {t("My Education")}</h2>
                        <p>    {t('Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.')}
                        </p>
                    </div>
                </div>
                <div className="education-wrapper mr-20 pt-25 mb-50">
                    <ul className="education-content">
                        <li className="mb-32 d-flex align-items-start rotate-hover">
                            <div className="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3">
                                <span className="theme-color d-inline-block">
                                    <span className="d-block rotate flat-family flaticon-graduation-cap"></span>
                                </span>
                            </div>
                            <div className="experience-service-text d-inline-block">
                                <h3 className="mb-2"> {t("Masters in Computer Science")} </h3>
                                <h4> {t("New York University")} <span className="meta-text-color openS-font-family"> ( 2012
                                        - 2016 )</span></h4>
                                <p className="mb-0 mt-15">
                                {t('Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.')}
         
                                    </p>
                            </div>
                        </li>
                        <li className="mb-32 d-flex align-items-start rotate-hover">
                            <div className="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3">
                                <span className="theme-color d-inline-block">
                                    <span className="d-block rotate flat-family flaticon-graduation-cap"></span>
                                </span>
                            </div>
                            <div className="experience-service-text d-inline-block">
                                <h3 className="mb-2"> {t("Bachelor in Computer Engineering")} </h3>
                                <h4> {t("Dhaka University")} <span className="meta-text-color openS-font-family"> ( 2008 -
                                        2011 )</span></h4>
                                <p className="mb-0 mt-15">
                                {t('Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.')}
                                </p>
                            </div>
                        </li>
                        <li className="mb-32 d-flex align-items-start rotate-hover">
                            <div className="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3">
                                <span className="theme-color d-inline-block">
                                    <span className="d-block rotate flat-family flaticon-graduation-cap"></span>
                                </span>
                            </div>
                            <div className="experience-service-text d-inline-block">
                                <h3 className="mb-2"> {t("Diploma in Graphic Design")}</h3>
                                <h4> {t("Bangla College")} <span className="meta-text-color openS-font-family"> ( 2006 -
                                        2008 )</span></h4>
                                <p className="mb-0 mt-15">
                                {t('Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.')}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-blok d-flex align-items-center justify-content-center">
                <div className="education-img position-relative text-center" data-aos="fade-left"
                    data-aos-duration="2000">
                    <img className="border-radius10" src="images/education/education-img.jpg" alt="education image"/>
                </div>
            </div>
        </div>
    </div>
</div>
  {/* <!-- Education Area end -->

   <!-- ====== award-area-start 
==================================================== --> */}
<div className="award-area over-hidden position-relative z-index11 pt-160 pb-170 aboutbgdark">
    <div className="container">
        <div className="row">
            <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                <div className="title text-center">
                    <span className="meta-text-color text-uppercase d-block mb-6"> {t("Success Stories")}</span>
                    <h2> {t("Awards & Achivements")}</h2>
                </div>
            </div>
        </div>
        <div className="award-wrapper mt-70">
            <div className="row align-items-start theme-border-top award-margin pt-40 pb-35">
                <div className="col-xl-2  col-lg-2  col-md-2  col-sm-11 col-12">
                    <div className="award-logo mt-10 mb-20">
                        <a href="#" className="d-block">
                            <img src="images/award/award-logo1.png" alt="award logo 1"/>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3  col-lg-3  col-md-3  col-sm-11 col-12">
                    <div className="award-content">
                        <h3 className="mb-10"> {t("Best Developer")}</h3>
                        <p className="meta-text-color">2022</p>
                    </div>
                </div>
                <div className="col-xl-3  col-lg-3  col-md-3  col-sm-11 col-12">
                    <div className="award-content">
                        <h3 className="mb-10"> {t("Developer Association")} </h3>
                        <p className="meta-text-color"> {t("New York, Usa")} </p>
                    </div>
                </div>
                <div className="col-xl-4  col-lg-4  col-md-4  col-sm-11 col-12">
                    <div className="award-content">
                        <p>    {t('Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-start theme-border-top award-margin pt-40 pb-35">
                <div className="col-xl-2  col-lg-2  col-md-2  col-sm-11 col-12">
                    <div className="award-logo mt-10 mb-20">
                        <a href="#" className="d-block">
                            <img src="images/award/award-logo2.png" alt="award logo 2"/>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3  col-lg-3  col-md-3  col-sm-11 col-12">
                    <div className="award-content">
                        <h3 className="mb-10"> {t("Developer of the Year")}</h3>
                        <p className="meta-text-color">2021</p>
                    </div>
                </div>
                <div className="col-xl-3  col-lg-3  col-md-3  col-sm-11 col-12">
                    <div className="award-content">
                        <h3 className="mb-10"> {t("Dev Internatioal")}</h3>
                        <p className="meta-text-color">London, England</p>
                    </div>
                </div>
                <div className="col-xl-4  col-lg-4  col-md-4  col-sm-11 col-12">
                    <div className="award-content">
                        <p>    {t('Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-start theme-border-top theme-border-bottom award-margin pt-40 pb-35">
                <div className="col-xl-2  col-lg-2  col-md-2  col-sm-11 col-12">
                    <div className="award-logo mt-10 mb-20">
                        <a href="#" className="d-block">
                            <img src="images/award/award-logo3.png" alt="award logo 3"/>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3  col-lg-3  col-md-3  col-sm-11 col-12">
                    <div className="award-content">
                        <h3 className="mb-10">{t("Fastest Coder")}</h3>
                        <p className="meta-text-color">2019</p>
                    </div>
                </div>
                <div className="col-xl-3  col-lg-3  col-md-3  col-sm-11 col-12">
                    <div className="award-content">
                        <h3 className="mb-10"> {t("Amazing Programmer")} </h3>
                        <p className="meta-text-color">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="col-xl-4  col-lg-4  col-md-4  col-sm-11 col-12">
                    <div className="award-content">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            dolore.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="fun-fact-area fun-fact-bg position-relative over-hidden pt-150 pb-120" data-aos="fade-up"
    data-aos-duration="1800">
    <div className="container">
        <div className="row">
            <div className="col-xl-5  col-lg-6  col-md-12 col-sm- col-">
                <div className="fun-fact-content mb-50 mr-lg-2 mr-xl-0">
                    <div className="position-relative">
                        <div className="title">
                            <span className="meta-text-color text-uppercase d-block mb-1 mt--5">Fun Facts</span>
                            <h2 className="mb-30 text-white">{t("I Develop System that Works")}</h2>
                        </div>
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye
                        khbor nio na sit volup sundori toma amar tumi nili mar tatem accusantium dolore.</p>
                </div>
            </div>

            <div className="col-xl-6 offset-xl-1 col-lg-6  col-md-12  col-sm- col-">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-6  col-md-6  col-sm-6 col-10">
                        <div className="single-fact d-block d-flex align-items-center  border-radius10 mb-30">
                            <div className="mr-25 d-flex align-content-start justify-content-center">
                                <span className="primary-color d-inline-block counter">12</span>
                            </div>
                            <h3 className="text-white mb-0"> {t("Years of")} <br/>{t("Experience")} </h3>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6  col-md-6  col-sm-6 col-10">
                        <div className="single-fact d-block d-flex align-items-center border-radius10 mb-30">
                            <div className="mr-25 d-flex align-content-start justify-content-center">
                                <span className="primary-color d-inline-block counter">2</span>
                                <span className="per d-inline-block primary-color">K</span>
                            </div>
                            <h3 className="text-white mb-0">{t("Total")} <br/>{t("Clients")} </h3>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6  col-md-6  col-sm-6 col-10">
                        <div className="single-fact d-block d-flex align-items-center border-radius10 mb-30">
                            <div className="mr-25 d-flex align-content-start justify-content-center">
                                <span className="primary-color d-inline-block counter">4</span>
                                <span className="per d-inline-block primary-color">K</span>
                            </div>
                            <h3 className="text-white mb-0"> {t("Projects")} <br/> {t("Completed")} </h3>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6  col-md-6  col-sm-6 col-10">
                        <div className="single-fact d-block d-flex align-items-center border-radius10 mb-30">
                            <div className="mr-25 d-flex align-content-start justify-content-center">
                                <span className="primary-color d-inline-block counter">30</span>
                            </div>
                            <h3 className="text-white mb-0"> {t("Digital")} <br/>  {t("Products")}</h3>
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
