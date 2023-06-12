import React, { Component, useState, useContext, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import Select from 'react-select';
import { getTargetAudience, updateTargetAudience } from '../../../../api/target_audiences';
import styles from './index.module.css';
import { notifySuccess, notifyError } from '../../../../helpers';

export default function TargetAudiencesEdit({
  match
}) {
  let id = match.params.id;
  const [targetAudience, setTargetAudience] = useState();
  const [titles, setTitles] = useState();
  const [industries, setIndustries] = useState();
  const [minCompanySize, setMinCompanySize] = useState();
  const [maxCompanySize, setMaxCompanySize] = useState();

  useEffect(() => {
    getTargetAudience(id, (r) => {
      setTitles((r.titles || []).map((r) => {
        return {
          value: r,
          label: r
        }
      }));
      setIndustries((r.industries || []).map((r) => {
        return {
          value: r,
          label: r
        }
      }));
      setMinCompanySize(r.min_company_size);
      setMaxCompanySize(r.max_company_size);
      setTargetAudience(r);
    }, () => {
      
    })
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    updateTargetAudience(id, {
      min_company_size: minCompanySize,
      max_company_size: maxCompanySize,
      industries: industries.map(r => r.value),
      titles: titles.map(r => r.value),
    }, () => {
      notifySuccess("The target audience has been updated");
    }, () => {
      notifyError("An error has occurred");
    })
  }

  if (!targetAudience) {
    return <>Loading</>
  }

  return (
    <>
      <PageTitleSection
        title={`Edit ${targetAudience.name}`}
        pagePath={[
          { href: '/workflows', title: 'Workflows' },
          { href: `/target_audiences/${targetAudience.slug}/edit`, title: `Edit ${targetAudience.name}` },
        ]}
      />
      <div className="container-fluid edit-profile">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5 className="card-title">{targetAudience.name}</h5>
              </div>
              <div className="card-body">
                <div className="mb-2">
                  <div className="col-form-label">Titles</div>
                  <Select
                    defaultValue={titles}
                    isMulti
                    name="titles"
                    options={gon.all_lead_titles.map(t => {
                      return {
                        value: t, label: t
                      }
                    })}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(selectedOption) => {
                      setTitles(selectedOption)
                    }}
                  />
                </div>
                <div className="mb-2">
                  <div className="col-form-label">Industries</div>
                  <Select
                    defaultValue={industries}
                    name="industry"
                    isMulti
                    options={gon.all_company_industries.map(t => {
                      return {
                        value: t, label: t
                      }
                    })}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(selectedOption) => {
                      setIndustries(selectedOption);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <div className="col-form-label">Minimum company size</div>
                  <input value={minCompanySize} onChange={(e) => setMinCompanySize(e.target.value)} class="form-control digits" type="number" placeholder="Minimum company size" />
                </div>
                <div className="mb-2">
                  <div className="col-form-label">Maximum company size</div>
                  <input value={maxCompanySize} onChange={(e) => setMaxCompanySize(e.target.value)} class="form-control digits" type="number" placeholder="Maximum company size" />
                </div>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-primary" type="submit" onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
