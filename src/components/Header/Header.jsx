import {Link} from 'react-router-dom';
import {Avatar} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const Header = ({chatId}) => {
    return (
        <div className='chat__header'>
            <div className='chat__inner chat__header__inner'>
                Чат {chatId}
                <Link to='/profile/'>
                    <Avatar style={{marginRight: '10px', backgroundColor: '#333'}}>
                        <PersonIcon />
                    </Avatar>
                </Link>
            </div>
        </div>
    )
}

export default Header;