import {Component} from 'react';
import MessageField from '@components/MessageField';
import AddMessage from '@components/AddMessage';
import {AUTHORS} from '@utils/constants';

import './style.scss';

export default class App extends Component {
    state = {
        messages: [
            {
                author: AUTHORS.BOT,
                text: 'Hello everybody',
                id: `id_1`
            }
        ]
    }

    addMessage = (text, author = AUTHORS.ME) => {
        if (text.length > 0) {
            this.setState(({messages}) => ({
                messages: [...messages, {
                    author: author,
                    text: text,
                    id: `id_${messages.length + 1}`
                }]
            }));
        }
    }

    componentDidUpdate() {
        const {messages} = this.state;
        const lastMsg = messages[messages.length - 1];

        if (lastMsg.author === AUTHORS.ME) {
            this.addMessage(`Bot answered you on ${lastMsg.text}`, AUTHORS.BOT)
        }
    }

    render() {
        const {messages} = this.state;

        return (
            <div className='app'>
                <MessageField messages={messages}/>
                <AddMessage onAdd={this.addMessage} />
            </div>
        )
    }
}