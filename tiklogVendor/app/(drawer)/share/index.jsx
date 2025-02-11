import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../../../components/BackButton'
import { router } from 'expo-router'

const Share = () => {
  return (
    <SafeAreaView className="bg-[#F6F8FA]">
      <View className="flex-row w-full px-[24px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
              </View>
        <ScrollView contentContainerStyle={{paddingHorizontal: 24, height: '100%'}}>
          <View className="mt-5">
            <Text className="text-lg font-psemibold">Share and Invite</Text>
          </View>

          <View className="flex-row space-x-[10px] mt-[20px]">
            <View className="flex-col flex-1 space-y-[10px] p-[30px] flex justify-centern items-center bg-white rounded-lg">
              <Pressable className="h-[40px] w-[40px] bg-[#F6F8FA] rounded-full flex justify-center items-center">
                <Ionicons name="gift-outline" size={24} color="#333" />
              </Pressable>

              <Text className="text-[32px] text-[#021433] font-pmedium">N0</Text>

              <Text className="text-center text-xm text-[#616977]">Total Commision Paid</Text>
            </View>

            <View className="flex-col flex-1 space-y-[10px] p-[24px] flex justify-centern items-center bg-white rounded-lg">
              <Pressable className="h-[40px] w-[40px] bg-[#F6F8FA] rounded-full flex justify-center items-center">
                <Ionicons name="people-outline" size={24} color="#333" />
              </Pressable>

              <Text className="text-[32px] text-[#021433] font-pmedium">0</Text>

              <Text className="text-center text-xm text-[#616977]">Total referrals</Text>
            </View>
          </View>

          <View className=" mt-[30px]">
            <Text className="text-center text-lg font-pmedium text-[#021433]">Get XYZ when you share code with your friends.</Text>
          </View>

          <View className=" mt-[20px] flex-row space-x-2">
            <View className="flex-1 flex-row space-x-3 items-center h-[50px] bg-white rounded-lg px-3">
              <Text>887hhdj997779</Text>
            </View>

            <View className="flex-0.5 flex-row space-x-2 items-center">
            <Pressable className="h-[50px] w-[50px] bg-[#ffffff] rounded-lg flex justify-center items-center">
                <Ionicons name="copy-outline" size={22} color="#333" />
              </Pressable>
              <Pressable className="h-[50px] w-[50px] bg-[#ffffff] rounded-lg flex justify-center items-center">
                <Ionicons name="share-social-outline" size={22} color="#333" />
              </Pressable>
            </View>
          </View>

          <View className="mt-10">
            <Text className="text-lg font-pmedium">How it works</Text>
            <Text className="mt-2">The code you share will be valid for 30 days on XXX
              Your promo code is valid for 30 days on XXXX Make some new friends, go some good deliveries.</Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Share