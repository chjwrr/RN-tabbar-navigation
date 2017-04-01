/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class SecondPage extends Component {
    render() {
        return (
            <View style={SecondStyle.ViewStyle}>

                <Text style={SecondStyle.textStyle}>
                    第二个item
                </Text>
            </View>
        );
    }
}
const SecondStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2afde4',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginTop:64,
    },

});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => SecondPage);
