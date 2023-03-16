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
    </>
  )
}
