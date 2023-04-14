import React, { useState, useEffect, useContext, useMemo } from 'react';
import HtmlEditor from '../../../ui_kit/html_editor';
import Modal from "react-bootstrap/Modal";
import { updateEmail } from '../../../../api/emails';
import { notifySuccess } from '../../../../helpers';

export default function EmailsEditModal({
  showModal,
  setShowModal,
  email,
  onSubmit
}) {
  const [bodyHtml, setBodyHtml] = useState(email.body_html);
  const [subject, setSubject] = useState(email.subject);

  const onSubmitClick = () => {
    setShowModal(false);
    updateEmail(email.id, {
      body_html: bodyHtml,
      subject: subject
    }, () => {
      notifySuccess("Email has been updated");
      if (onSubmit) {
        onSubmit();
      }
    })

  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title">Edit Email</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Recipient:</label>
            <input className="form-control" type="text" value={email.recipient} disabled />
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
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Update email</button>
      </div>
    </Modal>
  )
}
