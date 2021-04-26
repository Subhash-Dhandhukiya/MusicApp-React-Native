import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,PermissionsAndroid, Alert } from 'react-native'
import GetAudio from './Audio/GetAudio'
import Error from './Permission/Error'

const AudioList = () => {
    
    const [permissionErr,setPermissionErr]=useState(false)

    useEffect(()=>{
        getPermission();
    },[])
    
    const PermissionAlert=()=>{
        Alert.alert('Permission Required','This app needs to read audio files!',[
            {
                text:"Okay",
                onPress:()=>getPermission()
            },
            {
                text:'Cancle',
                onPress:()=>PermissionAlert()
            },
        ]);
    };


    const getPermission=async()=>{
        PermissionsAndroid.request('android.permission.READ_EXTERNAL_STORAGE').then(response=>{
            if(response==="granted"){
                setPermissionErr(false);
            }else if(response==="denied"){
                PermissionAlert();
            }else if(response==="never_ask_again"){
                setPermissionErr(true);
            }
        })
    }


    return(
       <View style={styles.container}>
           {permissionErr?<Error/>:<GetAudio/>}
       </View>
    )
}

export default AudioList

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
