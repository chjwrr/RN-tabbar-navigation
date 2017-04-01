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
    View,
    TouchableOpacity,
} from 'react-native';

import FirstPage_first from './FirstPages/FirstPage_first'

import TabNavigator from 'react-native-tab-navigator'

//获取屏幕的宽和高
//使用Dimensions
var Dimensions = require('Dimensions');
var {screenWidth,screenHeight} = Dimensions.get('window');

export default class FirstPage extends Component {
    constructor(props){
        super(props);
        this.state ={
          selectedTab:'home'
        };
    }

    //跳转下一个页面
    goToNextPage () {

        this.props.navigator.push({
            component:FirstPage_first
        })

    }


    render() {
        return (
            <View style={FirstStyle.ViewStyle}>
                <TouchableOpacity onPress={() => this.goToNextPage()}>
                    <Text style={FirstStyle.textStyle}>点击跳转下一个页面</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const FirstStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FirstPage);
