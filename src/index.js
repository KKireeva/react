import ReactDOM from 'react-dom';
import Router from '@components/Router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from '@store';

import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('app'),
);