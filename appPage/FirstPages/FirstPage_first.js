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

import TabNavigator from 'react-native-tab-navigator'

export default class FirstPage_first extends Component {

    render() {
        return (
            <View style={FirstPage_firstStyle.ViewStyle}>

                <Text style={FirstPage_firstStyle.textStyle}>
                    第一个item的第一个页面
                </Text>
            </View>
        );
    }
}
const FirstPage_firstStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3cff8a',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FirstPage_first);
