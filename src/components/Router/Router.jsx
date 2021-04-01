import {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import App from '@components/App';

class Router extends Component{
    render() {
        return (
            <Switch>
                <Route exact path='/'>
                    <App />
                </Route>
                <Route exact path='/chat/1/' render={ () =>
                    <App chatId={ 1 } /> } />
                <Route exact path='/chat/2/' render={ () =>
                    <App chatId={ 2 } /> } />
                <Route exact path='/chat/3/' render={ () =>
                    <App chatId={ 3 } /> } />
            </Switch>
        );
    }
}

export default Router;