import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { createLinkedinSequence } from '../../../../api/linkedin_sequences';

export default function LinkedinSequencesCreateModal({
  showModal,
  setShowModal,
  workflow,
  onSubmit,
}) {
  const [name, setName] = useState('');
  const [invitationNote, setInvitationNote] = useState('');

  const onSubmitClick = () => {
    createLinkedinSequence(
      workflow.id, {
      name: name,
      invitation_note: invitationNote,
    }, () => {
      setShowModal(false);
      if (onSubmit) {
        onSubmit();
      }
    })
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title">New Linkedin sequence</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="col-form-label">Name:</label>
            <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="col-form-label">Invitation Note:</label>
            <textarea className="form-control" value={invitationNote} onChange={(e) => setInvitationNote(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Create Linkedin sequence</button>
      </div>
    </Modal>
  )
}
