
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'



SplashScreen.preventAutoHideAsync();


const StatisticsLayout = () => {


  return (
    
    <Stack>
        <Stack.Screen name="index" 
        options={{ 
          //headerShown: false 
        }} 
        />
    </Stack>
    

  );
};

export default StatisticsLayout