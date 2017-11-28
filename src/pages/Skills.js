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
    	<div className="about skills">
    		<div className="container">
    			<div className="w3ls-title">
    				<h2 className="agileits-title">My skills</h2>
    			</div>
    			<div className="skill-agileinfo">
    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet sem sit amet dolor luctus pellentesque. Pellentesque eleifend tellus at interdum elementum. Nam egestas molestie elit. Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget sapien consequat tincidunt at vel nibh. Duis ut turpis mi. Duis nec scelerisque urna, sit amet varius arcu. Aliquam aliquet sapien quis mauris semper suscipit. Maecenas pharetra dapibus posuere. Praesent odio sem, varius quis dolor vel, maximus dapibus mi. Pellentesque mattis mauris neque. Nam aliquam turpis ante, at cursus massa ullamcorper ut. Proin id diam id nisi sagittis pellentesque sed sit amet eros.</p>
    				<div className="skill-grids">
    					<div className="col-md-4 col-sm-4 skills-w3lsleft">
    						<h4>Extra Skills</h4>
    						<ul>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>vitae sagittis mauris</li>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>Sed fermentum turpis</li>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>Quisque faucibus diam</li>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>Nunc eleifend vehicula</li>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>vitae sagittis mauris</li>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>Sed fermentum turpis</li>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>Quisque faucibus diam</li>
    							<li><i className="fa fa-check-square-o" aria-hidden="true"></i>Nunc eleifend vehicula</li>
    						</ul>
    					</div>
    					<div className="col-md-8 col-sm-8 skills-w3lsright">
    						<h4>Technical Skills</h4>
    						<div className="skillbar" data-percent="98">
    							<span className="skillbar-title" styles="background:#e08808;">HTML5</span>
    							<p className="skillbar-bar" styles="background: #ff9d0d;"></p>
    							<span className="skill-bar-percent"></span>
    						</div>
    						<div className="skillbar" data-percent="99">
    							<span className="skillbar-title" styles="background:#0396d8;">CSS3</span>
    							<p className="skillbar-bar" styles="background:#03A9F4;"></p>
    							<span className="skill-bar-percent"></span>
    						</div>
    						<div className="skillbar" data-percent="95">
    							<span className="skillbar-title" styles="background:#9226a4;">jQuery</span>
    							<p className="skillbar-bar" styles="background:#b32eca;"></p>
    							<span className="skill-bar-percent"></span>
    						</div>
    						<div className="skillbar" data-percent="70">
    							<span className="skillbar-title" styles="background:#028679;">PHP</span>
    							<p className="skillbar-bar" styles="background: #009688;"></p>
    							<span className="skill-bar-percent"></span>
    						</div>
    					</div>
    					<div className="clearfix"></div>
    				</div>
    				<div className="stats news-w3layouts">
    					<div className="stats-info agileits-w3layouts">
    						<div className="col-sm-3 col-xs-6 stats-grid">
    							<div className="stats-img">
    								<i className="fa fa-heart-o" aria-hidden="true"></i>
    							</div>
    							<p>Happy Clients</p>
    							<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='157000' data-delay='.5' data-increment="100">157000</div>
    						</div>
    						<div className="col-sm-3 col-xs-6 stats-grid">
    							<div className="stats-img w3-agileits">
    								<i className="fa fa-clone" aria-hidden="true"></i>
    							</div>
    							<p>Our Events</p>
    							<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='850' data-delay='8' data-increment="1">850</div>
    						</div>
    						<div className="col-sm-3 col-xs-6 stats-grid">
    							<div className="stats-img w3-agileits">
    								<i className="fa fa-check-square-o" aria-hidden="true"></i>
    							</div>
    							<p>Projects</p>
    							<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='80000' data-delay='.5' data-increment="100">80000</div>
    						</div>
    						<div className="col-sm-3 col-xs-6 stats-grid">
    							<div className="stats-img w3-agileits">
    								<i className="fa fa-newspaper-o" aria-hidden="true"></i>
    							</div>
    							<p>Awards</p>
    							<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='269' data-delay='8' data-increment="1">269</div>
    						</div>
    						<div className="clearfix"></div>
    					</div>
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
