
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'



SplashScreen.preventAutoHideAsync();


const ProfileLayout = () => {


  return (
    
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="new-address" options={{ 
          headerShown: false,
          presentation: 'modal'
           }} />
        <Stack.Screen name="update-address" options={{ 
          headerShown: false,
          presentation: 'modal'
           }} />
           <Stack.Screen name="update-profile" options={{ 
            headerShown: false,
            presentation: 'modal'
             }} />
    </Stack>
    

  );
};

export default ProfileLayout