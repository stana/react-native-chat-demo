import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './rootReducer'

const middleware = [ thunk ];
if (__DEV__) {
    // only use redux-logger in dev 
    // too memory intensive and GC issues for prod
    //middleware.push(createLogger());
}

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = ('./rootReducer').default;
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
