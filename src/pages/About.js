import React from 'react'

export default class extends React.Component {

  render() {
    return (
      <div>
      {/*
      Author: W3layouts
      Author URL: http://w3layouts.com
      License: Creative Commons Attribution 3.0 Unported
      License URL: http://creativecommons.org/licenses/by/3.0/
      */}
      <div className="banner about-w3banner">
        <div className="banner-w3lsinfo">
          <div className="header">
            <div className="container">
              <div className="logo">
                <h1><a href="/">Clint Mossman</a></h1>
              </div>
              <div class="menu">
                <a href="#" className="navicon"></a>
                <div className="toggle effect-3">
                  <ul className="toggle-menu">
                    <li><a href="index.html"> Home</a></li>
                    <li><a href="about.html" className="active"> About</a></li>
                    <li><a href="skills.html"> Skills</a></li>
                    <li><a href="experience.html">Experience</a></li>
                    <li><a href="education.html">Education</a></li>
                    <li><a href="projects.html"> My Projects</a></li>
                    <li><a href="contact.html"> Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="social-w3licon">
                <a href="#" className="social-button twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" className="social-button facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" className="social-button google"><i class="fa fa-google-plus"></i></a>
                <a href="#" className="social-button dribbble"><i class="fa fa-dribbble"></i></a>
              </div>
              <div className="clearfix"> </div>
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
      <div className="about">
        <div className="container">
          <div className="w3ls-title">
            <h2 className="agileits-title">About Me</h2>
          </div>
          <div className="about-agileinfo">
            <div className="col-md-4 col-sm-4 about-left ">
              <img src="images/img1.jpg" class="img-responsive" alt=""/>
            </div>
            <div className="col-md-8 col-sm-8 about-right wthree">
              <h3>Hi, im <span>Wikolia Mark </span></h3>
              <h4>Web Designer & Developer </h4>
              <ul className="address">
                <li>
                  <ul className="agileits-address-text ">
                    <li><b>D.O.B :</b></li>
                    <li>23-06-1980</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li><b>PHONE : </b></li>
                    <li>+00 111 222 3333</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li><b>ADDRESS :</b></li>
                    <li>756 global Place, North Sydney, Canada.</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li><b>E-MAIL :</b></li>
                    <li><a href="mailto:example@mail.com"> mail@example.com</a></li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li><b>WEBSITE :</b></li>
                    <li><a href="http://w3layouts.com">www.myresume.com</a></li>
                  </ul>
                </li>
              </ul>
              <div className="social-wthree-icons">
                <ul>
                  <li><a href="#" className="fa fa-facebook icon icon-border facebook"> </a></li>
                  <li><a href="#" className="fa fa-twitter icon icon-border twitter"> </a></li>
                  <li><a href="#" className="fa fa-google-plus icon icon-border googleplus"> </a></li>
                  <li><a href="#" className="fa fa-dribbble icon icon-border dribbble"> </a></li>
                </ul>
                <div className="clearfix"> </div>
              </div>
              <div className="hire-w3lgrids">
                <a href="#" className="wthree-more nina" data-text="DOWNLOAD CV">
                  <span>D</span><span>o</span><span>w</span><span>n</span><span>l</span><span>o</span><span>a</span><span>d</span> <span>c</span><span>v</span>
                </a>
                <a href="#" className="wthree-more w3more1 nina" data-text="hire me">
                  <span>h</span><span>i</span><span>r</span><span>e</span> <span>m</span><span>e</span>
                </a>
              </div>
            </div>
            <div className="clearfix"> </div>
            <div className="about-text agileits-w3layouts">
              <p> Aliquam aliquet sapien quis mauris semper suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet sem sit amet dolor luctus pellentesque. Pellentesque eleifend tellus at interdum elementum. Nam egestas molestie elit. Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget sapien consequat tincidunt at vel nibh sed accumsan quam.
              Maecenas pharetra dapibus posuere. Praesent odio sem, varius quis dolor vel, maximus dapibus mi. Pellentesque mattis mauris neque. Nam aliquam turpis ante, at cursus massa ullamcorper ut.Nam egestas molestie elit. Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget sapien consequat tincidunt at vel nibh sed accumsan quam.
              uspendisse laoreet sem sit amet dolor luctus pellentesque Maecenas pharetra dapibus posuere. Praesent odio sem, varius quis dolor vel, maximus dapibus mi. Pellentesque mattis mauris neque. Nam aliquam turpis ante, at cursus massa ullamcorper ut eleifend tellus at interdum elementum.</p>
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
}
