import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Carousel from './Carousel';
import TestimonialDisplay from './TestimonialDisplay';

const Main = () => {
	return (
		<div>
			<Carousel />
			<div className='main-body'>
				<div className='main-body-content'>Intro</div>
				<Link to='/calendar' className='main-body-content'>
					Calendar
				</Link>
				<Link to='/blog' className='main-body-content'>
					Blog
				</Link>
				<Link to='/contact' className='main-body-content'>
					Contact
				</Link>
				<Link to='/about' className='main-body-content'>
					About
				</Link>
				<div className='main-body-content'>
					<TestimonialDisplay />
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(reduxState) {
	return reduxState;
}

export default connect(mapStateToProps)(Main);
