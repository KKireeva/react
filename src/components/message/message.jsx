import React from 'react';

const Message = (props) => {
    const {name, text} = props;
    return (
        <div>
            <p>{ name } - { text }</p>
        </div>
    )
}

export default Message;