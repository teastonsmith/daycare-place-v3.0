import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ username }) => {
	return (
		<div>
			<nav className='Navbar'>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<span>{username && username}</span>
			</nav>
		</div>
	);
};

const mapStateToProps = reduxState => {
	return {
		username: reduxState.username,
	};
};

export default connect(mapStateToProps)(Navbar);
