import React from 'react'
import axios from 'axios'

class Login extends React.Component {
	// Data
	state = {
		formFields: {},
		errorMsg: ''
	}
	// Methods
	login = e => {
		e.preventDefault()

		let formFields = this.state.formFields

		axios
			.post(`${process.env.REACT_APP_API}/users/login`, {
				email: formFields.email,
				password: formFields.password
			})
			.then(res => {
				localStorage.setItem('token', res.data)
				this.props.history.push('/')
			})
			.catch(e => {
				this.setState({
					errorMsg: e.response.data.err
				})
			})
	}

	handleChange = e => {
		let fieldName = e.target.id
		let value = e.target.value
		let formFields = this.state.formFields
		formFields[fieldName] = value
		this.setState({ formFields })
	}

	// Render
	render() {
		return (
			<form className="card" onSubmit={this.login}>
				<div className="error">{this.state.errorMsg}</div>
				<input
					id="email"
					type="text"
					placeholder="Email"
					onChange={this.handleChange}
					required
				/>
				<input
					id="password"
					type="password"
					placeholder="Password"
					onChange={this.handleChange}
					required
				/>
				<button type="submit" className="positive">
					Login
				</button>
				<div className="link">
					<a href="/signup">New here? Create an account</a>
				</div>
				<div className="error">{this.state.error}</div>
			</form>
		)
	}
}

export default Login
