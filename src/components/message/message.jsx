import './style.scss';
import {AUTHORS} from '@utils/constants';

const Message = (props) => {
    const {author, text} = props;
    const me = author === AUTHORS.ME;
    const classNames = me ? 'message_right' : '';

    return (
        <div className={`message ${classNames}`}>
            <div>{ text }</div>
            <div className='message__author'>{ author }</div>
        </div>
    )
}

export default Message;