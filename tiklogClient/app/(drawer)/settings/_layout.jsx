import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const SettingsLayout = () => {
  return (
    <>
     <Stack>
        <Stack.Screen
          name="index"
           options={{
            headerShown: false
          }} 
         />
     
        <Stack.Screen
          name="cards"
           options={{
            headerShown: false
          }} 
         />
        <Stack.Screen
          name="notification-settings"
           options={{
            headerShown: false
          }} 
         />
        <Stack.Screen
          name="security-settings"
           options={{
            headerShown: false
          }} 
         />
        <Stack.Screen
          name="privacy-policy"
           options={{
            headerShown: false
          }} 
         />
        <Stack.Screen
          name="terms"
           options={{
            headerShown: false
          }} 
         />
        <Stack.Screen
          name="help"
           options={{
            headerShown: false
          }} 
         />

        
     </Stack>

     <StatusBar style='light' backgroundColor="#161622"  />
    </>
  )
}

export default SettingsLayout