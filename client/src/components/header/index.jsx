import React, { Component, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../../utils/context';
import styles from './index.module.css';

export default function Header() {
  const context = useContext(Context);
  const logout = () => {
    context.auth.userLogOut();
  }

  return (
    <div id="tatsu-header-container">
       <div id="tatsu-header-wrap" className=" sticky transparent dark header-auto-pad">
          <div className="tatsu-header  default  sticky apply-color-scheme tatsu-fymr7igdpxdyooc "  data-padding='{"d":"25px 0px 23px 0px","t":"25px 10px 23px 10px"}' data-sticky-padding='{"d":"20px 0px 20px 0px","t":"25px 10px 25px 10px"}' >
             <div className="tatsu-header-row tatsu-wrap">
                <div className="tatsu-header-col tatsu-fymr7igdsy1qdivq  " >
                   <div className="tatsu-header-logo tatsu-header-module tatsu-fymr7igduqg3hhr  " >
                    <a href="/">
                      <img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/images/logonobg.png" className="logo-img default-logo" alt="" />
                      <img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/images/logonobg.png" className="logo-img dark-logo" alt="" />
                      <img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/images/logonobg.png" className="logo-img light-logo" alt="" />
                    </a>
                  </div>
                </div>
                <div className="tatsu-header-col tatsu-fymr7igej4gimbr9  tatsu-hide-mobile " >
                   <nav  className="tatsu-header-module tatsu-header-navigation clearfix  tatsu-hide-tablet tatsu-hide-mobile">
                      <div className="tatsu-menu tatsu-Y4BPcfWoe">
                         <ul id="normal-menu-Y4BPcfWoe" className="clearfix ">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6838"><a title="Home" href="/">Home</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6823"><a title="Features" href="/#feature">Features</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6824"><a title="Testimonials" href="/#testimonials">Testimonials</a></li>
                         </ul>
                      </div>
                   </nav>
                   <div className="tatsu-header-module tatsu-mobile-navigation  tatsu-hide-tablet tatsu-hide-mobile">
                      <div className="tatsu-mobile-menu tatsu-Y4BPcfWoe">
                         <ul id="menu-Y4BPcfWoe" className="clearfix ">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6838"><a title="Home" href="#home">Home</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6823"><a title="Features" href="#feature">Features</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6824"><a title="Testimonials" href="#testimonials">Testimonials</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6825"><a title="Price" href="#price">Price</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6826"><a title="FAQs" href="#faq">FAQs</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6892"><a title="Blog" href="https://spyrowptheme.com/saas-clickthrough-new/blog/">Blog</a></li>
                         </ul>
                      </div>
                      <div className="tatsu-mobile-menu-icon">
                         <div className="expand-click-area"></div>
                         <div className="line-wrapper"><span className="line-1"></span><span className="line-2"></span><span className="line-3"></span></div>
                      </div>
                   </div>
                </div>
                <div className="tatsu-header-col tatsu-fymr7ihage48oj9l  spyroheadermaincss" >
                  {
                    !gon.current_user &&
                    <>
                      <div  className="tatsu-module tatsu-normal-button tatsu-button-wrap align-block block-  tatsu-l00veHRNz   tatsu-hide-mobile tatsu-hide-tablet btnmainsecheader"><a className="tatsu-shortcode smallbtn tatsu-button left-icon rounded   bg-animation-none  " href="/sign-in" aria-label="Login" data-gdpr-atts={{}} >Login</a></div>
                      <div  className="tatsu-module tatsu-normal-button tatsu-button-wrap align-block block-  tatsu-fymr7ihakg7lbul1   tatsu-hide-mobile tatsu-hide-tablet btnmainsecheader"><a className="tatsu-shortcode smallbtn tatsu-button left-icon rounded   bg-animation-none  " href="/#contact" aria-label="Signup" data-gdpr-atts={{}} >Signup</a></div>
                    </>
                  }
                  {
                    gon.current_user &&
                    <div  className="tatsu-module tatsu-normal-button tatsu-button-wrap align-block block-  tatsu-l00veHRNz   tatsu-hide-mobile tatsu-hide-tablet btnmainsecheader">Hi {context.auth.getCurrentUser().name}<a className="tatsu-shortcode smallbtn tatsu-button left-icon rounded   bg-animation-none  " onClick={logout} aria-label="Login" data-gdpr-atts={{}} >Logout</a></div>
                  }
                   <div  className="tatsu-header-module tatsu-hamburger tatsu-fymr7ihc339u3a83  tatsu-hide-laptop tatsu-hide-desktop " data-slide-menu="tatsu-fymr7ihc339u3a83">
                      <div className="line-wrapper">
                         <span className="line-1"></span>
                         <span className="line-2"></span>
                         <span className="line-3"></span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div id="tatsu-header-placeholder"></div>
    </div>
  )
}
