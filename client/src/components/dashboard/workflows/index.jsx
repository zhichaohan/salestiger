import React, { Component, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PageTitleSection from '../page_title_section';
import { toast } from 'react-toastify';

export default function WorkflowsIndex() {
  const [workflows, setWorkflows] = useState();
  useEffect(() => {
    const response = toast.promise(
      fetch(`/api/v1/workflows`, {
        headers: {
          "Content-Type": "application/json",
        }
      }),
      {
        pending: 'Loading your workflows',
        success: 'Found your workflows',
        error: 'An error has occurred'
      }
    );
    response.then(response => response.json())
    .then(data => {
      console.log("data", data);
      setWorkflows(data);
    })
  }, [])

  if (!workflows || workflows.length === 0) {
    return (
      <></>
    )
  }

  return (
    <>
      <PageTitleSection
        title={`Your workflows`}
        pagePath={[
          { href: '/workflows', title: 'Workflows' }
        ]}
      />
      <div className="container-fluid basic_table">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="border-bottom-primary">
                      <th scope="col">Name</th>
                      <th scope="col">Active</th>
                      <th scope="col">Team Members</th>
                      <th scope="col">Number of Leads</th>
                      <th scope="col">Number of Meetings</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    workflows.map(w => {
                      return (
                        <tr className="border-bottom-light">
                          <th scope="row">{w.name}</th>
                          {
                            w.active && <td> <span className="badge badge-light-success">Active</span></td>
                          }
                          {
                            !w.active && <td> <span className="badge badge-light-danger">Inactive</span></td>
                          }
                          <td>
                            <div className="customers d-inline-block avatar-group">
                              <ul>
                                {
                                  w.team_members.map(tm => {
                                    return (
                                      <li className="d-inline-block"><img className="img-40 rounded-circle" src={tm.photo_url} alt=""/></li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </td>
                          <td>{w.num_leads}</td>
                          <td>{w.num_meetings}</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
