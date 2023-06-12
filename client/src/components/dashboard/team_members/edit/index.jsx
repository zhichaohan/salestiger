import React, { Component, useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import PageTitleSection from '../../page_title_section';
import HtmlEditor from '../../../ui_kit/html_editor';
import { getTeamMember, updateTeamMember } from '../../../../api/team_members';
import { notifySuccess, notifyError } from '../../../../helpers';
import styles from './index.module.css';

export default function TeamMembersEdit({
  match
}) {
  let id = match.params.id;
  const [teamMember, setTeamMember] = useState();
  const [signatureHtml, setSignatureHtml] = useState();
  const [linkedinEmail, setLinkedinEmail] = useState();
  const [linkedinPassword, setLinkedinPassword] = useState();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  if (searchParams.get('try_again')) {
    notifyError('Please try connecting gmail again')
  }

  useEffect(() => {
    getTeamMember(id, (r) => {
      setTeamMember(r);
      setSignatureHtml(r.email_signature);
      setLinkedinEmail(r.linkedin_email);
      setLinkedinPassword(r.linkedin_password);
    }, () => {

    })
  }, []);

  const onEmailSettingsSubmit = (e) => {
    e.preventDefault();
    updateTeamMember(id, {
      email_signature: signatureHtml,
    }, () => {
      notifySuccess(`${teamMember.name}'s email settings have been updated'`);
    });
  }

  const updateLinkedinClick = (e) => {
    e.preventDefault();
    updateTeamMember(id, {
      linkedin_email: linkedinEmail,
      linkedin_password: linkedinPassword,
    }, () => {
      notifySuccess(`${teamMember.name}'s LinkedIn login have been updated.'`)
      history.push(`/team_members/${id}/verify_linkedin`);
    })
  }

  if (!teamMember) {
    return <>Loading</>
  }


  return (
    <>
      <PageTitleSection
        title={`Edit ${teamMember && teamMember.name}'s Profile`}
        pagePath={[
          { href: '/team_members', title: 'Team members' },
          { href: `/team_members/${id}`, title: teamMember && teamMember.name },
          { href: `/team_members/${id}/edit`, title: 'Edit Profile' }
        ]}
      />
      <div className="container-fluid edit-profile">
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header pb-0">
                    <h4 className="card-title mb-0">My Profile</h4>
                    <div className="card-options"><a className="card-options-collapse" href="javascript:void(0)" data-bs-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript:void(0)" data-bs-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                  </div>
                  <div className="card-body">
                    <form method="post" action="/auth/google_oauth2">
                      <input type="hidden" name="authenticity_token" value={gon.authenticity_token}/>
                      <div className="row mb-2">
                        <div className="profile-title">
                          <div className="d-flex">
                          <img className="img-70 rounded-circle" alt="" src={teamMember.photo_url} />
                            <div className="flex-grow-1 ms-3"><a href="user-profile.html">
                                <h3 className="mb-1 f-20 txt-primary">{teamMember.name}</h3></a>
                              <p className="f-12">{teamMember.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-footer">
                        <button type="submit" className={styles.google_button}><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/images/btn_google_signin_dark_normal_web.png" /></button>
                      </div>
                    </form>

                    {
                      /*
                      <form method="post" action="/auth/linkedin">
                        <input type="hidden" name="authenticity_token" value={gon.authenticity_token}/>
                        <div className="row mb-2">
                          <div className="profile-title">
                            <div className="d-flex">
                            <img className="img-70 rounded-circle" alt="" src={teamMember.photo_url} />
                              <div className="flex-grow-1 ms-3"><a href="user-profile.html">
                                  <h3 className="mb-1 f-20 txt-primary">{teamMember.name}</h3></a>
                                <p className="f-12">{teamMember.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-footer">
                          <button type="submit" className="btn btn-primary btn-block">Connect Linkedin</button>
                        </div>
                      </form>
                      */
                    }
                  </div>
                </div>
              </div>
            </div>
            {
              /*

                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-header pb-0">
                        <h4 className="card-title mb-0">LinkedIn</h4>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="row mb-3">
                            <label className="form-label">Email Address</label>
                            <input value={linkedinEmail} onChange={(e) => setLinkedinEmail(e.target.value)} type="text" className="form-control" placeholder="your-email@domain.com" />
                          </div>
                            <div className="row mb-3">
                              <label className="form-label">Password</label>
                              <input value={linkedinPassword} onChange={(e) => setLinkedinPassword(e.target.value)} type="password" className="form-control" />
                            </div>
                          <div className="form-footer">
                            <button type="submit" className="btn btn-primary btn-block" onClick={updateLinkedinClick}>Update LinkedIn Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              */
            }
          </div>
          <div className="col-lg-8">
            <form className="card">
              <div className="card-header pb-0">
                <h4 className="card-title mb-0">Edit Email Settings</h4>
              </div>
              <div className="card-body">
                <div className="col-md-12">
                  <div>
                    <label className="form-label">Email Signature</label>
                    <HtmlEditor
                      bodyHtml={signatureHtml}
                      setBodyHtml={setSignatureHtml}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer text-end">
                <button onClick={onEmailSettingsSubmit} className="btn btn-primary" type="submit">Update Email Settings</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
