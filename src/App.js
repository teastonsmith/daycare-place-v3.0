import React from 'react';
import './App.css';
import router from './router';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Components/Navbar/Navbar';

const App = () => {
	return (
		<HashRouter>
			<Navbar />
			{router}
		</HashRouter>
	);
};

function mapStateToProps(state) {
	return {
		key: state.store,
	};
}

export default connect(mapStateToProps)(App);
