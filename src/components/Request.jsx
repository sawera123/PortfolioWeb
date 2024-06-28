import React from 'react'

export default function Request() {
  return (
    <>
       <main class="over-hiddenn">
        {/* <!-- ====== contact-area-start */}

        <div id="contact" class="contact-area over-hidden  aboutbgdark">
            <div id="hero-btn" class="contact-wrapper position-relative" style={{"margin-top": "150px"}}>
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                            <div class="title text-center">
                                <span class="meta-text-color text-uppercase d-block mb-6">Contact Me</span>
                                <h2>Let’s Start A New Project</h2>
                            </div>
                            {/* <!-- /title --> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-5 col-md-12  col-sm-12 col-12">
                            <div class="contact-wrapper mt-70">
                                <ul class="contact-info-content">
                                    <li
                                        class="contact-location s-contact mb-20 transition-3 d-lg-flex align-items-center">
                                        <div class="contact-icon d-inline-block text-center mr-30 transition5">
                                            <span class="d-inline-block">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </span>
                                        </div>
                                        <div class="contact-text d-inline-block">
                                            <h4 class="mb-2">Location</h4>
                                            <p class="text-color mb-0">20 Bordeshi, London, Usa</p>
                                        </div>
                                    </li>
                                    {/* <!-- /contact-location --> */}
                                    <li
                                        class="contact-email s-contact mb-20 transition-3 d-lg-flex  align-items-center">
                                        <div class="contact-icon d-inline-block text-center mr-30 transition5">
                                            <span class="d-inline-block">
                                                <i class="fas fa-phone-alt"></i>
                                            </span>
                                        </div>
                                        <div class="contact-text">
                                            <h4 class="mb-2">Phone</h4>
                                            <p class="mb-0">
                                                <a class="text-color primary-hover d-block" href="#">+123 456
                                                    7890</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        class="contact-phone s-contact mb-20 transition-3 d-lg-flex  align-items-center">
                                        <div class="contact-icon d-inline-block text-center mr-30 transition5">
                                            <span class="d-inline-block">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <div class="contact-text d-inline-block">
                                            <h4 class="mb-2">Email</h4>
                                            <p class="mb-0">
                                                <a class="text-color primary-hover d-block"
                                                    href="#">hello@thames.com</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7 col-md-12  col-sm-12 col-12">
                            <div class="contact-wrapper">
                                <div class="contact-form mt-45">
                                    <form action="https://ethemestudio.com/demo/thames/6_home_minimal/php/mail.php" method="POST" id="contact-form">
                                        <div class="contact-info pt-20">
                                            <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2000">
                                                    <input
                                                        class="name w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="text" name="inputName" id="inputName"
                                                        placeholder="Your Name"/>
                                                   
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2500">
                                                    <input
                                                        class="email w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="email" name="inputEmail" id="inputEmail"
                                                        placeholder="Your Email"/>
                                                   
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2000">
                                                    <input
                                                        class="phone w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="text" name="inputPhone" id="inputPhone"
                                                        placeholder="Your Phone"/>
                                                   
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2500">
                                                    <input
                                                        class="subject w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                                        type="text" name="inputSubject" id="inputSubject"
                                                        placeholder="Your Subject"/>
                                                  
                                                </div>
                                            </div>
                                            <div class="row ">
                                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-12 pr-12 mb-12"
                                                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                                    data-aos-duration="2000">
                                                    <textarea
                                                        class="massage w-100 theme-border pl-20 pt-15 pr-10 primary-color border-radius5 openS-font-family"
                                                        name="inputMessage" id="inputMessage"
                                                        placeholder="Start writing message here"></textarea>
                                                </div>
                                            </div>
                                            <button
                                                class="slider-content   btn position-relative over-hidden text-white d-inline-block theme-bg white-text text-uppercase"
                                                type="submit" name="submit" data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom" data-aos-duration="2500">Submit
                                                Now</button>
                                        </div>
                                    </form>
                                    <p class="form-message mt-20"></p>
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
