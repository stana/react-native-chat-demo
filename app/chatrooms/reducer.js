import * as t from './ActionTypes'

const initialState = {data: [], isFetching: false};

// ChatRooms state reducer
export default function(prev_state=initialState, action) {
    switch (action.type) {
        case t.LOAD:
            return {...prev_state, isFetching: true};
        case t.LOAD_SUCCESS:
            return {...prev_state, isFetching: false, data: action.data};
        case t.LOAD_FAILURE:
            return {...prev_state, isFetching: false, error: action.error};
        default:
            return prev_state
    }
}
