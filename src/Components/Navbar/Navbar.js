import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Navbar = ({ username }) => {
	return (
		<div className='Navbar'>
			<nav className='navbar-element'>
				<Button>
					<Link to='/'>Home</Link>
				</Button>
				<Button id='login-button'>
					<Link to='/login'>Login</Link>
				</Button>
				<span>{username && username}</span>
				<Logo className='logo'></Logo>
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

const Button = styled.button`
	background: white;
	border-radius: 2px;
	border: 2px solid blue;
	color: SVGFEGaussianBlurElement;
	height: 2rem;
	width: 5rem;
	margin: 1rem 3rem;
	padding: .5rem;
	border-radius: 10px
`;

const Logo = styled.div`
border: 3px solid blue;
margin: 0 0 7rem 40%;
border-radius: 10px
`
