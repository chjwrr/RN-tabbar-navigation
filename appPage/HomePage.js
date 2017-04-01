/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 创建tabbar，子试图是View
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'

import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourPage from './FourPage'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'首页'
            //默认选择第一个页面（'消息'默认选择第二个页面）
            //this.setState({selectedTab:'首页'}) 这个用于切换页面
            //selectedTab：'' ->为不同的值，就切换对应的页面
        };
    }

    /*
     * 创建tabbarItem
     * showtitle：标题
     * index：第几个
     * 子试图：View
     * return：tabbarItem
     * */
    CreatTabNavigatorItem (showtitle  ,index){

        let subview = {}

        switch (index){

            case 1:
                subview=<FirstPage/>;
                break;
            case 2:
                subview=<SecondPage/>;
                break;
            case 3:
                subview=<ThirdPage/>;
                break;
            case 4:
                subview=<FourPage/>;
                break;
        }


        return(

            <TabNavigator.Item
                title={showtitle}
                onPress={()=>{this.setState({selectedTab:showtitle})}}
                selected={this.state.selectedTab === showtitle}
                titleStyle={HomePageStyle.TBarTitleStyle}
                selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
            >

                {subview}

            </TabNavigator.Item>
        );
    }

    /*
    * 创建tabbar
    * return：返回4个item的tabbar
    * */
    CreatTabBarView () {
        return(

            <TabNavigator>

                {this.CreatTabNavigatorItem('首页',1)}
                {this.CreatTabNavigatorItem('消息',2)}
                {this.CreatTabNavigatorItem('联系人',3)}
                {this.CreatTabNavigatorItem('我的',4)}


            </TabNavigator>

        );



    }

    render() {
        return (

          <View style={HomePageStyle.viewStyle}>

              {this.CreatTabBarView()}

          </View>

        );
    }
}



var HomePageStyle = StyleSheet.create({

    viewStyle:{
      flex:1,
    },
    TBarTitleStyle:{
        color:'black',
    },
    TBarTitleSelectStyle:{
        color:'red',
    },

});


AppRegistry.registerComponent('myTabBarAndNavigationTest', () => HomePage);
