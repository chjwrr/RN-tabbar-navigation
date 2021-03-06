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

export default class Third_first extends Component {

    render() {
        return (
            <View style={Third_firstStyle.ViewStyle}>

                <Text style={Third_firstStyle.textStyle}>
                    第三个item的第一个页面
                </Text>
            </View>
        );
    }
}
const Third_firstStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b41e1a',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => Third_first);
