import React, { Component } from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Samplecontent from './Samplecontent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            displaySideBar: true,
            displayContactCard: false
        };
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleContactCard = this.toggleContactCard.bind(this);
    }

    toggleSidebar() {
        this.setState({
            displaySideBar: !this.state.displaySideBar

        });
    }

    toggleContactCard() {
        console.log("display contact card");
        this.setState({
            displayContactCard: !this.state.displayContactCard
        });
    }

	render() {
		return (
			<div className="App">
                <div className="wrapper">
                    {this.state.displaySideBar ? <Sidebar toggleContactCard={this.toggleContactCard}/> : null}
                    <div id="content">
                        <Navbar toggleSidebar={this.toggleSidebar}/>
                        <Samplecontent/>
                        <div className="line"/>
                        <Samplecontent/>
                        <div className="line"/>
                        <Samplecontent/>
                        <div className="line"/>
                        <Samplecontent/>
                    </div>
                </div>
			</div>
		);
	}
}

export default App;
