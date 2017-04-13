import React, { Component } from 'react';
//css
import {userContainer, title, users} from '../css/users';
// users for li

var li = {
	'display':'inline-block',
	'list-style-type':'none',
	width:'100%',
	padding:'10px',
	background:'grey',
}
export default class Users extends Component {
	render() {
		return (
			<div class="users-container" style={userContainer}>
		        <h3 class="user-title" style={title}>Users</h3>
		        <ul id="participants" style={users}>
		        	<li style={li}>bob</li>
		        	<li>tom</li>
		        	<li>jo</li>
		        </ul>
		    </div>	
		);
	}
}
