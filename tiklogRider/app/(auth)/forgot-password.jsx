import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import Phone from '../../components/Phone'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

const ForgotPassword = () => {
  const [selectedArea,setSelectedArea]=useState(null);
  return (
    <SafeAreaView className="bg-white">
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 24
          
        }}
      >
      <View className="w-full mt-6">
        <Image
            source={images.logo}
            className="w-[60px] h-[60px]"
            resizeMode="contain"
          />
        </View>

        <Text className="text-3xl font-psemibold text-black mt-7 ">Forfot Password</Text>
        <Text className="text-sm font-pregular text-black mt-2 ">Enter your phone number to continue</Text>

        <Phone
          placeholder="Phone no"
          otherStyles="mt-5"
          setSelectedArea={setSelectedArea}
             selectedArea={selectedArea}
         />

        <CustomButton
                title="Continue"
                //handlePress={() => router.push('/login')}
                handlePress={() => router.push('/otp')}
                containerStyles="w-full mt-7 "
                textStyles="text-white"
           />

    </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword