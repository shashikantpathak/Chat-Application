import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class MessageList extends Component {
    
    componentWillUpdate() {
//         check the messgae ordered and justify its position
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }
//     update the positing of new messages 
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
    }
    
    render() {
        if (!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
//                         pass the value to message component
                        <Message key={message.id} username={message.senderId} text={message.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList
