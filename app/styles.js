import {
    StyleSheet,
    Platform,
    NavigationExperimental,
} from 'react-native';

const { hairlineWidth } = StyleSheet;

const {
    Header: NavigationHeader,
} = NavigationExperimental;

export const NAVIGATION_HEADER_HEIGHT = NavigationHeader.HEIGHT;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export default StyleSheet.create({
    master: {
        flex: 1,
        //backgroundColor: 'black',
        backgroundColor: 'whitesmoke'
    },
    leftHeaderLink: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftHeaderLinkText: {
        margin: 10,
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold'
    },
    navHeader: {
        //backgroundColor: '#FC4C02',
        backgroundColor: 'coral',
        justifyContent: 'center',
        //borderBottomWidth: 4,
        //borderBottomColor: 'whitesmoke'
        
    },
    navHeaderTitle: {
        
    },
    navHeaderTitleText: {
        color: '#FFFFFF',
    }
});