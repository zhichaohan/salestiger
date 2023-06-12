import React, { useContext } from 'react'
import Context from '../../../utils/context';

export default function Header() {
  const context = useContext(Context);
  const logout = () => {
    context.auth.userLogOut();
  }

  return (
    <div className="page-header">
      <div className="header-wrapper row m-0">
        <div className="header-logo-wrapper col-auto p-0">
          <div className="logo-wrapper"><a href="index.html"><img className="img-fluid" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/logo/login.png" alt="" /></a></div>
          <div className="toggle-sidebar"><i className="status_toggle middle sidebar-toggle" data-feather="align-center"></i></div>
        </div>
        <div className="nav-right col-8 pull-right right-header p-0">
          <ul className="nav-menus">
            <li className="profile-nav onhover-dropdown p-0 me-0">
              <div className="d-flex profile-media"><img className="b-r-50" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/enzo/assets/images/dashboard/profile.jpg" alt="" />
                <div className="flex-grow-1"><span>{context.auth.getCurrentUser().name}</span>
                  <p className="mb-0 font-roboto">Admin <i className="middle fa fa-angle-down"></i></p>
                </div>
              </div>
              <ul className="profile-dropdown onhover-show-div">
                <li><a onClick={() => logout()}><i data-feather="log-in"> </i><span>Log out</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
