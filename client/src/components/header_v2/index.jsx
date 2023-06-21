import React from 'react'

export default function Header() {
  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo"><a className="d-flex" href="/"><img width="200" alt="SalesTiger" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/images/logonobg.png" /></a></div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li><a className="active" href="#">Home</a></li>
                  <li><a className="active" href="/#feature">Features</a></li>
                  <li><a className="active" href="/#testimonials">Testimonials</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-right">
            <div className="block-signin"><a className="btn btn-default hover-up icon-arrow-right" href="/get-started">Get Started</a></div>
          </div>
        </div>
      </div>
    </header>
  )
}
