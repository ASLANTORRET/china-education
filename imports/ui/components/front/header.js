import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ language }) => {
	return (
		<div className="header header-new">
    	<div className="row">

        <div className="medium-4 small-12 columns">
        	<div className="logo">
          	<Link to={`/${language}`}>
            	<img src="/images/new_logo.jpg" alt="Tian cai" />
            </Link>
          </div>
        </div>

        <div className="large-8 medium-8 small-12 columns text-right">
        	<p><i className="fa fa-phone"></i> +7 (727) 274 90 09</p>
        </div>

      </div>
    {/* </div>
		<div className="header sticky" data-sticky data-margin-top="0">
			<div className="row">

				<div className="medium-4 small-12 columns">
					<div className="logo">
						<a href="index-2.html">
							<img src="images/logo.png" alt="Webful Education"/>
						</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="medium-8 small-12 columns nav-wrap">



					<div className="search-wrap float-right">
						<a href="#" className="search-icon-toggle" data-toggle="search-dropdown">
							<i className="fa fa-search"></i>
						</a>
					</div>
					<div className="dropdown-pane" id="search-dropdown" data-dropdown data-auto-focus="true">
						<input type="text" placeholder="Enter keyword and press enter .... "/>
					</div>
				</div>

			</div> */}
		</div>
	)
}

export default Header
