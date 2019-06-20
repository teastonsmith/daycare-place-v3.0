import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Details from './Components/Account/Details';
import Billing from './Components/Billing/Billing';
import Blog from './Components/Blog/Blog';
import Calendar from './Components/Calendar/Calendar';
import Gallery from './Components/Gallery/Gallery';
import Main from './Components/Main/Main';
import Store from './Components/Store/Store';

export default (
	<Switch>
		<Route path='/details' component={Details} />
		<Route path='/billing' component={Billing} />
		<Route path='/blog' component={Blog} />
		<Route path='/calendar' component={Calendar} />
		<Route path='/gallery' component={Gallery} />
		<Route exact path='/' component={Main} />
		<Route path='/store' component={Store} />
	</Switch>
);
