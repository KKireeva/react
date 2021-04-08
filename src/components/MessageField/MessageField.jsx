import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect} from 'react';

import Message from '@components/Message';
import AddMessageForm from '@components/AddMessageForm';

import {addMessage} from '@store/messages/actions';

import {AUTHORS} from '@utils/constants';

import './style.scss';

const MessageField = ({chatId}) => {
    const messages = useSelector((state) => state.messages);
    const dispatch = useDispatch();
    const messageList = messages[chatId] || [];

    const Messages = messageList.map((el) => <Message
        key={el.id}
        author={el.author}
        text={el.text}
    />);

    /*componentDidUpdate(prevProps, prevState) {
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
    }*/

    const handlerMessage = useCallback((text, author = AUTHORS.ME) => {
        if (text.length > 0) {
            dispatch(addMessage(text, author, chatId));
        }
    }, [dispatch, chatId]);


    useEffect(() => {
        let timer;
        const messageList = messages[chatId] || [];
        const lastMsg = messageList.length && messageList[messageList.length - 1];

        if (lastMsg && lastMsg.author !== AUTHORS.BOT) {
            timer = setTimeout(() => {
                handlerMessage(`Bot answered you on ${lastMsg.text}`, AUTHORS.BOT);
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [messages, chatId, handlerMessage]);

    return (
        <div className='chat__box'>
            <div className='message__inner'>
                {Messages}
            </div>
            <AddMessageForm handlerMessage={handlerMessage} chatId={chatId} />
        </div>
    );
}

export default MessageField;