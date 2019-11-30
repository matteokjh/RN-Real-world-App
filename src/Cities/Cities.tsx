import React, { useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'

import { colors } from '../theme'
import { City } from './cityTypes'
import CenterMsg from '../components/CenterMsg'

export default function Cities(props: any) {


    const viewCity = (cityObj: City) => {
        props.navigation.navigate('City',{ cityObj })
    }

    useEffect(() => {

    },[])
    return (
        <ScrollView>
            {
                !props.screenProps.cities.length && <CenterMsg message='No City' />
            }
            <View>
                {
                    props.screenProps.cities.map((cityObj: City, idx: number) => (
                        <View key={idx}>
                            <TouchableWithoutFeedback
                                onPress={() => viewCity(cityObj)}
                            >
                                <View style={styles.cityContainer}>
                                    <Text style={styles.city}>{cityObj.city}</Text>
                                    <Text style={styles.country}>{cityObj.country}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20
    },
    country: {
        color: 'rgba(0,0,0,.5)'
    }
})
