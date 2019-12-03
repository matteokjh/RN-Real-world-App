import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

const uiWidth = 375
const uiHeight = 750

export function px2dp(number: number) {
    return number * deviceWidth / uiHeight
}