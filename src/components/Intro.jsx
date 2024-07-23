import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Intro() {
    const { t } = useTranslation();
  return (
    <>
         <main class="over-hiddenn">
       <div className="intro-feature-area over-hidden position-relative " style={{"background-color": "black"}}>
            <div className="container">
                <div className="row single-intro-feature-wrapper justify-content-center pt-170 pb-140">
                    <div className="col-xl-3  col-lg-3  col-md-6  col-sm-9 col-11">
                        <div className="cardbg single-intro-feature-content white-bg border-radius10 transition5 mb-30" data-tilt
                            data-tilt-max="10">
                            <div className="intro-ft-icon d-inline-block mb-30 transition5">
                                <img src="images/icon/intro-ft-icon1.png" alt="icon1"/>
                            </div>
                            <div className="intro-feature-text">
                                <h4 className="mb-22">{t("Dedication")}</h4>
                                <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et
                                    sopno vitae.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3  col-lg-3  col-md-6  col-sm-9 col-11">
                        <div className="cardbg single-intro-feature-content white-bg border-radius10 transition5 mb-30 intro-feature-margin mt-60"
                            data-tilt data-tilt-max="10">
                            <div className="intro-ft-icon d-inline-block mb-30 transition5">
                                <img src="images/icon/intro-ft-icon2.png" alt="icon1"/>
                            </div>
                            <div className="intro-feature-text">
                                <h4 className="mb-22">{t("Smart Work")}</h4>
                                <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et
                                    sopno vitae.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3  col-lg-3  col-md-6  col-sm-9 col-11">
                        <div className="single-intro-feature-content white-bg border-radius10 transition5 mb-30 cardbg" data-tilt
                            data-tilt-max="10">
                            <div className="intro-ft-icon d-inline-block mb-30 transition5">
                                <img src="images/icon/intro-ft-icon3.png" alt="icon1"/>
                            </div>
                            <div className="intro-feature-text">
                                <h4 className="mb-22"> {t("Collaboration")}</h4>
                                <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et
                                    sopno vitae.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3  col-lg-3  col-md-6  col-sm-9 col-11">
                        <div className="cardbg single-intro-feature-content white-bg border-radius10 transition5 mb-30 intro-feature-margin mt-60"
                            data-tilt data-tilt-max="10">
                            <div className="intro-ft-icon d-inline-block mb-30 transition5">
                                <img src="images/icon/intro-ft-icon4.png" alt="icon1"/>
                            </div>
                            <div className="intro-feature-text">
                                <h4 className="mb-22"> {t("Technology")}</h4>
                                <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et
                                    sopno vitae.</p>
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
