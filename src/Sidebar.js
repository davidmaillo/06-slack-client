import React, { Component } from 'react'
import axios from 'axios'
import './styles/Sidebar.css'

class Sidebar extends Component {
	// Data
	state = {
		workspace: 'Tortuga Coders',
		channels: []
	}

	// Lifecycle
	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API}/channels`).then(res => {
			let channels = res.data

			// Make first channel active
			channels[0].active = true
			this.props.setChannel(channels[0]._id)

			this.setState({ channels })
		})
	}
	// Methods
	selectChannel = id => {
		let channels = this.state.channels
		channels.forEach((e, i) => {
			channels[i].active = false
			if (e._id == id) channels[i].active = true
		})
		this.setState({ channels })
		this.props.setChannel(id)
	}

	logout = () => {
		localStorage.removeItem('token')
		window.location.href = '/login'
		// Redirect to /
	}

	// Render
	render() {
		return (
			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<ul className="list-unstyled">
					{this.state.channels.map(channel => {
						return (
							<li
								key={channel._id}
								className={channel.active ? 'active' : ''}
								onClick={e => this.selectChannel(channel._id)}
							>
								# {channel.name}
							</li>
						)
					})}
				</ul>
				<button onClick={this.logout}>Logout</button>
			</div>
		)
	}
}

export default Sidebar
