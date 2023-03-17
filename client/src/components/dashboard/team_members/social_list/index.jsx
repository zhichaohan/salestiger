import React, { Component } from 'react'

export default function SocialList({
  teamMember,
  className = "card-social",
}) {
  return (
    <ul className={className}>
      { teamMember.facebook_url && <li><a href={teamMember.facebook_url} target="_blank"><i className="fa fa-facebook"></i></a></li> }
      { teamMember.gmail && <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google"></i></a></li> }
      { teamMember.twitter_url && <li><a href={teamMember.twitter_url} target="_blank"><i className="fa fa-twitter"></i></a></li> }
      { teamMember.instagram_url && <li><a href={teamMember.instagram_url} target="_blank"><i className="fa fa-instagram"></i></a></li> }
      { teamMember.linkedin_url && <li><a href={teamMember.linkedin_url} target="_blank"><i className="fa fa-linkedin"></i></a></li> }
    </ul>
  )
}
