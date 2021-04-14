import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useState} from 'react';
import {addChat} from "@store/chatList/actions";

import {List, ListItem, ListItemText, Avatar, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './style.scss';

const ChatList = ({activeId}) => {
    const [inputValue, setInputValue] = useState('');
    const chats = useSelector((state) => state.chats);
    const dispatch = useDispatch();

    const onValueChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const value = inputValue.trim();
        if (!value) return;

        dispatch(addChat(value));

        setInputValue('');
    }, [inputValue, dispatch]);

    const ListItems = Object.keys(chats).map(chatId => (
        <Link to={`/chat/${chatId}`} key={chatId} className={
            `chat-list__link ${chats[chatId].isBlink ? 'blink' : ''} ${activeId === chatId ? 'active' : ''}`
        }>
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
            <form onSubmit={onSubmit} className='chat-list__form'>
                <TextField
                    className='chat-list__input'
                    type='text'
                    label='Add new chat...'
                    onChange={onValueChange}
                    value={inputValue}
                />
            </form>
            {ListItems}
        </List>
    );
}

export default ChatList;