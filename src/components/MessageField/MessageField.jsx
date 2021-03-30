import {Component} from 'react';
import Message from '@components/Message';

import './style.scss';

class MessageField extends Component{
    render() {
        const {messages} = this.props;
        const Messages = messages.map((el) =>
            <Message
                key={ el.id }
                author={ el.author }
                text={ el.text }
            />);

        return (
            <div className='message__inner'>
                { Messages }
            </div>
        );
    }
}


export default MessageField;