import React, { Component } from 'react';
import axios from 'axios';

import { updateUser, clearUser } from '../../redux/reducers/userReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {
	componentDidMount() {
		// axios
		// 	.get('/auth/details')
		// 	.then(res => {
		// 		// this.props.updateUser(res.data);
		// 		console.log('Doing good')
		// 	})
		// 	.catch(err => {
		// 		this.props.history.push('/login');
		// 	});
	}
	handleUserLogout = () => {
		axios.get('/auth/logout').then(res => {
			this.props.clearUser();
			this.props.history.push('/');
		});
	};

	handleDeleteUser = () => {
		axios.delete('/auth/user')
		.then(res => {
			this.props.clearUser()
		})
	}
	
	render() {
		return (
			<div>
				<div>
					<Link to='/edit'>Edit</Link>
					<Link to='/calendar'>Calendar</Link>
					<Link to='/billing'>Billing</Link>
				</div>
				{this.props.first_name && (
					<>
						<p>{this.props.first_name}</p>
						<p>{this.props.balance}</p>
						<button onClick={this.handleUserLogout}>Logout</button>
						<button onClick={this.handleDeleteUser} >Delete User</button>
					</>
				)}
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return reduxState
}
const mapDispatchToProps = {
	updateUser,
	clearUser,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Details);
