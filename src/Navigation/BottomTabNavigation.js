import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { MusicFill, BookFill, SettingIcon, } from '../Icon'

import AudioList from '../Screens/AudioList'
import PlayList from '../Screens/Playlist/PlayList'
import THEME from '../Constant/Theme'
import ROUTES from '../Constant/Routes'
import Setting from '../Screens/Setting/Setting'
import Player from '../Screens/Audio/Player'
import GetAudio from '../Screens/Audio/GetAudio'
import AudioListItem from '../Screens/Audio/AudioListItem'
import PlayMusic from '../Screens/Playlist/PlayMusic'
import Option from '../Screens/Setting/Option'

const tabBarOptions = {
    showLabel: true,
    activeTintColor: THEME.RED,
    inactiveTintColor: THEME.GRAY
}

const AudioListStack = createStackNavigator();
const AudioListNavigator = ({ }) => {
    return (
        <AudioListStack.Navigator initialRouteName={ROUTES.AUDIOLIST}>
            <AudioListStack.Screen
                name={ROUTES.AUDIOLIST}
                component={AudioList}
                options={{ headerShown: false }}
            />
            <AudioListStack.Screen
                name={ROUTES.PLAYER}
                component={Player}
                options={{ headerShown: false }}
            />
            <AudioListStack.Screen
                name="GetAudio"
                component={GetAudio}
                options={{ headerShown: false }}
            />
            <AudioListStack.Screen
                name="AudioListItem"
                component={AudioListItem}
                options={{ headerShown: false }}
            />
        </AudioListStack.Navigator>
    );
}

const PlayListStack = createStackNavigator();
const PlayListNavaigator = ({ }) => {
    return (
        <PlayListStack.Navigator initialRouteName={ROUTES.PLAYLIST}>
            <PlayListStack.Screen
                name={ROUTES.PLAYLIST}
                component={PlayList}
            />

            <PlayListStack.Screen
                name={ROUTES.PLAYMUSIC}
                component={PlayMusic}
                options={{ headerShown: false }}
            />
        </PlayListStack.Navigator>
    );
}

const SettingStack = createStackNavigator();
const SettingNavigator = ({ }) => {
    return (
        <SettingStack.Navigator initialRouteName={ROUTES.SETTING}>
            <SettingStack.Screen
                name={ROUTES.SETTING}
                component={Setting}

            />
            <SettingStack.Screen
                name={ROUTES.OPTION}
                component={Option}
                
            />

        </SettingStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const tabBarListeners = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
});

const AppTabNaviagtor = ({ navigation }) => {
    return (
        <Tab.Navigator
            tabBarOptions={tabBarOptions}
        >
            <Tab.Screen
                name={ROUTES.AUDIOLIST}
                initialRouteName="AudioListStack"
                component={AudioListNavigator}
                listeners={tabBarListeners}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MusicFill
                            fill={color}
                            height={25}
                            width={25}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={ROUTES.PLAYLIST}
                initialRouteName="SettingStack"
                component={PlayListNavaigator}
                listeners={tabBarListeners}
                options={{
                    tabBarIcon: ({ color }) => (
                        <BookFill
                            fill={color}
                            height={25}
                            width={25}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={ROUTES.SETTING}
                initialRouteName="PlayListStack"
                component={SettingNavigator}
                listeners={tabBarListeners}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SettingIcon
                            fill={color}
                            height={25}
                            width={25}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AppTabNaviagtor;

