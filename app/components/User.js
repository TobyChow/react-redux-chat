import React, { Component } from 'react';

var socket = io();

export default class User extends Component {
	componentDidMount(){
		socket.on('connect',() => {
		  console.log('fjaoefjeap');
		})
	}
	
	render() {
		return (
			<div>ok</div>
		);
	}
}
