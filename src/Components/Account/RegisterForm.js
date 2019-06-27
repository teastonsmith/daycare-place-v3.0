import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/reducers/userReducer'

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			first_name: '',
			last_name: '',
			email: '',
		};
	}
	handleUserRegister = e => {
		e.preventDefault();
		const { first_name, last_name, email, username, password } = this.state;
		axios.post('/auth/register', {
				first_name,
				last_name,
				email,
				username,
				password,
			})
			.then(res => {
				this.props.updateUser(res.data)
				this.handleResetState()
				this.props.history.push('/details');
			})
			.catch(err => {
				console.log(err);
			});

	};
	handleRegisterInfoUpdate = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleResetState= ()=>{
this.setState({
	username: '',
	password: '',
	first_name: '',
	last_name: '',
	email: ''
})
	}
	render() {
		return (
			<div className='RegisterForm'>
				<form onSubmit={this.handleUserRegister}>
					<input
						type='text'
						placeholder='first name'
						name='first_name'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='text'
						placeholder='last name'
						name='last_name'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='email'
						placeholder='email'
						name='email'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='text'
						placeholder='username'
						name='username'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='password'
						placeholder='password'
						name='password'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<button>Register</button>
				</form>
			</div>
		);
	}
}

export default withRouter(connect(null, {updateUser})(RegisterForm));
