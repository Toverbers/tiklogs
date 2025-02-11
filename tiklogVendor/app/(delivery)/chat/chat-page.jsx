import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import ChatComponent from '../../../components/ChatComponent'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


const ChatPage = () => {

  const insets = useSafeAreaInsets();

  const goToCallPage = () => {
    router.push('/chat/call')
  }
  
  return (
    <>
    <Stack.Screen

    options={{
      headerRight: ()=> (
        <TouchableOpacity onPress={goToCallPage} className="w-[36px] h-[36px] justify-center items-center bg-[#f1f1f1] rounded-full">
          <Ionicons name="call-outline" color="#333" size={20} />
        </TouchableOpacity>
    ), 

    }}
     />
    
    <View className="flex-1 px-[16px]" 
    style={{marginBottom: insets.bottom}}
    >
      
      <ChatComponent />

       {
      Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
   } 
      {/* <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.select({
        ios: () => 100,
        android: () => 100
      })()}
       /> */}
   
   
    </View>
    </>
  )
}

export default ChatPage

const styles = StyleSheet.create({})