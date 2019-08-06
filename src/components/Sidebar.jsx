import React, { Component } from 'react';
import {FaBomb} from 'react-icons/fa';

class Sidebar extends Component {

	render() {
		return (
			<nav id="sidebar">
				<div className="sidebar-header" >
					<h3>Featured Content</h3>
				</div>

				<ul className="list-unstyled components">
					<p>It's Time to Innovate</p>
					<li className="active">
						<a href="#homeSubmenu"
						   data-toggle="collapse"
						   aria-expanded="false"
						   className="dropdown-toggle">Home</a>
						<ul className="collapse list-unstyled" id="homeSubmenu">
							<li>
								<a href="#">Home 1</a>
							</li>
							<li>
								<a href="#">Home 2</a>
							</li>
							<li>
								<a href="#">Home 3</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">About</a>
						<a href="#pageSubmenu"
						   data-toggle="collapse"
						   aria-expanded="false"
						   className="dropdown-toggle">Pages</a>
						<ul className="collapse list-unstyled" id="pageSubmenu">
							<li>
								<a href="#">Page 1</a>
							</li>
							<li>
								<a href="#">Page 2</a>
							</li>
							<li>
								<a href="#">Page 3</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Portfolio</a>
					</li>
					<li>
						<a href="#" onClick={this.props.toggleContactCard}>Contact</a>
					</li>
				</ul>

				<ul className="list-unstyled CTAs">
					<li>
						<a href="#" className="download">Download Resume</a>
					</li>

				</ul>
				<footer className="page-footer font-small">
					<div className="text-center">
						<FaBomb/> The Bomb
						</div>
				</footer>
			</nav>
		);
	}
}

export default Sidebar;
