import {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from '@components/App';
import Header from '@components/Header';
import Profile from '@components/Profile';

class Router extends Component{
    render() {
        return (
            <>
                <Header/>
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
                        render={obj => <App chatId={obj.match.params.chatId} />
                        }
                    />
                    <Redirect to='/' />
                </Switch>
            </>
        );
    }
}

export default Router;