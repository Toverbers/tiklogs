
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack } from 'expo-router'



SplashScreen.preventAutoHideAsync();


const WalletLayout = () => {


  return (
    
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="transaction-details" 
        options={{ 
          headerShown: false 
          }} />
        <Stack.Screen name="transfer-funds" 
        options={{ 
          headerShown: false 
          }} />
        <Stack.Screen name="fund-wallet" 
        options={{ 
          headerShown: false 
          }} />
    </Stack>
    

  );
};

export default WalletLayout