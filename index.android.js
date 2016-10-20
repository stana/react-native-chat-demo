import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import app from './app'

const store = app.configureStore();
store.dispatch(app.actions.fetchChatRooms());

const App = () => (
    <Provider store={store}>
        <app.App />
    </Provider>
);

AppRegistry.registerComponent('RNChatDemo', () => App);
