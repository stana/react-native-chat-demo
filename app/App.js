import React, { Component } from 'react'
import {
    NavigationExperimental,
    BackAndroid,
    StyleSheet, 
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import chatrooms from './chatrooms'

import chatmessages from './chatmessages'

import styles from './styles'

const {
    CardStack: NavigationCardStack,
    //Card: NavigationCard,
    Header: NavigationHeader
} = NavigationExperimental;

const {
    Title: NavigationHeaderTitle,
    BackButton: NavigationHeaderBackButton
} = NavigationHeader;


export class App extends Component {
    constructor(props) {
        super(props);

        this._renderScene = this._renderScene.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._renderHeaderTitle = this._renderHeaderTitle.bind(this);
        this._renderHeaderLeft = this._renderHeaderLeft.bind(this);
        this._renderHeaderRight = this._renderHeaderRight.bind(this);
    }
 
    render() {
        return (
            // Redux is handling the reduction of our state for us. We grab the navigationState
            // we have in our Redux store and pass it directly to the <NavigationCardStack />.
            <NavigationCardStack
                navigationState={this.props.navigState}
                onNavigateBack={this.props.navigPop}
                style={styles.master}
                direction='horizontal'
                renderHeader={this._renderHeader}
                renderScene={this._renderScene}
            />
        )
    }
 
    _renderScene(props) {
        switch(props.scene.route.key) {
            case 'chat-rooms':
                return <chatrooms.components.ChatRooms />;
            case 'chat-messages':
                return <chatmessages.components.ChatMessages />;
        }
    }
 
    _renderHeader(props) {
        return (
            <NavigationHeader 
                {...props} 
                style={styles.navHeader}
                onNavigateBack={this.props.navigPop}
                renderTitleComponent={this._renderHeaderTitle}
                renderLeftComponent={this._renderHeaderLeft}
                renderRightComponent={this._renderHeaderRight}
            />
        )
    }

    _renderHeaderTitle(props) {
        const { scene } = props;
        const title = String(scene.route.title || '');
        return (
            <NavigationHeaderTitle style={{paddingBottom: 4}} textStyle={styles.navHeaderTitleText}>
                {title}
            </NavigationHeaderTitle>
        );
    }

    _renderHeaderLeft(props) {
        if (props.scene.index === 0) {
            return null;
        }

        //'\u003C' - less than (back)
        return (
            <TouchableOpacity style={styles.leftHeaderLink} onPress={this.props.navigPop}>
                <Text style={styles.leftHeaderLinkText}>{'\u2329'}</Text>
            </TouchableOpacity>
        );
    }

    _renderHeaderRight() {
        return null;
    }
 
}


//
// App Container
//
import { connect } from 'react-redux'

import navig from './navig'

function mapStateToProps(state) {
    return {
        navigState: state[navig.constants.STATE_KEY]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigPop: () => dispatch(navig.actions.pop())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
