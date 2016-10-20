import React, { Component } from 'react'
import {
    View,
    Text,
    ListView,
    ActivityIndicator,
    StyleSheet,
    BackAndroid
} from 'react-native'

import { GiftedChat } from 'react-native-gifted-chat';

export class ChatMessages extends Component {
    constructor(props) {
        super(props);

        this._onSend = this._onSend.bind(this);
    }

    componentWillMount() {
        this.props.fetchMessages(this.props.roomId);
    }

    componentDidMount () {
        BackAndroid.addEventListener('hardwareBackPress', this.props.navigBack)
    }
 
    componentWillUnmount () {
        BackAndroid.removeEventListener('hardwareBackPress', this.props.navigBack)
    }

    _onSend(newMessages=[]) {
        // one new message to be pushed
        this.props.pushMessages(this.props.roomId, newMessages);
    }

    render() {
        if (this.props.messages.isFetching) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator
                        animating={true}
                        size="large"
                    />
                </View>
            )
        }
        let messagesData = (this.props.messages && this.props.messages.data) || [];
        return (
            <GiftedChat 
                messages={messagesData}
                onSend={this._onSend}
                user={{_id: 1}}
            />            
        )
    } 
}


//
// ChatMessages Container
//
import { connect } from 'react-redux'
import { pushMessages, fetchMessages } from '../actions'
import navig from '../../navig'
import { STATE_KEY as MESSAGES_STATE_KEY } from '../constants'

const { STATE_KEY: NAVIG_STATE_KEY } = navig.constants;

function mapStateToProps(state, ownProps) {
    let navig_route_index = state[NAVIG_STATE_KEY].index;
    return {
        messages: state[MESSAGES_STATE_KEY],
        roomId: state[NAVIG_STATE_KEY].routes[navig_route_index].contentId
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        pushMessages: (roomId, messages) => dispatch(pushMessages(roomId, messages)),
        fetchMessages: (roomId) => dispatch(fetchMessages(roomId)),
        navigBack: () => dispatch(navig.actions.pop())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatMessages)
