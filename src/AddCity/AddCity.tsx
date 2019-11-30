import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import uuidV4 from 'uuid/v4'
import { colors } from '../theme'
import { TextInput } from 'react-native-gesture-handler'

export default function AddCity(props: any) {
    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<string>('')

    const submit = () => {
        if(!city || !country) return
        let obj = {
            city,
            country,
            locations: [],
            id: uuidV4()
        }
        // console.log('AddCity: ', obj)
        props.screenProps.addCity(obj)
        setCity('')
        setCountry('')
        props.navigation.navigate('Cities')
    }
    
    useEffect(() => {
        // console.log(props)
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cities App</Text>
            <TextInput
                style={styles.input}
                onChangeText={val => setCity(val)}
                placeholder="City Name"
                value={city}
            ></TextInput>
            <TextInput
                style={styles.input}
                onChangeText={val => setCountry(val)}
                placeholder="Country Name"
                value={country}
            ></TextInput>
            <TouchableOpacity onPress={submit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add City</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        margin: 10,
        paddingHorizontal: 8,
        height: 50
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: '#fff'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    }
})