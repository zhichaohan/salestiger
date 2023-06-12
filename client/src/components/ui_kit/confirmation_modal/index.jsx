import React from 'react';
import Modal from "react-bootstrap/Modal";

export default function ConfirmationModal({
  showModal,
  setShowModal,
  onSubmit,
  title,
}) {
  const onSubmitClick = () => {
    setShowModal(false);
    if (onSubmit) {
      onSubmit();
    }
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Cancel</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Confirm</button>
      </div>
    </Modal>
  )
}
