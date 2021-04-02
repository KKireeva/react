import {Component} from 'react';
import {ListItem, ListItemText, Avatar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

class ChatList extends Component{

    render() {
        const {chats} = this.props;
        const ListItems = chats.map((el) =>
            <Link to={`/chat/${el.id}`} key={el.id} style={{color: '#000', textDecoration: 'none', display: 'flex'}}>
                <ListItem button>
                    <Avatar style={{marginRight: '10px', backgroundColor: '#3f51b5'}}>{el.name[0]}</Avatar>
                    <ListItemText primary={<Typography style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{el.name}</Typography>}/>
                </ListItem>
            </Link>
        );

        return (
            <div>
                {ListItems}
            </div>
        );
    }
}

export default ChatList;