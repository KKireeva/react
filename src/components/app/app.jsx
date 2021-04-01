import {Component} from 'react';
import Header from '@components/Header';
import ChatList from '@components/ChatList';
import MessageField from '@components/MessageField';
import AddMessage from '@components/AddMessage';
import {AUTHORS} from '@utils/constants';
import {List} from '@material-ui/core';

import './style.scss';

export default class App extends Component {
    state = {
        messages: [
            {
                author: AUTHORS.BOT,
                text: 'Hello everybody',
                id: `id_1`
            }
        ],
        chats: [
            {
                id: 1738192, name: 'Frontend'
            },
            {
                id: 4564665, name: 'Друзья'
            },
            {
                id: 4564564, name: 'Департамент производства'
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

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;

        if (messages.length !== prevState.messages.length) {
            const lastMsg = messages[messages.length - 1];

            if (lastMsg.author === AUTHORS.ME) {
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.addMessage(`Bot answered you on ${lastMsg.text}`, AUTHORS.BOT)
                }, 1000);
            }
        }
    }

    render() {
        const {messages, chats} = this.state;

        return (
            <div className='chat'>
                <Header text='Telegram Header'/>
                <div className='chat__inner'>
                    <div className='chat__content'>
                        <div className='chat__chats-list'>
                            <List component='nav' aria-label='main mailbox folders'>
                                <ChatList chats={chats}/>
                            </List>
                        </div>
                        <div className='chat__box'>
                            <MessageField messages={messages}/>
                            <AddMessage onAdd={this.addMessage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}