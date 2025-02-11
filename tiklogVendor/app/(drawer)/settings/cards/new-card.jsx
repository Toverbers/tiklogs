import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../../../components/FormField'
import CustomButton from '../../../../components/CustomButton'
import { Ionicons } from '@expo/vector-icons'
import CustomSwitch from '../../../../components/CustomSwitch'
import BackButton from '../../../../components/BackButton'
import { router } from 'expo-router'

const NewCard = () => {
    const [saveMe, setSaveMe] = useState(false)
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row w-full px-[24px] mt-[10px]">
          <BackButton
            backButtonContainerStyle="bg-[#fff] rounded-full"
            handlePress={()=> router.back()}
          />
           </View>
        <ScrollView contentContainerStyle={{height: '100%', paddingHorizontal: 24}}>
        <View className="mt-[12px]">
         <Text className="text-lg font-psemibold text-[#021433]">NewCard</Text>
        </View>

        <View>
            <FormField
             placeholder="card number"
             />

             <View className="flex-row space-x-2">
                <View className="w-[65%]">
                <FormField
                    placeholder="CVV"
                    />
                </View>
                <View className="flex-1">
                <FormField
                    placeholder="MM/YY"
                    />
                </View>
             </View>

             <CustomButton 
               title="Add card"
               containerStyles="mt-10"
               preAppend={
                <Ionicons name="add-outline" size={22} color="#fff" />
               }
             />
  
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default NewCard

const styles = StyleSheet.create({})