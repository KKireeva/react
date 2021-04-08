import Message from '@components/Message';
import AddMessage from '@components/AddMessage';

import './style.scss';

const MessageField = ({messages, chats, chatId, addMessage}) => {
    const Messages = [];
    for (let messageId of chats[chatId].messageList) {
        if (messages[messageId]) {
            Messages.push(
                <Message
                    key={messageId}
                    text={messages[messageId].text}
                    author={messages[messageId].author}
                />
            )
        }
    }

    return (
        <div className='chat__box'>
            <div className='message__inner'>
                {Messages}
            </div>
            <AddMessage addMessage={addMessage} chatId={chatId} />
        </div>
    );
}

export default MessageField;