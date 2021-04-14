import {ADD_CHAT} from "./types";
//import {ADD_MSG_TO_CHAT} from "./types";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

/*export const addChatListMessage = (chatId, messageId) => ({
    type: ADD_MSG_TO_CHAT,
    chatId,
    messageId
});*/