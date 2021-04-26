import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { THEME } from '../../Constant';
import { VerticalDot } from '../../Icon';


const getThumnailText = (filename) => {
    return filename[0];
}

const convertTime = millis => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" :
        "") + seconds);
};

const AudioListItem = ({ id, title, duration, onOptionPress,onAudioPress, navigation }) => {
    return (
        <View key={id}>
            <View style={styles.container}>
                <TouchableOpacity onPress={onAudioPress} style={{flex:1}}>
                    <View style={styles.leftContainer}>
                        <View style={styles.thumbnail}>
                            <Text style={styles.thumbnailText}>{getThumnailText(title)}</Text>
                        </View>

                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            <Text style={styles.time}>{convertTime(duration)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.rightContainer}>
                    <TouchableOpacity onPress={() => onOptionPress()}>
                    <VerticalDot
                            fill={THEME.BLACK}
                            height={15}
                            width={15}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator} />
        </View>
    );
}

export default AudioListItem


const {width} =Dimensions.get('window')

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center',
        width:width-15,
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
        backgroundColor:THEME.LIGHT_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    thumbnailText: {
        fontSize: 22,
        fontWeight: 'bold',
        color:"#57606f"
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
        backgroundColor:"#333",
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 6,
        marginBottom: 6
    },
    time: {
        fontSize: 14,
        color: THEME.GRAY,
        marginTop:5
    }
})