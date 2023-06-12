import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { updateWorkflowAttribute } from '../../../../api/workflow_attributes';

export default function WorkflowAttributesEditModal({
  showModal,
  setShowModal,
  workflowAttribute,
  onSubmit,
}) {
  const [name, setName] = useState(workflowAttribute.name);
  const [value, setValue] = useState(workflowAttribute.value);

  const onSubmitClick = () => {
    updateWorkflowAttribute(
      workflowAttribute.id, {
      name: name,
      value: value,
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
        <h5 className="modal-title">Edit workflow attribute</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Name:</label>
            <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Value:</label>
            <input className="form-control" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Edit workflow attribute</button>
      </div>
    </Modal>
  )
}
