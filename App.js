import React,{useState,useEffect}from 'react'
import { StatusBar,View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppTabNaviagtor from './src/Navigation/BottomTabNavigation'
import THEME from './src/Constant/Theme'
import { setCustomText } from 'react-native-global-props'
import { ThemeContext } from './src/Screens/Setting/ThemeContext'
import SplashScreen from './src/Screens/Splash/index'


const App = () => {
  const [value,setValue]=useState(2);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5500)
  },[])

  return (
    <View style={{flex:1,backgroundColor:'#000'}}>
      {loading?<SplashScreen/>:(<ThemeContext.Provider value={{value,setValue}}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} backgroundColor={THEME.WHITE} />
        <AppTabNaviagtor />
      </NavigationContainer>
    </ThemeContext.Provider>)}
    </View>
  )
}

export default App