import {Component} from 'react';
import ChatList from '@components/ChatList';
import MessageField from '@components/MessageField';

import {List} from '@material-ui/core';

import './style.scss';

export default class App extends Component {
    static defaultProps = {
        chatId: '1'
    }

    render() {
        const {chatId} = this.props;

        return (
            <div className='chat'>
                <div className='chat__inner'>
                    <div className='chat__content'>
                        <div className='chat__chats-list'>
                            <List component='nav' aria-label='main mailbox folders'>
                                <ChatList activeId={chatId}/>
                            </List>
                        </div>
                        <MessageField chatId={chatId} />
                    </div>
                </div>
            </div>
        )
    }
}