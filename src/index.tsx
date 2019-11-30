import React from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { colors } from './theme'
// import { MaterialCommunityIcons } from 'react-native-vector-icons'

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities, navigationOptions: { title: 'Cities' } },
    City: { screen: City, navigationOptions: { title: 'City' } }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '400'
        },
        headerTintColor: '#fff'
    }
})

const Tabs = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
})

export default createAppContainer(Tabs)