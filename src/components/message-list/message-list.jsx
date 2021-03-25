import React, {Component} from 'react';
import Message from '../message';

class MessageList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            messages: this.props.messages
        }
    }

    addMessage = () => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'Kate',
                text: "I'm fine",
                id: 'lkjhkwh'
            }]
        });
    }

    render() {
        const {messages} = this.state;
        const Messages = messages.map((el) =>
            <Message
                key={ el.id }
                name={ el.name }
                text={ el.text }
            />);

        return (
            <div>
                { Messages }
                <button onClick={ this.addMessage }>Добавить</button>
            </div>
        );
    }
}


export default MessageList;