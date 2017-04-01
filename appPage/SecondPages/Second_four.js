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

export default class Second_four extends Component {

    render() {
        return (
            <View style={Second_fourStyle.ViewStyle}>

                <Text style={Second_fourStyle.textStyle}>
                    第二个item的第四个页面
                </Text>
            </View>
        );
    }
}
const Second_fourStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3ffa2',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => Second_four);
