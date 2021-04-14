import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import {chatListReducer} from "./chatList/reducer";
import {messagesReducer} from "./messages/reducer";
import {profileReducer} from "./profile/reducer";

const persistConfig = {
    key: 'react-messager',
    storage,
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

const rootReducer = combineReducers({
    chats: chatListReducer,
    messages: messagesReducer,
    profile: profileReducer,
});

const persRed = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persRed,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const persistor = persistStore(store);

export {store, persistor};