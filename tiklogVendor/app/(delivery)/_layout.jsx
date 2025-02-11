
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';



SplashScreen.preventAutoHideAsync();


const DeliveryLayout = () => {


  return (
   
    <Stack>
        <Stack.Screen name="create-delivery" options={{ 
            headerShown: false,
            //presentation: 'modal', 
            }} />
        <Stack.Screen name="delivery-page" options={{ 
            headerShown: false,
            //presentation: 'modal', 
            }} />
        <Stack.Screen name="edit-delivery" options={{ 
            headerShown: false,
            presentation: 'modal', 
            }} />
        <Stack.Screen name="chat" options={{ 
            headerShown: false,
            //presentation: 'modal', 
            }} />
    </Stack>

  );
};

export default DeliveryLayout