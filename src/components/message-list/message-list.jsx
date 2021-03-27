import {Component} from 'react';
import Message from '@components/message';

const messages = [
    {
        name: 'Ivan',
        text: 'Hello everybody',
        id: 'sdf'
    },
    {
        name: 'Petr',
        text: 'Second el',
        id: 'dfgh'
    }
];

class MessageList extends Component{
    state = {
        messages
    }

    addMessage = () => {
        this.setState(prevState => ({
            messages: [...prevState.messages, {
                name: 'Kate',
                text: "I'm fine",
                id: 'lkjhkwh'
            }]
        }));
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