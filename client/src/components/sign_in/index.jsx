import React, { Component, useState, useContext, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { autofocusAll } from '../../helpers'
import Context from '../../utils/context';
import styles from './index.module.css';

export default function SignIn() {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const context = useContext(Context);
  const searchParams = new URLSearchParams(location.search);
  let returnTo = '';
  if (searchParams.get('return_to')) {
    returnTo = searchParams.get('return_to');
  }

  useEffect(() => {
    autofocusAll();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    context.auth.userSignIn(email, password, true, (data) => {
      if (returnTo === '') {
        window.location = "/";
      }
      else {
        window.location = returnTo;
      }
    }, (errors) => {
      console.log("errors", errors);
    });
  }

  return (
    <div id="be-content">
      <div  className="tatsu-SyEsHkKVu tatsu-section  tatsu-bg-overlay   tatsu-clearfix" data-title=""  data-headerscheme="background--dark">
        <div class='tatsu-section-pad clearfix' data-padding='{"d":"60px 0px 100px 0px","l":"60px 0px 100px 0px","t":"50px 50px 50px 50px","m":"50px 20px 50px 20px"}' data-padding-top='50px'>
          <div className="tatsu-row-wrap  tatsu-wrap tatsu-row-has-one-half tatsu-row-has-two-cols tatsu-custom-gutter tatsu-reg-cols  tatsu-clearfix tatsu-B1g4iBJYEu" >
            <div  className="tatsu-row HeroSectRow" style={{ marginLeft: "-0px", marginRight: "-0px" }}>
              <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-image-none tatsu-column-effect-none imgtopsec tatsu-B1cEoSJFEO"  data-parallax-speed="0" style={{ padding: "0 0px" }}>
                <div className="tatsu-column-inner " >
                  <div className="tatsu-column-pad-wrap">
                    <div className="tatsu-column-pad" >
                      <div  className="tatsu-single-image tatsu-module align-left tatsu-image-lazyload tatsu-image-overflow  tatsu-external-image tatsu-S1oNsSytN_  " >
                        <div className="tatsu-single-image-inner ">
                          <div className="tatsu-single-image-padding-wrap"></div>
                          <img className="tatsu-gradient-border" data-src = "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2021/03/Spyro-saas-form-hero.png" alt =" "  src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="  />
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
              <div  className="tatsu-column  tatsu-bg-overlay tatsu-one-half tatsu-column-align-middle tatsu-column-image-none tatsu-column-effect-none  tatsu-BybNiH1Y4O"  data-parallax-speed="0" style={{ padding: "0 0px" }}>
                <div className="tatsu-column-inner " >
                  <div className="tatsu-column-pad-wrap">
                    <div className="tatsu-column-pad" >
                      <div  className="tatsu-module tatsu-inline-text clearfix tatsu-ryMEoH1FEd   " >
                        <div className="tatsu-inline-text-inner tatsu-align-center">
                          <h2><span>Login to Sales Tiger</span></h2>
                        </div>
                      </div>
                      <div  className="tatsu-forms tatsu-module  tatsu-BJHI0E2Bu ">
                        <div className="tatsu-forms-inner tatsu-form-rounded tatsu-form-submit-rounded" id="form-6750">
                          <form onSubmit={onSubmit} method="post" className="spyro-form basic tatsu-ryGHPIJKVu" data-action="email">
                            <div className="form-fields-container">
                              <div className="form-item-wrap tatsu-BkbNDktEO form-text">
                                <div className="form-item">
                                  <div className="form-label"></div>
                                  <div className="form-field-wrap">
                                    <div className="form-field">
                                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-element form-text-element" placeholder="Email" data-map_field="none" name="email" required="required" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-item-wrap tatsu-H1xLDyYVd form-text">
                                <div className="form-item">
                                  <div className="form-label"></div>
                                  <div className="form-field-wrap">
                                    <div className="form-field">
                                      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-element form-text-element" placeholder="Password" data-map_field="none" name="company_name" required="required"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-item-wrap">
                                <div className="form-item">
                                  <div className="form-field-wrap">
                                    <div className="form-field">
                                      <div className="tatsu-module tatsu-normal-button tatsu-button-wrap align-block align-block block-center">
                                        <input type="submit"  className="tatsu-shortcode blockbtn tatsu-button left-icon  rounded"  aria-label="Login"  value="Login" />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
