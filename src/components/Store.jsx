import React ,{useEffect} from 'react'
import { useTranslation } from "react-i18next"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'typer-js';

export default function Store() {
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2200,
      delay: 1000,
      once: true,
    });

    // Initialize typer.js for the typing effect
    const typerElement = document.getElementById('main');
    const typer= new window.Typer(typerElement, {
      // strings: ['Developer'],
      strings: [t('Coming Soon....')],
      delay: 1000,
      colors: ['#25262f'],
      endless: true,
      waitUntilVisible: true,
    });
  }, [t]);
 
  return (
    <>
        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 "
        style={{"background-color": "black"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 text-center">

                    {/* <h1 className="tect-white mt-5" style={{"color": "white"}}> {t("Coming Soon........")} </h1> */}
                    <h1
                          className="typer primary-color text-white mt-5 pl-2"
                          id="main"
                          style={{"color": "white"}}
                          data-words={t("Coming Soon....")}
                          data-delay="100"
                          data-colors="#25262f"
                        ></h1>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
