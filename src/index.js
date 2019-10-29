import React from 'react';

import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import { DEVICE_WIDTH, getRealDP as dp, isAndroid } from './utils/screenUtil';

import BottomTabBar from './component/BottomTabBar'

import HomePage from './page/home/home'
import WebViewScreen from './page/article/WebViewScreen'
import ButtonList from './page/button/ListButton'
import LoginPage from './page/login/Login'
import ListIconPage from './page/list/ListIcons'
import ListDivider from './page/list/ListDivider'

const homeBottomTab = createBottomTabNavigator(
    {
        Home: HomePage,
        Shop: ButtonList,
        My: HomePage
    },
    {
        defaultNavigationOptions: {
            /* 创建tabBar */
            tabBarButtonComponent: props => <BottomTabBar {...props} />

        },
        tabBarOptions: {
            showLabel: false,
            showIcon: false,
            style: {
                height: dp(100),
                borderTopWidth: 0,
            },
        }
    }
)

const RootStack = createStackNavigator(
    {
        Main: homeBottomTab,
        WebView:WebViewScreen,
        Login:LoginPage,
        ListIcon:ListIconPage,
        divider:ListDivider
    },
    {
        initialRouteName: 'divider',
        mode: 'modal',
        // 用于设置安卓卡片式跳转
        // transitionConfig: () => ({
        //   screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        // }),
        navigationOptions: () => ({
            gesturesEnabled: true,
        }),
        // 默认导航头样式设置
        defaultNavigationOptions: {
            header: null,
        },
    },
)

export default createAppContainer(RootStack)