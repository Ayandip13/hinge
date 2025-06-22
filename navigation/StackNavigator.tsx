/* eslint-disable */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LikeScreen from '../screens/LikeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          // tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010', height: 80 },
            tabBarLabelStyle: { color: '#008397', fontSize: 15 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="alpha" size={28} color="#fff" />
              ) : (
                <MaterialCommunityIcons
                  name="alpha"
                  size={24}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={LikeScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010', height: 80 },
            tabBarLabelStyle: { color: '#008397', fontSize: 15 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="heart" size={28} color="#fff" />
              ) : (
                <Entypo name="heart" size={24} color="#989898" />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010', height: 80 },
            tabBarLabelStyle: { color: '#008397', fontSize: 15 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={28}
                  color="#fff"
                />
              ) : (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={24}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010', height: 80 },
            tabBarLabelStyle: { color: '#008397', fontSize: 15 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person-circle-outline" size={28} color="#fff" />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={26}
                  color="#989898"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
