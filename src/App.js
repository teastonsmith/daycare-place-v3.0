import React from 'react';
import './App.css';
import router from './router';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Main/Footer';

const App = () => {
	return (
		<HashRouter>
			<Navbar />
			{router}
			<Footer />
		</HashRouter>
	);
};

function mapStateToProps(state) {
	return {
		key: state.store,
	};
}

export default connect(mapStateToProps)(App);
