import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import Contact from './components/contact';
import NotFound from './components/notfound';

import { Route, BrowserRouter, Switch} from 'react-router-dom';

import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';

const routing = (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route path="/contact" component={Contact}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
