import React, { Component } from 'react'
import axios from 'axios'
import './styles/Sidebar.css'

class Sidebar extends Component {
	// Data
	state = {
		workspace: 'Tortuga Coders',
		channels: []
	}

	// 	{
	// 	_id: '1',
	// 	name: 'general',
	// 	active: true
	// },
	// {
	// 	_id: '2',
	// 	name: 'announcements'
	// },
	// {
	// 	_id: '3',
	// 	name: 'fun'
	// },
	// {
	// 	_id: '4',
	// 	name: 'random'
	// },
	// {
	// 	_id: '5',
	// 	name: 'coding'
	// }

	// Lifecycle
	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API}/channels`).then(res => {
			this.setState({
				channels: res.data
			})
		})
	}
	// Methods
	logout = () => {}
	selectChannel = () => {}
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
								onClick={() => this.selectChannel(channel._id)}
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
