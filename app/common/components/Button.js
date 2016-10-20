import React from 'react'
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native'

export default ({label, onPress}) => (
    <TouchableHighlight
        underlayColor='lightgrey'
        onPress={onPress}> 
       <View style={styles.button}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.rightArrow}>{'\u232A'}</Text>
       </View>     
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: 'lightslategrey',
        justifyContent: 'center',
        //alignItems: 'center',
        //paddingRight: 15,
        flex: 1,
        flexDirection: 'row'
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        flex: 1
    },
    rightArrow: {
        width: 30,
        color: 'white',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold'
    }
});
