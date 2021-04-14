import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';

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

    const handlerMessage = useCallback((text, author = AUTHORS.ME) => {
        if (text.length > 0) {
            dispatch(addMessage(text, author, chatId));
        }
    }, [dispatch, chatId]);

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