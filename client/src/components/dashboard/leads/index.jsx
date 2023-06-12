import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import PageTitleSection from '../page_title_section';
import CardHeader from '../../ui_kit/card_header';
import LeadsTable from './table';
import { objToQueryString } from '../../../helpers';
import { getLeads } from '../../../api/leads';
import { toast } from 'react-toastify';

export default function LeadsIndex() {
  const [leads, setLeads] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const history = useHistory();

  useEffect(() => {
    const response = toast.promise(
      fetch(`/api/v1/team_members`, {
        headers: {
          "Content-Type": "application/json",
        }
      }),
      {
        pending: 'Loading your team members',
        error: 'An error has occurred'
      }
    );
    response.then(response => response.json())
    .then(d1 => {
      setTeamMembers(d1);

      const r2 = toast.promise(
        fetch(`/api/v1/leads?${objToQueryString({ order: 'COALESCE(account_leads.score, 0) DESC', })}`, {
          headers: {
            "Content-Type": "application/json",
          }
        }),
        {
          pending: 'Loading your leads',
          success: 'Found your leads',
          error: 'An error has occurred'
        }
      );
      r2.then(r2 => r2.json())
      .then(d2 => {
        setLeads(d2);
      })
    })
  }, []);

  const addLeadClick = () => {
    history.push('/leads/new');
  }

  if ((!leads || leads.length === 0) || (!teamMembers || teamMembers.length === 0)) {
    return (
      <></>
    )
  }

  return (
    <>
      <PageTitleSection
        title={`Leads`}
        pagePath={[
          { href: '/leads', title: 'Leads' }
        ]}
      />
      <div className="container-fluid">
        <div className="email-wrap bookmark-wrap">
          <div className="row">
          {
            /*
            <div className="col-xl-2 box-col-3 xl-25 box-col-25">
              <div className="md-sidebar email-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="javascript:void(0)">bookmark filter</a>
                <div className="md-sidebar-aside email-left-aside">
                  <div className="card">
                    <div className="card-body">
                      <div className="email-app-sidebar left-bookmark">
                        <ul className="nav main-menu custom-scrollbar" role="tablist">
                          <li className="nav-item"><span className="main-title">Views</span></li>
                          <li><a id="pills-created-tab" data-bs-toggle="pill" href="#pills-created" role="tab" aria-controls="pills-created" aria-selected="true"><span className="title">All leads</span></a></li>
                          <li><a className="show" id="pills-todaytask-tab" data-bs-toggle="pill" href="#pills-todaytask" role="tab" aria-controls="pills-todaytask" aria-selected="false"><span className="title"> Today's Tasks</span></a></li>
                          <li><a className="show" id="pills-delayed-tab" data-bs-toggle="pill" href="#pills-delayed" role="tab" aria-controls="pills-delayed" aria-selected="false"><span className="title"> Delayed Tasks</span></a></li>
                          <li><a className="show" id="pills-upcoming-tab" data-bs-toggle="pill" href="#pills-upcoming" role="tab" aria-controls="pills-upcoming" aria-selected="false"><span className="title">Upcoming Tasks</span></a></li>
                          <li><a className="show" id="pills-weekly-tab" data-bs-toggle="pill" href="#pills-weekly" role="tab" aria-controls="pills-weekly" aria-selected="false"><span className="title">This week tasks</span></a></li>
                          <li><a className="show" id="pills-monthly-tab" data-bs-toggle="pill" href="#pills-monthly" role="tab" aria-controls="pills-monthly" aria-selected="false"><span className="title">This month tasks</span></a></li>
                          <li><a className="show" id="pills-assigned-tab" data-bs-toggle="pill" href="#pills-assigned" role="tab" aria-controls="pills-assigned" aria-selected="false"><span className="title">Assigned to me</span></a></li>
                          <li><a className="show" id="pills-tasks-tab" data-bs-toggle="pill" href="#pills-tasks" role="tab" aria-controls="pills-tasks" aria-selected="false"><span className="title">My tasks</span></a></li>
                          <li>
                            <hr/>
                          </li>
                          <li><span className="main-title"> Tags<span className="pull-right"><a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#createtag"><i data-feather="plus-circle"></i></a></span></span></li>
                          <li><a className="show" id="pills-notification-tab" data-bs-toggle="pill" href="#pills-notification" role="tab" aria-controls="pills-notification" aria-selected="false"><span className="title"> Notification</span></a></li>
                          <li><a className="show" id="pills-newsletter-tab" data-bs-toggle="pill" href="#pills-newsletter" role="tab" aria-controls="pills-newsletter" aria-selected="false"><span className="title"> Newsletter</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */
          }
            <div className="col">
              <div className="email-right-aside bookmark-tabcontent">
                <div className="card email-body">
                  <div className="ps-0">
                    <div className="tab-content">
                      <div className="tab-pane fade active show" id="pills-created" role="tabpanel" aria-labelledby="pills-created-tab">
                        <div className="card mb-0">
                          <CardHeader
                            title={`All leads`}
                            addObj={`lead`}
                            addObjOnClick={addLeadClick}
                          />
                          <div className="card-body">
                            <LeadsTable
                              leads={leads}
                              teamMembers={teamMembers}
                              sequences={gon.sequences}
                              reload={(params) => {
                                getLeads(params, (results) => {
                                  setLeads(results);
                                })
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-todaytask" role="tabpanel" aria-labelledby="pills-todaytask-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">Today's Tasks</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body">
                            <div className="details-bookmark text-center">
                              <div className="row" id="favouriteData"></div>
                              <div className="no-favourite"><span>No task due today.</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-delayed" role="tabpanel" aria-labelledby="pills-delayed-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">Delayed Tasks</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body">
                            <div className="details-bookmark text-center"><span>No tasks found.</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-upcoming" role="tabpanel" aria-labelledby="pills-upcoming-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">Upcoming Tasks</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body">
                            <div className="details-bookmark text-center"><span>No tasks found.</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-weekly" role="tabpanel" aria-labelledby="pills-weekly-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">This Week Tasks</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body">
                            <div className="details-bookmark text-center"><span>No tasks found.</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">This Month Tasks</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body">
                            <div className="details-bookmark text-center"><span>No tasks found.</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-assigned" role="tabpanel" aria-labelledby="pills-assigned-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">Assigned to me</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <table className="table">
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Documentation</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">Documentation that is used to explain regarding some attributes of an object.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Kanban design</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">There are many tools available for testing websites, we’ve chosen classics: Chrome dev tools.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">User profile</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">kanban board is one of the tools that can be used to implement kanban to manage.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Set Up</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">There is some Console error in user profile page.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Testing</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">Clone the theme test data file from the GitHub repository.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">My tasks</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <table className="table">
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Documentation</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">Documentation that is used to explain regarding some attributes of an object.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Kanban design</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">kanban board is one of the tools that can be used to implement kanban to manage.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">User profile</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">There is some Console error in user profile page.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Set Up</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">Clone the theme test data file from the GitHub repository.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h6 className="task_title_0">Testing</h6>
                                      <p className="project_name_0">General</p>
                                    </td>
                                    <td>
                                      <p className="task_desc_0">There are many tools available for testing websites, we’ve chosen classics: Chrome dev tools.</p>
                                    </td>
                                    <td><a className="me-2" href="javascript:void(0)"><i data-feather="link"></i></a><a href="javascript:void(0)"><i data-feather="more-horizontal"></i></a></td>
                                    <td><a href="javascript:void(0)"><i data-feather="trash-2"></i></a></td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-notification" role="tabpanel" aria-labelledby="pills-notification-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">Notification</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body">
                            <div className="details-bookmark text-center"><span>No tasks found.</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="fade tab-pane" id="pills-newsletter" role="tabpanel" aria-labelledby="pills-newsletter-tab">
                        <div className="card mb-0">
                          <div className="card-header d-flex">
                            <h6 className="mb-0">Newsletter</h6><a href="javascript:void(0)"><i className="me-2" data-feather="printer"></i>Print</a>
                          </div>
                          <div className="card-body">
                            <div className="details-bookmark text-center"><span>No tasks found.</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
