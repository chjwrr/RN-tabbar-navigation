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

export default class FirstPage_second extends Component {

    render() {
        return (
            <View style={FirstPage_secondStyle.ViewStyle}>

                <Text style={FirstPage_secondStyle.textStyle}>
                    第一个item的第二个页面
                </Text>
            </View>
        );
    }
}
const FirstPage_secondStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3fceff',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FirstPage_second);
