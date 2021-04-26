import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity,Dimensions} from 'react-native'
import { THEME } from '../../Constant';

const OptionModal = ({visible,onClose,currentItem,onPlayPress,onFavoritePress}) => {

    return (
        <>
            <Modal 
                visible={visible}
                animationType="slide"
                transparent
            >
                <View style={styles.modal}>
                    <View style={styles.line}/>
                    <Text style={styles.title} numberOfLines={2}>{currentItem}</Text>
                    <View style={styles.opetionContainer}>
                        <TouchableOpacity onPress={onPlayPress}>
                            <Text style={styles.option}>Play</Text>
                        </TouchableOpacity>
                        {/* <View style={styles.seperator}/> */}
                        <TouchableOpacity onPress={onFavoritePress}>
                            <Text style={styles.option}>Add to Favorite</Text>
                        </TouchableOpacity>
                        {/* <View style={styles.seperator}/> */}
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalBg}/>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
}

export default OptionModal;

const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
    modal:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        backgroundColor:THEME.WHITE,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        zIndex:10
    },
    opetionContainer:{
        padding:20
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        padding:20,
        paddingBottom:0,
        color:"#353b48",
        lineHeight:23
    },
    option:{
        fontSize:16,
        fontWeight:'bold',
        color:"#84817a",
        paddingVertical:10,
        letterSpacing:1
    },
    modalBg:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:THEME.MODAL_BG
    },
    line:{
        width:65,
        height:4,
        borderWidth:1,
        backgroundColor:THEME.GRAY,
        borderColor:THEME.GRAY,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:4,
        borderRadius:5,
    },
    seperator:{
        width:width-40,
        height:1,
        backgroundColor:THEME.GRAY,

    }
})

