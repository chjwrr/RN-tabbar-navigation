/**
 * Created by mymac on 2017/3/31.
 * 创建tabbar，子试图是Navigator
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StatusBar,
    View,
    StyleSheet,
} from 'react-native';

import HPTB_Navigator from './HomePageTabbarHiddenPages/HPTB_navigator'

export default class HomePageTabbarHidden extends Component {

    componentDidMount() {
        <StatusBar barStyle={'light-content' }/>
    }

    render() {
        return (
            <HPTB_Navigator/>

        );
    }
}

let HomePageTabbarHiddenStyle = StyleSheet.create({

    viewStyle:{
        flex:1,
        backgroundColor:'red',
    }

})


AppRegistry.registerComponent('myTabBarAndNavigationTest', () => HomePageTabbarHidden);
