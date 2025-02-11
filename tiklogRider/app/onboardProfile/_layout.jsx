import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const OnboardProfileLayout = () => {
  return (
    <>
     <Stack>
        <Stack.Screen
          name="create-profile"
          options={{
            headerShown: false
          }}
         />

        <Stack.Screen
          name="create-address"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="create-vehicle"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="create-license"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="delivery-type"
          options={{
            headerShown: false
          }}
         />
        
     </Stack>

     <StatusBar style='light' backgroundColor="#161622"  />
    </>
  )
}

export default OnboardProfileLayout