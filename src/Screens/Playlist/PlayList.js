import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView,RefreshControl, TouchableOpacity, Dimensions,ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Delete } from '../../Icon';
import { ROUTES, THEME } from '../../Constant';
import {useNavigation} from '@react-navigation/native'

const PlayList = () => {

    const [favoriteList, setFavoriteList] = useState([]);
    const [refreshing,setRefreshing]=useState(false)

    const navigation=useNavigation();

    useEffect(() => {
       return removeSimilarItem();  
    })


    //Get Thumbnail Text
    const getThumnailText = (filename) => {
        return filename[0];
    }


    //remove duplicated item from the async storage 

    const removeSimilarItem=async()=>{
        const list = JSON.parse(await AsyncStorage.getItem("mylist"))
        
        const uniqueAddress=Array.from(new Set(list.map(a=>a.index)))
        .map(index=>{
            return list.find(a=>a.index===index)
        })
        
        setFavoriteList(uniqueAddress);
    }

    //Refresh Control for ScrollView
    const _onRefresh=()=>{
        setRefreshing(true);
        removeSimilarItem().then(()=>{
            setRefreshing(false);
        })
    }

    //Toast Message
    const deleteToast=()=>{
        ToastAndroid.show("Successfully Removed",ToastAndroid.SHORT);
    }

    const deleteAudioFile=async(index)=>{
        let list=JSON.parse(await AsyncStorage.getItem("mylist"))
        let final=list.filter(function(e){
            return e.index!==index;
        })
        AsyncStorage.setItem("mylist",JSON.stringify(final))
        deleteToast();
    }

    const _onNavigationFunction=(item)=>{
        navigation.navigate(ROUTES.PLAYMUSIC, {
            title: item.name,
            path: item.place,
            id:item.index
        })
    }   

    renderItem = (item) => {
        return (
            <View key={item.index}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => _onNavigationFunction(item)} style={{ flex: 1 }}>
                        <View style={styles.leftContainer}>
                            <View style={styles.thumbnail}>
                                <Text style={styles.thumbnailText}>{getThumnailText(item.name)}</Text>
                            </View>

                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.rightContainer}>
                        <TouchableOpacity  onPress={() => deleteAudioFile(item.index)}>
                            <Delete
                                fill="#34495e"
                                height={20}
                                width={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator} />
            </View>
        );

    }

    return (
        <View style={styles.main}>
            <ScrollView style={styles.container} refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={_onRefresh}
                />
            } >
                {favoriteList.map(item => renderItem(item))}
            </ScrollView>
        </View>
    )
}

export default PlayList;

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fff'
    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: width - 15,
        backgroundColor:'#fff',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    rightContainer: {
        flexBasis: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnail: {
        height: 45,
        flexBasis: 45,
        backgroundColor: THEME.LIGHT_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    thumbnailText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#57606f"
    },
    titleContainer: {
        width: width - 150,
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        color: THEME.DARK_GRAY
    },
    separator: {
        width: width - 28,
        backgroundColor: "#333",
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 6,
        marginBottom: 6
    },
    time: {
        fontSize: 14,
        color: THEME.GRAY,
        marginTop: 5
    }
})