import React from 'react'

class Login extends React.Component {
	// Data
	state = {}
	// Methods
	login = () => {}
	// Render
	render() {
		return (
			<form className="card" onSubmit={this.login}>
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Password" />
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
