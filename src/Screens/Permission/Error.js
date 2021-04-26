import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { IMAGE, THEME } from '../../Constant'


const Error = () => {
    return (
        <View style={styles.container} >
            <Image
                source={IMAGE.permission1}
                resizeMode="cover"
                style={{
                    width: "60%",
                    height: "60%"
                }}
            />
            <Text style={styles.text2}>Please Give the</Text>
            <Text style={styles.text1}>Permission</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: THEME.WHITE,
        top: 0
    },
    text1: {
        color: '#007dfe',
        fontSize:35,
        fontWeight:"bold",
    },
    text2: {
        color: '#1b2d35',
        fontSize:32,
        fontWeight:"600"
    },
    main: {
        top: 10
    }
})

export default Error
