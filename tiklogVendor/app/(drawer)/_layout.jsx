import 'react-native-gesture-handler';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'
import { useFonts } from "expo-font";
import CustomDrawerMenu from '../../components/CustomDrawerMenu';
import { Ionicons } from '@expo/vector-icons';
import { icons, images } from '../../constants';


const RootLayout = () => {

    

  return (
    

  <GestureHandlerRootView className="h-full">
      <Drawer
       drawerContent={CustomDrawerMenu}
       screenOptions={{
        swipeEdgeWidth: 0,
        drawerHideStatusBarOnOpen: true,
        drawerPosition: 'left',
        drawerStyle: {
          width: '80%'
        },
        drawerInactiveTintColor: "#0A0D14",
        drawerActiveBackgroundColor: 'transparent',
        drawerLabelStyle: {
          color: '#0A0D14',
        }
       }} 
      >
        <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "Home",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.home}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
          
        />
        <Drawer.Screen
          name="profile" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "Profile",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.profile}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
          
        />
        <Drawer.Screen
          name="wallet" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "Wallet",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.wallet}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
          
        />
        <Drawer.Screen
          name="deals" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "Deals",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.deals}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
        />
        <Drawer.Screen
          name="deliveries" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "My Deliveries",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.deliveries}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
        />
        <Drawer.Screen
          name="statistics" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "My Statistics",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.statistics}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
        />
        
        <Drawer.Screen
          name="settings" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "Settings",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.settings}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
        />
        <Drawer.Screen
          name="share" // This is the name of the page and must match the url from root
          options={{ 
            headerShown: false,
            drawerLabel: "Share and Invite",
            drawerIcon: ({ size, color }) => (
              <Image
              source={icons.share}
              className="w-[32px] h-[32px]"
              resizeMode="contain"
          />
            ),
          }}
        />

       {/* <Drawer.Screen
          name="index2" 
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="bola"
          options={{ headerShown: false }}
        /> */}
        
      </Drawer>
    </GestureHandlerRootView>

    

  );
};

export default RootLayout