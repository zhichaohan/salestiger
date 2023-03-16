import React, { Component } from 'react'

export default function PageTitleSection({
  title,
  pagePath
}) {
  return (
    <div className="container-fluid">
      <div className="page-title">
        <div className="row">
          <div className="col-sm-6">
            <h3>{title}</h3>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/"><i data-feather="home"></i></a></li>
              {
                pagePath.map((page, i) => {
                  const active = i === pagePath.length - 1

                  return (
                    <li className={`breadcrumb-item ${active ? 'active' : ''}`}><a href={page.href}>{page.title}</a></li>
                  )
                })
              }

            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
