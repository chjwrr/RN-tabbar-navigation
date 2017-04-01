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
    Navigator,
} from 'react-native';



//获取屏幕的宽和高
//使用Dimensions
var Dimensions = require('Dimensions');
var {screenWidth,screenHeight} = Dimensions.get('window');

import HPTB_secondView from './HPTB_SecondView'

export default class HPTB_homeView1 extends Component {

    constructor(props){
        super(props);
    }

    jumpSecondView () {



        this.props.navigator.push({
            component:HPTB_secondView,
            params:{}

        })
    }
    render() {
        return (
            <View style={FirstStyle.ViewStyle}>

                <TouchableOpacity onPress={ () => this.jumpSecondView()}>
                    <Text style={FirstStyle.textStyle}>第二个页面</Text>

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
        backgroundColor: 'green',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginTop:100,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => HPTB_homeView1);
