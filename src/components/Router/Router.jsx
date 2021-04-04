import {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from '@components/App';
import Profile from '@components/Profile';

class Router extends Component{
    render() {
        return (
            <Switch>
                <Route exact path='/'>
                    <App />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route
                    exact
                    path='/chat/:chatId/'
                    render={ obj => <App
                        chatId={ Number(obj.match.params.chatId) }
                    />
                    }
                />
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default Router;