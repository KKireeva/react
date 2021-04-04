import {Component} from 'react';
import {List, ListItem, ListItemText, Avatar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

class ChatList extends Component{

    render() {
        const {chats} = this.props;
        const ListItems = Object.entries(chats).map(([key, value]) =>
            <Link to={`/chat/${key}`} key={key} style={{color: '#000', textDecoration: 'none', display: 'flex'}}>
                <ListItem button>
                    <Avatar style={{marginRight: '10px', backgroundColor: '#3f51b5'}}>{value.name[0]}</Avatar>
                    <ListItemText primary={<Typography style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{value.name}</Typography>}/>
                </ListItem>
            </Link>
        );

        return (
            <List>
                {ListItems}
            </List>
        );
    }
}

export default ChatList;