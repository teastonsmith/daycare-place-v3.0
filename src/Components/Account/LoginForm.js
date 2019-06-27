import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/reducers/userReducer'
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}
	handleLoginInfoUpdate = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleUserLogin = e => {
		e.preventDefault();
		const { username, password } = this.state;
		axios
			.post('/auth/login', { username, password })
			.then(res => {
				this.props.updateUser(res.data)
				this.handleResetState()
				this.props.history.push('/details');
			})
			.catch(err => {
				console.log(err);
			});
	};
	handleResetState = () => {
		this.setState({
			username: '',
			password: ''
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleUserLogin}>
					<input
						type='text'
						name='username'
						placeholder='username'
						onChange={this.handleLoginInfoUpdate}
					/>
					<input
						type='password'
						name='password'
						placeholder='password'
						onChange={this.handleLoginInfoUpdate}
					/>
					<button>Log In</button>
				</form>
			</div>
		);
	}
}

export default withRouter(connect(null, {updateUser})(LoginForm));
