import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { icons, images } from '../../constants'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const SuccessPassword = () => {
  return (
    <SafeAreaView className="bg-white">
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 24,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        
      >

        <Image
          source={icons.success}
          className="w-[100px] h-[100px]"
          resizeMode="contain"
         />
        <Text className="text-2xl font-psemibold text-black mt-7 text-center ">Password successfully reset</Text>
        <Text className="text-sm font-pregular text-black mt-2 text-center">Your password has been successfully reset, ensuring secure access to your account.</Text>

        

         <CustomButton
           title="Reset Password"
           containerStyles="mt-16"
           handlePress={()=> router.push('/login')}
          />

          <StatusBar style="dark" />

      </ScrollView>
    </SafeAreaView>
  )
}

export default SuccessPassword