import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomSwitch from '../../../components/CustomSwitch'
import FormField from '../../../components/FormField'
import PasswordInput from '../../../components/PasswordInput'
import CustomButton from '../../../components/CustomButton'
import BackButton from '../../../components/BackButton'
import { router } from 'expo-router'

const SecuritySettings = () => {
    const [fingerprint, setFingerprint] = useState(false)
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row w-full px-[24px] mt-[10px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
              </View>
        <ScrollView className="h-[100%] px-[24px]">
        <View className="mt-5">
        <Text className="text-2xl font-psemibold">Security Settings</Text>
        </View>

        <View>
            <PasswordInput
             placeholder="current password"
             />
            <PasswordInput
             placeholder="New password"
             />
            <PasswordInput
             placeholder="Re-type new password"
             />

             <CustomButton
               title="Save Changes"
               containerStyles="mt-7"
              />
        </View>



        <View className="flex-row items-center mt-7 space-x-2">
                <View className="flex-1 space-y-1">
                    <Text className="text-base font-pmedium text-[#021433]">Deals and more</Text>
                    <Text className="text-[#616977] font-pregular text-xs">Swith off updates on vouchers, promos, and such. You can always find the prom</Text>
                </View>

                <View className="flex-0.5">
                    <CustomSwitch
                      value={fingerprint}
                      onChange={(value) => setFingerprint(value)}
                    />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SecuritySettings

const styles = StyleSheet.create({})