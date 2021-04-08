import {Link} from 'react-router-dom';
import {Avatar} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import './style.scss';

const Header = () => {
    return (
        <div className='chat__header'>
            <div className='chat__inner chat__header__inner'>
                <Link to='/' className='chat__header__link'>
                    Чат
                </Link>
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