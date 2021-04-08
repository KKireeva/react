import {createStore, combineReducers} from "redux";

import {chatListReducer} from "./chatList/reducer";
import {messagesReducer} from "./messages/reducer";
import {profileReducer} from "./profile/reducer";

const store = createStore(
    combineReducers({
        chats: chatListReducer,
        messages: messagesReducer,
        profile: profileReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;