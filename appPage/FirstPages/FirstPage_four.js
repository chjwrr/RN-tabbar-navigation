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

export default class FirstPage_four extends Component {

    render() {
        return (
            <View style={FirstPage_fourStyle.ViewStyle}>

                <Text style={FirstPage_fourStyle.textStyle}>
                    第一个item的第四个页面
                </Text>
            </View>
        );
    }
}
const FirstPage_fourStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd92a',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FirstPage_four);
