import { ImageBackground, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../constants/images'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const CallPage = () => {

  const handleEndCall = () => {
    router.back();
  }

  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <ImageBackground
       source={images.dp1}
       className="w-full h-full justify-end items-center bg-blend-multiply brightness-60"
      >

        <View className="pb-[100px]">
          <Text className="text-xl text-white text-center">Jane Doe</Text>
          <Text className="text-sm text-white text-center">1:07</Text>
          <View className="flex-row gap-x-3 justify-center">
                    <Pressable 
                    onPress={handleEndCall}
                    className="bg-red-100 h-[42px] w-[42px] justify-center items-center rounded-full mt-5"
                    >
                        <Ionicons name="call" size={24} color="#fff" /> 
                    </Pressable>
                </View>
        </View>

      </ImageBackground>
    </View>
  )
}

export default CallPage

const styles = StyleSheet.create({})