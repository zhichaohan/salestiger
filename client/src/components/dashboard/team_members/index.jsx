import React, { Component, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PageTitleSection from '../page_title_section';
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
      console.log("data", data);
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
      <div className="container-fluid">
        <div className="page-title">
          <a href="/team_members/new"><button class="btn btn-primary" type="button">Create team member</button></a>
        </div>
      </div>
      <div className="container-fluid user-card">
        <div className="row">
        {
          teamMembers.map(m => {
            return (
              <div className="col-md-6 col-lg-4 box-col-4">
                <div className="card custom-card">
                  <div className="card-header"><img className="img-fluid" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/user-card/1.jpg" alt="" /></div>
                  <div className="card-profile"><img className="rounded-circle" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/avtar/3.jpg" alt="" /></div>
                  <ul className="card-social">
                    <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                  </ul>
                  <div className="text-center profile-details">
                    <h4>{m.name}</h4>
                    <h6>Manager</h6>
                  </div>
                  <div className="card-footer row">
                    <div className="col-4 col-sm-4">
                      <h6>Follower</h6>
                      <h3 className="counter">9564</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                      <h6>Following</h6>
                      <h3><span className="counter">49</span>K</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                      <h6>Total Post</h6>
                      <h3><span className="counter">96</span>M</h3>
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
