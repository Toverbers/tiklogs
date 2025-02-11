import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import BackButton from '../../../../components/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const SingleNotification = () => {
  return (
    <SafeAreaView className="px-[24px]">
      <View className="flex-row w-full items-center space-x-2 py-[10px]">
        <BackButton
          backButtonContainerStyle="bg-[#fff] rounded-full"
          handlePress={()=> router.back()}
        />

        <Text className="text-2xl font-psemibold">Deals Promotion</Text>
      </View>

      {/* <Text className="text-2xl font-psemibold mt-[24px]">Deals Promotion</Text> */}
      <View className="mt-[24]">
            <Text className="text-xl font-psemibold">Who we are</Text>
            <Text className="text-sm font-pregular mt-2">We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).</Text>
         </View>
    </SafeAreaView>
  )
}

export default SingleNotification

const styles = StyleSheet.create({})