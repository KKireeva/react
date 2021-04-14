import {ADD_MESSAGE} from "./types";
import {AUTHORS} from '@utils/constants';
import {addBlink} from "@store/chatList/actions";

export const addMessage = (text, author, chatId) =>
    (dispatch, getStore) => {
        dispatch({type: ADD_MESSAGE, text, author, chatId});

        if (author === AUTHORS.ME) {
            const messageList = getStore().messages[chatId] || [];
            const lastMsg = messageList.length && messageList[messageList.length - 1];

            if (lastMsg && lastMsg.author !== AUTHORS.BOT) {
                setTimeout(() => {
                    dispatch({
                        type: ADD_MESSAGE,
                        text: `Bot answered you on ${lastMsg.text}`,
                        author: AUTHORS.BOT,
                        chatId
                    });
                    dispatch(addBlink(chatId, true));
                }, 1000);
            }
        }
    }
