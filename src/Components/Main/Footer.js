import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className='Footer'>
			<Link to='/'>Home</Link>
			<Link to='/login'>Login</Link>
			<Link to='/calendar'>Calendar</Link>
			<Link to='/blog'>Blog</Link>
			<Link to='/contact'>About</Link>
		</div>
	);
}
