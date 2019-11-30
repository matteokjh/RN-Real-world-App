import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { colors } from '../theme'

export default function CenterMsg(props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ props.message }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    },
    text: {}
})