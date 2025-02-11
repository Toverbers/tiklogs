import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../../../components/BackButton'
import { router } from 'expo-router'


const TransactionDetails = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row w-full px-[24px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
        <ScrollView
        contentContainerStyle={{
          height: '100%',
            paddingHorizontal: 24,
            
          }}
        >
          <View className="h-[140px] flex justify-center items-center">
            <Text className="text-[32px] font-psemibold">₦1,000.00</Text>
            <Text className="text-xs">Tiklog delivery <Text className="text-[#287ED0]">#1234567890</Text></Text>
          </View>

          <View className="p-y-5 space-y-5">
            <View className="flex-row justify-between items-center">
                <Text className="text-sm text-[#64748B]">Status</Text>
                <Text className="text-sm text-[#23AA26] font-psemibold">Successful</Text>
            </View>
            
            <View className="flex-row justify-between items-center">
                <Text className="text-sm text-[#64748B]">Transaction ID</Text>
                <Text className="text-sm text-[#021433] font-psemibold">#1234567890</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <Text className="text-sm text-[#64748B]">Transaction type</Text>
                <Text className="text-sm text-[#021433] font-psemibold">Tiklog delivery</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <Text className="text-sm text-[#64748B]">Date</Text>
                <Text className="text-sm text-[#021433] font-psemibold">1 Mar 2023 - 13:00</Text>
            </View>
            
            <View className="flex-row justify-between items-center">
                <Text className="text-sm text-[#64748B]">Fee</Text>
                <Text className="text-sm text-[#021433] font-psemibold">NGN1,000</Text>
            </View>

          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default TransactionDetails

const styles = StyleSheet.create({})