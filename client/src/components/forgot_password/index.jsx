import React, { Component, useState, useContext, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { autofocusAll } from '../../helpers'
import Context from '../../utils/context';
import { notifySuccess, notifyError } from '../../helpers';
import styles from './index.module.css';

export default function ForgotPassword() {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [inputFocus, setInputFocus] = useState('email');
  const context = useContext(Context);

  useEffect(() => {
    autofocusAll();
  }, []);

  const onSubmit = () => {
    context.auth.userRecoverPassword(email, () => {
      notifySuccess('If an account with that email exists, we will send over instructions for resetting your password');
    }, () => {
      notifyError('If an account with that email exists, we will send over instructions for resetting your password');
    });
  }

  return (
    <main className="main">
      <section className="section-box">
        <div className="bg-2-opacity-80">
          <div className="box-login">
            <div className="row">
              <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12 login-left pl-0 d-none d-lg-flex"><img className="img-responsive" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/login/img-1.png" /></div>
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 login-right pr-0">
                <div className="box-login-form">
                  <div className="box-signup mt-90">
                    <h1 className="text-heading-3 mb-40 text-center">Welcome back.</h1>
                    <div className="text-center">
                      <div className="mt-40 box-line-throught mb-40"><span className="text-body-text color-gray-500">Provide your email and receive a link to reset your password</span></div>
                    </div>
                    <div className="box-form-signup">
                      <div className="form-group">
                        <div className="form-field"><span className="text-body-small color-green-900 tag-top">Email</span>
                          <input onFocus={() => setInputFocus('email')} value={email} onChange={(e) => setEmail(e.target.value)} className={`form-control ${inputFocus === 'email' ? 'input-green-bd' : ''}`} type="text" placeholder="Your email *" />
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-green-full text-heading-6" onClick={onSubmit}>Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
