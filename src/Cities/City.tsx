import React, { useState, useEffect } from 'react'
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

import { colors } from '../theme'

import CenterMsg from '../components/CenterMsg'
import { px2dp } from '@/utils/dimensions'
import { CityTypes, Location } from './cityTypes'

interface Props {
    navigation: any,
    screenProps:  {
        cities: CityTypes[],
        addCity: (city: CityTypes) => void,
        addLocation: ( location: Location, city: CityTypes) => void
    }
}

export default function City(props: Props) {
    const cityObj = props.navigation.getParam('cityObj')
    
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')
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
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30} enabled>
            <View style={{ flex: 1 }}>
                {
                    !cityObj.locations.length && <CenterMsg message='No location' />
                }
                <ScrollView style={{
                    maxHeight: 270
                }}>
                {
                    cityObj.locations.map((location: Location, idx: number) => (
                        <View key={idx} style={styles.locationContainer}>
                            <Text style={styles.name}>{ location.name }</Text>
                            <Text style={styles.info}>{ location.info }</Text>
                        </View>
                    ))
                }
                </ScrollView>
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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: px2dp(750)
    },
    locationContainer: {
        padding: px2dp(20),
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    },
    name: {
        fontSize: px2dp(40)
    },
    info: {
        color: 'rgba(0,0,0,.5)'
    },
    input: {
        position: 'absolute',
        height: px2dp(120),
        backgroundColor: colors.primary,
        width: '100%',
        bottom: px2dp(243),
        left: 0,
        color: 'white',
        paddingLeft: px2dp(20)
    },
    input2: {
        bottom: px2dp(121),

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: px2dp(120),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    buttonText: {
        color: '#fff',
        fontSize: px2dp(40)
    }
})