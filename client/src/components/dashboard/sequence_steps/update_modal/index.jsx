import React, { useState, useEffect, useContext, useMemo } from 'react';
import HtmlEditor from '../../../ui_kit/html_editor';
import Modal from "react-bootstrap/Modal";
import { updateSequenceStep } from '../../../../api/sequence_steps';

export default function SequenceStepsUpdateModal({
  showModal,
  setShowModal,
  sequenceStep,
  onSubmit,
}) {
  const [hoursDelay, setHoursDelay] = useState(sequenceStep.hours_delay);
  const [subject, setSubject] = useState(sequenceStep.email_subject);
  const [bodyHtml, setBodyHtml] = useState(sequenceStep.email_template);

  const onSubmitClick = () => {
    updateSequenceStep(
      sequenceStep.id, {
      hours_delay: hoursDelay,
      email_subject: subject,
      email_template: bodyHtml,
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
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Update step</button>
      </div>
    </Modal>
  )
}
