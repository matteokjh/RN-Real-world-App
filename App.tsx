import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { City, Location } from './src/Cities/cityTypes'

import Tabs from './src'

const key = 'cities'

console.disableYellowBox = true

export default function App() {
  const [cities, setCities] = useState<City[]>([])

  // methods
  const addCity = (city: City) => {
    setCities(cities.concat(city))
    AsyncStorage.setItem(key, JSON.stringify(cities.concat(city)))
      .catch((err) => console.log(err))
  }
  const addLocation = (location: Location, city: City) => {
    const idx = cities.findIndex(item => item.id === city.id)
    const chosenCity = cities[idx]
    chosenCity.locations.push(location)
    setCities([
      ...cities.slice(0, idx),
      chosenCity,
      ...cities.slice(idx+1)
    ])
  }
  
  
  useEffect(()=> {
    // get cities from AsyncStorage
    const func = async () => {
      try {
        const cities = await AsyncStorage.getItem(key)
        setCities(JSON.parse(cities))
      } catch(e) {
        console.error('err: ', e)
      }
    }
    func()
  },[])

  return <Tabs
    screenProps={{
      cities: cities,
      addCity: addCity,
      addLocation: addLocation
    }}
  />
}
