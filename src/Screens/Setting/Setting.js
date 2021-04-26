import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
import { ROUTES, THEME } from '../../Constant'
import { Right } from '../../Icon'
import {useNavigation} from '@react-navigation/native'

const Setting = () => {

    const Navigation=useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.design} onPress={()=>Navigation.navigate(ROUTES.OPTION)}>
                <Text style={{ paddingLeft: 15 ,fontSize:15}}>Theme</Text>
                <View style={{paddingRight:15}}>
                    <Right
                        fill={THEME.GRAY}
                        width={18}
                        height={18}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.separator}/>

        </View>
    )
}

export default Setting

const {width,height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    design: {
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 50,
        alignItems: 'center'
    },
    separator:{
        width:width-0,
        height:1,
        backgroundColor:THEME.GRAY,
        alignSelf:'center'
    }
})