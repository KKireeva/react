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
        messages: {
            1: {author: AUTHORS.BOT, text: 'Hello everybody'},
            2: {author: AUTHORS.ME, text: 'Hello slfdjklj'},
            3: {author: AUTHORS.BOT, text: 'Hello'},
            4: {author: AUTHORS.ME, text: 'Hi!'}
        },
        chats: {
            1: {name: 'Frontend', messageList: [1, 4]},
            2: {name: 'Друзья', messageList: [2]},
            3: {name: 'Департамент производства', messageList: [3, 6]}
        }
    }

    static propTypes = {
        chatId: PropTypes.number,
    }

    static defaultProps = {
        chatId: 1,
    }

    addMessage = (text, author = AUTHORS.ME) => {
        const {messages, chats} = this.state;
        const {chatId} = this.props;

        if (text.length > 0) {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages,
                    [messageId]: {text: text, author: author}},
                chats: {...chats,
                    [chatId]: {...chats[chatId],
                        messageList: [...chats[chatId].messageList, messageId]
                    }
                }
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;

        if (Object.keys(messages).length !== Object.keys(prevState.messages).length) {
            const lastMsg = Object.values(messages)[Object.values(messages).length - 1];

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
                            <MessageField messages={messages} chats={chats} chatId={chatId} />
                            <AddMessage onAdd={this.addMessage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}