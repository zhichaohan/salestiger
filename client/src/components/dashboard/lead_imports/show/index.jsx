import React, { useState, useEffect } from 'react'
import PageTitleSection from '../../page_title_section';
import CardHeader from '../../../ui_kit/card_header';
import LeadsTable from '../../leads/table';
import { getLeadImport } from '../../../../api/lead_imports';
import { getTeamMembers } from '../../../../api/team_members';
import { getSequences } from '../../../../api/sequences';

export default function LeadImportsShow({
  match
}) {
  let id = match.params.id;
  const [leadImport, setLeadImport] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const [sequences, setSequences] = useState();
  const [view, setView] = useState('loading');

  const load = () => {
    getSequences((seq) => {
      setSequences(seq);
      getTeamMembers({}, (tm) => {
        setTeamMembers(tm);
        getLeadImport(id, (r) => {
          setLeadImport(r);
          setView('loaded');
        })
      })
    })
  };

  useEffect(load, []);

  if (view === 'loading') {
    return <>Loading</>
  }

  return (
    <>
      <PageTitleSection
        title={`Lead import ${leadImport.created_at_readable}`}
        pagePath={[]}
      />

      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Status</h6>
                  <h4 className="mb-0 counter">{leadImport.status}</h4>
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
                    <h6 className="font-roboto">New leads</h6>
                    <h4 className="mb-0 counter">{leadImport.success_count || 0}</h4>
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
                    <h6 className="font-roboto">Duplicate leads</h6>
                    <h4 className="mb-0 counter">{leadImport.duplicate_count || 0}</h4>
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
                    <h6 className="font-roboto">Errors</h6>
                    <h4 className="mb-0 counter">{leadImport.error_count || 0}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <CardHeader
                title={`Leads`}
              />
              <div className="card-body">
                <LeadsTable
                  leads={leadImport.leads}
                  teamMembers={teamMembers}
                  sequences={sequences}
                  reload={load}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
