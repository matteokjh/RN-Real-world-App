import React, { useState } from 'react'
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

import { colors } from '../theme'

import { Location } from './cityTypes'
import CenterMsg from '../components/CenterMsg'

export default function City(props: any) {
    const cityObj = props.navigation.getParam('cityObj')
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')
    const [location, setLocation] = useState({})
    // console.log('viewCity: ', cityObj)
    const addLocation = () => {
        if(!name || !info) return
        const location = {
            name: name,
            info: info
        }
        // console.log('addLocation: ', location)
        props.screenProps.addLocation(location, cityObj)
        setName('')
        setInfo('')
    }
    return (
        <View style={{ flex: 1 }}>
            {
                !cityObj.locations.length && <CenterMsg message='No location' />
            }
            {
                cityObj.locations.map((location: Location, idx: number) => (
                    <View key={idx} style={styles.locationContainer}>
                        <Text style={styles.name}>{ location.name }</Text>
                        <Text style={styles.info}>{ location.info }</Text>
                    </View>
                ))
            }
            <TextInput
                value={name}
                placeholder='location name'
                onChangeText={(val) => setName(val)}
                style={styles.input}
                placeholderTextColor="#fff"
            ></TextInput>
            <TextInput
                value={info}
                placeholder='location info'
                onChangeText={(val) => setInfo(val)}
                style={[styles.input, styles.input2]}
                placeholderTextColor="#fff"
            ></TextInput>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={addLocation}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Location</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    locationContainer: {
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    },
    name: {
        fontSize: 20
    },
    info: {
        color: 'rgba(0,0,0,.5)'
    },
    input: {
        position: 'absolute',
        height: 50,
        backgroundColor: colors.primary,
        width: '100%',
        bottom: 104,
        left: 0,
        color: 'white'
    },
    input2: {
        bottom: 52,

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    }
})