import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import { Link, useHistory } from 'react-router-dom';
import { getTeamMember } from '../../../../api/team_members';
import { notifySuccess } from '../../../../helpers';

export default function TeamMemberVerifyLinkedin({
  match
}) {
  let id = match.params.id;
  const [teamMember, setTeamMember] = useState();
  const history = useHistory();

  const getAndRedirect = () => {
    getTeamMember(id, (r) => {
      setTeamMember(r);
      const timer = setTimeout(() => {
        if (r.linkedin_verified) {
          history.push(`/team_members/${id}/edit`);
          notifySuccess(`The Linkedin Credentials are verified`);
        }
        else {
          getAndRedirect();
        }
      }, 10000);
      return () => clearTimeout(timer);
    }, () => {
      console.log("an error has occurred");
    })
  }

  useEffect(getAndRedirect, []);

  if (!teamMember) {
    return <>Loading</>
  }

  return (
    <>
      <PageTitleSection
        title={`Verifying LinkedIn Credentials`}
        pagePath={[
          { href: '/team_members', title: 'Team members' },
          { href: `/team_members/${id}`, title: teamMember && teamMember.name },
          { href: `/team_members/${id}/verify_linkedin`, title: 'Verify LinkedIn' }
        ]}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="col-md-3">
                  <div className="loader-box">
                    <div className="loader-3"></div>
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
