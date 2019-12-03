import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

import uuidV4 from 'uuid/v4'
import { colors } from '../theme'
import { TextInput } from 'react-native-gesture-handler'
import { px2dp } from '@/utils/dimensions'

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
        console.log(props.navigation)
        props.navigation.navigate('Cities')
    }
    
    useEffect(() => {
        // console.log(props)
    }, [])
    
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View>
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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: px2dp(70),
        textAlign: 'center',
        margin: px2dp(20),
        color: '#fff'
    },
    input: {
        backgroundColor: '#fff',
        margin: px2dp(15),
        paddingHorizontal: px2dp(15),
        height: px2dp(120)
    },
    button: {
        height: px2dp(120),
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: px2dp(15)
    },
    buttonText: {
        color: '#fff'
    }
})