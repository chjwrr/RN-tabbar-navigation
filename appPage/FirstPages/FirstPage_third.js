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

export default class FirstPage_third extends Component {

    render() {
        return (
            <View style={FirstPage_thirdStyle.ViewStyle}>

                <Text style={FirstPage_thirdStyle.textStyle}>
                    第一个item的第三个页面
                </Text>
            </View>
        );
    }
}
const FirstPage_thirdStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff256b',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FirstPage_third);
