import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { createSequence } from '../../../../api/sequences';

export default function SequencesCreateModal({
  showModal,
  setShowModal,
  workflow,
  onSubmit,
}) {
  const [name, setName] = useState('');

  const onSubmitClick = () => {
    createSequence(
      workflow.id, {
      name: name,
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
        <h5 className="modal-title">New sequence</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Name:</label>
            <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Create sequence</button>
      </div>
    </Modal>
  )
}
