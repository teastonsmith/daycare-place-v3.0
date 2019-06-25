import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Carousel from './Carousel';
import Intro from './Intro'
import TestimonialDisplay from './TestimonialDisplay';

const Main = () => {
	return (
		<div>
			<Carousel />
			<div className='main-body'>
				<Intro />
				<Link to='/calendar' className='main-body-content'/>
				<Link to='/blog' className='main-body-content'/>
				<Link to='/contact' className='main-body-content'/>
				<Link to='/about' className='main-body-content'/>
				<TestimonialDisplay />
			</div>
		</div>
	);
};

function mapStateToProps(reduxState) {
	return reduxState;
}

export default connect(mapStateToProps)(Main);
