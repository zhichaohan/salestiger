import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import SocialList from '../../team_members/social_list';
import EmailsEditModal from '../../emails/edit_modal';
import DOMPurify from '../../../../utils/purify.min.js'
import { getLead, getLeadLogs } from '../../../../api/leads';
import { getEmail } from '../../../../api/emails';
import styles from "./index.module.css"

export default function LeadsShow({
  match
}) {
  let id = match.params.id;
  const [lead, setLead] = useState();
  const [view, setView] = useState('loading');
  const [logs, setLogs] = useState();
  const [showEditEmailModal, setShowEditEmailModal] = useState();
  const [email, setEmail] = useState();

  const loadLead = () => {
    getLead(id, (r) => {
      setLead(r);
      getLeadLogs(id, (rlogs) => {
        setLogs(rlogs);
        setView('loaded');
      })
    }, () => {
      console.log("an error has occurred");
    })
  }

  useEffect(() => {
    loadLead();
  }, []);

  const editEmailClick = (emailId) => () => {
    getEmail(emailId, (r) => {
      setEmail(r);
      setShowEditEmailModal(true);
    })
  }

  if (view === 'loading') {
    return <>Loading</>
  }

  return (
    <>
      <PageTitleSection
        title={`${lead.name}'s Profile`}
        pagePath={[
          { href: '/leads', title: 'Leads' },
          { href: `/leads/${id}`, title: lead.name }
        ]}
      />
      <div className="user-profile">
        <div className="row">
          <div className="col-sm-12">
            <div className="card profile-header" style={{ backgroundImage: 'url(https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/user-profile/bg-profile.jpg)', backgroundSize: "cover", backgroundPosition: "center center", display: "block" }}>
              <div className="profile-img-wrrap"><img className="img-fluid bg-img-cover" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/user-profile/bg-profile.jpg" alt="" /></div>
              <div className="userpro-box">
                <div className="img-wrraper">
                  <div className="avatar"><img className="img-fluid" alt="" src={`https://img.freepik.com/free-icon/user_318-804790.jpg`} /></div><a className="icon-wrapper" href={`/leads/${id}/edit`}><i className="icofont icofont-pencil-alt-5"></i></a>
                </div>
                <div className="user-designation">
                  <div className="title"><a target="_blank" href="">
                      <h4>{lead.name}</h4></a>
                    <h6>{lead.title}</h6>
                  </div>
                  <div className="social-media">
                    <SocialList className="user-list-social" teamMember={lead} />
                  </div>
                  <div className="follow">
                    <ul className="follow-list">
                      <li>
                        <div className="follow-num counter">325</div><span>Follower</span>
                      </li>
                      <li>
                        <div className="follow-num counter">450</div><span>Following</span>
                      </li>
                      <li>
                        <div className="follow-num counter">500</div><span>Likes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-5 xl-35 box-col-35">
            <div className="default-according style-1 job-accordion">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="p-0">
                        <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon2" aria-expanded="true" aria-controls="collapseicon2">About Me</button>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-md-7 xl-65 box-col-65">
            <div className="card">
              <div className={`card-header ${styles.logs_header}`}>
                <h5 class="mb-0">Logs</h5>
              </div>
              <div className={`card-body`}>
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                    {
                      logs.map(log => {
                        return (
                          <tr>
                            <td>
                              <h6 class="task_title_0">{log.title}</h6>
                              <p class="project_name_0">{log.subtitle}</p>
                            </td>
                            <td>
                              <p class="task_desc_0" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(log.description.replaceAll('\n', '<br/>'), {target: 'blank'})}}></p>
                            </td>
                            <td>
                              {
                                log.statuses.map(status => {
                                  return (
                                    <span class={`badge badge-light-${status.type}`}>{status.label}</span>
                                  )
                                })
                              }
                            </td>
                            <td>
                              {
                                log.can_edit && <a href="javascript:void(0)" onClick={editEmailClick(log.email_id)}><i className={`fa fa-pencil-square-o ${styles.edit_button}`}></i></a>
                              }
                            </td>
                          </tr>
                        )
                      })
                    }
                    </tbody>
                  </table>
                </div>
              </div>
              {
                showEditEmailModal &&
                <EmailsEditModal
                  showModal={showEditEmailModal}
                  setShowModal={setShowEditEmailModal}
                  email={email}
                  onSubmit={() => {
                    loadLead();
                  }}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
