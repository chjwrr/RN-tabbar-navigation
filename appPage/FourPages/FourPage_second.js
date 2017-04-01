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

export default class FourPage_second extends Component {

    render() {
        return (
            <View style={FourPage_secondStyle.ViewStyle}>

                <Text style={FourPage_secondStyle.textStyle}>
                    第四个item的第二个页面
                </Text>
            </View>
        );
    }
}
const FourPage_secondStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#225eff',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FourPage_second);
