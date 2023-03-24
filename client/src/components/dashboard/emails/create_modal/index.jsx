import React, { useState, useEffect, useContext } from 'react';
import Modal from "react-bootstrap/Modal";

export default function EmailsCreateModal({
  showModal,
  setShowModal,
  teamMembers,
}) {
  const teamMemberOnChange = (e) => {
    console.log("e.target.value", e.target.value);
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
            <input className="form-control" type="text" value="@getbootstrap" />
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="message-text">Message:</label>
            <textarea className="form-control"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button className="btn btn-primary" type="button">Send message</button>
      </div>
    </Modal>
  )
}
