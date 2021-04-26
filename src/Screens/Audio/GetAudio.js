import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, Alert ,ToastAndroid} from 'react-native'
import AudioListItem from './AudioListItem'
import MusicFiles from 'react-native-get-music-files'
import OptionModal from '../Modal/Modal'
import { ROUTES } from '../../Constant'
import Player from './Player'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const GetAudio = () => {

    //States
    const [audioFile, setAudioFile] = useState([]);
    const [currentItem, setCurrentItem] = useState([]);
    const [optionModalVisible, setOptionModalVisible] = useState(false)
    const [path, setPath] = useState();

    useEffect(() => {
        getAudioFile()
    }, [])

    const navigation = useNavigation();
    const getAudioFile = async () => {
        MusicFiles.getAll({
            id: true
        }).then(tracks => {
            setAudioFile(tracks)
        }).catch(error => {
            console.log(error);
        })
    }

    //Navigate to Player.js to play Audio
    const handleAudioPress = (item) => {
        navigation.navigate(ROUTES.PLAYER, {
            title: item.fileName,
            path: item.path,
            id: item.id
        })
        setOptionModalVisible(false);
    }


    //Handle three vertical dots...(option)
    const handleOptionPress = () => {
        setOptionModalVisible(true)
    }

    const showToast=()=>{
        ToastAndroid.show("Successfully Added",ToastAndroid.SHORT);
    }

    //add to favorite 
    let arr = []
    const _addfavorite =async (item) => {
        try {

            const value = JSON.parse(await AsyncStorage.getItem("mylist"));
            arr = value;
            arr.push({ name: item.fileName, place:  item.path, index: item.id })
            await AsyncStorage.setItem("mylist", JSON.stringify(arr));
            setOptionModalVisible(false);
            showToast();

        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <View>
            <ScrollView>
                {audioFile.map(item =>
                    <AudioListItem
                        key={item.id}
                        id={item.id}
                        title={item.fileName}
                        duration={item.duration}
                        onAudioPress={() => handleAudioPress(item)}
                        onOptionPress={() => {
                            handleOptionPress()
                            setCurrentItem(item.fileName)
                            setPath(item)
                        }}
                    />)}
                <OptionModal
                    onPlayPress={() => handleAudioPress(path)}
                    onFavoritePress={() => _addfavorite(path)}
                    currentItem={currentItem}
                    visible={optionModalVisible}
                    onClose={() => setOptionModalVisible(false)}
                />
            </ScrollView>
        </View>
    )
}

export default GetAudio

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    sc: {
        marginBottom: 150,
        paddingLeft: 15,
        paddingRight: 15,
    }
})