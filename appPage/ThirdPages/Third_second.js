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

export default class Third_second extends Component {

    render() {
        return (
            <View style={Third_secondStyle.ViewStyle}>

                <Text style={Third_secondStyle.textStyle}>
                    第三个item的第二个页面
                </Text>
            </View>
        );
    }
}
const Third_secondStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6cb3ff',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => Third_second);
