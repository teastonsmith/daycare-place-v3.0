import React, { Component } from 'react';
import axios from 'axios';

import {
	updateUser,
	clearUser,
	updateFirstName,
} from '../../redux/reducers/userReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			edit: false,
		};
	}

	componentDidMount() {
		this.setState({
			first_name: this.props.first_name
		})
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
		axios.delete('/auth/user').then(res => {
			this.props.clearUser();
		});
	};
	handleToggleEdit = () => {
		let newEdit = !this.state.edit
		this.setState({
			edit: newEdit
		})
	}
	handleChangeFirstName = (name) => {
		this.setState({
			first_name: name
		})
	}
	handleUpdateFirstName = () => {
		this.props.updateFirstName(this.state.first_name)
		axios.put('/auth/user', {first_name:this.state.first_name}).then(res => {
			this.props.updateUser(res.data)
			this.handleToggleEdit()
		})
	};

	render() {
		console.log(this.props.first_name)
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
						<button onClick={this.handleDeleteUser}>Delete User</button>
						{this.state.edit ? (
							<form onSubmit={e => e.preventDefault()}>
								<input
									value={this.state.first_name}
									onChange={e => this.handleChangeFirstName(e.target.value)}
								/>
								<button onClick={this.handleUpdateFirstName}>Save Changes</button>
							</form>
						) : 
							<button onClick={this.handleToggleEdit} >
								Update First Name
							</button>
						}
					</>
				)}
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return reduxState;
}
const mapDispatchToProps = {
	updateUser,
	clearUser,
	updateFirstName
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Details);
