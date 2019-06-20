import React, { Component } from 'react';
import axios from 'axios';

import { updateUser, clearUser } from '../../redux/reducers/userReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {
	componentDidMount() {
		axios
			.get('/auth/details')
			.then(res => {
				this.props.updateUser(res.data);
			})
			.catch(err => {
				this.props.history.push('/login');
			});
	}
	handleUserLogout = () => {
		axios.get('/auth/logout').then(res => {
			this.props.clearUser();
			this.props.history.push('/');
		});
	};
	render() {
		return (
			<div>
				<div>
					<Link to='/edit'>Edit</Link>
					<Link to='/calendar'>Calendar</Link>
					<Link to='/billing'>Billing</Link>
					<Link to='/delete'>Delete</Link>
				</div>
				{this.props.firstname && (
					<>
						<p>{this.props.firstname}</p>
						<p>{this.props.balance}</p>
						<button onClick={this.handleUserLogout}>Logout</button>
					</>
				)}
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		firstname: reduxState.firstname,
		balance: reduxState.balance,
	};
}
const mapDispatchToProps = {
	updateUser,
	clearUser,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Details);
