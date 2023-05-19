import React, { useState, useEffect, useContext, useMemo } from 'react';
import Modal from "react-bootstrap/Modal";
import { deleteSequence } from '../../../../api/sequences';

export default function SequencesCreateModal({
  showModal,
  setShowModal,
  sequence,
  onSubmit,
}) {
  const [name, setName] = useState('');

  const onSubmitClick = () => {
    deleteSequence(sequence.id, () => {
      setShowModal(false);
      if (onSubmit) {
        onSubmit();
      }
    })
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title">Are you sure you want to delete this sequence</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Delete sequence</button>
      </div>
    </Modal>
  )
}
