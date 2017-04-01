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

export default class ThirdPage extends Component {
    render() {
        return (
            <View style={ThirdStyle.ViewStyle}>

                <Text style={ThirdStyle.textStyle}>
                    第三个item
                </Text>
            </View>
        );
    }
}
const ThirdStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => ThirdPage);
