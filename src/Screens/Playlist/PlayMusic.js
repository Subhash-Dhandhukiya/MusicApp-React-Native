import React, { useState, useEffect ,useContext} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import Slider from 'react-native-slider';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import image from '../../Constant/image';
import { Back, Backword, EmptyHeart, FillHeart, Forward, Pause, Play } from '../../Icon/index';
import { THEME } from '../../Constant/index'
import { useNavigation } from '@react-navigation/native'
import {ThemeContext} from '../Setting/ThemeContext'

const Player = ({ route }) => {

    const { title, path,id } = route.params;
    const {value,setValue}=useContext(ThemeContext)
    const navigation = useNavigation();

    const [isAlreadyPlay, setisAlreadyPlay] = useState(false);
    const [duration, setDuration] = useState('00:00');
    const [timeElapsed, setTimeElapsed] = useState('00:00');
    const [percent, setPercent] = useState(0);
    const [inprogress, setInprogress] = useState(false);
    const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());


    let backgroundImageSet;
    if(value==1){
        backgroundImageSet=image.cartoon

    }else if(value==2){
        backgroundImageSet=image.CD

    }else if(value==3){
        backgroundImageSet=image.mic1

    }else if(value==4){
        backgroundImageSet=image.mic2

    }else if(value==5){
        backgroundImageSet=image.Headphone
        
    }else if(value==6){
        backgroundImageSet=image.Guitar
    }

    //back Action to stop the playing Audio
    const backAction = () => {
        onStopPress();
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
      
        return onStartPress();
        
    }, [])


    const changeTime = async (seconds) => {
        // 50 / duration
        let seektime = (seconds / 100) * duration;
        setTimeElapsed(seektime);
        audioRecorderPlayer.seekToPlayer(seektime);
    };

    //Play Button Function
    const onStartPress = async () => {
        setisAlreadyPlay(true);
        setInprogress(true);
        audioRecorderPlayer.startPlayer(path);
        audioRecorderPlayer.setVolume(1.0);

        audioRecorderPlayer.addPlayBackListener(async (e) => {
            if (e.current_position === e.duration) {
                audioRecorderPlayer.stopPlayer();
            }
            let percent = Math.round(
                (Math.floor(e.current_position) / Math.floor(e.duration)) * 100,
            );
            setTimeElapsed(e.current_position);
            setPercent(percent);
            setDuration(e.duration);
        });
    };

    //Pause Function
    const onPausePress = async (e) => {
        setisAlreadyPlay(false);
        audioRecorderPlayer.pausePlayer();
    };

    //Stope Function
    const onStopPress = async (e) => {
        await audioRecorderPlayer.stopPlayer();
        await audioRecorderPlayer.removePlayBackListener();
    };



    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ paddingLeft: 15, paddingTop: 15 }} onPress={() => { navigation.goBack(), onStopPress() }}>
                        <Back fill={THEME.BLACK} height={20} width={20} />
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
                        <Text style={styles.text}>Instaplayer</Text>
                    </View>
                </View>
                <View style={styles.coverContainer}>
                    <Image source={backgroundImageSet} resizeMode="cover" style={styles.image} />
                </View>

                <View style={styles.trackname}>
                    <Text numberOfLines={1} style={[styles.textDark, { fontSize: 20, fontWeight: '500', width: 200 }]}>
                        {title}
                    </Text>
                </View>
            </View>
            <View style={styles.seekbar}>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                    value={percent}
                    minimumTrackTintColor="#93A8B3"
                    onValueChange={(seconds) => changeTime(seconds)}
                />
                <View style={styles.inprogress}>
                    <Text style={[styles.textLight, styles.timeStamp]}>
                        {!inprogress
                            ? timeElapsed
                            : audioRecorderPlayer.mmssss(Math.floor(timeElapsed))}
                    </Text>
                    <Text style={[styles.textLight, styles.timeStamp]}>
                        {!inprogress
                            ? duration
                            : audioRecorderPlayer.mmssss(Math.floor(duration))}
                    </Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View >
                    {!isAlreadyPlay ? (
                        <Play onPress={() => { onStartPress() }} fill="#000" height={33} width={33} function={() => onStartPress()} />
                    ) : (
                        <Pause onPress={(e) => { onPausePress(e) }} fill="#000" height={33} width={33} />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Player;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEC',
    },
    textLight: {
        color: '#B6B7BF',
    },
    text: {
        color: '#8E97A6',
    },
    titleContainer: {
        paddingTop: 15,
        flex:1,
        alignItems:'center'
    },
    textDark: {
        color: '#3D425C',
    },
    buttonContainer: {
        alignItems: 'center',
        width: 100,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 64,
        borderWidth: 16,
        shadowColor: '#5D3F6A',
        borderColor: 'rgba(93, 63, 106, 0.2)',
        shadowRadius: 30,
        shadowOpacity: 0.5,
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: '#5D3F6A',
        shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3,
        alignItems: 'center',
        paddingTop: 35,
        paddingLeft: 120
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    track: {
        height: 3,
        borderRadius: 1,
        backgroundColor: '#FFF',
    },
    thumb: {
        width: 9,
        height: 9,
        backgroundColor: '#3D425C',
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: '500',
    },
    seekbar: { margin: 32 },
    inprogress: {
        marginTop: -12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    trackname: { alignItems: 'center', marginTop: 12 },
    image: {
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },

});

