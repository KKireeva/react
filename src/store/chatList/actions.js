import {ADD_CHAT} from "./types";
import {ADD_BLINK} from "./types";
//import {ADD_MSG_TO_CHAT} from "./types";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

export const addBlink = (id, blink) =>
    (dispatch) => {
        dispatch({
            type: ADD_BLINK,
            id,
            blink,
        });

        if (addBlink) {
            setTimeout(() => {
                dispatch({
                    type: ADD_BLINK,
                    id,
                    blink: false
                });
            }, 600);
        }
    }

/*export const addChatListMessage = (chatId, messageId) => ({
    type: ADD_MSG_TO_CHAT,
    chatId,
    messageId
});*/