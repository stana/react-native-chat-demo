import delay from './mockDelay';

const chatRooms = [
    {
        id: 'chat-room-1',
        title: 'Family',
        messages: [
            {
                _id: 2,
                text: 'Not much...',
                createdAt: new Date(Date.UTC(2016, 10, 1, 17, 21, 0)),
                user: {
                    _id: 2,
                    name: 'Joe Blogs',
                    avatar: ''
                }
            },
            {
                _id: 1,
                text: 'What\'s buzzin cousin?',
                createdAt: new Date(Date.UTC(2016, 10, 1, 17, 20, 0)),
                user: {
                    _id: 1,
                    name: 'Mini Me',
                    avatar: ''
                }
            }
        ]
    },
    {
        id: 'chat-room-2',
        title: 'Friends',
        messages: [
            {
                _id: 3,
                text: 'Let\'s get pizza.',
                createdAt: new Date(Date.UTC(2016, 10, 1, 19, 21, 0)),
                user: {
                    _id: 3,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png'
                }
            },
            {
                _id: 2,
                text: 'Starving here...',
                createdAt: new Date(Date.UTC(2016, 10, 1, 19, 21, 0)),
                user: {
                    _id: 1,
                    name: 'Mini Me',
                    avatar: ''
                }
            },
            {
                _id: 1,
                text: 'What\'s cookin good lookin?',
                createdAt: new Date(Date.UTC(2016, 10, 1, 19, 20, 0)),
                user: {
                    _id: 1,
                    name: 'Mini Me',
                    avatar: ''
                }
            }
        ]
    }
];


class ChatApi {
    static getAllChatRooms() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let roomIdTitle = chatRooms.map((c) => {return {id: c.id, title: c.title}});
                resolve({...roomIdTitle});
            }, delay);
        });
    }
 
    static getMessages(roomId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const idx = chatRooms.findIndex(c => c.id == roomId);
                resolve([...chatRooms[idx].messages]);
            }, delay);
        });
    }
 
    static pushMessages(roomId, newMessages) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // copy chat room adding new msg to messages arr 
                const idx = chatRooms.findIndex(c => c.id == roomId);
                let messagesCopy = [...chatRooms[idx].messages];
                let roomCopy = {...chatRooms[idx]};
                roomCopy.messages = messagesCopy;
                // add new msg to start of roomCopy messages
                for (let i=0; i<newMessages.length; i++) {
                    roomCopy.messages.unshift(newMessages[i]);
                }
                // add messages to the beginning of array
                //roomCopy.messages.unshift(newMessages);
                chatRooms[idx] = roomCopy;
                resolve(chatRooms[idx].messages);
            //}, delay);
            }, 0);
        });
    }
}

export default ChatApi;
