import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants';
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../components/CustomButton';
//import TestSvg from '../assets/images/testSvg.svg'

const index = () => {
  return (
    <SafeAreaView className="bg-primary">
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          
        }}
      >
        <View className="w-full flex justify-center items-center h-[85vh] px-4 mt-10">
          <Image
            source={images.logo}
            className="w-[60px] h-[60px] mb-3"
            resizeMode="contain"
            style={{tintColor: '#fff'}}
          />

           {/* <TestSvg width={150} height={150} /> */}

          <Image
            source={images.onboard1}
            className="max-w-[298px] w-full h-[298px] my-3"
            resizeMode="contain"
            
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Welcome to Tiklog
            </Text>
          </View>

          <Text className="text-sm font-pregular text-white mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

           <CustomButton  
            title="Get Started"
            handlePress={() => router.push("/register")}
            containerStyles="w-full mt-7 bg-white"
            textStyles="text-primary"
          /> 

           <CustomButton
           title="Login"
           handlePress={() => router.push('/login')}
           containerStyles="w-full mt-4 bg-transparent border border-white"
           textStyles="text-white"
           /> 

          
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#ffffff" style="light" />
    </SafeAreaView>
  )
}

export default index