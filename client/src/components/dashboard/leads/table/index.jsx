import React, { Component, useState, useContext, useEffect } from 'react'
import EmailsCreateModal from '../../emails/create_modal';
import { createEmail } from '../../../../api/emails';
import { notifySuccess } from '../../../../helpers';
import styles from './index.module.css';

export default function LeadsTable({
  leads,
  teamMembers
}) {
  const [showCreateEmailModal, setShowCreateEmailModal] = useState(false);
  const [createEmailRecipient, setCreateEmailRecipient] = useState();
  const [emailRecipientId, setEmailRecipientId] = useState();

  const emailOnClick = (email, lead) => () => {
    setCreateEmailRecipient(email);
    setEmailRecipientId(lead.uuid);
    setShowCreateEmailModal(true);
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordernone table-hover">
        <thead>
          <tr className="border-bottom-primary">
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope="col">Company Size</th>
            <th scope="col">Company Industry</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          leads.map(lead => {
            return (
              <tr>
                <td>
                  <div className={styles.name_block}>{lead.name}</div>
                  <div>
                    <ul className={styles.social_list}>
                      { lead.business_email && <li><a href="javascript:;" onClick={emailOnClick(lead.business_email, lead)}><i className="fa fa-envelope"></i></a></li> }
                      { lead.personal_email && <li><a href="javascript:;" onClick={emailOnClick(lead.personal_email, lead)}><i className="fa fa-envelope-o"></i></a></li> }
                      { lead.linkedin_url && <li><a href={lead.linkedin_url} target="_blank"><i className="fa fa-linkedin-square"></i></a></li> }
                      { lead.twitter_url && <li><a href={lead.twitter_url} target="_blank"><i className="fa fa-twitter-square"></i></a></li> }
                    </ul>
                  </div>
                </td>
                <td>{lead.title}</td>
                <td>
                  <div className={styles.name_block}>
                    <img className={styles.company_logo} width="35" height="35" src={lead.company.logo_url} />
                    {lead.company.name}
                  </div>
                  <div>
                    <ul className={styles.social_list}>
                      { lead.company.website_url && <li><a href={lead.company.website_url} target="_blank"><i className="fa fa-external-link"></i></a></li> }
                      { lead.company.linkedin_url && <li><a href={lead.company.linkedin_url} target="_blank"><i className="fa fa-linkedin-square"></i></a></li> }
                      { lead.company.twitter_url && <li><a href={lead.company.twitter_url} target="_blank"><i className="fa fa-twitter-square"></i></a></li> }
                    </ul>
                  </div>
                </td>
                <td>
                  { lead.company.num_employees }
                </td>
                <td>
                  { lead.company.industry }
                </td>
                <td>
                  {
                    lead.account_info && lead.account_info.status === 'approaching' && <span class="badge badge-info">Approaching</span>
                  }
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      {
        showCreateEmailModal &&
        <EmailsCreateModal
          showModal={showCreateEmailModal}
          setShowModal={setShowCreateEmailModal}
          teamMembers={teamMembers}
          recipient={createEmailRecipient}
          onSubmit={(params) => {
            createEmail({
              ...params,
              lead_id: emailRecipientId,
              recipient: createEmailRecipient,
            }, () => {
              notifySuccess(`Sending email to ${createEmailRecipient}`)
            })
          }}
        />
      }
    </div>
  )
}
