import React, { Component } from 'react';
//css
import {form, m, button} from '../css/inputs';

export default class Inputs extends Component {
	render() {
		return (
			<div style={form}>
			    <form action="">
			        <input id="name" type="text" name="name" autoomplete="off" required/>
			        <input style={m} id="m" autocomplete="off" />
				    <button style={button} >Send</button>
				</form>
    		</div>
		);
	}
}
