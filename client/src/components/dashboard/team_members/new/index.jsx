import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';

export default function TeamMembersNew() {
  return (
    <>
      <PageTitleSection
        title={`Create new team member`}
        pagePath={[
          { href: '/team_members', title: 'Team members' },
          { href: '/team_members/new', title: 'Create team member' }
        ]}
      />
      <div className="container-fluid">
        <div className="edit-profile">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header pb-0">
                  <h4 className="card-title mb-0">My Profile</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-2">
                      <div className="profile-title">
                        <div className="d-flex">
                          <img className="img-70 rounded-circle" alt="" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/user/2.png" />
                          <div className="flex-grow-1 ms-3">
                            <input class="form-control" type="file" accept=".jpg,.jpeg,.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <h6 className="form-label">Bio</h6>
                      <textarea className="form-control" rows="5">On the other hand, we denounce with righteous indignation</textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email-Address</label>
                      <input className="form-control" placeholder="your-email@domain.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input className="form-control" type="password" value="password" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Website</label>
                      <input className="form-control" placeholder="http://Uplor .com" />
                    </div>
                    <div className="form-footer">
                      <button className="btn btn-primary btn-block">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
