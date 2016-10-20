import * as t from './ActionTypes'

const initialState = {data: [], roomId: null, isFetching: false};

export default function(prev_state=initialState, action) {
    switch (action.type) {
        case t.LOAD:
            let next_state  = {...prev_state, roomId: action.roomId, isFetching: true};
            if (prev_state.roomId) {
                // loaded a room on previous load
                if (prev_state.roomId === action.roomId) {
                    // The same room as the previous load - Do no re-load.
                    next_state.isFetching = false;
                }
                else {
                    // Loading a different room - clear data. Otherwise
                    // prev state data might show in UI until new data
                    // loads (between LOAD start and LOAD_SUCCESS)
                    next_state.data = [];
                }
            }
            return next_state;
        case t.LOAD_SUCCESS:
            return {...prev_state, data: action.data, isFetching: false};
        case t.LOAD_FAILURE:
            return {...prev_state, error: action.error, isFetching: false};

        case t.PUSH:
            //return {...prev_state, isFetching: true};
            return {...prev_state, isFetching: false};
        case t.PUSH_SUCCESS:
            return {...prev_state, data: action.data, isFetching: false};
        case t.PUSH_FAILURE:
            return {...prev_state, error: action.error, isFetching: false};
        default:
            return prev_state;
    }
}
