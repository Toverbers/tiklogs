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
          name="new-card"
           options={{
            headerShown: false,
            presentation: 'modal'
          }} 
         />

        
     </Stack>

     <StatusBar style='light' backgroundColor="#161622"  />
    </>
  )
}

export default SettingsLayout