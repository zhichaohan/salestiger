import React, { Component, useState, useContext, useEffect } from 'react'
import EmailsCreateModal from '../../emails/create_modal';
import LeadSequencesCreateModal from '../../lead_sequences/create_modal';
import LeadSequencesCreateButton from '../../lead_sequences/create_button';
import { createEmail } from '../../../../api/emails';
import { addLeadsToSequence } from '../../../../api/sequences';
import { notifySuccess, renderTime } from '../../../../helpers';
import styles from './index.module.css';

export default function LeadsTable({
  leads,
  teamMembers,
  sequences = [],
  reload
}) {
  const [showCreateEmailModal, setShowCreateEmailModal] = useState(false);
  const [createEmailRecipient, setCreateEmailRecipient] = useState();
  const [emailRecipientId, setEmailRecipientId] = useState();
  const [checkedLeads, setCheckAllLeads] = useState([]);

  const checkAllChecked = checkedLeads.length === leads.length;
  const checkAllClick = () => {
    if (checkAllChecked) {
      setCheckAllLeads([]);
    }
    else {
      setCheckAllLeads(leads.map(l => l.id));
    }
  }

  const leadClick = (leadId) => () => {
    if (checkedLeads.includes(leadId)) {
      setCheckAllLeads([...checkedLeads.filter(id => id !== leadId)]);
    }
    else {
      setCheckAllLeads([...checkedLeads, leadId]);
    }
  }

  const emailOnClick = (email, lead) => () => {
    setCreateEmailRecipient(email);
    setEmailRecipientId(lead.uuid);
    setShowCreateEmailModal(true);
  }

  return (
    <>
      <LeadSequencesCreateButton
        sequences={sequences}
        leads={checkedLeads}
        teamMembers={teamMembers}
        reload={reload}
      />
      <div className="table-responsive">
        <table className="table table-bordernone table-hover">
          <thead>
            <tr className="border-bottom-primary">
              <th scope="col"><input checked={checkAllChecked} onChange={checkAllClick} className="form-check-input" id="checkAll" type="checkbox"/><label className="form-check-label" for="checkAll"></label></th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Company</th>
              <th scope="col">Company Size</th>
              <th scope="col">Company Industry</th>
              <th scope="col">Status</th>
              <th scope="col">Sequences</th>
              <th scope="col">Last Email Sent At</th>
              <th scope="col">Last Email Open Count</th>
              <th scope="col">Last Email Last Opened At</th>
            </tr>
          </thead>
          <tbody>
          {
            leads.map(lead => {
              return (
                <tr>
                  <td><input checked={checkedLeads.includes(lead.id)} onChange={leadClick(lead.id)} className="form-check-input" id={`check-${lead.uuid}`} type="checkbox"/><label className="form-check-label" for={`check-${lead.uuid}`}></label></td>
                  <td>
                    <div className={styles.name_block}><a href={lead.show_path}>{lead.name}</a></div>
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
                      {
                        lead.company.logo_url && <img className={styles.company_logo} width="35" height="35" src={lead.company.logo_url} />
                      }
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
                    { lead.account_info && lead.account_info.status_indicator && <span class={`badge badge-light-${lead.account_info.status_indicator.type}`}>{lead.account_info.status_indicator.label}</span> }
                  </td>
                  <td>
                    { lead.lead_sequences.map(ls => ls.sequence.name).join(', ') }
                  </td>
                  <td>
                    {
                      lead.account_info && lead.account_info.last_sent_email && renderTime(lead.account_info.last_sent_email.sent_at)
                    }
                  </td>
                  <td>
                  { lead.account_info && lead.account_info.last_sent_email && lead.account_info.last_sent_email.open_count }
                  </td>
                  <td>
                  { lead.account_info && lead.account_info.last_sent_email && renderTime(lead.account_info.last_sent_email.last_opened_at) }
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
    </>
  )
}
