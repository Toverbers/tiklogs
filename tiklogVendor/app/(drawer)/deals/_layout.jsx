
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'



SplashScreen.preventAutoHideAsync();


const DealsLayout = () => {


  return (
    
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="single-deal" 
        options={{ 
          headerShown: false,
          presentation: 'modal'

         }} 
        />
    </Stack>
    

  );
};

export default DealsLayout