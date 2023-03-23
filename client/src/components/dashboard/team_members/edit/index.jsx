import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import { getTeamMember } from '../../../../api/team_members';

export default function TeamMembersEdit({
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
        title={`Edit ${teamMember && teamMember.name}'s Profile`}
        pagePath={[
          { href: '/team_members', title: 'Team members' },
          { href: `/team_members/${id}`, title: teamMember && teamMember.name },
          { href: `/team_members/${id}/edit`, title: 'Edit Profile' }
        ]}
      />
      <div className="container-fluid edit-profile">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header pb-0">
                <h4 className="card-title mb-0">My Profile</h4>
                <div className="card-options"><a className="card-options-collapse" href="javascript:void(0)" data-bs-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript:void(0)" data-bs-toggle="card-remove"><i className="fe fe-x"></i></a></div>
              </div>
              <div className="card-body">
                <form method="post" action="/auth/google_oauth2">
                  <input type="hidden" name="authenticity_token" value={gon.authenticity_token}/>
                  <div className="row mb-2">
                    <div className="profile-title">
                      <div className="d-flex">
                      <img className="img-70 rounded-circle" alt="" src={teamMember.photo_url} />
                        <div className="flex-grow-1 ms-3"><a href="user-profile.html">
                            <h3 className="mb-1 f-20 txt-primary">{teamMember.name}</h3></a>
                          <p className="f-12">{teamMember.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-footer">
                    <button type="submit" className="btn btn-primary btn-block">Connect Gmail Account</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
