import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import images from '../../../constants/images'
import BackButton from '../../../components/BackButton'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const PrivacyPolicy = () => {
  return (
    
       <View style={{}}>  
            {/* <View className=" px-[24px] my-[10px]">
                <Text className="text-2xl font-psemibold">Privacy Policy</Text>
            </View> */}

            <ImageBackground
              className=" w-full pt-[30px]"
              source={images.bg}
              //resizeMode=''
            >
              <View className="flex-row w-full px-[24px] mt-[10px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
              </View>
                <View className=" p-[24px]">
                 <Text className="text-3xl text-white">Privacy Policy</Text>
                 <Text className="text-sm text-white mt-2">We’ve been told it is possible to revolutionise the logistics industry.</Text>
                </View>

            </ImageBackground>

       <ScrollView className="h-[100%] p-[24px]">
         <View >
            <Text className="text-xl font-psemibold">Who we are</Text>
            <Text className="text-sm font-pregular mt-2">We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).</Text>
         </View>
         <View className="mt-5">
            <Text className="text-xl font-psemibold">Main Overview</Text>
            <Text className="text-sm font-pregular mt-2">Data Storage and Security: We store and process your information on secure servers, utilizing industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data. We implement strict data protection practices to ensure your information remains confidential.</Text>
         </View>
        </ScrollView>
        <StatusBar backgroundColor='#1F1F76' />
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})