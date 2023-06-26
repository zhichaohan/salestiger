import React, { useState, useContext } from 'react'
import styles from './index.module.css';
import { notifyError } from '../../helpers';
import Context from '../../utils/context';

export default function GetStarted() {
  const [companyName, setCompanyName] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [inputFocus, setInputFocus] = useState('name');
  const [submitDisabled, setSubmitDisabled] = useState();
  const [agreeToTerms, setAgreeToTerms] = useState();
  const context = useContext(Context);

  const onSubmit = () => {
    setSubmitDisabled(true);
    if (!name) {
      notifyError('Please enter your name');
      setSubmitDisabled(false);
      return;
    }
    if (!companyName) {
      notifyError('Please enter your company name');
      setSubmitDisabled(false);
      return;
    }

    if (!email) {
      notifyError('Please enter your email');
      setSubmitDisabled(false);
      return;
    }

    if (!password) {
      notifyError('Please enter your password');
      setSubmitDisabled(false);
      return;
    }

    if (password !== password2) {
      notifyError('Please reenter your password');
      setSubmitDisabled(false);
      return;
    }

    if (!agreeToTerms) {
      notifyError('Please agree to the terms and conditions');
      setSubmitDisabled(false);
      return;
    }

    context.auth.userSignUp(name, companyName, email, password, {}, (errors) => {
      notifyError(errors.join(', '));
      setSubmitDisabled(false);
    });
  }

  return (
    <main className="main">
      <section className="section-box">
        <div className="bg-6-opacity-30 pt-90">
          <div className="container">
            <div className="box-signup">
              <h1 className="text-heading-3 mb-50 text-center">Let's start meeting your sales goals</h1>
              <div className="box-form-signup mb-200">
                <div className="form-group">
                  <div className="form-field">
                    <span className="text-body-small color-green-900 tag-top">Name</span>
                    <input value={name} onChange={(e) => setName(e.target.value)} onFocus={() => setInputFocus('name')} className={`form-control ${inputFocus === 'name' ? 'input-green-bd' : ''}`} type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-field">
                    <span className="text-body-small color-green-900 tag-top">Comany Name</span>
                    <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} onFocus={() => setInputFocus('companyName')} className={`form-control ${inputFocus === 'companyName' ? 'input-green-bd' : ''}`} type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-field">
                    <span className="text-body-small color-green-900 tag-top">Email</span>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setInputFocus('email')} className={`form-control ${inputFocus === 'email' ? 'input-green-bd' : ''}`} type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-field"><span className="text-body-small color-green-900 tag-top">Password</span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setInputFocus('password')} className={`form-control ${inputFocus === 'password' ? 'input-green-bd' : ''}`} type="password" placeholder="" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-field"><span className="text-body-small color-green-900 tag-top">Re-type Password</span>
                    <input value={password2} onChange={(e) => setPassword2(e.target.value)} onFocus={() => setInputFocus('password2')} className={`form-control ${inputFocus === 'password2' ? 'input-green-bd' : ''}`} type="password" placeholder="" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-body-small color-gray-500">
                    <input type="checkbox" onChange={(e) => setAgreeToTerms(!agreeToTerms)} checked={agreeToTerms} className="chkbox" type="checkbox" /> Agree to <a href="/terms">terms &amp; conditions</a>
                  </label>
                </div>
                <div className="form-group">
                  <button disabled={submitDisabled} onClick={onSubmit} className="btn btn-green-full text-heading-6">Continue</button>
                </div>
                <div><span className="text-body-text color-gray-500">Already have an account?</span> <a className="text-body-text color-green-900" href="/sign-in">Sign in now</a></div>
              </div>
            </div>
          </div>
          <div className="images-lists">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-6 pl-0"><img className="img-responsive img-full img-1" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/signup/img-1.png" /></div>
              <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-2" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/signup/img-2.png" /></div>
              <div className="col-lg-4 col-md-4 col-sm-12"><img className="img-responsive img-full img-3" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/signup/img-3.png" /></div>
              <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-4" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/signup/img-4.png" /></div>
              <div className="col-lg-2 col-md-2 col-sm-6 pr-0"><img className="img-responsive img-full img-5" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/signup/img-5.png" /></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
