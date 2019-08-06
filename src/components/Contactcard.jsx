import React, { Component } from 'react';

class Contactcard extends Component {
	constructor() {
		super();

		this.state = {
			flipped: false
		};
		this.handleFlipping = this.handleFlipping.bind(this);
	}

	handleFlipping = () => {
		this.setState({
			flipped: !this.state.flipped
		});
	};

	render() {
			return(
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<h1>Jordan Lee</h1>
							<p>I really like to code things</p>
							<p>You should hire me before someone else does lol.</p>
						</div>
						<div className="flip-card-back">
							<h2>jk i already have a job!</h2>
						</div>
					</div>
				</div>
			);
	}



}
