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

export default class Third_third extends Component {

    render() {
        return (
            <View style={Third_thirdStyle.ViewStyle}>

                <Text style={Third_thirdStyle.textStyle}>
                    第三个item的第三个页面
                </Text>
            </View>
        );
    }
}
const Third_thirdStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffbc7',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => Third_third);
