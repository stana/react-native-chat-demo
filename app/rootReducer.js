import { combineReducers } from 'redux'

import chatrooms from './chatrooms'
import chatmessages from './chatmessages'
import navig from './navig'

const rootReducer = combineReducers({
    [chatrooms.constants.STATE_KEY]: chatrooms.reducer,
    [chatmessages.constants.STATE_KEY]: chatmessages.reducer,
    [navig.constants.STATE_KEY]: navig.reducer
});

export default rootReducer;
