import React from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { colors } from './theme'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

const CitiesNav = createStackNavigator({
    Cities: {
        screen: Cities,
        navigationOptions: {
            title: 'Cities'
        }
    },
    City: {
        screen: City,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('title') || 'City'
        })
    }
}, {
    defaultNavigationOptions: () => ({
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '400'
        },
        headerTintColor: '#fff'
    })
})

const Tabs = createBottomTabNavigator({
    CitiesTab: { 
        screen: CitiesNav,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon: ({ focused, tintColor }) => (
                <MaterialCommunityIcons style={{ color: focused ? '#000' : tintColor }} name='city' size={30}/>
            )
        } 
    },
    AddCity: { 
        screen: AddCity,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                <MaterialCommunityIcons style={{ color: focused ? '#000' : tintColor }} name='plus' size={30}/>
            )
        }
    }
}, {
    tabBarOptions: {
        showLabel: false
    }
})

export default createAppContainer(Tabs)