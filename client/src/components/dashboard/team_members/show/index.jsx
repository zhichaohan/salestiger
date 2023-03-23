import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import SocialList from '../social_list';
import { getTeamMember } from '../../../../api/team_members';

export default function TeamMembersShow({
  match
}) {
  let id = match.params.id;
  const [teamMember, setTeamMember] = useState();

  useEffect(() => {
    getTeamMember(id, (r) => {
      setTeamMember(r);
    }, () => {
      console.log("an error has occurred");
    })
  }, []);

  if (!teamMember) {
    return <>Loading</>
  }

  return (
    <>
      <PageTitleSection
        title={`${teamMember && teamMember.name}'s Profile`}
        pagePath={[
          { href: '/team_members', title: 'Team members' },
          { href: `/team_members/${id}`, title: teamMember && teamMember.name }
        ]}
      />
      <div className="user-profile">
        <div className="row">
          <div className="col-sm-12">
            <div className="card profile-header"><img className="img-fluid bg-img-cover" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/user-profile/bg-profile.jpg" alt="" />
              <div className="profile-img-wrrap"><img className="img-fluid bg-img-cover" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/user-profile/bg-profile.jpg" alt="" /></div>
              <div className="userpro-box">
                <div className="img-wrraper">
                  <div className="avatar"><img className="img-fluid" alt="" src={teamMember.photo_url} /></div><a className="icon-wrapper" href={`/team_members/${id}/edit`}><i className="icofont icofont-pencil-alt-5"></i></a>
                </div>
                <div className="user-designation">
                  <div className="title"><a target="_blank" href="">
                      <h4>{teamMember.name}</h4></a>
                    <h6>{teamMember.title}</h6>
                  </div>
                  <div className="social-media">
                    <SocialList className="user-list-social" teamMember={teamMember} />
                  </div>
                  <div className="follow">
                    <ul className="follow-list">
                      <li>
                        <div className="follow-num counter">325</div><span>Follower</span>
                      </li>
                      <li>
                        <div className="follow-num counter">450</div><span>Following</span>
                      </li>
                      <li>
                        <div className="follow-num counter">500</div><span>Likes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-5 xl-35 box-col-35">
            <div className="default-according style-1 job-accordion">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="p-0">
                        <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon2" aria-expanded="true" aria-controls="collapseicon2">About Me</button>
                      </h5>
                    </div>
                    <div className="collapse show" id="collapseicon2" aria-labelledby="collapseicon2" data-parent="#accordion">
                      <div className="card-body post-about">
                        <ul>
                        {
                          teamMember.team_member_infos.map(i => {
                            return (
                              <li>
                                <div className="icon"><i class={`fa ${i.icon}`}></i></div>
                                <div>
                                  <h5>{i.label}</h5>
                                  <p>{i.location} - {i.date_display}</p>
                                </div>
                              </li>
                            )
                          })
                        }
                        </ul>
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
