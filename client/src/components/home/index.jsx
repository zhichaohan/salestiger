import React, { useState } from 'react'
import { createLandingPageContacts } from '../../api/landing_page_contacts';
import { notifySuccess } from '../../helpers';

export default function Home() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    createLandingPageContacts({
      first_name: firstName,
      last_name: lastName,
      email: email,
      company_name: companyName,
    }, () => {
      notifySuccess("Thank you for your submission. We will reach out to you within 24 hours!")
    });
  }

  const renderHero = () => {
    return (
      <div id="home" className="tatsu-SN6LuD0JDf tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title="Home"  data-headerscheme="background--dark">
         <div className='tatsu-section-pad clearfix' data-padding='{"d":"59px 0px 0px 0px","l":"61px 0px 0px 0px","t":"50px 50px 50px 50px","m":"100px 0px 100px 0px"}' data-padding-top='100px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-custom-gutter tatsu-reg-cols  tatsu-clearfix tatsu-5NGYDtkFgC" >
               <div  className="tatsu-row HeroSectRow" style={{ marginLeft:"-0px", marginRight:"-0px" }}>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-align-middle tatsu-column-image-none tatsu-column-effect-none  tatsu-V39RM5w-C"  data-parallax-speed="0" style={{ padding: "0 0px" }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-nxSVzqt23   " >
                                 <div className="tatsu-inline-text-inner ">
                                    <h1><span className="h1 ">We book the meetings.<br/>You close the deals.</span></h1>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-OvcNgYbxL   " >
                                 <div className="tatsu-inline-text-inner ">
                                    <p><span className="body ">Spend time on what's important - meeting with highly qualified leads and converting them into loyal customers. We've combined decades of sales expertise with powerful-AI to save you time and help you close more deals.</span></p>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-button-group align-left tatsu-SjhrPiYhPU  btnmainsec"  >
                                 <div  className="tatsu-module tatsu-normal-button tatsu-button-wrap   tatsu-cGqmz3dT2   btnmainsec">
                                  <a className="tatsu-shortcode mediumbtn tatsu-button left-icon    bg-animation-none  " href="#contact"  aria-label="Signup for free" data-gdpr-atts={{}} >Contact us now</a></div>
                                 <div id="gdpr-alt-lightbox-qC56hh8kiv" className=" white-popup mfp-hide" >
                                    <div className="gdpr-alt-image">
                                       <img style={{ opacity: "1", width: "100%" }} src="https://img.youtube.com/vi/7e90gBu4pas/maxresdefault.jpg"/>
                                       <div className="gdpr-video-alternate-image-content" >Your consent is required to display this content from youtube - <a href="#gdpr-popup" className="mobx privacy-settings" data-type="HTML" >Privacy Settings</a> </div>
                                    </div>
                                 </div>
                                 {
                                   /*

                                   <div  className="tatsu-module tatsu-normal-button tatsu-button-wrap   tatsu-qC56hh8kiv   btnmainsec wthdemo">
                                    <a className="tatsu-shortcode mediumbtn tatsu-button left-icon rounded  mfp-iframe bg-animation-none be-gdpr-consent-required " href="https://www.youtube.com/watch?v=7e90gBu4pas"  aria-label="Watch demo" >
                                    <i className="tatsu-icon tatsu-icon-controller-play"></i>Watch demo</a>
                                  </div>
                                   */
                                 }
                              </div>
                              {
                                /*
                                <ul  className="tatsu-module tatsu-list tatsu-6zVaGeCu4q   HeroSectionCheck tatsu-list-vertical-align-center tatsu-lists-icon" >
                                   <li  className="tatsu-list-content tatsu-blY2tTIkl   " >
                                      <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                      <div className="tatsu-list-inner">
                                         <p>30-day money-back guarantee</p>
                                      </div>
                                   </li>
                                   <li  className="tatsu-list-content tatsu-KjiTfwAaN   " >
                                      <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                      <div className="tatsu-list-inner">
                                         <p>Monthly subscription, no commitment</p>
                                      </div>
                                   </li>
                                </ul>
                                */
                              }
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image-none tatsu-column-effect-none imgtopsec tatsu-8oaWcx6yuD"  data-parallax-speed="0" style={{ padding: "0 0px" }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-single-image tatsu-module align-right tatsu-image-lazyload tatsu-image-overflow  tatsu-external-image tatsu-hV5cHO5mi  " >
                                 <div className="tatsu-single-image-inner " >
                                    <div className="tatsu-single-image-padding-wrap" ></div>
                                    <img className="tatsu-gradient-border" data-src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/Group-6945-1.png" alt =" "  src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="  />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tatsu-section-background-wrap">
            <div className="tatsu-section-background" ></div>
         </div>
         <div className="tatsu-overlay tatsu-section-overlay"></div>
      </div>
    )
  }

  const renderTrustedBy = () => {
    return (
      <div  className="tatsu-E7doXFFQ5T tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title=""  data-headerscheme="background--dark">
         <div className='tatsu-section-pad clearfix' data-padding='{"d":"68px 0px 100px 0px","m":"0px 15px 100px 15px","t":"0px 50px 100px 50px"}' data-padding-top='0px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-one-col tatsu-row-has-one-cols tatsu-medium-gutter tatsu-reg-cols  tatsu-clearfix tatsu-qrhEsNwAJ6" >
               <div  className="tatsu-row " >
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-col tatsu-column-image-none tatsu-column-effect-none  tatsu-nf7asETWf"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-i2CnR_8Mw   " >
                                 <div className="tatsu-inline-text-inner tatsu-align-center">
                                    <h5>Trusted by 2,000+ companies around the world</h5>
                                 </div>
                              </div>
                              <div className="tatsu-row-wrap  tatsu-row-has-five-cols tatsu-custom-gutter tatsu-eq-cols tatsu-inner-row-wrap  tatsu-clearfix tatsu-Ukb-OzCIF1" >
                                 <div  className="tatsu-row " style={{ marginLeft:"-10px", marginRight: "-10px" }}>
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-fifth tatsu-column-align-middle tatsu-column-image- tatsu-column-effect-  tatsu-qKpDAJqGG"  data-parallax-speed="0" style={{ padding: "0 10px" }}>
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-single-image tatsu-module align-center tatsu-external-image tatsu-Vs_Kr-DNv  " >
                                                   <div className="tatsu-single-image-inner " >
                                                      <div className="tatsu-single-image-padding-wrap" ></div>
                                                      <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/iconbig1.png" alt =" "  />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-fifth tatsu-column-align-middle tatsu-column-image- tatsu-column-effect-  tatsu-zTPdRgVbzx"  data-parallax-speed="0" style={{ padding: "0 10px" }}>
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-single-image tatsu-module align-center tatsu-external-image tatsu-2mXf2IBSw  " >
                                                   <div className="tatsu-single-image-inner ">
                                                      <div className="tatsu-single-image-padding-wrap" ></div>
                                                      <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/iconbig2.png" alt =" "  />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-fifth tatsu-column-align-middle tatsu-column-image- tatsu-column-effect-  tatsu-_dR5k6PGBh"  data-parallax-speed="0" style={{ padding: "0 10px" }}>
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-single-image tatsu-module align-center tatsu-external-image tatsu-wK8exs4pE  " >
                                                   <div className="tatsu-single-image-inner " >
                                                      <div className="tatsu-single-image-padding-wrap" ></div>
                                                      <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/iconbig3.png" alt =" "  />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-fifth tatsu-column-align-middle tatsu-column-image- tatsu-column-effect-  tatsu-Xg7jtTjEm8"  data-parallax-speed="0" style={{ padding: "0 10px" }}>
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-single-image tatsu-module align-center tatsu-external-image tatsu-4GeQ4RvIU  " >
                                                   <div className="tatsu-single-image-inner ">
                                                      <div className="tatsu-single-image-padding-wrap" ></div>
                                                      <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/iconbig4.png" alt =" "  />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-fifth tatsu-column-align-middle tatsu-column-image- tatsu-column-effect-  tatsu-m6HmiKGwe9"  data-parallax-speed="0" style={{ padding: "0 10px" }}>
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-single-image tatsu-module align-center tatsu-external-image tatsu-bJcW9QNkp  " >
                                                   <div className="tatsu-single-image-inner " >
                                                      <div className="tatsu-single-image-padding-wrap" ></div>
                                                      <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/iconbig5.png" alt =" "  />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tatsu-section-background-wrap">
            <div className="tatsu-section-background" ></div>
         </div>
         <div className="tatsu-overlay tatsu-section-overlay"></div>
      </div>
    )
  }

  const renderImgLeftTextRight = () => {
    return (
      <div id="feature" className="tatsu-Bmf6Qb3hd tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title="Feature"  data-headerscheme="background--dark">
         <div className='tatsu-section-pad clearfix' data-padding='{"d":"100px 0px 100px 0px","m":"100px 25px 100px 25px","t":"100px 50px 100px 50px"}' data-padding-top='100px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-medium-gutter tatsu-reg-cols  tatsu-clearfix tatsu-w8QawLyG7E" >
               <div  className="tatsu-row " >
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-align-middle tatsu-column-image-none tatsu-column-effect-none  tatsu-yRG1xIDvjW"  data-parallax-speed="0" >
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-single-image tatsu-module tatsu-external-image tatsu-rHuC9Zt32Y  " >
                                 <div className="tatsu-single-image-inner ">
                                    <div className="tatsu-single-image-padding-wrap" ></div>
                                    <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2021/06/saas-scale-your-busines-img.jpg" alt =" "  />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image-none tatsu-column-effect-none  tatsu-kI4zpG6O1I"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-text-block-wrap tatsu-L964h8ELS  brrmvtagas">
                                 <div className="tatsu-text-inner   clearfix" >
                                    <h2>Work smarter. Scale faster.</h2>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-qqMYFMQmik   " >
                                 <div className="tatsu-inline-text-inner tatsu-align-center">
                                    <p><span className="body_1">Sales reps spend an average of <b>456</b> hours each year on prospecting and lead-generation activities. Instead, give your reps a calendar full of meetings and 57 more days a year to close deals.</span></p>
                                 </div>
                              </div>
                              <div className="tatsu-row-wrap  tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-medium-gutter tatsu-reg-cols tatsu-inner-row-wrap  tatsu-clearfix tatsu-wEPtfoLO1r" >
                                 <div  className="tatsu-row " >
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image- tatsu-column-effect-  tatsu-DzKQI6Ze18"  data-parallax-speed="0">
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-svg-icon tatsu-module align-none  tatsu-line-animate small tatsu-uLpOnbxAm tatsu-svg-icon-default tatsu-svg-icon-plain  " data-path-animation="EASE" data-svg-animation="EASE_IN" data-animation-duration = "300"  data-animation = "none"   >
                                                   <div className="tatsu-svg-icon-inner">
                                                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                                                         <circle fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" cx="51" cy="13" r="12"/>
                                                         <circle fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" cx="11" cy="42" r="10"/>
                                                         <circle fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" cx="48" cy="55" r="8"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="40" y1="54" x2="20" y2="46"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="19" y1="35" x2="41" y2="21"/>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-HW6sdOqjJL   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <h5>AI driven lead generation</h5>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-ff_Pna_AAZ   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p>
                                                         <span className="body">SalesTiger leverages the power of advanced algorithms to analyze vast amounts of data and pinpoint your perfect prospects.</span>
                                                      </p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image- tatsu-column-effect-  tatsu-8EfsPDUrQv"  data-parallax-speed="0">
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-svg-icon tatsu-module align-none  tatsu-line-animate small tatsu-P7ad1oSMU tatsu-svg-icon-default tatsu-svg-icon-plain  " data-path-animation="EASE" data-svg-animation="EASE_IN" data-animation-duration = "300"  data-animation = "none"   >
                                                   <div className="tatsu-svg-icon-inner">
                                                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                                                         <polygon fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="32,47 63,47 63,5 1,5 1,47 18,47 18,59 "/>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-CmNxbLp_ee   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <h5>Multi-Channel Strategy</h5>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-Pxn8sYxwzeZ   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p>
                                                         <span className="body ">From there, we utilize cutting- edge communication tactics and multi-channel outreach to schedule face-to-face meetings with decision-makers.</span>
                                                      </p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tatsu-section-background-wrap">
            <div className="tatsu-section-background" ></div>
         </div>
         <div className="tatsu-overlay tatsu-section-overlay"></div>
      </div>
    )
  }

  const renderThreeBlock = () => {
    return (
      <div  className="tatsu-1LmiPbIRZ tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title=""  data-headerscheme="background--dark">
         <div className='tatsu-section-pad clearfix' data-padding='{"d":"97px 0px 100px 0px","m":"100px 25px 100px 25px","t":"100px 50px 100px 50px"}' data-padding-top='100px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-one-col tatsu-row-has-one-cols tatsu-medium-gutter tatsu-reg-cols  tatsu-clearfix tatsu-SXgYFIkdRZ" >
               <div  className="tatsu-row " >
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-col tatsu-column-image-none tatsu-column-effect-none  tatsu-BnqiMQcvw7"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-text-block-wrap tatsu-U4lL99nHl  brrmvtagas">
                                 <div className="tatsu-text-inner tatsu-align-center  clearfix" >
                                    <h2>Say <span style={{ color: "#1082fa" }}>“Hey”</span> to your<br />virtual sales team</h2>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-three-cols tatsu-custom-gutter tatsu-reg-cols  tatsu-clearfix tatsu-QNOvfyOuqI" >
               <div  className="tatsu-row " style={{ marginLeft:"-20px", marginRight:"-20px" }}>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-third tatsu-column-image-none tatsu-column-effect-none  tatsu-HZrhF7C7-U"  data-parallax-speed="0" style={{ padding: '0 20px' }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div className="tatsu-row-wrap  tatsu-row-one-col tatsu-row-has-one-cols tatsu-medium-gutter tatsu-reg-cols tatsu-inner-row-wrap  tatsu-clearfix tatsu-kuYHO83lMM" >
                                 <div  className="tatsu-row " >
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-col tatsu-column-image- tatsu-column-effect-  tatsu-1T6r7gZlTd"  data-parallax-speed="0">
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-svg-icon tatsu-module align-none  tatsu-line-animate custom tatsu-QEw26JHUq tatsu-svg-icon-default tatsu-svg-icon-plain  " data-path-animation="EASE" data-svg-animation="EASE_IN" data-animation-duration = "300"  data-animation = "none"   >
                                                   <div className="tatsu-svg-icon-inner">
                                                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                                                         <rect x="1" y="1" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="62" height="62"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="16" y1="10" x2="16" y2="54"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="48" y1="10" x2="48" y2="54"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="10" x2="32" y2="54"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="10" y1="14" x2="22" y2="14"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="42" y1="50" x2="54" y2="50"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="26" y1="32" x2="38" y2="32"/>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-AE07QEUzGf   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p><span className="h5 ">Onboarding</span></p>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-BLsfoYkXS7   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p><span className="body">Tell us about your product, who you want to target and why they should consider your product</span></p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-third tatsu-column-image-none tatsu-column-effect-none  tatsu-ZMi49uTmIG"  data-parallax-speed="0" style={{ padding: "0 20px" }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div className="tatsu-row-wrap  tatsu-row-one-col tatsu-row-has-one-cols tatsu-medium-gutter tatsu-reg-cols tatsu-inner-row-wrap  tatsu-clearfix tatsu-5dkF6-ZHnn" >
                                 <div  className="tatsu-row " >
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-col tatsu-column-image- tatsu-column-effect-  tatsu-79XiFcRQOS"  data-parallax-speed="0">
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-svg-icon tatsu-module align-none  tatsu-line-animate custom tatsu-F50bjH0c9 tatsu-svg-icon-default tatsu-svg-icon-plain  " data-path-animation="EASE" data-svg-animation="EASE_IN" data-animation-duration = "300"  data-animation = "none"   >
                                                   <div className="tatsu-svg-icon-inner">
                                                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                                                         <polyline fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="5,41 11,1 53,1 59,41 "/>
                                                         <rect x="5" y="41" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="54" height="22"/>
                                                         <circle fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" cx="48" cy="52" r="3"/>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-iMwJCEmuAe   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p><span className="h5 ">See your sales team in action</span></p>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-OVVtUt5jfiV   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p><span className="palette-3 body">See who your team is reaching out to, what they are saying and get booked meetings</span></p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-third tatsu-column-image-none tatsu-column-effect-none  tatsu-ReaDucokMrm"  data-parallax-speed="0" style={{ padding: "0 20px" }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div className="tatsu-row-wrap  tatsu-row-one-col tatsu-row-has-one-cols tatsu-medium-gutter tatsu-reg-cols tatsu-inner-row-wrap  tatsu-clearfix tatsu-HA3z-wrfbyM" >
                                 <div  className="tatsu-row " >
                                    <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-col tatsu-column-image- tatsu-column-effect-  tatsu-JsTkZV75reo"  data-parallax-speed="0">
                                       <div className="tatsu-column-inner " >
                                          <div className="tatsu-column-pad-wrap">
                                             <div className="tatsu-column-pad" >
                                                <div  className="tatsu-svg-icon tatsu-module align-none  tatsu-line-animate custom tatsu-lbOxrY2jl tatsu-svg-icon-default tatsu-svg-icon-plain  " data-path-animation="EASE" data-svg-animation="EASE_IN" data-animation-duration = "300"  data-animation = "none"   >
                                                   <div className="tatsu-svg-icon-inner">
                                                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                                                         <polygon fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="55,24 22,24 22,12 55,12 62,18 "/>
                                                         <polygon fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="9,28 42,28 42,40 9,40 2,34 "/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="40" x2="32" y2="64"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="28" x2="32" y2="24"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="12" x2="32" y2="7"/>
                                                         <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="24" y1="63" x2="40" y2="63"/>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-pBoo0abnAEe   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p><span className="h5 ">Get booked meetings</span></p>
                                                   </div>
                                                </div>
                                                <div  className="tatsu-module tatsu-inline-text clearfix tatsu-I7I0I01anyD   " >
                                                   <div className="tatsu-inline-text-inner ">
                                                      <p><span className="palette-3 body">Connect your calendar and your virtual sales team will put the meetings on your calendar based on your availability</span></p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="tatsu-column-bg-image-wrap">
                                             <div className="tatsu-column-bg-image" ></div>
                                          </div>
                                          <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tatsu-section-background-wrap">
            <div className="tatsu-section-background" ></div>
         </div>
         <div className="tatsu-overlay tatsu-section-overlay"></div>
      </div>
    )
  }

  const renderTextLeftImgRight = () => {
    return (
      <div  className="tatsu-QIvtLHsJ0 tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title=""  data-headerscheme="background--dark">
         <div className='tatsu-section-pad clearfix' data-padding='{"d":"18px 0px 100px 0px","m":"20px 25px 100px 25px","t":"0px 50px 100px 50px"}' data-padding-top='20px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-medium-gutter tatsu-reg-cols  tatsu-clearfix tatsu-tIsaWZHXbG" >
               <div  className="tatsu-row " >
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image-none tatsu-column-effect-none  tatsu-5n4dGxKwQL"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-normal-icon tatsu-icon-shortcode align-none tatsu-SvsMGE0ZH   "><span  className="tatsu-icon-wrap circle  tatsu-animate    " data-animation="fadeIn"   aria-label="tatsu-icon-bell2" data-gdpr-atts={{}}   ><i className="tatsu-icon tatsu-custom-icon tatsu-custom-icon-class tatsu-icon-bell2 medium circle"  data-animation="fadeIn" data-animation-delay="0"></i></span></div>
                              <div  className="tatsu-module tatsu-text-block-wrap tatsu-ekkNLj2vz  brrmvtagas">
                                 <div className="tatsu-text-inner   clearfix" >
                                    <h2>Put Your Cyber Sales<br />Team to Work</h2>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-6XYiBWUwDu   " >
                                 <div className="tatsu-inline-text-inner ">
                                    <p><span className="body_1" style={{ fontSize: "18px" }}>SalesTiger's easy-to-use CRM allows you to upload existing contacts and leads while analyzing and producing new leads and opportunities.</span></p>
                                 </div>
                              </div>
                              {
                                /*
                                <div className="tatsu-row-wrap  tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-zero-margin tatsu-small-gutter tatsu-reg-cols tatsu-inner-row-wrap  tatsu-clearfix tatsu-o6ljZGYzQD" >
                                   <div  className="tatsu-row " >
                                      <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image- tatsu-column-effect-  tatsu-SnOKVCwo32"  data-parallax-speed="0">
                                         <div className="tatsu-column-inner " >
                                            <div className="tatsu-column-pad-wrap">
                                               <div className="tatsu-column-pad" >
                                                  <ul  className="tatsu-module tatsu-list tatsu-E0YIKkxoa5   ListManage tatsu-list-vertical-align-center tatsu-lists-icon" >
                                                     <li  className="tatsu-list-content tatsu-sJpgKDUfao   " >
                                                        <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                                        <div className="tatsu-list-inner">
                                                           <h6>Code Optimization</h6>
                                                        </div>
                                                     </li>
                                                     <li  className="tatsu-list-content tatsu-cyxwVpwj_m   " >
                                                        <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                                        <div className="tatsu-list-inner">
                                                           <h6>Hosting with SSL & CDN</h6>
                                                        </div>
                                                     </li>
                                                     <li  className="tatsu-list-content tatsu-7Zdc0k9Gjs   " >
                                                        <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                                        <div className="tatsu-list-inner">
                                                           <h6>Image Compression</h6>
                                                        </div>
                                                     </li>
                                                  </ul>
                                               </div>
                                            </div>
                                            <div className="tatsu-column-bg-image-wrap">
                                               <div className="tatsu-column-bg-image" ></div>
                                            </div>
                                            <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                         </div>
                                      </div>
                                      <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image- tatsu-column-effect-  tatsu-5OBIhj3HCf"  data-parallax-speed="0" >
                                         <div className="tatsu-column-inner " >
                                            <div className="tatsu-column-pad-wrap">
                                               <div className="tatsu-column-pad" >
                                                  <ul  className="tatsu-module tatsu-list tatsu-zMxN7fWJcL   ListManage tatsu-list-vertical-align-center tatsu-lists-icon" >
                                                     <li  className="tatsu-list-content tatsu-r0XTUmt3Eq   " >
                                                        <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                                        <div className="tatsu-list-inner">
                                                           <h6>Code Optimization</h6>
                                                        </div>
                                                     </li>
                                                     <li  className="tatsu-list-content tatsu-I17x6WBA9O   " >
                                                        <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                                        <div className="tatsu-list-inner">
                                                           <h6>SSL & CDN</h6>
                                                        </div>
                                                     </li>
                                                     <li  className="tatsu-list-content tatsu-o6f-D8By8an   " >
                                                        <div className="tatsu-list-icon-wrap" ><i className="tatsu-icon tatsu-icon-check-square "></i></div>
                                                        <div className="tatsu-list-inner">
                                                           <h6>Image Compression</h6>
                                                        </div>
                                                     </li>
                                                  </ul>
                                               </div>
                                            </div>
                                            <div className="tatsu-column-bg-image-wrap">
                                               <div className="tatsu-column-bg-image" ></div>
                                            </div>
                                            <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                */
                              }

                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-align-top tatsu-column-image-none tatsu-column-effect-none  tatsu-vA7KXxvFb7"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-single-image tatsu-module align-center tatsu-external-image tatsu-qc4IFq6QM  " >
                                 <div className="tatsu-single-image-inner " >
                                    <div className="tatsu-single-image-padding-wrap" ></div>
                                    <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/images/dashboard.png" alt =" " style={{ paddingTop: '30px' }} />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tatsu-section-background-wrap">
            <div className="tatsu-section-background" ></div>
         </div>
         <div className="tatsu-overlay tatsu-section-overlay"></div>
      </div>
    )
  }

  const renderTestimonials = () => {
    return (
      <div id="testimonials" className="tatsu-drSoMr2JP tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title="Testimonials"  data-headerscheme="background--dark">
         <div className='tatsu-section-pad clearfix' data-padding='{"d":"100px 0px 80px 0px","m":"100px 25px 80px 25px","t":"100px 50px 80px 50px"}' data-padding-top='100px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-one-col tatsu-row-has-one-cols tatsu-medium-gutter tatsu-reg-cols  tatsu-clearfix tatsu-7mymbNveY-" >
               <div  className="tatsu-row " >
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-col tatsu-column-image-none tatsu-column-effect-none  tatsu-Wd1CgWNpRv"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-Ros7f8MXr   " >
                                 <div className="tatsu-inline-text-inner tatsu-align-center">
                                    <h6><span className="palette-0">TESTIMONIALS</span></h6>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-text-block-wrap tatsu-Q0vLajrnT  brrmvtagas">
                                 <div className="tatsu-text-inner tatsu-align-center  clearfix" >
                                    <h2>What Our Customers Say</h2>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-three-cols tatsu-zero-margin tatsu-custom-gutter tatsu-eq-cols  tatsu-clearfix tatsu-UiELG475Cf" >
               <div  className="tatsu-row " style={{ marginLeft:"-17px", marginRight: "-17px" }}>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-third tatsu-column-image-none tatsu-column-effect-none  tatsu-ccX13-lhd"  data-parallax-speed="0" style={{ padding: "0 17px" }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-star-rating tatsu-oVuZJFKxx    tatsu-star-rating-align-none" >
                                 <div className="tatsu-star-rating-inner">
                                    <div className="tatsu-star-rating-range">
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="tatsu-star-rating-filled">
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-7eao8thil   " >
                                 <div className="tatsu-inline-text-inner ">
                                    <p><span className="body palette-3">Being a part of a fast-growing sales team for a start-up can be overwhelming at times, but having SalesTiger always made me feel excited to come to work the next day. I didn't have to spend hours every day finding the right customers and booking meetings - I came into work with a full calendar almost daily.</span></p>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-icon_card  tatsu-YtE0i0BcN  custominfo tatsu-icon_card-type-image tatsu-icon_card-style1 tatsu-icon_card-align-left tatsu-icon_card-vertical-align-center tatsu-icon_medium" >
                                 <div className="tatsu-icon_card-icon tatsu-img-plain">
                                 </div>
                                 <div className="tatsu-icon_card-title-caption">
                                    <div className="tatsu-icon_card-title h6">
                                       Ben B.
                                    </div>
                                    <div className="tatsu-icon_card-caption body">
                                       <p>Sales Exec @ ServiceNow</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-third tatsu-column-image-none tatsu-column-effect-none  tatsu-rZP9XntecH"  data-parallax-speed="0" style={{ padding: "0 17px" }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-star-rating tatsu-Q7nCqJbbVn    tatsu-star-rating-align-none" >
                                 <div className="tatsu-star-rating-inner">
                                    <div className="tatsu-star-rating-range">
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="tatsu-star-rating-filled">
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-Ef9L7ZOQX   " >
                                 <div className="tatsu-inline-text-inner ">
                                    <p><span className="palette-3 body">I had the privilege of working with SalesTiger at my previous company. They went above and beyond to understand our unique needs and tailor their solutions to fit our sales team. The results speak for themselves - they helped our team consistently exceed activity metrics and quota goals and we saw a 25% increase in revenue in just 3 months.</span></p>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-icon_card  tatsu-yXo8TSx7C  custominfo tatsu-icon_card-type-image tatsu-icon_card-style1 tatsu-icon_card-align-left tatsu-icon_card-vertical-align-center tatsu-icon_medium" >
                                 <div className="tatsu-icon_card-icon tatsu-img-plain">
                                 </div>
                                 <div className="tatsu-icon_card-title-caption">
                                    <div className="tatsu-icon_card-title h6">
                                       Tyler M.
                                    </div>
                                    <div className="tatsu-icon_card-caption body">
                                       <p>Sales Exec @ SmartSheets</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-third tatsu-column-image-none tatsu-column-effect-none  tatsu-tnJ3uIeylF"  data-parallax-speed="0" style={{ padding: "0 17px" }}>
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-star-rating tatsu-VFJli9Vam    tatsu-star-rating-align-none" >
                                 <div className="tatsu-star-rating-inner">
                                    <div className="tatsu-star-rating-range">
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1189 6866 1190.9 6871.348 1196 6871.348 1191.838 6874.488 1193.327 6880 1189 6876.695 1184.675 6880 1186.162 6874.488 1182 6871.348 1187.1 6871.348" transform="translate(-1182 -6866)"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="tatsu-star-rating-filled">
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                       <span className="tatsu-star-rating-star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                             <polygon points="1170 6866 1171.9 6871.348 1177 6871.348 1172.838 6874.488 1174.327 6880 1170 6876.695 1165.675 6880 1167.162 6874.488 1163 6871.348 1168.1 6871.348" transform="translate(-1163 -6866)"/>
                                          </svg>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-eMEf-qAoM   " >
                                 <div className="tatsu-inline-text-inner ">
                                    <p><span className="palette-3 body">We've been using SalesTiger for several months now and have seen tremendous results. Working with them has been a game-changer for our start-up. Their technology and expertise helped us scale quickly and efficiently.</span></p>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-icon_card  tatsu-lERMVlE_i  custominfo tatsu-icon_card-type-image tatsu-icon_card-style1 tatsu-icon_card-align-left tatsu-icon_card-vertical-align-center tatsu-icon_medium" >
                                 <div className="tatsu-icon_card-icon tatsu-img-plain">
                                 </div>
                                 <div className="tatsu-icon_card-title-caption">
                                    <div className="tatsu-icon_card-title h6">
                                       Soovin C.
                                    </div>
                                    <div className="tatsu-icon_card-caption body">
                                       <p>Sales Enablement @ ServiceTitan</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tatsu-section-background-wrap">
            <div className="tatsu-section-background" ></div>
         </div>
         <div className="tatsu-overlay tatsu-section-overlay"></div>
      </div>
    )
  }

  const renderWeSupport = () => {
    return (
      <div  className="tatsu-e09L8kt9m tatsu-section  tatsu-bg-overlay bottomsupportsec  tatsu-clearfix" data-title=""  data-headerscheme="background--dark">
         <div className='tatsu-section-pad clearfix' data-padding='{"d":"0px 0px 0px 0px","m":"0px 30px 0px 30px","t":"0px 50px 0px 50px"}' data-padding-top='0px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-medium-gutter tatsu-reg-cols  tatsu-clearfix tatsu-ifVN4g27DP" >
               <div  className="tatsu-row " >
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-align-middle tatsu-column-image-none tatsu-column-effect-none  tatsu--yCdMmp4qe"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-module tatsu-text-block-wrap tatsu-U6OOa5En8  brrmvtagas">
                                 <div className="tatsu-text-inner   clearfix" >
                                    <h2>Sales Made Easy</h2>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-inline-text clearfix tatsu-a-gKHmG1P   " >
                                 <div className="tatsu-inline-text-inner ">
                                    <p>
                                       <span className="body_1 " style={{ color: "#fefefe" }}>Automate and scale your outreach efforts so you can focus on your product and increasing your revenue.</span>
                                    </p>
                                 </div>
                              </div>
                              <div  className="tatsu-module tatsu-normal-button tatsu-button-wrap   tatsu-oo-QiKDD5   btnmainsec"><a className="tatsu-shortcode mediumbtn tatsu-button left-icon rounded   bg-animation-none  " href="#contact" aria-label="Signup for free" data-gdpr-atts={{}} >Contact us</a></div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
                  <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-align-bottom tatsu-hide-tablet tatsu-hide-mobile tatsu-column-image-none tatsu-column-effect-none imgsidesupport tatsu-wMAjT-QA1c"  data-parallax-speed="0">
                     <div className="tatsu-column-inner " >
                        <div className="tatsu-column-pad-wrap">
                           <div className="tatsu-column-pad" >
                              <div  className="tatsu-single-image tatsu-module align-right tatsu-external-image tatsu-rNDRyRkdo   tatsu-hide-tablet tatsu-hide-mobile" >
                                 <div className="tatsu-single-image-inner ">
                                    <div className="tatsu-single-image-padding-wrap"></div>
                                    <img className="tatsu-gradient-border" src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/imgbusinessperson.png" alt =" "  />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tatsu-column-bg-image-wrap">
                           <div className="tatsu-column-bg-image" ></div>
                        </div>
                        <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tatsu-section-background-wrap">
            <div className="tatsu-section-background" ></div>
         </div>
         <div className="tatsu-overlay tatsu-section-overlay"></div>
      </div>
    )
  }

  const renderContactUs = () => {
    return (
      <div id="be-content">
        <div id="contact"  className="tatsu-SyEsHkKVu tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title=""  data-headerscheme="background--dark">
          <div className='tatsu-section-pad clearfix' data-padding='{"d":"60px 0px 100px 0px","l":"60px 0px 100px 0px","t":"50px 50px 50px 50px","m":"50px 20px 50px 20px"}' data-padding-top='50px'>
            <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-custom-gutter tatsu-reg-cols  tatsu-clearfix tatsu-B1g4iBJYEu" >
              <div  className="tatsu-row HeroSectRow" style={{ marginLeft:"-0px", marginRight:"-0px" }}>
                <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image-none tatsu-column-effect-none imgtopsec tatsu-B1cEoSJFEO"  data-parallax-speed="0" style={{ padding: "0 0px" }}>
                  <div className="tatsu-column-inner " >
                    <div className="tatsu-column-pad-wrap">
                      <div className="tatsu-column-pad" >
                        <div  className="tatsu-single-image tatsu-module align-left tatsu-image-lazyload tatsu-image-overflow  tatsu-external-image tatsu-S1oNsSytN_  " >
                          <div className="tatsu-single-image-inner ">
                            <div class = "tatsu-single-image-padding-wrap"></div>
                            <img class = "tatsu-gradient-border" data-src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2021/03/Spyro-saas-form-hero.png" alt =" "  src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="  />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class = "tatsu-column-bg-image-wrap">
                      <div class = "tatsu-column-bg-image" ></div>
                    </div>
                    <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                  </div>
                </div>
                <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-align-middle tatsu-column-image-none tatsu-column-effect-none  tatsu-BybNiH1Y4O"  data-parallax-speed="0" style={{ padding: "0 0px" }}>
                  <div className="tatsu-column-inner " >
                    <div className="tatsu-column-pad-wrap">
                      <div className="tatsu-column-pad" >
                        <div  className="tatsu-module tatsu-inline-text clearfix tatsu-ryMEoH1FEd   " >
                          <div className="tatsu-inline-text-inner tatsu-align-center">
                            <h2>
                              <span>Learn how we are<br /><span className="palette-0">revoluntionizing</span><br/>the sales game</span>
                            </h2>
                          </div>
                        </div>
                        <div  className="tatsu-module tatsu-inline-text clearfix tatsu-ry74sHJFNu   " >
                          <div className="tatsu-inline-text-inner tatsu-align-center">
                            <p>
                              <span className="body_1">Reserve a spot today</span>
                            </p>
                          </div>
                        </div>
                        <div  class = "tatsu-forms tatsu-module  tatsu-BJHI0E2Bu " >
                          <div class = "tatsu-forms-inner tatsu-form-rounded tatsu-form-submit-rounded" id="form-6534">
                            <form onSubmit={onSubmit} method="post" className="spyro-form basic tatsu-ryGHPIJKVu" data-action="email">
                              <div className="form-fields-container">
                                <div className="form-item-wrap tatsu-r1BDUJtNu form-text">
                                  <div className="form-item">
                                    <div className="form-label"></div>
                                    <div className="form-field-wrap">
                                      <div className="form-field">
                                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-element form-text-element" placeholder="First Name" data-map_field="none" name="first_name" required="required"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-item-wrap tatsu-Hk7QwyFV_ form-text">
                                  <div className="form-item">
                                    <div className="form-label"></div>
                                    <div className="form-field-wrap">
                                      <div className="form-field">
                                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-element form-text-element" placeholder="Last Name" data-map_field="none" name="last_name" required="required"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-item-wrap tatsu-BkbNDktEO form-text">
                                  <div className="form-item">
                                    <div className="form-label"></div>
                                    <div className="form-field-wrap">
                                      <div className="form-field">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-element form-text-element" placeholder="Business Email" data-map_field="none" name="email" required="required"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-item-wrap tatsu-H1xLDyYVd form-text">
                                  <div className="form-item">
                                    <div className="form-label"></div>
                                    <div className="form-field-wrap">
                                      <div className="form-field">
                                        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" className="form-element form-text-element" placeholder="Company Name" data-map_field="none" name="company_name" required="required"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-item-wrap">
                                  <div className="form-item">
                                    <div className="form-field-wrap">
                                      <div className="form-field">
                                        <div className="tatsu-module tatsu-normal-button tatsu-button-wrap align-block align-block block-center">
                                          <input type="submit"  className="tatsu-shortcode blockbtn tatsu-button left-icon  rounded"  aria-label="Contact Us"  value="Submit" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                            <div className="tatsu-form-status">
                              <div className="exp-subscribe-loader">
                                <div className="exp-subscribe-loader-inner">
                                </div>
                              </div>
                              <div className="subscribe_status tatsu-notification">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class = "tatsu-column-bg-image-wrap">
                      <div class = "tatsu-column-bg-image" ></div>
                    </div>
                    <div className="tatsu-overlay tatsu-column-overlay tatsu-animate-none" ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tatsu-section-background-wrap">
            <div class = "tatsu-section-background" ></div>
          </div>
          <div className="tatsu-overlay tatsu-section-overlay"></div>
        </div>
        <div className="be-themes-comments exp-wrap">
          <div id="comments" className="exp-comments exp-comments-without-content">
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      { renderHero() }
      { /* renderTrustedBy() */}
      { renderImgLeftTextRight() }
      { renderThreeBlock() }
      { renderTextLeftImgRight() }
      { renderTestimonials() }
      { renderWeSupport() }
      { renderContactUs() }
    </>
  )
}
