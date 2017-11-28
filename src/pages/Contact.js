import React from 'react'

export default () => {
    return (
      <div>
      <div className="banner about-w3banner">
        <div className="banner-w3lsinfo">
          <div className="header">
            <div className="container">
              <div className="logo">
                <h1><a href="/">Clint Mossman</a></h1>
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
      <div className="about contact">
        <div className="container">
          <div className="w3ls-title">
            <h2 className="agileits-title">Contact Me</h2>
          </div>
          <div className="contact-agileinfo">
            <div className="col-md-7 w3agile-contact-grids">
              <div className="ctact-w3left">
                <form action="#" method="post">
                  <span>
                    <i>Name</i>
                    <input type="text" name="Name" placeholder="" required=""/>
                  </span>
                  <span>
                    <i>Email</i>
                    <input type="email" name="Email" placeholder="" required=""/>
                  </span>
                  <span>
                    <i>Subject</i>
                    <input type="text" name="Subject" placeholder="" required=""/>
                  </span>
                  <span>
                    <i>Message</i>
                    <textarea name="Message" placeholder="" required=""></textarea>
                  </span>
                  <div className="w3_submit">
                    <input type="submit" value="Submit Now"/>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 w3agile-contact-grids">
              <p>Please keep your emails short and simple. Turn around time for responses are around 2-3 days.</p>
              <div className="profile-grids">
                <h5>Contact Info</h5>
                <ul>
                  <li>
                    <b>PHONE</b> : +01 385 225 5847
                  </li>
                  <li>
                    <b>ADDRESS</b> : Salt Lake City
                  </li>
                </ul>
              </div>
              <div className="profile-grids">
                <h5>Social Media Info</h5>
                <ul>
                  <li>
                    <b>E-MAIL</b> : <a href="mailto:example@mail.com"> clintmossman808@gmail.com</a>
                  </li>
                  <li>
                    <b>WEBSITE</b> : <a href="#">www.myresume.com</a>
                  </li>
                  <li>
                    <b>TWITTER</b> : <a href="#">example@twitter</a>
                  </li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
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
