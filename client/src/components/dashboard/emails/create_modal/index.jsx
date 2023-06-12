import React, { useState } from 'react';
import HtmlEditor from '../../../ui_kit/html_editor';
import Modal from "react-bootstrap/Modal";

export default function EmailsCreateModal({
  showModal,
  setShowModal,
  teamMembers,
  recipient,
  onSubmit
}) {
  const [bodyHtml, setBodyHtml] = useState();
  const [subject, setSubject] = useState('');
  const [teamMember, setTeamMember] = useState(teamMembers[0].uuid)

  const teamMemberOnChange = (e) => {
    setTeamMember(e.target.value);
  }

  const onSubmitClick = () => {
    setShowModal(false);
    onSubmit({
      team_member_id: teamMember,
      subject: subject,
      body_html: bodyHtml,
    });
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title">New message</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
        <div class="mb-3">
          <label class="form-label" for="createEmailTeamMemberSelect">From:</label>
            <select class="form-select digits" id="createEmailTeamMemberSelect" onChange={teamMemberOnChange}>
              <option value="" disabled="disabled">Select a team member</option>
            {
              teamMembers.map(tm => {
                return (
                  <option value={tm.uuid}>{tm.name}</option>
                )
              })
            }
            </select>
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Recipient:</label>
            <input className="form-control" type="text" value={recipient} disabled />
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Subject:</label>
            <input className="form-control" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="message-text">Message:</label>
            <HtmlEditor
              bodyHtml={bodyHtml}
              setBodyHtml={setBodyHtml}
            />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Send message</button>
      </div>
    </Modal>
  )
}
