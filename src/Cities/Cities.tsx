import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import Icon from 'react-native-vector-icons/AntDesign'

import { colors } from '../theme'
import { CityTypes } from './cityTypes'
import CenterMsg from '../components/CenterMsg'
import { px2dp } from '@/utils/dimensions'


export default function Cities(props: any) {

    const viewCity = (cityObj: CityTypes) => {
        props.navigation.navigate('City',{ cityObj, title: cityObj.city })
    }
    const deleteRow = (rowId: number) => {
        console.log(rowId)
    }
    const handleSwipeChange = (val) => {
        // console.log(val)
    }

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.wrapper}>
                {
                    !props.screenProps.cities.length && <CenterMsg message='No City' />
                }
                <SwipeListView
                    data={props.screenProps.cities}
                    listKey="id"
                    renderItem={ (data: {item: CityTypes}) => (
                        <TouchableHighlight
                            underlayColor='#999'
                            onPress={() => viewCity(data.item)}
                        >
                            <View style={styles.cityContainer}>
                                <Text style={styles.city}>{data.item.city}</Text>
                                <Text style={styles.country}>{data.item.country}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={styles.deleteBtn}>
                            <TouchableOpacity
                                style={[
                                    styles.backRightBtn
                                ]}
                                onPress={() =>
                                    deleteRow(data.item.id)
                                }
                            >
                                <Text style={styles.backTextWhite}>
                                    <Icon name='delete' size={px2dp(50)}/>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    rightOpenValue={-75}
                    leftOpenValue={75}
                    disableRightSwipe
                    onSwipeValueChange={handleSwipeChange}
                />
                    {/* {
                        props.screenProps.cities.map((cityObj: CityTypes, idx: number) => (
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
                    } */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: colors.defaultBGColor
    },
    wrapper: {
        shadowColor: '#ccc',
        shadowOpacity: .1,
        shadowRadius: 3
    },
    cityContainer: {
        padding: px2dp(20),
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        backgroundColor: '#fff'
    },
    city: {
        fontSize: px2dp(50)
    },
    country: {
        color: 'rgba(0,0,0,.5)',
        fontSize: px2dp(30)
    },
    deleteBtn: {
        backgroundColor: '#ff0000',
        color: '#fff',
        height: '100%'
    },
    backTextWhite: {
        color: '#FFF',
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        right: 0
    },
})
