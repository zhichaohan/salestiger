import React, { useState } from 'react'
import SequencesDeleteModal from '../delete_modal';
import { notifySuccess } from '../../../../helpers';

export default function SequencesTable({
  workflow,
  sequences,
  reload,
}) {
  const [sequenceToDelete, setSequenceToDelete] = useState();
  const [showDeleteSequenceModal, setShowDeleteSequenceModal] = useState();

  const deleteSequenceClick = (s) => () => {
    setSequenceToDelete(s);
    setShowDeleteSequenceModal(true);
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordernone table-hover">
        <thead>
          <tr className="border-bottom-primary">
            <th scope="col">Name</th>
            <th scope="col">Active</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {
          sequences.map(s => {
            return (
              <tr>
                <td><a href={`/workflows/${workflow.slug}/sequences/${s.slug}`}>{s.name}</a></td>
                <td>
                  {s.active && <span class="badge badge-success">Active</span>}
                  {!s.active && <span class="badge badge-warning">Inactive</span>}
                </td>
                <td>
                  <a href="javascript:void(0)" onClick={deleteSequenceClick(s)}><i class="fa fa-trash-o"></i></a>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      {
        showDeleteSequenceModal &&
        <SequencesDeleteModal
          showModal={showDeleteSequenceModal}
          setShowModal={setShowDeleteSequenceModal}
          sequence={sequenceToDelete}
          onSubmit={() => {
            reload();
            notifySuccess(`A sequence is deleted`)
          }}
        />
      }
    </div>
  )
}
