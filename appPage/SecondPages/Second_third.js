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

export default class Second_third extends Component {

    render() {
        return (
            <View style={Second_thirdStyle.ViewStyle}>

                <Text style={Second_thirdStyle.textStyle}>
                    第二个item的第三个页面
                </Text>
            </View>
        );
    }
}
const Second_thirdStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a0bdff',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => Second_third);
