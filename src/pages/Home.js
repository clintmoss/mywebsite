import React from 'react'

export default () => {
  return (
    <div>
    <div className="banner">
      <div className="banner-w3lsinfo">
        <div className="header">
          <div className="container">
            <div className="logo">
              <h1><a href="/">Clint Mossman</a></h1>
            </div>
            <div className="menu">
              <a href="#" className="navicon"></a>
              <div className="toggle effect-3">

                <ul className="toggle-menu">
                  <li><a href="/" className="active"> Home</a></li>
                  <li><a href="/about"> About</a></li>
                  <li><a href="skills.html"> Skills</a></li>
                  <li><a href="experience.html">Experience</a></li>
                  <li><a href="education.html">Education</a></li>
                  <li><a href="projects.html"> My Projects</a></li>
                  <li><a href="contact.html"> Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="social-w3licon">
              <a href="#" className="social-button twitter"><i className="fa fa-twitter"></i></a>
              <a href="#" className="social-button facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" className="social-button google"><i className="fa fa-google-plus"></i></a>
              <a href="#" className="social-button dribbble"><i className="fa fa-dribbble"></i></a>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="banner-text">
          <div className="container">
            <div className="banner-w3lstext">
              <h2>Sophistication<span>Simplicity, is the greatest</span></h2>
              <p>-Leonardo DiVinci</p>
            </div>
          </div>
        </div>
        <div className="w3agile-address">
          <div className="container">
            <ul>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i>Broome St, Canada, NY 10002, New York</li>
              <li><i className="fa fa-phone" aria-hidden="true"> </i>  +01 111 222 3333</li>
              <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@example.com"> mail@example.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="w3agile-footer">
      <div className="container">
        <p>© 2017 Trendy CV. All rights reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts.</a></p>
      </div>
    </div>
    </div>
  )
}
