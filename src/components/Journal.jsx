import React from 'react'
import { useTranslation } from "react-i18next";

export default function Journal() {
    
    const { t } = useTranslation();
  return (
    <>
  
       <main className="over-hiddenn" style={{"background-color": "black"}}>

{/* <!-- ====== blog-area-start */}

<div id="blog" className="blog-area over-hidden" style={{"background-color": "black"}}>
    <div className="blog-wrappers  pt-160 pb-120">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="title">
                        <span className="meta-text-color text-uppercase d-block mb-6"> {t("Get Updates")}</span>
                        <h2> {t("Recent Blog")} </h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center blog-wrapper blog-active mt-75">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="single-blog mb-50 shadow-hover transition3">
                        <div className="blog-img">
                            <img className="w-100 img transition5" src="images/blog/blog-img1.jpg"
                                alt="blog image 1"/>
                        </div>
                        <div className="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                            <ul className="blog-meta">
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-folder"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">
                                    {t("Web Design")} </span>
                                </li>
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-user"></i></span>
                                    <a className="meta-text-color openS-font-family d-inline-block"
                                        href="#"> {t("Admin")} </a>
                                </li>
                                <li className="d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-comment"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">22</span>
                                </li>
                            </ul>
                            <h3 className="mb-10 mt-1">
                                <a className="primary-hover" href="#" data-toggle="modal"
                                    data-target="#exampleModal-b1">Jim Morrison says when the musics over turn
                                    off the light</a>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="single-blog mb-50 shadow-hover transition3">
                        <div className="blog-img">
                            <img className="w-100 img transition5" src="images/blog/blog-img2.jpg"
                                alt="blog image 2"/>
                        </div>
                        <div className="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                            <ul className="blog-meta">
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-folder"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">
                                    {t("Web Design")} </span>
                                </li>
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-user"></i></span>
                                    <a className="meta-text-color openS-font-family d-inline-block"
                                        href="#"> {t("Admin")} </a>
                                </li>
                                <li className="d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-comment"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">22</span>
                                </li>
                            </ul>
                            <h3 className="mb-10 mt-1">
                                <a className="primary-hover" href="#" data-toggle="modal"
                                    data-target="#exampleModal-b2">The man who is happy will makes others
                                    too</a>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="single-blog mb-50 shadow-hover transition3">
                        <div className="blog-img">
                            <img className="w-100 img transition5" src="images/blog/blog-img3.jpg"
                                alt="blog image 3"/>
                        </div>
                        <div className="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                            <ul className="blog-meta">
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-folder"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">
                                    {t("Web Design")} </span>
                                </li>
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-user"></i></span>
                                    <a className="meta-text-color openS-font-family d-inline-block"
                                        href="#">{t("Admin")} </a>
                                </li>
                                <li className="d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-comment"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">22</span>
                                </li>
                            </ul>
                            <h3 className="mb-10 mt-1">
                                <a className="primary-hover" href="#" data-toggle="modal"
                                    data-target="#exampleModal-b3 blaccolor">The world is not enough to live your life</a>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="single-blog mb-50 shadow-hover transition3">
                        <div className="blog-img">
                            <img className="w-100 img transition5" src="images/blog/blog-img4.jpg"
                                alt="blog image 4"/>
                        </div>
                        <div className="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                            <ul className="blog-meta">
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-folder"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">
                                    {t("Web Design")} </span>
                                </li>
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-user"></i></span>
                                    <a className="meta-text-color openS-font-family d-inline-block"
                                        href="#">{t("Admin")} </a>
                                </li>
                                <li className="d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-comment"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">22</span>
                                </li>
                            </ul>
                            <h3 className="mb-10 mt-1">
                                <a className="primary-hover" href="#" data-toggle="modal"
                                    data-target="#exampleModal-b4">So close no matter how far could be much
                                    more</a>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="single-blog mb-50 shadow-hover transition3">
                        <div className="blog-img">
                            <img className="w-100 img transition5" src="images/blog/blog-img5.jpg"
                                alt="blog image 5"/>
                        </div>
                        <div className="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                            <ul className="blog-meta">
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-folder"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">Web
                                        Design</span>
                                </li>
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-user"></i></span>
                                    <a className="meta-text-color openS-font-family d-inline-block"
                                        href="#">Admin</a>
                                </li>
                                <li className="d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-comment"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">22</span>
                                </li>
                            </ul>
                            <h3 className="mb-10 mt-1">
                                <a className="primary-hover" href="#" data-toggle="modal"
                                    data-target="#exampleModal-b5">Kobita tumi sopno charini hoye khobor nio
                                    na</a>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="single-blog mb-50 shadow-hover transition3">
                        <div className="blog-img">
                            <img className="w-100 img transition5" src="images/blog/blog-img6.jpg"
                                alt="blog image 6"/>
                        </div>
                        <div className="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                            <ul className="blog-meta">
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-folder"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">Web
                                        Design</span>
                                </li>
                                <li className="mr-15 d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-user"></i></span>
                                    <a className="meta-text-color openS-font-family d-inline-block"
                                        href="#">Admin</a>
                                </li>
                                <li className="d-inline-block">
                                    <span className="meta-text-color d-inline-block mr-1"><i
                                            className="fas fa-comment"></i></span>
                                    <span className="meta-text-color openS-font-family d-inline-block">22</span>
                                </li>
                            </ul>
                            <h3 className="mb-10 mt-1">
                                <a className="primary-hover" href="#" data-toggle="modal"
                                    data-target="#exampleModal-b6">Become the best version of you everyday</a>
                            </h3>
                        </div>
                    </div>
                </div>

            </div>

            <div className="blog-modal-wrapper">

                {/* <!-- Modal 1 start --> */}
                <div className="modal fade" id="exampleModal-b1" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModal-b1" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-icon float-right pt-10 pr-10">
                                <button type="button" className="close d-inline-block" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                </button>
                            </div>
                            <div className="modal-content border-0">
                                <div className="modal-body pl-50 pr-50 pt-10 pb-50">
                                    <div className="blog-modal-img">
                                        <img className="w-100" src="images/blog/blog-img11.jpg"
                                            alt="blog post image 02"/>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-12">
                                            <div className="content-wrapper">
                                                <h2 className="modal-title text-center">
                                                    Lets make the begging to mankind to save the world again
                                                </h2>
                                                <ul className="blog-meta text-center mb-30">
                                                    <li>
                                                        <a href="#" className="meta-text-color openS-font-family">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-folder-open"></i></span> Web
                                                            Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-calendar-alt"></i></span>
                                                            June, 21, 2022
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-clock"></i></span>
                                                            10 min
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Debitis ut recusandae assumenda. Nisi quaerat porro
                                                    inventore ullam magnam beatae enim cumque. Facilis in maxime
                                                    quos praesentium cupiditate cum commodi recusandae!
                                                </p>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Minus eos ipsam enim perspiciatis doloremque laborum dolor
                                                    nihil aperiam vel necessitatibus unde cupiditate error eum
                                                    maiores, sapiente ea. Quisquam sed, molestias veniam
                                                    adipisci magnam ratione aspernatur delectus a assumenda,
                                                    corrupti libero commodi eaque quis vel consequatur
                                                    reiciendis dolor beatae distinctio voluptatum ducimus non
                                                    optio. Deleniti nobis eius, nihil incidunt voluptate labore,
                                                    debitis ducimus perspiciatis rerum iure doloremque minus
                                                    omnis nostrum! Voluptatibus mollitia voluptate ipsa nesciunt
                                                    animi blanditiis aliquam repellat quibusdam enim eos veniam
                                                    similique tempora nihil optio, iure necessitatibus hic ipsum
                                                    nisi maiores perspiciatis magni? Sed vero amet quidem natus
                                                    consectetur!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Quod ex dolorum aut accusantium, fugit sunt vero animi quos
                                                    porro excepturi. Quia delectus nulla voluptatem unde
                                                    incidunt. Magnam natus officiis saepe.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                                    aspernatur reiciendis corporis deleniti beatae? At,
                                                    inventore necessitatibus repellat alias tenetur quisquam nam
                                                    maiores eligendi sequi itaque voluptatum architecto minus
                                                    numquam!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Harum dolore consequatur eius non incidunt fugit hic error
                                                    accusantium, deserunt et magnam beatae, ipsa distinctio
                                                    eaque laborum molestias maiores consectetur quo, expedita
                                                    laboriosam quia quibusdam. Dolores dolorem, tenetur rerum
                                                    veniam facilis eaque corporis ducimus laudantium excepturi
                                                    officiis quaerat maiores voluptatem vero optio. Id culpa
                                                    expedita ipsa enim omnis debitis. Beatae mollitia natus
                                                    ullam repudiandae ipsa neque. Sequi explicabo odio cum, odit
                                                    voluptatem cupiditate vero, error incidunt fuga dolore id
                                                    ut! Eligendi, necessitatibus beatae voluptatem ipsum,
                                                    ducimus amet sed officia ad aliquid aperiam id, eius
                                                    accusamus quibusdam doloremque! Enim laudantium sint quae.
                                                </p>
                                                <div className="pro-modal-footer mt-30 mb-45">
                                                    <div
                                                        className="row align-items-center justify-content-md-between">
                                                        <div
                                                            className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="modal-tags d-sm-flex align-items-center pt-25">
                                                                <h6 className="mb-0 pr-15">
                                                                    Tags :</h6>
                                                                <ul className="tag-list">
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">{t("Web Design")}</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Social Media</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Recent Blog</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                                                <h6 className="pr-12 mb-0 pb-0">Share :</h6>
                                                                <ul className="social-link text-md-right">
                                                                    <li className="d-inline-block">
                                                                        <a className="facebook-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-facebook-f"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="twitter-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-twitter"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="google-plus-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-google-plus-g"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="linkedin-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-linkedin-in"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal 1 end --> */}

                {/* <!-- Modal 2 start --> */}
                <div className="modal fade" id="exampleModal-b2" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModal-b2" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-icon float-right pt-10 pr-10">
                                <button type="button" className="close d-inline-block" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                </button>
                            </div>
                            <div className="modal-content border-0">
                                <div className="modal-body pl-50 pr-50 pt-10 pb-50">
                                    <div className="blog-modal-img">
                                        <img className="w-100" src="images/blog/blog-img22.jpg"
                                            alt="blog post image 02"/>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-12">
                                            <div className="content-wrapper">
                                                <h2 className="modal-title text-center">
                                                    Lets make the begging to mankind to save the world again
                                                </h2>
                                                <ul className="blog-meta text-center mb-30">
                                                    <li>
                                                        <a href="#" className="meta-text-color openS-font-family">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-folder-open"></i></span> Web
                                                            Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-calendar-alt"></i></span>
                                                            June, 21, 2022
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-clock"></i></span>
                                                            10 min
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Debitis ut recusandae assumenda. Nisi quaerat porro
                                                    inventore ullam magnam beatae enim cumque. Facilis in maxime
                                                    quos praesentium cupiditate cum commodi recusandae!
                                                </p>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Minus eos ipsam enim perspiciatis doloremque laborum dolor
                                                    nihil aperiam vel necessitatibus unde cupiditate error eum
                                                    maiores, sapiente ea. Quisquam sed, molestias veniam
                                                    adipisci magnam ratione aspernatur delectus a assumenda,
                                                    corrupti libero commodi eaque quis vel consequatur
                                                    reiciendis dolor beatae distinctio voluptatum ducimus non
                                                    optio. Deleniti nobis eius, nihil incidunt voluptate labore,
                                                    debitis ducimus perspiciatis rerum iure doloremque minus
                                                    omnis nostrum! Voluptatibus mollitia voluptate ipsa nesciunt
                                                    animi blanditiis aliquam repellat quibusdam enim eos veniam
                                                    similique tempora nihil optio, iure necessitatibus hic ipsum
                                                    nisi maiores perspiciatis magni? Sed vero amet quidem natus
                                                    consectetur!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Quod ex dolorum aut accusantium, fugit sunt vero animi quos
                                                    porro excepturi. Quia delectus nulla voluptatem unde
                                                    incidunt. Magnam natus officiis saepe.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                                    aspernatur reiciendis corporis deleniti beatae? At,
                                                    inventore necessitatibus repellat alias tenetur quisquam nam
                                                    maiores eligendi sequi itaque voluptatum architecto minus
                                                    numquam!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Harum dolore consequatur eius non incidunt fugit hic error
                                                    accusantium, deserunt et magnam beatae, ipsa distinctio
                                                    eaque laborum molestias maiores consectetur quo, expedita
                                                    laboriosam quia quibusdam. Dolores dolorem, tenetur rerum
                                                    veniam facilis eaque corporis ducimus laudantium excepturi
                                                    officiis quaerat maiores voluptatem vero optio. Id culpa
                                                    expedita ipsa enim omnis debitis. Beatae mollitia natus
                                                    ullam repudiandae ipsa neque. Sequi explicabo odio cum, odit
                                                    voluptatem cupiditate vero, error incidunt fuga dolore id
                                                    ut! Eligendi, necessitatibus beatae voluptatem ipsum,
                                                    ducimus amet sed officia ad aliquid aperiam id, eius
                                                    accusamus quibusdam doloremque! Enim laudantium sint quae.
                                                </p>
                                                <div className="pro-modal-footer mt-30 mb-45">
                                                    <div
                                                        className="row align-items-center justify-content-md-between">
                                                        <div
                                                            className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="modal-tags d-sm-flex align-items-center pt-25">
                                                                <h6 className="mb-0 pr-15">
                                                                    Tags :</h6>
                                                                <ul className="tag-list">
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">{t("Web Design")}</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Social Media</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Recent Blog</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                                                <h6 className="pr-12 mb-0 pb-0">Share :</h6>
                                                                <ul className="social-link text-md-right">
                                                                    <li className="d-inline-block">
                                                                        <a className="facebook-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-facebook-f"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="twitter-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-twitter"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="google-plus-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-google-plus-g"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="linkedin-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-linkedin-in"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal 2 end --> */}

                {/* <!-- Modal 3 start --> */}
                <div className="modal fade" id="exampleModal-b3" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModal-b3" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-icon float-right pt-10 pr-10">
                                <button type="button" className="close d-inline-block" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                </button>
                            </div>
                            <div className="modal-content border-0">
                                <div className="modal-body pl-50 pr-50 pt-10 pb-50">
                                    <div className="blog-modal-img">
                                        <img className="w-100" src="images/blog/blog-img33.jpg"
                                            alt="blog post image 02"/>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-12">
                                            <div className="content-wrapper">
                                                <h2 className="modal-title text-center">
                                                    Lets make the begging to mankind to save the world again
                                                </h2>
                                                <ul className="blog-meta text-center mb-30">
                                                    <li>
                                                        <a href="#" className="meta-text-color openS-font-family">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-folder-open"></i></span> Web
                                                            Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-calendar-alt"></i></span>
                                                            June, 21, 2022
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-clock"></i></span>
                                                            10 min
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Debitis ut recusandae assumenda. Nisi quaerat porro
                                                    inventore ullam magnam beatae enim cumque. Facilis in maxime
                                                    quos praesentium cupiditate cum commodi recusandae!
                                                </p>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Minus eos ipsam enim perspiciatis doloremque laborum dolor
                                                    nihil aperiam vel necessitatibus unde cupiditate error eum
                                                    maiores, sapiente ea. Quisquam sed, molestias veniam
                                                    adipisci magnam ratione aspernatur delectus a assumenda,
                                                    corrupti libero commodi eaque quis vel consequatur
                                                    reiciendis dolor beatae distinctio voluptatum ducimus non
                                                    optio. Deleniti nobis eius, nihil incidunt voluptate labore,
                                                    debitis ducimus perspiciatis rerum iure doloremque minus
                                                    omnis nostrum! Voluptatibus mollitia voluptate ipsa nesciunt
                                                    animi blanditiis aliquam repellat quibusdam enim eos veniam
                                                    similique tempora nihil optio, iure necessitatibus hic ipsum
                                                    nisi maiores perspiciatis magni? Sed vero amet quidem natus
                                                    consectetur!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Quod ex dolorum aut accusantium, fugit sunt vero animi quos
                                                    porro excepturi. Quia delectus nulla voluptatem unde
                                                    incidunt. Magnam natus officiis saepe.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                                    aspernatur reiciendis corporis deleniti beatae? At,
                                                    inventore necessitatibus repellat alias tenetur quisquam nam
                                                    maiores eligendi sequi itaque voluptatum architecto minus
                                                    numquam!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Harum dolore consequatur eius non incidunt fugit hic error
                                                    accusantium, deserunt et magnam beatae, ipsa distinctio
                                                    eaque laborum molestias maiores consectetur quo, expedita
                                                    laboriosam quia quibusdam. Dolores dolorem, tenetur rerum
                                                    veniam facilis eaque corporis ducimus laudantium excepturi
                                                    officiis quaerat maiores voluptatem vero optio. Id culpa
                                                    expedita ipsa enim omnis debitis. Beatae mollitia natus
                                                    ullam repudiandae ipsa neque. Sequi explicabo odio cum, odit
                                                    voluptatem cupiditate vero, error incidunt fuga dolore id
                                                    ut! Eligendi, necessitatibus beatae voluptatem ipsum,
                                                    ducimus amet sed officia ad aliquid aperiam id, eius
                                                    accusamus quibusdam doloremque! Enim laudantium sint quae.
                                                </p>
                                                <div className="pro-modal-footer mt-30 mb-45">
                                                    <div
                                                        className="row align-items-center justify-content-md-between">
                                                        <div
                                                            className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="modal-tags d-sm-flex align-items-center pt-25">
                                                                <h6 className="mb-0 pr-15">
                                                                    Tags :</h6>
                                                                <ul className="tag-list">
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">{t("Web Design")}</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Social Media</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Recent Blog</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                                                <h6 className="pr-12 mb-0 pb-0">Share :</h6>
                                                                <ul className="social-link text-md-right">
                                                                    <li className="d-inline-block">
                                                                        <a className="facebook-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-facebook-f"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="twitter-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-twitter"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="google-plus-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-google-plus-g"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="linkedin-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-linkedin-in"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal 3 end --> */}

                {/* <!-- Modal 4 start --> */}
                <div className="modal fade" id="exampleModal-b4" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModal-b4" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-icon float-right pt-10 pr-10">
                                <button type="button" className="close d-inline-block" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                </button>
                            </div>
                            <div className="modal-content border-0">
                                <div className="modal-body pl-50 pr-50 pt-10 pb-50">
                                    <div className="blog-modal-img">
                                        <img className="w-100" src="images/blog/blog-img44.jpg"
                                            alt="blog post image 02"/>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-12">
                                            <div className="content-wrapper">
                                                <h2 className="modal-title text-center">
                                                    Lets make the begging to mankind to save the world again
                                                </h2>
                                                <ul className="blog-meta text-center mb-30">
                                                    <li>
                                                        <a href="#" className="meta-text-color openS-font-family">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-folder-open"></i></span> Web
                                                            Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-calendar-alt"></i></span>
                                                            June, 21, 2022
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-clock"></i></span>
                                                            10 min
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Debitis ut recusandae assumenda. Nisi quaerat porro
                                                    inventore ullam magnam beatae enim cumque. Facilis in maxime
                                                    quos praesentium cupiditate cum commodi recusandae!
                                                </p>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Minus eos ipsam enim perspiciatis doloremque laborum dolor
                                                    nihil aperiam vel necessitatibus unde cupiditate error eum
                                                    maiores, sapiente ea. Quisquam sed, molestias veniam
                                                    adipisci magnam ratione aspernatur delectus a assumenda,
                                                    corrupti libero commodi eaque quis vel consequatur
                                                    reiciendis dolor beatae distinctio voluptatum ducimus non
                                                    optio. Deleniti nobis eius, nihil incidunt voluptate labore,
                                                    debitis ducimus perspiciatis rerum iure doloremque minus
                                                    omnis nostrum! Voluptatibus mollitia voluptate ipsa nesciunt
                                                    animi blanditiis aliquam repellat quibusdam enim eos veniam
                                                    similique tempora nihil optio, iure necessitatibus hic ipsum
                                                    nisi maiores perspiciatis magni? Sed vero amet quidem natus
                                                    consectetur!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Quod ex dolorum aut accusantium, fugit sunt vero animi quos
                                                    porro excepturi. Quia delectus nulla voluptatem unde
                                                    incidunt. Magnam natus officiis saepe.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                                    aspernatur reiciendis corporis deleniti beatae? At,
                                                    inventore necessitatibus repellat alias tenetur quisquam nam
                                                    maiores eligendi sequi itaque voluptatum architecto minus
                                                    numquam!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Harum dolore consequatur eius non incidunt fugit hic error
                                                    accusantium, deserunt et magnam beatae, ipsa distinctio
                                                    eaque laborum molestias maiores consectetur quo, expedita
                                                    laboriosam quia quibusdam. Dolores dolorem, tenetur rerum
                                                    veniam facilis eaque corporis ducimus laudantium excepturi
                                                    officiis quaerat maiores voluptatem vero optio. Id culpa
                                                    expedita ipsa enim omnis debitis. Beatae mollitia natus
                                                    ullam repudiandae ipsa neque. Sequi explicabo odio cum, odit
                                                    voluptatem cupiditate vero, error incidunt fuga dolore id
                                                    ut! Eligendi, necessitatibus beatae voluptatem ipsum,
                                                    ducimus amet sed officia ad aliquid aperiam id, eius
                                                    accusamus quibusdam doloremque! Enim laudantium sint quae.
                                                </p>
                                                <div className="pro-modal-footer mt-30 mb-45">
                                                    <div
                                                        className="row align-items-center justify-content-md-between">
                                                        <div
                                                            className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="modal-tags d-sm-flex align-items-center pt-25">
                                                                <h6 className="mb-0 pr-15">
                                                                    Tags :</h6>
                                                                <ul className="tag-list">
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">{t("Web Design")}</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Social Media</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Recent Blog</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                                                <h6 className="pr-12 mb-0 pb-0">Share :</h6>
                                                                <ul className="social-link text-md-right">
                                                                    <li className="d-inline-block">
                                                                        <a className="facebook-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-facebook-f"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="twitter-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-twitter"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="google-plus-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-google-plus-g"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="linkedin-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-linkedin-in"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal 4 end --> */}

                {/* <!-- Modal 5 start --> */}
                <div className="modal fade" id="exampleModal-b5" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModal-b5" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-icon float-right pt-10 pr-10">
                                <button type="button" className="close d-inline-block" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                </button>
                            </div>
                            <div className="modal-content border-0">
                                <div className="modal-body pl-50 pr-50 pt-10 pb-50">
                                    <div className="blog-modal-img">
                                        <img className="w-100" src="images/blog/blog-img55.jpg"
                                            alt="blog post image 02"/>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-12">
                                            <div className="content-wrapper">
                                                <h2 className="modal-title text-center">
                                                    Lets make the begging to mankind to save the world again
                                                </h2>
                                                <ul className="blog-meta text-center mb-30">
                                                    <li>
                                                        <a href="#" className="meta-text-color openS-font-family">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-folder-open"></i></span> Web
                                                            Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-calendar-alt"></i></span>
                                                            June, 21, 2022
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-clock"></i></span>
                                                            10 min
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Debitis ut recusandae assumenda. Nisi quaerat porro
                                                    inventore ullam magnam beatae enim cumque. Facilis in maxime
                                                    quos praesentium cupiditate cum commodi recusandae!
                                                </p>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Minus eos ipsam enim perspiciatis doloremque laborum dolor
                                                    nihil aperiam vel necessitatibus unde cupiditate error eum
                                                    maiores, sapiente ea. Quisquam sed, molestias veniam
                                                    adipisci magnam ratione aspernatur delectus a assumenda,
                                                    corrupti libero commodi eaque quis vel consequatur
                                                    reiciendis dolor beatae distinctio voluptatum ducimus non
                                                    optio. Deleniti nobis eius, nihil incidunt voluptate labore,
                                                    debitis ducimus perspiciatis rerum iure doloremque minus
                                                    omnis nostrum! Voluptatibus mollitia voluptate ipsa nesciunt
                                                    animi blanditiis aliquam repellat quibusdam enim eos veniam
                                                    similique tempora nihil optio, iure necessitatibus hic ipsum
                                                    nisi maiores perspiciatis magni? Sed vero amet quidem natus
                                                    consectetur!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Quod ex dolorum aut accusantium, fugit sunt vero animi quos
                                                    porro excepturi. Quia delectus nulla voluptatem unde
                                                    incidunt. Magnam natus officiis saepe.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                                    aspernatur reiciendis corporis deleniti beatae? At,
                                                    inventore necessitatibus repellat alias tenetur quisquam nam
                                                    maiores eligendi sequi itaque voluptatum architecto minus
                                                    numquam!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Harum dolore consequatur eius non incidunt fugit hic error
                                                    accusantium, deserunt et magnam beatae, ipsa distinctio
                                                    eaque laborum molestias maiores consectetur quo, expedita
                                                    laboriosam quia quibusdam. Dolores dolorem, tenetur rerum
                                                    veniam facilis eaque corporis ducimus laudantium excepturi
                                                    officiis quaerat maiores voluptatem vero optio. Id culpa
                                                    expedita ipsa enim omnis debitis. Beatae mollitia natus
                                                    ullam repudiandae ipsa neque. Sequi explicabo odio cum, odit
                                                    voluptatem cupiditate vero, error incidunt fuga dolore id
                                                    ut! Eligendi, necessitatibus beatae voluptatem ipsum,
                                                    ducimus amet sed officia ad aliquid aperiam id, eius
                                                    accusamus quibusdam doloremque! Enim laudantium sint quae.
                                                </p>
                                                <div className="pro-modal-footer mt-30 mb-45">
                                                    <div
                                                        className="row align-items-center justify-content-md-between">
                                                        <div
                                                            className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="modal-tags d-sm-flex align-items-center pt-25">
                                                                <h6 className="mb-0 pr-15">
                                                                    Tags :</h6>
                                                                <ul className="tag-list">
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">{t("Web Design")}</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Social Media</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Recent Blog</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                                                <h6 className="pr-12 mb-0 pb-0">Share :</h6>
                                                                <ul className="social-link text-md-right">
                                                                    <li className="d-inline-block">
                                                                        <a className="facebook-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-facebook-f"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="twitter-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-twitter"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="google-plus-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-google-plus-g"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="linkedin-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-linkedin-in"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal 5 end --> */}

                {/* <!-- Modal 6 start --> */}
                <div className="modal fade" id="exampleModal-b6" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModal-b6" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-icon float-right pt-10 pr-10">
                                <button type="button" className="close d-inline-block" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                </button>
                            </div>
                            <div className="modal-content border-0">
                                <div className="modal-body pl-50 pr-50 pt-10 pb-50">
                                    <div className="blog-modal-img">
                                        <img className="w-100" src="images/blog/blog-img66.jpg"
                                            alt="blog post image 02"/>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-12">
                                            <div className="content-wrapper">
                                                <h2 className="modal-title text-center">
                                                    Lets make the begging to mankind to save the world again
                                                </h2>
                                                <ul className="blog-meta text-center mb-30">
                                                    <li>
                                                        <a href="#" className="meta-text-color openS-font-family">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-folder-open"></i></span> Web
                                                            Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-calendar-alt"></i></span>
                                                            June, 21, 2022
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="meta-text-color openS-font-family d-block">
                                                            <span className="theme-color mr-1"><i
                                                                    className="fas fa-clock"></i></span>
                                                            10 min
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Debitis ut recusandae assumenda. Nisi quaerat porro
                                                    inventore ullam magnam beatae enim cumque. Facilis in maxime
                                                    quos praesentium cupiditate cum commodi recusandae!
                                                </p>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Minus eos ipsam enim perspiciatis doloremque laborum dolor
                                                    nihil aperiam vel necessitatibus unde cupiditate error eum
                                                    maiores, sapiente ea. Quisquam sed, molestias veniam
                                                    adipisci magnam ratione aspernatur delectus a assumenda,
                                                    corrupti libero commodi eaque quis vel consequatur
                                                    reiciendis dolor beatae distinctio voluptatum ducimus non
                                                    optio. Deleniti nobis eius, nihil incidunt voluptate labore,
                                                    debitis ducimus perspiciatis rerum iure doloremque minus
                                                    omnis nostrum! Voluptatibus mollitia voluptate ipsa nesciunt
                                                    animi blanditiis aliquam repellat quibusdam enim eos veniam
                                                    similique tempora nihil optio, iure necessitatibus hic ipsum
                                                    nisi maiores perspiciatis magni? Sed vero amet quidem natus
                                                    consectetur!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Quod ex dolorum aut accusantium, fugit sunt vero animi quos
                                                    porro excepturi. Quia delectus nulla voluptatem unde
                                                    incidunt. Magnam natus officiis saepe.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                                    aspernatur reiciendis corporis deleniti beatae? At,
                                                    inventore necessitatibus repellat alias tenetur quisquam nam
                                                    maiores eligendi sequi itaque voluptatum architecto minus
                                                    numquam!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Harum dolore consequatur eius non incidunt fugit hic error
                                                    accusantium, deserunt et magnam beatae, ipsa distinctio
                                                    eaque laborum molestias maiores consectetur quo, expedita
                                                    laboriosam quia quibusdam. Dolores dolorem, tenetur rerum
                                                    veniam facilis eaque corporis ducimus laudantium excepturi
                                                    officiis quaerat maiores voluptatem vero optio. Id culpa
                                                    expedita ipsa enim omnis debitis. Beatae mollitia natus
                                                    ullam repudiandae ipsa neque. Sequi explicabo odio cum, odit
                                                    voluptatem cupiditate vero, error incidunt fuga dolore id
                                                    ut! Eligendi, necessitatibus beatae voluptatem ipsum,
                                                    ducimus amet sed officia ad aliquid aperiam id, eius
                                                    accusamus quibusdam doloremque! Enim laudantium sint quae.
                                                </p>
                                                <div className="pro-modal-footer mt-30 mb-45">
                                                    <div
                                                        className="row align-items-center justify-content-md-between">
                                                        <div
                                                            className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="modal-tags d-sm-flex align-items-center pt-25">
                                                                <h6 className="mb-0 pr-15">
                                                                    Tags :</h6>
                                                                <ul className="tag-list">
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">{t("Web Design")}</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Social Media</a>
                                                                    </li>
                                                                    <li className="d-inline-block pr-10 ">
                                                                        <a className="meta-text-color d-block"
                                                                            href="#">Recent Blog</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                                                <h6 className="pr-12 mb-0 pb-0">Share :</h6>
                                                                <ul className="social-link text-md-right">
                                                                    <li className="d-inline-block">
                                                                        <a className="facebook-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-facebook-f"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="twitter-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-twitter"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="google-plus-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-google-plus-g"></i></a>
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <a className="linkedin-color text-center pl-15 d-inline-block transition-3"
                                                                            href="#"><i
                                                                                className="fab fa-linkedin-in"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal 6 end --> */}
            </div>

        </div>
    </div>
</div>

</main>
  
    </>
  )
}
