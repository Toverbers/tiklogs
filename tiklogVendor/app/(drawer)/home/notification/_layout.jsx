
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';



SplashScreen.preventAutoHideAsync();


const NotificationLayout = () => {


  return (
    
    <Stack>
        <Stack.Screen name="index" 
        options={{ headerShown: false }} 
        
        />
        
        <Stack.Screen name="single-notification" 
        options={{ 
          headerShown: false,
          presentation: 'containedModal'
          }} />
    </Stack>
    

  );
};

export default NotificationLayout