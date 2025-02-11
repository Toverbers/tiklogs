import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../../../components/BackButton'
import { router, Stack } from 'expo-router'
import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons'

const Statistics = () => {
  return (
    <>
    <Stack.Screen

options={{
  headerLeft: ()=> (
    <BackButton
      handlePress={() => router.back()}
     />
), 

}}
 />
    <View className="flex-1">
      <ScrollView className="px-[16px] bg-white">
        <View className="flex-row justify-between items-center py-4 mt-[5px]">
          <View className="flex-1">
            <Text className="text-lg font-psemibold">Statistics</Text>
          </View>
          <View className="flex-0.5">
            <Pressable className="flex-row space-x-2 items-center">
            <Text>This month</Text>
            <SimpleLineIcons name="arrow-down" size={14} color="black" />
          </Pressable>
          </View>
          
        </View>

        <View>
         <Text className="text-[#021433] text-sm">Avg Monthly Expenses <Text>(July 1  - July 30, 2024)</Text></Text>
         
         <Text className="text-[#021433] text-2xl my-2">₦20,000,000.00</Text>

        <View className="flex-row items-center space-x-1">
          <View className="flex-row  items-center">
            <Feather name="arrow-up-right" size={16} color="green" />
            <Text className="text-[#23AA26]">0.48%</Text>
          </View>
          <Text className="text-[#021433] text-xs"> vs</Text>
          <Text className="text-[#021433] text-sm font-pmedium">₦20,000,000.00</Text>
          
        </View>
         

        </View>
      </ScrollView>
    </View>
    
    </>
  )
}

export default Statistics