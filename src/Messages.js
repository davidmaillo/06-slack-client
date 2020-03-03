import React, { Component } from 'react'
import './styles/Messages.css'
import './styles/NewMessage.css'
import axios from 'axios'
import moment from 'moment'

class Content extends Component {
	// Data
	state = {
		newMessage: {
			text: '',
			file: null
		},
		messages: []
	}

	// Methods
	changeText = e => {
		let newMessage = this.state.newMessage
		newMessage.text = e.target.value
		this.setState({ newMessage })
	}
	createMessage = e => {
		e.preventDefault()
	}
	// Render
	render() {
		if (this.props.currentChannel) {
			axios
				.get(
					`${process.env.REACT_APP_API}/messages?channel=${this.props.currentChannel}`,
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('token')}`
						}
					}
				)
				.then(res => {
					this.setState({ messages: res.data })
				})
		}

		return (
			<div id="messages">
				<div id="content">
					{this.state.messages.map(message => {
						let formattedDate = moment(message.date).format(
							'DD-MM-YYYY - hh:mm:ss'
						)
						return (
							<div className="message" key={message._id}>
								<span className="user">{message.user.name}</span>
								<span className="date">{formattedDate}</span>
								<div className="body">{message.text}</div>
								-> Insert Image
							</div>
						)
					})}
				</div>
				<div id="new-message">
					<form
						onSubmit={e => {
							this.createMessage(e)
						}}
					>
						<input type="file" name="file" onChange={this.addFile} />
						<input
							type="text"
							placeholder="New Message..."
							value={this.state.newMessage.text}
							onChange={e => this.changeText(e)}
						/>
						<button type="submit" className="positive">
							Send
						</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Content
