import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
	// Data
	state = {
		formFields: {},
		errorMsg: ''
	}

	// Methods
	handleChange = e => {
		let fieldName = e.target.id
		let value = e.target.value
		let formFields = this.state.formFields
		formFields[fieldName] = value
		this.setState({ formFields })
	}

	signup = e => {
		e.preventDefault()
		let formFields = this.state.formFields

		axios
			.post(`${process.env.REACT_APP_API}/users/signup`, {
				name: formFields.name,
				email: formFields.email,
				password: formFields.password
			})
			.then(res => {
				if (res.status === 200) {
					// Correct
					localStorage.setItem('token', res.data)
					this.props.history.push('/')
				}
			})
			.catch(e => {
				console.log(e)
				if (e.response.status === 409) {
					this.setState({
						errorMsg: 'Email already in use'
					})
				}
			})
	}
	// Render
	render() {
		return (
			<>
				<form className="card" onSubmit={this.signup}>
					<div className="error">{this.state.errorMsg}</div>
					<input
						type="text"
						id="name"
						placeholder="Full Name"
						onChange={this.handleChange}
						required
					/>
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
						Signup
					</button>
					<div className="link">
						<a href="/login">Already have an account? Login</a>
					</div>
					<div className="error">{this.state.error}</div>
				</form>
			</>
		)
	}
}

export default Signup
