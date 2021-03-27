import './style.scss';

const Message = (props) => {
    const {author, text} = props;
    const me = author === 'Kate';
    const classNames = me ? 'message_right' : '';

    return (
        <div className={`message ${classNames}`}>
            <div className='message__author'>{ author }</div>
            <div>{ text }</div>
        </div>
    )
}

export default Message;