# react-native-chat-demo
React Native demo used while learning Redux, NavigationExperimental. Uses GiftedChat lib.

Also an attempt at app structuring by app feature/content type (chatroot, chatmessage) rather 
than the usual structure by react component type (action, components, containers, reducers 
directories). 

This way all of the feature functionality (actions, components, containers, reducers) contained
as a single module. index.js at the root of the module (eg. chatroom/index.js) then
acts as an API interface exposing public parts of the feature to the rest of the app.

For more detailed discussion structuring react apps this way see -

    http://jaysoo.ca/2016/02/28/organizing-redux-application/

    http://marmelab.com/blog/2015/12/17/react-directory-structure.html

api calls are mocked in api/mockChatApi.js with some mock delay to exercise handling data fetching
delay state.
