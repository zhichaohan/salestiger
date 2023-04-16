import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import LeadsTable from '../../leads/table';
import SequencesTable from '../../sequences/table';
import WorkflowAttributesCreateModal from '../../workflow_attributes/create_modal';
import SequencesCreateModal from '../../sequences/create_modal';
import { getWorkflow } from '../../../../api/workflows';
import { notifySuccess } from '../../../../helpers';
import styles from './index.module.css';

export default function WorkflowsShow({
  match
}) {
  let id = match.params.id;
  const [workflow, setWorkflow] = useState();
  const [showCreateAttributeModal, setShowCreateAttributeModal] = useState(false);
  const [showCreateSequenceModal, setShowCreateSequenceModal] = useState(false);

  const loadWorkflow = () => {
    getWorkflow(id, (data) => {
      setWorkflow(data);
    }, () => {
      console.log("error");
    });
  }

  useEffect(() => {
    loadWorkflow();
  }, [])

  const addAttributeClick = () => {
    setShowCreateAttributeModal(true);
  }

  const addSequenceClick = () => {
    setShowCreateSequenceModal(true);
  }

  if (!workflow) {
    return (
      <>Loading</>
    )
  }

  const renderSummarySection = () => {
    return (
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Pipeline Generated</h6>
                  <h4 className="mb-0 counter">${workflow.pipeline_generated.toLocaleString("en-US")}</h4>
                </div>
                <svg className="fill-secondary" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5938 14.1562V17.2278C20.9604 17.8102 19.7812 19.3566 19.7812 21.1875C19.7812 23.5138 21.6737 25.4062 24 25.4062C24.7759 25.4062 25.4062 26.0366 25.4062 26.8125C25.4062 27.5884 24.7759 28.2188 24 28.2188C23.2241 28.2188 22.5938 27.5884 22.5938 26.8125H19.7812C19.7812 28.6434 20.9604 30.1898 22.5938 30.7722V33.8438H25.4062V30.7722C27.0396 30.1898 28.2188 28.6434 28.2188 26.8125C28.2188 24.4862 26.3263 22.5938 24 22.5938C23.2241 22.5938 22.5938 21.9634 22.5938 21.1875C22.5938 20.4116 23.2241 19.7812 24 19.7812C24.7759 19.7812 25.4062 20.4116 25.4062 21.1875H28.2188C28.2188 19.3566 27.0396 17.8102 25.4062 17.2278V14.1562H22.5938Z"></path>
                  <path d="M25.4062 0V11.4859C31.2498 12.1433 35.8642 16.7579 36.5232 22.5938H48C47.2954 10.5189 37.4829 0.704531 25.4062 0Z"></path>
                  <path d="M14.1556 31.8558C12.4237 29.6903 11.3438 26.9823 11.3438 24C11.3438 17.5025 16.283 12.1958 22.5938 11.4859V0C10.0492 0.731813 0 11.2718 0 24C0 30.0952 2.39381 35.6398 6.14897 39.8624L14.1556 31.8558Z"></path>
                  <path d="M47.9977 25.4062H36.5143C35.8044 31.717 30.4977 36.6562 24.0002 36.6562C21.0179 36.6562 18.3099 35.5763 16.1444 33.8444L8.13779 41.851C12.3604 45.6062 17.905 48 24.0002 48C36.7284 48 47.2659 37.9508 47.9977 25.4062Z"></path>
                </svg>
              </div>
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className="progress-gradient-secondary" role="progressbar" style={{ width: "75%" }} ariaValuenow="75" ariaValuemin="0" ariaValuemax="100"><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Meetings Booked</h6>
                  <h4 className="mb-0 counter">{workflow.num_meetings}</h4>
                </div>
                <svg className="fill-success" width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92047 8.49509C5.81037 8.42629 5.81748 8.25971 5.93378 8.20177C7.49907 7.41686 9.01464 6.65821 10.5302 5.89775C14.4012 3.95495 18.2696 2.00762 22.1478 0.0792996C22.3387 -0.0157583 22.6468 -0.029338 22.8359 0.060288C28.2402 2.64315 33.6357 5.24502 39.033 7.84327C39.0339 7.84327 39.0339 7.84417 39.0348 7.84417C39.152 7.90121 39.1582 8.06869 39.0472 8.1375C38.9939 8.17009 38.9433 8.20087 38.8918 8.22984C33.5398 11.2228 28.187 14.2121 22.8385 17.2115C22.5793 17.3572 22.3839 17.3762 22.1131 17.2296C16.7851 14.3507 11.4518 11.4826 6.12023 8.61188C6.05453 8.57748 5.98972 8.53855 5.92047 8.49509Z"></path>
                  <path d="M21.1347 23.3676V38.8321C21.1347 38.958 21.0042 39.0386 20.895 38.9806C20.4182 38.7271 19.9734 38.4918 19.5295 38.2528C14.498 35.5441 9.46833 32.8317 4.43154 30.1339C4.12612 29.97 4.02046 29.7944 4.02224 29.4422C4.03822 26.8322 4.03023 24.2222 4.02934 21.6122C4.02934 21.4719 4.02934 21.3325 4.02934 21.1659C4.02934 21.0428 4.15542 20.9622 4.26373 21.0147C4.35252 21.0581 4.43065 21.0962 4.50434 21.1396C8.18539 23.2888 11.8664 25.438 15.5457 27.5909C16.5081 28.154 17.0622 28.0453 17.7627 27.1464C18.7748 25.8472 19.7896 24.5508 20.8045 23.2535C20.8053 23.2526 20.8062 23.2517 20.8071 23.2499C20.9172 23.1132 21.1347 23.192 21.1347 23.3676Z"></path>
                  <path d="M23.83 23.3784C23.83 23.2019 24.0484 23.1241 24.1567 23.2626C25.2168 24.6178 26.2192 25.9016 27.2233 27.1835C27.8928 28.039 28.4504 28.1494 29.3719 27.6117C33.0521 25.4643 36.7323 23.316 40.4133 21.1686C40.4914 21.1233 40.5713 21.0799 40.6592 21.0337C40.7613 20.9803 40.8856 21.0473 40.8972 21.164C40.9025 21.2184 40.9069 21.2691 40.9069 21.3189C40.9087 23.928 40.9052 26.5371 40.9132 29.1462C40.914 29.4006 40.8421 29.5518 40.6131 29.6794C35.1057 32.7539 29.6037 35.8365 24.099 38.9163C24.0892 38.9218 24.0803 38.9263 24.0706 38.9317C23.9605 38.9879 23.8309 38.9082 23.8309 38.7833L23.83 23.3784Z"></path>
                  <path d="M28.4752 24.454C27.2908 22.9385 26.118 21.4384 24.9203 19.9066C24.6983 19.6232 24.7809 19.2031 25.0925 19.0293L41.3092 9.95809C41.5746 9.80962 41.9076 9.89743 42.0692 10.1582C43.0147 11.6791 43.9541 13.1891 44.9103 14.7264C45.0852 15.0079 44.9946 15.3818 44.7114 15.5475C39.5414 18.5649 34.3875 21.5742 29.2086 24.5979C28.9627 24.74 28.651 24.6794 28.4752 24.454Z"></path>
                  <path d="M20.0132 19.931C18.819 21.4592 17.6506 22.9539 16.4804 24.4512C16.3037 24.6767 15.9921 24.7373 15.747 24.5943C10.586 21.5814 5.45504 18.5857 0.288619 15.5701C6.65486e-05 15.4017 -0.087831 15.0188 0.0968427 14.7372C1.02554 13.3204 1.94269 11.9208 2.86872 10.5085C3.03209 10.2596 3.35349 10.1763 3.61363 10.3157C9.018 13.2254 14.3975 16.1215 19.833 19.0483C20.1508 19.2194 20.2378 19.644 20.0132 19.931Z"></path>
                </svg>
              </div>
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className="progress-gradient-success" role="progressbar" style={{ width: "60%" }} ariaValuenow="75" ariaValuemin="0" ariaValuemax="100"><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Leads</h6>
                  <h4 className="mb-0 counter">{workflow.num_leads}</h4>
                </div>
                <svg className="fill-danger" width="41" height="46" viewBox="0 0 41 46" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5245 23.3155C24.0019 23.3152 26.3325 16.8296 26.9426 11.5022C27.6941 4.93936 24.5906 0 17.5245 0C10.4593 0 7.35423 4.93899 8.10639 11.5022C8.71709 16.8296 11.047 23.316 17.5245 23.3155Z"></path>
                  <path d="M31.6878 26.0152C31.8962 26.0152 32.1033 26.0214 32.309 26.0328C32.0007 25.5931 31.6439 25.2053 31.2264 24.8935C29.9817 23.9646 28.3698 23.6598 26.9448 23.0998C26.2511 22.8273 25.6299 22.5567 25.0468 22.2485C23.0787 24.4068 20.5123 25.5359 17.5236 25.5362C14.536 25.5362 11.9697 24.4071 10.0019 22.2485C9.41877 22.5568 8.79747 22.8273 8.10393 23.0998C6.67891 23.6599 5.06703 23.9646 3.82233 24.8935C1.6698 26.5001 1.11351 30.1144 0.676438 32.5797C0.315729 34.6148 0.0734026 36.6917 0.00267388 38.7588C-0.0521202 40.36 0.738448 40.5846 2.07801 41.0679C3.75528 41.6728 5.48712 42.1219 7.23061 42.4901C10.5977 43.2011 14.0684 43.7475 17.5242 43.7719C19.1987 43.76 20.8766 43.6249 22.5446 43.4087C21.3095 41.6193 20.5852 39.4517 20.5852 37.1179C20.5853 30.9957 25.5658 26.0152 31.6878 26.0152Z"></path>
                  <path d="M31.6878 28.2357C26.7825 28.2357 22.8057 32.2126 22.8057 37.1179C22.8057 42.0232 26.7824 46 31.6878 46C36.5932 46 40.57 42.0232 40.57 37.1179C40.57 32.2125 36.5931 28.2357 31.6878 28.2357ZM35.5738 38.6417H33.2118V41.0037C33.2118 41.8453 32.5295 42.5277 31.6879 42.5277C30.8462 42.5277 30.1639 41.8453 30.1639 41.0037V38.6417H27.802C26.9603 38.6417 26.278 37.9595 26.278 37.1177C26.278 36.276 26.9602 35.5937 27.802 35.5937H30.1639V33.2318C30.1639 32.3901 30.8462 31.7078 31.6879 31.7078C32.5296 31.7078 33.2118 32.3901 33.2118 33.2318V35.5937H35.5738C36.4155 35.5937 37.0978 36.276 37.0978 37.1177C37.0977 37.9595 36.4155 38.6417 35.5738 38.6417Z"></path>
                </svg>
              </div>
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className="progress-gradient-danger" role="progressbar" style={{ width: "48%" }} ariaValuenow="75" ariaValuemin="0" ariaValuemax="100"><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Messages Sent</h6>
                  <h4 className="mb-0 counter">{workflow.messages_sent.toLocaleString("en-US")}</h4>
                </div>
                <svg className="fill-primary" width="44" height="46" viewBox="0 0 44 46" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73709 35.2337C6.17884 31.58 4.00316 26.8452 3.49802 21.7377C1.60687 24.237 0.581465 27.3024 0.586192 30.5195C0.589372 32.612 1.03986 34.692 1.89348 36.5729L0.1333 41.9282C-0.169286 42.8488 0.0517454 43.8484 0.7102 44.5369C1.17358 45.0213 1.78451 45.2794 2.4128 45.2794C2.67714 45.2794 2.94458 45.2337 3.2054 45.14L8.32806 43.2997C10.1272 44.1922 12.1167 44.6631 14.1182 44.6665C17.2557 44.6709 20.2418 43.558 22.657 41.5068C17.8005 41.0474 13.2702 38.8615 9.73709 35.2337Z"></path>
                  <path d="M43.8418 35.7427L41.2863 27.9674C42.5181 25.3348 43.1691 22.407 43.1735 19.4611C43.181 14.3388 41.2854 9.49561 37.8357 5.82369C34.3853 2.15096 29.7875 0.0836476 24.889 0.00251856C19.8097 -0.0814855 15.0354 1.93839 11.446 5.69081C7.85665 9.44332 5.92425 14.4346 6.00469 19.7451C6.08229 24.8661 8.05972 29.673 11.5726 33.2803C15.078 36.8798 19.6988 38.861 24.5879 38.8608C24.5975 38.8608 24.6077 38.8608 24.6171 38.8608C27.435 38.8563 30.2356 38.1757 32.7537 36.8879L40.1911 39.5596C40.501 39.671 40.8188 39.7252 41.1329 39.7252C41.8795 39.7252 42.6055 39.4187 43.1563 38.8428C43.9388 38.0247 44.2014 36.8369 43.8418 35.7427ZM26.3834 26.1731H16.7865C16.0633 26.1731 15.477 25.5601 15.477 24.804C15.477 24.0479 16.0633 23.435 16.7865 23.435H26.3833C27.1066 23.435 27.6929 24.048 27.6929 24.804C27.6929 25.5602 27.1067 26.1731 26.3834 26.1731ZM32.3894 20.5426H16.7866C16.0633 20.5426 15.4771 19.9296 15.4771 19.1736C15.4771 18.4176 16.0634 17.8046 16.7866 17.8046H32.3894C33.1127 17.8046 33.6989 18.4176 33.6989 19.1736C33.6989 19.9296 33.1127 20.5426 32.3894 20.5426ZM32.3894 14.912H16.7866C16.0633 14.912 15.4771 14.299 15.4771 13.543C15.4771 12.7869 16.0634 12.1739 16.7866 12.1739H32.3894C33.1127 12.1739 33.6989 12.787 33.6989 13.543C33.6989 14.299 33.1127 14.912 32.3894 14.912Z"></path>
                </svg>
              </div>
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className="progress-gradient-primary" role="progressbar" style={{ width: "48%" }} ariaValuenow="75" ariaValuemin="0" ariaValuemax="100"><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderTeamMemberStatistic = () => {
    return (
      <div className="col-xl-8 col-lg-8">
        <div className="card employee-status">
          <div className="card-header pb-0">
            <h5>Team Member Statistics</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordernone">
                <thead>
                  <tr className="border-bottom-primary">
                    <th scope="col">Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Pipeline Generated</th>
                    <th scope="col">Meetings Booked</th>
                    <th scope="col">Leads</th>
                    <th scope="col">Messages Sent</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    workflow.workflow_team_members.map(wtm => {
                      return (
                        <tr>
                          <td>
                            <div className="d-flex">
                              <img src={wtm.team_member.photo_url} alt="" />
                              <div className="flex-grow-1">
                                <a href={wtm.team_member.show_path} data-bs-original-title="" title="">
                                  <h5>{wtm.team_member.name}
                                </h5></a></div>
                            </div>
                          </td>
                          <td>{wtm.team_member.title}</td>
                          <td>${wtm.pipeline_generated.toLocaleString("en-US")}</td>
                          <td>{wtm.num_meetings}</td>
                          <td>{wtm.num_leads}</td>
                          <td>{wtm.messages_sent}</td>
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
    )
  }

  const renderUpcomingMeetings = () => {
    return (
      <div className="col-xl-4 col-md-6 box-col-4">
        <div>
          <div className="card recent-activity">
            <div className="card-header border-bottom">
              <h5>Recent Activity</h5>
            </div>
            <div className="card-body">
              <div className="activity-media">
                <div className="d-flex">
                  <div className="recent-circle bg-primary"></div>
                  <div className="flex-grow-1">
                    <h6 className="font-roboto">Any desktop publishing pack ages editors.</h6><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span className="font-roboto">14 July 2022 | 20 hours ago</span></span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="recent-circle bg-secondary"></div>
                  <div className="flex-grow-1">
                    <h6 className="font-roboto">Renewed account with this new premium plan.</h6><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span className="font-roboto">24 Aug 2022 | 2 Days ago</span></span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="recent-circle bg-success"></div>
                  <div className="flex-grow-1">
                    <h6 className="font-roboto">Micron to build largest chip factory in US history.</h6><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span className="font-roboto">25 July 2022 | 20 hours ago</span></span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="recent-circle bg-info"></div>
                  <div className="flex-grow-1">
                    <h6 className="font-roboto">Share A Case Study On One Of Your Customers.</h6><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span className="font-roboto">12 Sept 2022 | 10 hours ago</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderLeads = () => {
    return (
      <div className="col-xl-12 col-lg-12">
        <div className="card">
          <div className="card-header pb-0">
            <h5>Leads</h5>
          </div>
          <div className="card-body">
            <LeadsTable
              leads={workflow.workflow_leads.map(wl => wl.lead)}
              teamMembers={workflow.workflow_team_members.filter(wtm => wtm.team_member.auth_token_id).map(wtm => wtm.team_member)}
              sequences={workflow.sequences}
              reload={loadWorkflow}
            />
          </div>
        </div>
      </div>
    )
  }

  const renderSequences = () => {
    return (
      <div className="col-xl-12 col-lg-12">
        <div className="card">
          <div className={`card-header pb-0 ${styles.workflow_attribtues_header}`}>
            <h5>Sequences</h5>
            <a className="f-w-600" href="javascript:void(0)" onClick={addSequenceClick}><i class="fa fa-plus"></i>Create sequence</a>
          </div>
          <div className="card-body">
            <SequencesTable
              workflow={workflow}
              sequences={workflow.sequences}
            />
          </div>
        </div>
        {
          showCreateSequenceModal &&
          <SequencesCreateModal
            showModal={showCreateSequenceModal}
            setShowModal={setShowCreateSequenceModal}
            workflow={workflow}
            onSubmit={() => {
              loadWorkflow();
              notifySuccess(`A new sequence is created`)
            }}
          />
        }
      </div>
    )
  }

  const renderWorkflowInformation = () => {
    return (
      <>
        <div className="row">
        {
          workflow.product &&
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Product: {workflow.product.name}</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">{workflow.product.description}</p>
              </div>
            </div>
          </div>
        }
        {
          workflow.target_audience &&
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Target Audience: {workflow.target_audience.name}</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">We target companies in {workflow.target_audience.industry} of size {workflow.target_audience.company_size} in {workflow.target_audience.location}. We look for {workflow.target_audience.titles.join(', ')}.</p>
              </div>
            </div>
          </div>
        }
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className={`card-header ${styles.workflow_attribtues_header}`}>
                <h5 className="mb-0">Created by me</h5>
                <a className="f-w-600" href="javascript:void(0)" onClick={addAttributeClick}><i class="fa fa-plus"></i>Create attribute</a>
              </div>
              <div className="card-body p-0">
                <div className="taskadd">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                      {
                        workflow.workflow_attributes.map(wa => {
                          return (
                            <tr>
                              <td>
                                <h6 className="task_title_0">{wa.name}</h6>
                              </td>
                              <td>
                                <p className="task_desc_0">{wa.value}</p>
                              </td>
                              {
                                /*
                                <td>
                                  <a className="me-2" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                  </a>
                                </td>
                                <td>
                                  <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>
                                </td>
                                */
                              }
                            </tr>
                          )
                        })
                      }
                    </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          showCreateAttributeModal &&
          <WorkflowAttributesCreateModal
            showModal={showCreateAttributeModal}
            setShowModal={setShowCreateAttributeModal}
            workflow={workflow}
            onSubmit={() => {
              loadWorkflow();
              notifySuccess(`A new workflow attribute is created`)
            }}
          />
        }
      </>
    )
  }

  return (
    <>
      <PageTitleSection
        title={`${workflow.name}`}
        pagePath={[
          { href: '/workflows', title: 'Workflows' },
          { href: `/workflows/${id}`, title: workflow.name }
        ]}
      />
      <div className="container-fluid">
        { renderSummarySection() }
        { renderWorkflowInformation() }
        <div className="row">
          { renderTeamMemberStatistic() }
          { renderUpcomingMeetings() }
        </div>
        <div className="row">
          { renderLeads() }
        </div>
        <div className="row">
          { renderSequences() }
        </div>
      </div>
    </>
  )
}
