import React from 'react'

export default () => {
  return (
    <div>
    <div className="banner">
      <div className="banner-w3lsinfo">
        <div className="header">
          <div className="container">
            <div className="logo">
              <h1 className="logo-text"><a href="/">Clint Mossman</a></h1>
            </div>
                <ul className="customMenu">
                  <li><a className="optionMenu" href="/"> Home</a></li>
                  <li><a className="optionMenu" href="/about"> About</a></li>
                  <li><a className="optionMenu" href="/skills"> Skills</a></li>
                  <li><a className="optionMenu" href="/experience">Experience</a></li>
                  <li><a className="optionMenu" href="/education">Education</a></li>
                  <li><a className="optionMenu" href="/myprojects"> My Projects</a></li>
                  <li><a className="optionMenu" href="/contact"> Contact Me</a></li>
                </ul>
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
              <li><i className="fa fa-map-marker" aria-hidden="true"></i>Salt Lake City</li>
              <li><i className="fa fa-phone" aria-hidden="true"> </i>  +01 385 255 4533</li>
              <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:clintmossman808@gmail.com">clintmossman808@gmail.com</a></li>
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
