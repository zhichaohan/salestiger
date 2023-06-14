import React, { useState } from 'react'
import PageTitleSection from '../../page_title_section';
import { useHistory } from 'react-router-dom';
import { createLead } from '../../../../api/leads';
import { notifySuccess } from '../../../../helpers';
import styles from './index.module.css'

export default function LeadsNew() {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [businessEmail, setBusinessEmail] = useState();
  const [personalEmail, setPersonalEmail] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [linkedInUrl, setLinkedInUrl] = useState();
  const [twitterUrl, setTwitterUrl] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyNumEmployees, setCompanyNumEmployees] = useState();
  const [companyIndustry, setCompanyIndustry] = useState();
  const [companyLogoUrl, setCompanyLogoUrl] = useState();
  const [companyLinkedInUrl, setCompanyLinkedInUrl] = useState();
  const [companyTwitterUrl, setCompanyTwitterUrl] = useState();
  const [companyFacebookUrl, setCompanyFacebookUrl] = useState();
  const [companyWebsiteUrl, setCompanyWebsiteUrl] = useState();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    createLead({
      lead: {
        name: name,
        title: title,
        business_email: businessEmail,
        personal_email: personalEmail,
        phone: phone,
        location: location,
        linked_in_url: linkedInUrl,
        twitter_url: twitterUrl,
      },
      company: {
        name: companyName,
        num_employees: companyNumEmployees,
        industry: companyIndustry,
        logo_url: companyLogoUrl,
        linked_in_url: companyLinkedInUrl,
        twitter_url: companyTwitterUrl,
        facebook_url: companyFacebookUrl,
        website_url: companyWebsiteUrl,
      }
    }, (r) => {
      notifySuccess(`New lead is created`);
      history.push(r.show_path);
    })
  }

  return (
    <>
      <PageTitleSection
        title={`Create new lead`}
        pagePath={[
          { href: '/leads', title: 'Leads' },
          { href: '/leads/new', title: 'Create lead' }
        ]}
      />
      <div className="container-fluid">
        <div className="edit-profile">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className={`card-header ${styles.header}`}>
                {
                  /* <a className="f-w-600" href={`/lead_imports/new`}><i class={`fa fa-plus ${styles.icon}`}></i>Import CSV</a> */
                }
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Business Email</label>
                      <input className="form-control" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Personal Email</label>
                      <input className="form-control" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Location</label>
                      <input className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">LinkedIn Url</label>
                      <input className="form-control" value={linkedInUrl} onChange={(e) => setLinkedInUrl(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Twitter Url</label>
                      <input className="form-control" value={twitterUrl} onChange={(e) => setTwitterUrl(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company name</label>
                      <input className="form-control" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company number of employees</label>
                      <input className="form-control" value={companyNumEmployees} onChange={(e) => setCompanyNumEmployees(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company industry</label>
                      <input className="form-control" value={companyIndustry} onChange={(e) => setCompanyIndustry(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company logo url</label>
                      <input className="form-control" value={companyLogoUrl} onChange={(e) => setCompanyLogoUrl(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company LinkedIn Url</label>
                      <input className="form-control" value={companyLinkedInUrl} onChange={(e) => setCompanyLinkedInUrl(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company Twitter Url</label>
                      <input className="form-control" value={companyTwitterUrl} onChange={(e) => setCompanyTwitterUrl(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company Facebook Url</label>
                      <input className="form-control" value={companyFacebookUrl} onChange={(e) => setCompanyFacebookUrl(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company Website Url</label>
                      <input className="form-control" value={companyWebsiteUrl} onChange={(e) => setCompanyWebsiteUrl(e.target.value)}/>
                    </div>
                    <div className="form-footer">
                      <button className="btn btn-primary btn-block" onClick={onSubmit}>Save</button>
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
