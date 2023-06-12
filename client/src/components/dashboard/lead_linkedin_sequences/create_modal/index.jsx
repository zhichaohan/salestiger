import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

export default function LeadLinkedinSequencesCreateModal({
  showModal,
  setShowModal,
  teamMembers,
  onSubmit,
}) {
  const [teamMember, setTeamMember] = useState(teamMembers[0].uuid)

  const teamMemberOnChange = (e) => {
    setTeamMember(e.target.value);
  }

  const onSubmitClick = () => {
    setShowModal(false);
    if (onSubmit) {
      onSubmit(teamMember);
    }
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title">Add leads to Linkedin sequence</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div class="mb-3">
            <label class="form-label" for="createEmailTeamMemberSelect">Connect with:</label>
              <select class="form-select digits" id="createEmailTeamMemberSelect" onChange={teamMemberOnChange}>
                <option value="" disabled="disabled">Select a team member</option>
              {
                teamMembers.filter(tm => tm.linkedin_verified).map(tm => {
                  return (
                    <option value={tm.uuid}>{tm.name}</option>
                  )
                })
              }
            </select>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Add leads to sequence</button>
      </div>
    </Modal>
  )
}
