import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'typer-js';

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2200,
      delay: 1000,
      once: true,
    });

    // Initialize typer.js for the typing effect
    const typerElement = document.getElementById('main');
    new window.Typer(typerElement, {
      strings: ['Student'],
      delay: 1000,
      colors: ['#25262f'],
      endless: true,
      waitUntilVisible: true,
    });

    // Select hero shapes and scene
    const scene = document.getElementById('scene');
    const heroShapes = scene.querySelectorAll('.hero-shape');

    // Function to handle mousemove animation
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      heroShapes.forEach(shape => {
        const depth = parseFloat(shape.getAttribute('data-depth')); // Get depth from data attribute
        const offsetX = (clientX - centerX) * depth * 0.1; // Adjust the multiplier as needed for intensity
        const offsetY = (clientY - centerY) * depth * 0.1;

        shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    // Event listener for mousemove
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once after mount

  return (

    <>

    <main className="over-hidden">
      <div id="home" className="slider-area slider-bg-color  over-hidden">
        <div className="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
             style={{ backgroundImage: 'url(images/slider/slider-bg.jpg)' }}>

          <div id="scene" className="parallax sm:display-none position-absolute w-100 h-100 z-index1">
            <img data-depth="0.20" className="hero-shape hero-shape1" src="images/shape/shape1.png" alt="Shape 1"/>
            <img data-depth="0.15" className="hero-shape hero-shape2" src="images/shape/shape2.png" alt="Shape 2"/>
            <img data-depth="0.30" className="hero-shape hero-shape3" src="images/shape/shape3.png" alt="Shape 3"/>
            <img data-depth="0.10" className="hero-shape hero-shape4" src="images/shape/shape4.png" alt="Shape 4"/>
          </div>

          <div className="container slider-height d-flex align-items-center justify-content-center">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="slider-content text-center text-center position-relative z-index11"
                     data-aos="fade-right" data-aos-duration="2200" data-aos-delay="1000">
                  <h1 className="mb-15 white-text">
                    <span className="sub-heading d-block text-uppercase primary-color mb-1">Hello I’m</span>
                    Sami <span className="hm2-m-hero-text-style">Albin</span>
                  </h1>
                  <h2 className="text-capitalize white-text mb-45">
                    A Passionate
                    <span className="d-text d-block d-sm-inline-block">
                      <span className="typer primary-color d-inline-block pl-2" id="main"
                            data-words="Student" data-delay="100"
                            data-colors="#25262f"></span>
                      <span className="cursor primary-color d-inline-block">_</span>
                    </span>
                  </h2>
                  <a href="#hero-btn"
                     className="btn position-relative over-hidden theme-bg text-uppercase transition5 mr-3">Say Hello</a>
                  <a href="#hero-btn"
                     className="btn position-relative about-me-btn over-hidden bg-transparent main-border text-uppercase transition5">About Me</a>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-social-link position-absolute right-0 d-none d-md-block z-index11">
            <ul className="social pr-60">
              <li className="mt-10 mb-10 rotate-hover">
                <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="mt-10 mb-10 rotate-hover">
                <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="mt-10 mb-10 rotate-hover">
                <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li className="mt-10 mb-10 rotate-hover">
                <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    
   </>
  );
}
