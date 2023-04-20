import React, { Component, useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import PageTitleSection from '../../page_title_section';
import S3UploadFile from '../../../ui_kit/s3_upload_file';
import { createLeadImport } from '../../../../api/lead_imports';
import styles from './index.module.css'

export default function LeadImportsNew() {
  const [fileToUpload, setFileToUpload] = useState([]);
  const history = useHistory();

  const onSubmit = () => {
    if (fileToUpload.length > 0) {
      createLeadImport({ csv_url: fileToUpload[0] }, (r) => {
        history.push(r.show_path);
      });
    }
  }

  return (
    <>
      <PageTitleSection
        title={`Create new lead import`}
        pagePath={[
          { href: '/lead_imports', title: 'Lead Imports' },
          { href: '/lead_imports/new', title: 'Create lead imports' }
        ]}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5>Import CSV Lead File</h5>
              </div>
              <div className="card-body">
                <div className="form theme-form">
                  <div className="row">
                    <div className="col">
                      <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">Upload File</label>
                        <div className="col-sm-9">
                          <S3UploadFile
                            onChange={(newFiles) => {
                              console.log("newFiles", newFiles);
                              setFileToUpload(newFiles);
                            }}
                            type="form-field"
                            name="filename"
                            accept=".csv,.xlsx.xls"
                            cta={`Select CSV file to import`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-end">
                <button class="btn btn-primary" type="submit" onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
