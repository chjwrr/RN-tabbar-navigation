/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
} from 'react-native';
import HPTBtabbar from './HPTB_tabbar'

export default class HPTB_navigator extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);


    }
    //配置场景动画,可以返回上面的动画类型
    configureScene(route) {

        //其他页面点击按钮跳转方法传入参数，在这里通过route.type可以接收到，对参数进行动画的判断
        console.log('route.type is ='+route.type);
        console.log('route.name is ='+route.name);

        if (route.type == 'normal'){
            return Navigator.SceneConfigs.PushFromRight
        }
        return Navigator.SceneConfigs.FloatFromRight

        //直接用同一个动画跳转
        //return Navigator.SceneConfigs.FloatFromRight

    }
    //渲染
    renderScene(route, navigator) {
        //导航条跳转传递参数   params 为传递的参数 其他页面传值时的名字要和这里设置的一样
        return <route.component {...route.params} navigator={navigator}/>

        //没有参数
        // return <route.component navigator={navigator} />
    }


    render(){
        return(
            <Navigator
                initialRoute={{ name: 'HPTBtabbar', component: HPTBtabbar }}//默认加载的页面
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                style={{flex:1}}
                navigationBar={
                  <Navigator.NavigationBar style={HomePageNavStyle.navStyleBase}
                  routeMapper={NavigationBarRouteMapper}/>}
            />


        )

    }
}


//创建Navigator的标题、左按钮、右按钮
var NavigationBarRouteMapper = {
    // 标题

    Title(route, navigator, index, navState) {


        return (

            <View>
                <Text>

你好
                </Text>
            </View>
        );
    },
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop()
                            }
                        }}>
                        <Text style={HomePageNavStyle.navLeftButtonStyle}>
                            返回
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={HomePageNavStyle.navRightButtonStyle}>
                            right
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },

};



var HomePageNavStyle = StyleSheet.create({

    viewStyle:{
        flex:1,
    },
    TBarTitleStyle:{
        color:'black',
    },
    TBarTitleSelectStyle:{
        color:'red',
    },

    textStyleBase:{
        marginTop:40,
        marginHorizontal:20,
        color:'red',
        textAlign:'center',
    },
    navStyleBase:{
        backgroundColor:'blue',
    },
    navTitleStyle:{
        color:'white',
        textAlign:'center',
        flex:1,
        fontSize:18,
        fontWeight:'bold',
        marginVertical:5,
    },
    navLeftButtonStyle:{
        color:'white',
        marginLeft:10,
        fontSize:15,
        marginTop:5,
    },
    navRightButtonStyle:{
        color:'black',
        marginRight:10,
        fontSize:15,

    },

});


AppRegistry.registerComponent('myTabBarAndNavigationTest', () => HPTB_navigator)