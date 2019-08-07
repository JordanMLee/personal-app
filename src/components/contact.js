import React, { Component } from 'react';

import Modal from "./subcomponents/Modal";

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			modalShowing: false
		};
	}

	openModalHandler = () => {
		this.setState({
			modalShowing: true
		});
	};

	closeModalHandler = () => {
		this.setState({
			modalShowing: false
		});
	};

	returnHome = () => {
		this.props.history.push('/');
	};

	render() {
		return (

			<div>
				<h1> Contact </h1>
				<input placeholder="name" type="name" />
				<input placeholder="email" type="email" />
				<button onClick={this.returnHome}>Home</button>
				<div>
					{this.state.modalShowing ?
						<div onClick={this.closeModalHandler} className="back-drop"></div> : null}
					<button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

					<Modal className="modal"
						   show={this.state.modalShowing}
						   close={this.closeModalHandler}>
						This is the modal saying Hello World!
					</Modal>
				</div>
			</div>
		);
	}
}

export default Contact;
