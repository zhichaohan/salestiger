import React, { useState, useEffect } from 'react'
import PageTitleSection from '../page_title_section';
import SocialList from './social_list';
import { toast } from 'react-toastify';

export default function TeamMembersIndex() {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    const response = toast.promise(
      fetch(`/api/v1/team_members`, {
        headers: {
          "Content-Type": "application/json",
        }
      }),
      {
        pending: 'Loading your team members',
        success: 'Found your team members',
        error: 'An error has occurred'
      }
    );
    response.then(response => response.json())
    .then(data => {
      setTeamMembers(data);
    })
  }, [])

  return (
    <>
      <PageTitleSection
        title={`Your team members`}
        pagePath={[
          { href: '/team_members', title: 'Team members' }
        ]}
      />
      {
        /*
          <div className="container-fluid">
            <div className="page-title">
              <a href="/team_members/new"><button class="btn btn-primary" type="button">Create team member</button></a>
            </div>
          </div>
        */
      }
      <div className="container-fluid user-card">
        <div className="row">
        {
          teamMembers.map(m => {
            return (
              <div className="col-md-6 col-lg-4 box-col-4">
                <div className="card custom-card">
                  <div className="card-header"><img className="img-fluid" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/user-card/1.jpg" alt="" /></div>
                  <div className="card-profile"><img className="rounded-circle" src={m.photo_url} alt="" /></div>
                  <SocialList teamMember={m} />
                  <div className="text-center profile-details">
                    <a href={`/team_members/${m.slug}`}><h4>{m.name}</h4></a>
                    <h6>{m.title}</h6>
                  </div>
                  <div className="card-footer row">
                    <div className="col-4 col-sm-4">
                      <h6>Leads reached</h6>
                      <h3 className="counter">9564</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                      <h6>Meetings set</h6>
                      <h3><span className="counter">49</span>K</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                      <h6>Conversion rate</h6>
                      <h3><span className="counter">5%</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}
