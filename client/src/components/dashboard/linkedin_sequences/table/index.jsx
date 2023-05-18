import React, { Component, useState, useContext, useEffect } from 'react'

export default function LinkedinSequencesTable({
  workflow,
  sequences
}) {
  return (
    <div className="table-responsive">
      <table className="table table-bordernone table-hover">
        <thead>
          <tr className="border-bottom-primary">
            <th scope="col">Name</th>
            <th scope="col">Invitation Note</th>
          </tr>
        </thead>
        <tbody>
        {
          sequences.map(s => {
            return (
              <tr>
                <td><a href={`/workflows/${workflow.slug}/linkedin_sequences/${s.slug}`}>{s.name}</a></td>
                <td>
                  {s.invitation_note}
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}
