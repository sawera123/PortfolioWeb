import React from 'react'
import css from "../components/SocialMedia.css"
import { Link } from 'react-router-dom'
import snapimage from '../components/snapchat.png'
import invest from "./invest.jpeg"
export default function SocialMedia() {
  return (
    <>
   
      <div className='social-media-pg mb-0'>
          <div className="container">
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-sm-12  mb-4">
               <div className=" social-box ">
                  <div className="social-detail-box">
                  <div className='bio-details d-flex align-items-center justify-content-center'>
                  <div className="pt-25 logo-img  transition5">
                    <Link to ='/' className="  " >
                      <img src="images/logo/image.gif"  alt="THAMES" />
                    </Link>
                    </div>
                    <p className='pt-2'>@jf.ok</p>
                
                 <div className=" slider-social-link d-flex align-items-center">
                      <div className="sm-icons mt-10 mb-0 rotate-hover">
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-youtube"></i></a>
                      </div>
                  </div>
                  <div className="iframe mt-0 pt-0 d-flex align-items-center justify-content-center">
                 <iframe
              src="https://www.youtube.com/embed/A27wg9aRQ9Q"
              title=" Video"
            ></iframe>
            </div>
            
            
                <div className='container snap-boxes'>
                  <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-6 col-6 snapchat'>
                <div className="img-container">
                <img src={snapimage} alt="snap"  className='img-fluid' /> 
                <div className='img-overlay'>
                    <span>Snapchat</span>
                    </div>
                </div>
            </div>
                   <div className='col-lg-6 col-md-6 col-sm-6 col-6 snapchat'>
                   <div className="img-container">
                    <img src={invest} alt="moneypic"  className='img-fluid' />
                {/* <img src="https://images.unsplash.com/photo-1565374392032-8007fb37c26e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="invest" />  */}
                <div className='img-overlay'>
                
                 <span>Public invest now 💰 </span>
                 </div>
                </div>
                   </div>
                   </div>
                   {/* 2nd row */}
                   <div className="row">
                  <div className='col-lg-6 col-md-6 col-sm-6 col-6 snapchat'>
                <div className="img-container">
                <img src="https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=600" alt="mansion"   className='img-fluid'/> 
                <div className='img-overlay'>
                    <span>Design a mansion 💍 </span>
                    </div>
                </div>
            </div>


                   <div className='col-lg-6 col-md-6 col-sm-6 col-6 snapchat'>
                   <div className="img-container">
                <img src="https://seeklogo.com/images/B/bigo-live-logo-77E5C78F42-seeklogo.com.png"  className='img-fluid'  alt="biolive" /> 
                <div className='img-overlay'>
                    <span>Go Live Now 😇 </span>
                    </div>
                </div>
                   </div>
                   </div>
                </div>
                  </div>
                </div>
                     </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 social-boxes mb-4">
              <div className=" social-box2 ">
                  <div className="social-detail-box ">
                  <div className='bio-details d-flex align-items-center justify-content-center'>
                  <div className=" pt-25 logo-img  transition5">
                    <Link to ='/' className="  " >
                      <img src="images/logo/image.gif"  alt="THAMES" />
                    </Link>
                    </div>
                    <p className='pt-2'>@jf.ok</p>
                
                 <div className=" slider-social-link d-flex align-items-center">
                      <div className="sm-icons mt-10 mb-0 rotate-hover">
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-youtube"></i></a>
                      </div>
                  </div>
                 
            
                  <div className="container">
                          <div className="row">
                              <div className="col-12">
                              <div className="bio-description">
                   
                                    #Developers🖥 <br />
                                      #coding 💻 
                                      <p className='text-center'> abc@gmail.com  </p>
                                        
                                </div>

                                  <div className="bio-inputs">
                                      <input type="email" placeholder="Enter your email"  />
                                      <button type="button" className="">Subscribe</button>
                                  </div>
                                  <br />
                                  <div className='scllink-box '>
                                    <span><i className="fab fa-youtube"></i> </span>
                                    <div className="youtube-bio-link "> 🎬 Youtube ▶️ </div> 
                                  </div>
                                  <br />
                                  <div className='scllink-box '>
                                    <span><i className="fab fa-instagram"></i> </span>
                                    <div className="youtube-bio-link "> 📷  Instagram 📷  </div> 
                                  </div>
                                  <br />
                                  <div className='scllink-box '>
                                    <span>🏛️ </span>
                                    <div className="youtube-bio-link "> 🛍   Shop 🏪   </div> 
                                  </div>
                              </div>
                          </div>
                      </div>
    

                
                  </div>
                </div>
               </div>

              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 social-boxes mb-4">
              <div className=" social-box3  ">
                  <div className="social-detail-box3  ">
                  <div className='bio-details-3 d-flex align-items-center justify-content-center'>
                  <div className="pt-25 pl-4 logo-img  transition5">
                    <Link to ='/' className="  " >
                      <img src="images/logo/image.gif"  alt="THAMES" />
                    </Link>
                    </div>
                 <div className='profile-info-box pt-20  pb-0 w-100'> @xyz 
                  <br />
                  <div className="sm-icons mb-0 ml-0 rotate-hover">
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                 </div>
              
                  </div>
                  <div className="container">
                          <div className="row">
                              <div className="col-12">
                  <div className="bio-description">
                   <p>Hi! 👋  I'm Sami , All links Below!!</p> </div>
                    
                  <div className="iframe3 d-flex  justify-content-center">
                                              <iframe
                                            src="https://www.youtube.com/embed/FK4ivQ9hZ5g"

                                            title=" Video"></iframe>
                             </div>
            <div className="bio-inputs">
                                      <input type="email" placeholder="Enter your email"  />
                                      <button type="button" className="">Subscribe</button>
                                  </div>
            
                                  <div className="amazon-card ">                      
                                <img src="https://cdn.usbrandcolors.com/images/logos/amazon-logo.svg" alt="" />
                                <div className='amazon-text'>
                                    <p>My Amazon Shop</p>
                                    <span>Loremrporis nam vitae laudantium? Quae, rerum!</span>
                                    </div>

                  
                                </div>
                               
                             
                                    </div>
                                           </div>
                                           </div>
                                           </div>

                                  </div>
               </div>

              <div className="col-lg-3 col-md-6 col-sm-12 social-boxes mb-4">
              <div className=" social-box4 ">
                  <div className="social-detail-box ">
                  <div className='bio-details d-flex align-items-center justify-content-center'>
                  <div className=" pt-25 logo-img  transition5">
                    <Link to ='/' className="  " >
                      <img src="images/logo/image.gif"  alt="THAMES" />
                    </Link>
                    </div>
                    <p className='pt-2'>@jf.ok</p>
                 
                    
                 <div className=" mt-20 slider-social-link d-flex align-items-center">
                      <div className="sm-icons mt-10 mb-0 rotate-hover">
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="text-center d-inline-block rotate" href="#"><i className="fab fa-youtube"></i></a>
                      </div>
                  </div>
               
                  <div className="container">
                          <div className="row">
                              <div className="col-12">

                              <div className="m-10 bio-description ">
                                <p> Presave my newest cover Below!! </p>
                              </div>
                                  <div className="bio-inputs">
                                      <input type="email" placeholder="Enter your email"  />
                                      <button type="button" className="">Subscribe</button>
                                  </div>
                                  <br />
                                  <div className='scllink-box '>
                                    <span><i className="fab fa-youtube"></i> </span>
                                    <div className="youtube-bio-link "> 🎬 Youtube ▶️ </div> 
                                  </div>
                                  <br />
                                  <div className='scllink-box '>
                                    <span><i className="fab fa-instagram"></i> </span>
                                    <div className="youtube-bio-link "> 📷  Instagram 📷  </div> 
                                  </div>
                                  <br />
                                  <div className='scllink-box '>
                                    <span>🏛️ </span>
                                    <div className="youtube-bio-link "> 🛍   Shop 🏪   </div> 
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
      
    </>
  )
}
