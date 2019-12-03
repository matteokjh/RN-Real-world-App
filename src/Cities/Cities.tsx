import React,{ useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
    AsyncStorage
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import Icon from 'react-native-vector-icons/AntDesign'

import { colors } from '../theme'
import { CityTypes } from './cityTypes'
import CenterMsg from '../components/CenterMsg'
import { px2dp } from '@/utils/dimensions'

interface swipehiddenType {
    direction: 'left' | 'right',
    isOpen: boolean,
    key: string,
    value: number
}

export default function Cities(props: any) {
    // const [animationIsRunning, setAnimationIsRunning] = useState(false)
    // const [listViewData, setListViewData] = useState([])
    // AsyncStorage.getItem('cities').then(res=>{
    //     console.log(res)
    //     setListViewData(JSON.parse(res))
    // })
    // let obj = {}
    // props.screenProps.cities.forEach(e => {
    //     obj[e.id] = new Animated.Value(1)
    // })
    // const animateVal = obj

    const viewCity = (cityObj: CityTypes) => {
        props.navigation.navigate('City',{ cityObj, title: cityObj.city })
    }
    const deleteRow = async (rowId: string, rowMap: any) => {
        await props.screenProps.delCity(rowId)
        await rowMap[rowId].closeRow()
    }
    // const handleSwipeChange = (data: swipehiddenType) => {
    //     const { key, value } = data;
    //     // 375 or however large your screen is (i.e. Dimensions.get('window').width)
    //     if (value < px2dp(-650) && !animationIsRunning) {
    //         setAnimationIsRunning(true)
    //         Animated.timing(animateVal[key], { toValue: 0, duration: 200 }).start(() => {
    //             const newData = [...listViewData];
    //             const prevIndex = listViewData.findIndex((item: CityTypes) => item.id === key);
    //             newData.splice(prevIndex, 1);
    //             setListViewData(newData)
    //             setAnimationIsRunning(false)
    //         });
    //     }
    // }

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.wrapper}>
                {
                    !props.screenProps.cities.length && <CenterMsg message='No City' />
                }
                <SwipeListView
                    data={props.screenProps.cities}
                    keyExtractor={(item: CityTypes) => item.id.toString()}
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
                                style={styles.backRightBtn}
                                onPress={() =>
                                    deleteRow(data.item.id, rowMap)
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
                    // onSwipeValueChange={(data) => handleSwipeChange(data)}
                />
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
