
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'



SplashScreen.preventAutoHideAsync();


const HomeLayout = () => {


  return (
    
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
       {/*  <Stack.Screen name="delivery" options={{ 
          headerShown: false, 
          //presentation: 'modal',  
          }} /> */}
    </Stack>
    

  );
};

export default HomeLayout