import {Component} from 'react';
import Header from '@components/Header';
import ChatList from '@components/ChatList';
import MessageField from '@components/MessageField';
import PropTypes from 'prop-types';

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
            {id: 1, name: 'Frontend'},
            {id: 2, name: 'Друзья'},
            {id: 3, name: 'Департамент производства'}
        ]
    }

    static propTypes = {
        chatId: PropTypes.number,
    }

    static defaultProps = {
        chatId: 1,
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
        const {chatId} = this.props;

        return (
            <div className='chat'>
                <Header chatId={ chatId } />
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