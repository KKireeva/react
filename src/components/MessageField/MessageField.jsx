import {Component} from 'react';
import Message from '@components/Message';

import './style.scss';

class MessageField extends Component{
    render() {
        const {messages, chats, chatId} = this.props;

        const Messages = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                text={ messages[messageId]?.text }
                author={ messages[messageId]?.author }
            />
        ));

        return (
            <div className='message__inner'>
                {Messages}
            </div>
        );
    }
}


export default MessageField;