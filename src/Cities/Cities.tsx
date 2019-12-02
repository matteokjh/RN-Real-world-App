import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native'

import { colors } from '../theme'
import { City } from './cityTypes'
import CenterMsg from '../components/CenterMsg'

export default function Cities(props: any) {

    const viewCity = (cityObj: City) => {
        props.navigation.navigate('City',{ cityObj, title: cityObj.city })
    }

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.wrapper}>
                {
                    !props.screenProps.cities.length && <CenterMsg message='No City' />
                }
                <View>
                    {
                        props.screenProps.cities.map((cityObj: City, idx: number) => (
                            <View key={idx}>
                                <TouchableHighlight
                                    underlayColor='#999'
                                    onPress={() => viewCity(cityObj)}
                                >
                                    <View style={styles.cityContainer}>
                                        <Text style={styles.city}>{cityObj.city}</Text>
                                        <Text style={styles.country}>{cityObj.country}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: colors.defaultBGColor
    },
    wrapper: {
        shadowColor: '#999',
        shadowOpacity: .2,
        shadowRadius: 3
    },
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        backgroundColor: '#fff'
    },
    city: {
        fontSize: 20
    },
    country: {
        color: 'rgba(0,0,0,.5)'
    }
})
