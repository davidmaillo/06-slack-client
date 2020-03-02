import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Chat from './Chat'
import Login from './Login'
import Signup from './Signup'
import './styles/App.css'

class App extends Component {
	// Methods
	// Render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/signup" component={Signup}></Route>
					<Route path="/" component={Chat}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
