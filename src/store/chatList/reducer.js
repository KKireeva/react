import {ADD_CHAT} from "./types";
//import {ADD_MSG_TO_CHAT} from "./types";

const initialState = {};

export const chatListReducer = (state = initialState, action) => {
    switch (action.type) {
            case ADD_CHAT: {
                const chatId = Object.keys(state).length + 1;
                return {
                    ...state,
                    [chatId]: {name: action.name, messageList: []}
                };
            }

            /*case ADD_MSG_TO_CHAT: {
                return {
                    ...state,
                    [action.chatId]: {...state[action.chatId],
                        messageList: [...state[action.chatId].messageList, action.messageId]}
                }
            }*/

            default:
                return state;
    }
};