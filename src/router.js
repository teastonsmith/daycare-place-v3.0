import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Main/Main';
import Login from './Components/Account/Login';
import Calendar from './Components/Calendar/Calendar';
import Blog from './Components/Blog/Blog';
import Contact from './Components/About/Contact';
import About from './Components/About/About';
import Details from './Components/Account/Details';
import Billing from './Components/Billing/Billing';
import Gallery from './Components/Gallery/Gallery';
import Store from './Components/Store/Store';

export default (
	<Switch>
		<Route exact path='/' component={Main} />
		<Route path='/login' component={Login} />
		<Route path='/calendar' component={Calendar} />
		<Route path='/blog' component={Blog} />
		<Route path='/contact' component={Contact} />
		<Route path='/about' component={About} />
		<Route path='/details' component={Details} />
		<Route path='/billing' component={Billing} />
		<Route path='/gallery' component={Gallery} />
		<Route path='/store' component={Store} />
	</Switch>
);
