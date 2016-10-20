import * as t from './ActionTypes'

import chatApi from '../api/mockChatApi'


export function fetchMessages(roomId) {
    return function(dispatch) {
        dispatch(requestMessages(roomId));
        return chatApi.getMessages(roomId).then(messages => {
            dispatch(receiveMessages(messages))
        }).catch(error => {
            dispatch(requestMessagesFailure(error))
        })
    }
}

export function requestMessages(roomId) {
    return {type: t.LOAD, roomId: roomId}
}

export function receiveMessages(messages) {
    return {type: t.LOAD_SUCCESS, data: messages}
}

export function requestMessagesFailure(error) {
    return {type: t.LOAD_FAILURE, error: error}
}

export function pushMessages(roomId, newMessages) {
    console.log('actions.js - createMessage - roomId - ' + roomId);
    console.log('actions.js - createMessage - msgs, %o', newMessages);
    return function (dispatch) {
        dispatch(requestPushMessages());
        return chatApi.pushMessages(roomId, newMessages).then((messagesAfterPush) => {
            dispatch(messagesPushed(messagesAfterPush))
        }).catch(error => {
            dispatch(pushMessagesFailure(error))
        })
    }
}

export function requestPushMessages() {
    return {type: t.PUSH}
}

export function messagesPushed(messages) {
    return {type: t.PUSH_SUCCESS, data: messages}
}

export function pushMessagesFailure(error) {
    return {type: t.PUSH_FAILURE, error: error}
}
