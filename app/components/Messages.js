import React, { Component } from 'react';
//css
import {messageContainer, chatTitle, messages} from '../css/message';

export default class Message extends Component {
    render() {
        return (
            <div class="message-container" style={messageContainer}>
		        <h1 class="chat-room" style={chatTitle}>In chat room: <span id="room">{this.props.room}</span></h1>
		        <ul id="messages" style={messages}></ul>
    		</div>
        );
    }
}
