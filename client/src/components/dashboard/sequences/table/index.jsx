import React, { Component, useState, useContext, useEffect } from 'react'

export default function SequencesTable({
  workflow,
  sequences
}) {
  return (
    <div className="table-responsive">
      <table className="table table-bordernone table-hover">
        <thead>
          <tr className="border-bottom-primary">
            <th scope="col">Name</th>
            <th scope="col">Active</th>
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
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}
