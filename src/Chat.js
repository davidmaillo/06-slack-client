import React, { Component } from 'react'
import './styles/Chat.css'
import Sidebar from './Sidebar'
import Messages from './Messages'

class Chat extends Component {
	state = {
		currentChannel: ''
	}

	setChannel = id => {
		this.setState({ currentChannel: id })
	}

	// Render
	render() {
		return (
			<div id="wrap">
				<Sidebar setChannel={this.setChannel} />
				<Messages currentChannel={this.state.currentChannel} />
			</div>
		)
	}
}

export default Chat
