import {Component} from 'react';
import {List, ListItem, ListItemText, Avatar, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './style.scss';

export default class ChatList extends Component{
    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChat(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        const {chats} = this.props;
        const ListItems = Object.keys(chats).map(chatId => (
            <Link to={`/chat/${chatId}`} key={chatId} className='chat-list__link'>
                <ListItem button>
                    <Avatar className='chat-list__avatar'>
                        {chats[chatId].name[0]}
                    </Avatar>
                    <ListItemText primary={<Typography className='chat-list__text'>{chats[chatId].name}</Typography>}/>
                </ListItem>
            </Link>
        ));

        return (
            <List>
                <form onSubmit={this.onSubmit} className='chat-list__form'>
                    <TextField
                        className='chat-list__input'
                        type='text'
                        label='Add new chat...'
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                </form>
                {ListItems}
            </List>
        );
    }
}