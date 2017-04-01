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
    Image,
} from 'react-native';
import HomeView from './HPTB_homeView'
import HomeView1 from './HPTB_homeView1'
import TabNavigator from 'react-native-tab-navigator'

export default class HPTB_tabbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'HomeView'
        }
    }

    componentDidMount() {
        console.log('this.props:'+this.props.navigator);

    }

    render() {
        return (

                <TabNavigator>

                    <TabNavigator.Item
                        title='主页'
                        onPress={()=>{this.setState({selectedTab:'HomeView'})}}
                        selected={this.state.selectedTab === 'HomeView'}
                        titleStyle={HPTB_tabbarStyle.textStyle}
                        selectedTitleStyle={HPTB_tabbarStyle.selectedTextStyle}
                    >

                        <HomeView navigator={this.props.navigator} />

                    </TabNavigator.Item>

                    <TabNavigator.Item
                        title='次页'
                        onPress={()=>{this.setState({selectedTab:'HomeView1'})}}
                        selected={this.state.selectedTab === 'HomeView1'}
                        titleStyle={HPTB_tabbarStyle.textStyle}
                        selectedTitleStyle={HPTB_tabbarStyle.selectedTextStyle}
                    >

                        <HomeView1 navigator={this.props.navigator} />

                    </TabNavigator.Item>

                </TabNavigator>


        );
    }
}
let HPTB_tabbarStyle = StyleSheet.create({
    selectedTextStyle:{
        color:'red',
    },
    textStyle:{
      color:'green'
    },
})

AppRegistry.registerComponent('myTabBarAndNavigationTest', () => HPTB_tabbar)