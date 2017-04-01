/**
 * Created by mymac on 2017/3/31.
 */
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

export default class Second_second extends Component {

    render() {
        return (
            <View style={Second_secondStyle.ViewStyle}>

                <Text style={Second_secondStyle.textStyle}>
                    第二个item的第二个页面
                </Text>
            </View>
        );
    }
}
const Second_secondStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9dfffd',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => Second_second);
