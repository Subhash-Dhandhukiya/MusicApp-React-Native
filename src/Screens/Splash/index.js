import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends Component {
  
  componentDidMount(){
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <LottieView
          ref={animation=>{
            this.animation=animation;
          }}

          style={{
            width:250,
            height:250,
            backgroundColor:'black'
          }}
          source={require('../../../assets/Animation/Theme.json')}
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
      backgroundColor:'#000',
      alignItems:'center',
      justifyContent:'center',
      flex:1
  }
})