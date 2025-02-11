import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../../../components/BackButton'
import { router } from 'expo-router'

const SingleDeal = () => {
  return (
    <SafeAreaView>
      <View className="flex-row w-full px-[24px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
        <ScrollView className="h-[100%]">
            <View>
            < Text>SingleDeal</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SingleDeal

const styles = StyleSheet.create({})