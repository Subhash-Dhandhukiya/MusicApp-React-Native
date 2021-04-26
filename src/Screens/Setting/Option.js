import React,{useContext}from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { THEME } from '../../Constant'
import image from '../../Constant/image'
import Card from './Card'
import { ThemeContext } from './ThemeContext'
import {useNavigation} from '@react-navigation/native'

const Option = () => {

    const {value,setValue}=useContext(ThemeContext)
    
    const navigation=useNavigation();

    const first=1;    
    const second=2;    
    const third=3;    
    const forth=4;
    const fifth=5;
    const sixth=6;   

    const _onSelect=(x)=>{
        setValue(x);
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <Card title="Default" img={image.cartoon} onPress={()=>_onSelect(first)}/>
                <Card title="CD" img={image.CD} onPress={()=>_onSelect(second)}/>
            </View>
            <View style={styles.main}>
                <Card title="Mic-1" img={image.mic1} onPress={()=>_onSelect(third)}/>
                <Card title="Mic-2" img={image.mic2} onPress={()=>_onSelect(forth)} />
            </View>
            <View style={styles.main}>
                <Card title="Headphone" img={image.Headphone} onPress={()=>_onSelect(fifth)}/>
                <Card title="Guitar" img={image.Guitar} onPress={()=>_onSelect(sixth)} />
            </View>
        </ScrollView>
    )
}

export default Option

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    main:{
        flexDirection:'row',

    }
})

