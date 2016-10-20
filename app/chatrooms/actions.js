import * as t from './ActionTypes'

import chatApi from '../api/mockChatApi'


export function fetchChatRooms() {
    return function(dispatch) {
        dispatch(requestRooms());
        return chatApi.getAllChatRooms().then(rooms => {
            dispatch(receiveRooms(rooms))
        }).catch(error => {
            dispatch(requestRoomsFailure(error))
        })
    }
}

export function requestRooms() {
    return {type: t.LOAD}
}

export function receiveRooms(rooms) {
    return {type: t.LOAD_SUCCESS, data: rooms}
}

export function requestRoomsFailure(error) {
    return {type: t.LOAD_FAILURE, error: error}
}
