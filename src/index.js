import ReactDOM from 'react-dom';
import Router from '@components/Router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '@store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
);