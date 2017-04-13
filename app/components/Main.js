import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//components
import Messages from './Messages';
import Users from './Users';
import User from './User';
import Inputs from './Inputs';


export default class Main extends Component {
    render() {
        return (
            <div>
            	<Users/>
            	<User/>
            	{React.cloneElement(this.props.children, this.props)}
            	<Inputs/>
			</div>
        );
    }
}


