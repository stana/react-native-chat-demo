import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableHighlight,
    ListView
} from 'react-native'

import common from '../../common'


export class ChatRooms extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            chatRoomsDataSrc: ds.cloneWithRows(props.chatRooms.data)
        };

        this._getChatRoomsDataSrc = this._getChatRoomsDataSrc.bind(this);
        this._renderButtonLink = this._renderButtonLink.bind(this);
    }

    _getChatRoomsDataSrc(data=[]) {
        return this.state.chatRoomsDataSrc.cloneWithRows(data)
    }
 
    render() {
        if (this.props.chatRooms.isFetching) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator
                        animating={true}
                        size="large"
                    />
                </View>
            )
        }
        return (
            <ListView
                dataSource={this._getChatRoomsDataSrc(this.props.chatRooms.data)}
                renderRow={this._renderButtonLink}
                enableEmptySections={true}
            />
        )
    }

    _renderButtonLink(chatRoom) {
        return (
            <View style={{paddingTop: 10}}>
                <common.components.Button label={chatRoom.title} onPress={() => this.props.navigToRoom(chatRoom.id, chatRoom.title)} />
            </View>
        );
    }
}


//
// ChatRooms Container
//
import { connect } from 'react-redux'
import navig from '../../navig'
import { STATE_KEY as CHAT_ROOMS_STATE_KEY } from '../constants'

function mapStateToProps(state) {
    return {
        chatRooms: state[CHAT_ROOMS_STATE_KEY]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigToRoom: (roomId, roomTitle) => dispatch(navig.actions.push({key: 'chat-messages', title: roomTitle}, roomId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatRooms)
