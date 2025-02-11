import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
     <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false
          }}
         />

        <Stack.Screen
          name="register"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="otp"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="forgot-password"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="reset-password"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="success-password"
          options={{
            headerShown: false
          }}
         />
        <Stack.Screen
          name="register-otp"
          options={{
            headerShown: false
          }}
         />
     </Stack>

     <StatusBar style='light' backgroundColor="#161622"  />
    </>
  )
}

export default AuthLayout