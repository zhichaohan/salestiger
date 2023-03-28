import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import SequenceStepsCreateModal from '../../sequence_steps/create_modal';
import { getSequence } from '../../../../api/sequences';
import { notifySuccess } from '../../../../helpers';
import styles from './index.module.css';

export default function SequencesShow({
  match
}) {
  let sequenceId = match.params.sequenceId;
  const [sequence, setSequence] = useState();
  const [createStepModal, setCreateStepModal] = useState();

  const loadSequence = () => {
    getSequence(sequenceId, (data) => {
      setSequence(data);
    }, () => {
      console.log("error");
    });
  }

  useEffect(() => {
    loadSequence();
  }, [])

  if (!sequence) {
    return (
      <>Loading</>
    )
  }

  return (
    <>
      <PageTitleSection
        title={`${sequence.name}`}
        pagePath={[
          { href: '/workflows', title: 'Workflows' },
          { href: `/workflows/${sequence.workflow.slug}`, title: sequence.workflow.name },
          { href: `/workflows/${sequence.workflow.slug}/sequences/${sequence.slug}`, title: sequence.name }
        ]}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className={`card-header ${styles.card_header}`}>
                <h5>Steps</h5>
                <button onClick={() => setCreateStepModal(true)} className="btn btn-primary" type="button"><i className={`fa fa-plus ${styles.plus_icon}`}></i>Add step</button>
              </div>
              <div className="card-body">
                <section className="cd-container" id="cd-timeline">
                {
                  sequence.sequence_steps.map(step => {
                    return (
                      <div className="cd-timeline-block">
                        <div className="cd-timeline-img cd-picture bg-primary"><i class="fa fa-pencil-square-o"></i></div>
                        <div className="cd-timeline-content">
                          <h4>{step.email_subject}</h4>
                          <p className="m-0">{step.sanitized_email_template}</p>
                          <span className="cd-date">{step.hours_delay} hours delay</span>
                        </div>
                      </div>
                    )
                  })
                }
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        createStepModal &&
        <SequenceStepsCreateModal
          showModal={createStepModal}
          setShowModal={setCreateStepModal}
          sequence={sequence}
          onSubmit={() => {
            loadSequence();
            notifySuccess(`A new step is created`)
          }}
        />
      }
    </>
  )
}
