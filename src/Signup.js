import React from 'react'

class Signup extends React.Component {
	// Data
	state = {}
	// Methods
	signup = () => {}
	// Render
	render() {
		return (
			<form className="card" onSubmit={this.signup}>
				<input type="text" placeholder="Full Name" />
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit" className="positive">
					Signup
				</button>
				<div className="link">
					<a href="/login">Already have an account? Login</a>
				</div>
				<div className="error">{this.state.error}</div>
			</form>
		)
	}
}

export default Signup
