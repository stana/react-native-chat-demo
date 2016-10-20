import * as t from './ActionTypes'

import {
    NavigationExperimental
} from 'react-native'

const {
    StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
    index: 0,
    routes: [
        {key: 'chat-rooms', title: 'Chat Demo'}
    ],
    key: 'app-home'
};

export default function(prev_state=initialState, action) {
    switch (action.type) {
        case t.PUSH:
            if (prev_state.routes[prev_state.index].key === (action.route && action.route.key)) return prev_state;
            return NavigationStateUtils.push(prev_state, action.route);

        case t.POP:
            if (prev_state.index === 0 || prev_state.routes.length === 1) return prev_state;
            return NavigationStateUtils.pop(prev_state);

        case t.TO_KEY:
            return NavigationStateUtils.jumpTo(prev_state, action.key);

        case t.TO_INDEX:
            return NavigationStateUtils.jumpToIndex(prev_state, action.index);

        case t.RESET:
            return {
                ...prev_state,
                index: action.index,
                routes: action.routes
            };

        default:
            return prev_state
    }
}
