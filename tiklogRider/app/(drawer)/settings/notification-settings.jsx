import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomSwitch from '../../../components/CustomSwitch'
import BackButton from '../../../components/BackButton'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const NotificationSettings = () => {

    const [deals, setDeals] = useState(false)
    const [update, setUpdate] = useState(true)
    const [email, setEmail] = useState(false)

  return (
    <SafeAreaView className="bg-white">
      <StatusBar backgroundColor='#1F1F76' />
        <View className="flex-row w-full px-[24px] mt-[10px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
              </View>

        <ScrollView className="px-[24px] h-[100%] bg-white">
        <View className="mt-5">
        <Text className="text-2xl font-psemibold">NotificationSettings</Text>
        </View>

        <View className="mt-5">
            <View className="flex-row items-center mb-5  space-x-2">
                <View className="flex-1 space-y-1">
                    <Text className="text-base font-pmedium text-[#021433]">Deals and more</Text>
                    <Text className="text-[#616977] font-pregular text-xs">Swith off updates on vouchers, promos, and such. You can always find the prom</Text>
                </View>

                <View className="flex-0.5">
                    <CustomSwitch
                      value={deals}
                      onChange={(value) => setDeals(value)}
                    />
                </View>
            </View>

            <View className="flex-row items-center mb-5 space-x-2">
                <View className="flex-1 space-y-1">
                    <Text className="text-base font-pmedium text-[#021433]">Update System</Text>
                    <Text className="text-[#616977] font-pregular text-xs">Updates o your live orders, trips, transaction history, and account</Text>
                </View>

                <View className="flex-0.5">
                    <CustomSwitch
                      value={update}
                      onChange={(value) => setUpdate(value)}
                    />
                </View>
            </View>

            <View className="flex-row items-center mb-5 space-x-2">
                <View className="flex-1 space-y-1">
                    <Text className="text-base font-pmedium text-[#021433]">Email Notification</Text>
                    <Text className="text-[#616977] font-pregular text-xs">Promotions, Tiklog recomendations, and announcements in your email</Text>
                </View>

                <View className="flex-0.5">
                    <CustomSwitch
                      value={email}
                      onChange={(value) => setEmail(value)}
                    />
                </View>
            </View>
        </View>
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default NotificationSettings

const styles = StyleSheet.create({})