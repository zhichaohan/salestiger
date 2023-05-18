import React, { useState, useEffect, useContext, useMemo } from 'react';
import HtmlEditor from '../../../ui_kit/html_editor';
import Modal from "react-bootstrap/Modal";
import { updateLinkedinSequenceStep } from '../../../../api/linkedin_sequence_steps';

export default function LinkedinSequenceStepsUpdateModal({
  showModal,
  setShowModal,
  sequenceStep,
  onSubmit,
}) {
  const [hoursDelay, setHoursDelay] = useState(sequenceStep.hours_delay);
  const [message, setMessage] = useState(sequenceStep.message);

  const onSubmitClick = () => {
    updateLinkedinSequenceStep(
      sequenceStep.id, {
      hours_delay: hoursDelay,
      message: message,
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
        <h5 className="modal-title">Update step</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div class="mb-3">
            <label class="form-label" for="createEmailTeamMemberSelect">Hours delay:</label>
            <input class="form-control digits" type="number" placeholder="Hours delay" value={hoursDelay} onChange={(e) => setHoursDelay(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="message-text">Message:</label>
            <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Update step</button>
      </div>
    </Modal>
  )
}
