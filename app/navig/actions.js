import * as t from './ActionTypes'

export function push(route, contentId=null) {
    // navigation push route to stack
    // route looks like {key: ..., title: ...}
    route = typeof route === 'string' ? { key: route, title: route } : route;
    route.contentId = contentId;  // Add content id to route - for example, navigating
                                  // from chat room list to a specific room showing 
                                  // messages. On the messages screen load we will need
                                  // the roomId to know which room to get messages for.
                                  // So passing it as contentId inside navigation route.
    return {type: t.PUSH, route: route}
}

export function pop() {
    return {type: t.POP}
}

export function toKey() {
    return {type: t.TO_KEY}
}

export function toIndex(index) {
    return {type: t.TO_INDEX, index: index}
}

export function reset(routes, index) {
    return {
        type: t.RESET,
        index: index,
        routes: routes
    }
}
