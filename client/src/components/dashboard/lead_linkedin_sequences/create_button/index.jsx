import React, { useState, useEffect, useContext, useMemo } from 'react';
import LeadLinkedinSequencesCreateModal from '../create_modal';
import { addLeadsToLinkedinSequence } from '../../../../api/linkedin_sequences';
import { notifySuccess } from '../../../../helpers';

export default function LeadLinkedinSequencesCreateButton({
  sequences,
  leads,
  teamMembers,
  reload,
}) {
  const [selectedSequenceId, setSelectedSequenceId] = useState();
  const [showLeadSequenceCreateModal, setShowLeadSequenceCreateModal] = useState();

  const addLeadsToSequenceClick = (sequenceId) => () => {
    if (leads.length !== 0) {
      setSelectedSequenceId(sequenceId);
      setShowLeadSequenceCreateModal(true);
    }
  }

  if (sequences.length === 0) {
    return <></>
  }

  return (
    <>
      <div className="dropdown-basic">
        <div className="dropdown">
          <button className="dropbtn btn-primary" type="button">Add to Linkedin sequence<span><i className="icofont icofont-arrow-down"></i></span></button>
          <div className="dropdown-content">
            {
              sequences.map(sequence => {
                return (
                  <a href="javascript:void(0)" onClick={addLeadsToSequenceClick(sequence.id)}>{sequence.name}</a>
                )
              })
            }
          </div>
        </div>
      </div>
      {
        showLeadSequenceCreateModal &&
        <LeadLinkedinSequencesCreateModal
          showModal={showLeadSequenceCreateModal}
          setShowModal={setShowLeadSequenceCreateModal}
          teamMembers={teamMembers}
          onSubmit={(teamMemberId) => {
            addLeadsToLinkedinSequence(selectedSequenceId, leads, teamMemberId, () => {
              notifySuccess(`Added ${leads.length} leads to sequence`);
              if (reload) {
                reload()
              }
            })
          }}
        />
      }
    </>
  )
}
