import React from 'react'

export default function Footer() {
  return (
    <>
        <footer>
        <div className="footer-area over-hidden">
            <div className="footer-top aboutbgdark">
                <div className="container">
                    <div className="row p-4">
                        <div className="col-xl-4  col-lg-5  col-md-8  col-sm-7 col-12">
                            <div className="footer-widget footer-logo pb-40">
                                <div className="foot-logo mb-30">
                                    <img src="images/logo/image.gif"
                                    alt="THAMES"/>
                                </div>
                                <div className="copyright-text">
                                    <p className="mb-0">All rights reserved
                                        <a href="https://themeforest.net/user/ethemestudio"
                                            className="c-theme theme-color f-600 transition5">eThemeStudio</a>
                                        © 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 offset-xl-2 col-lg-3  col-md-4 col-sm-4 col-12 d-none d-sm-block d-lg-none">
                            <div className="footer-widget pb-40">
                                <h4 className="mb-28 mt-2">Follow Me</h4>
                                <ul className="social social-bg text-center d-flex">
                                    <li className="mr-2 rotate-hover">
                                        <a className="facebook-bg text-center pr-0 text-white d-block transition-3 rotate"
                                            href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="mr-2 rotate-hover">
                                        <a className="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="mr-2 rotate-hover">
                                        <a className="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li className="mr-2 rotate-hover">
                                        <a className="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3  col-lg-4  col-md-12  col-sm-12 col-12">
                            <div className="footer-widget pb-40">
                                <h4 className="mb-28 mt-2">Newsletter</h4>
                                <div className="newsletter-form">
                                    <form action="#">
                                        <div className="subscribe-info position-relative">
                                            <input
                                                className="sub-name theme-border pl-25 pt-15 pb-15 pr-10 w-100 secondary-color2 border-radius5 bg-white"
                                                type="email" name="email" id="Email" placeholder="Submit your email"/>
                                            <span className="d-block position-absolute theme-color cursor-pointer"><i
                                                    className="fal fa-envelope"></i></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-2 col-lg-3  col-md-4 col-sm-4 col-12  d-sm-none d-lg-block">
                            <div className="footer-widget pb-40">
                                <h4 className="mb-28 mt-2">Follow Me</h4>
                                <ul className="social social-bg text-center d-flex">
                                    <li className="mr-2 rotate-hover">
                                        <a className="facebook-bg text-center pr-0 text-white d-block transition-3 rotate"
                                            href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="mr-2 rotate-hover">
                                        <a className="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="mr-2 rotate-hover">
                                        <a className="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                                            href="#"><i className="fab fa-linkedin-in"></i></a>
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
