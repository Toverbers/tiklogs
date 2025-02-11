import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import FormField from '../../components/FormField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../../components/CustomButton'
import BackButton from '../../components/BackButton'

const EditDelivery = () => {
  return (
    <SafeAreaView className=" h-full  bg-white">
      <View className="flex-row w-full px-[24px]">
        <BackButton
          handlePress={()=> router.back()}
         />
      </View>
      {/* <View>
      <Text>CreateDelivery</Text>
      <Pressable onPress={()=> router.push('/delivery/delivery-page')}><Text>Go to delivery page</Text></Pressable>
      <Pressable onPress={()=> router.push('/login')}><Text>Go to login</Text></Pressable>
    </View> */}
    <KeyboardAwareScrollView
     contentContainerStyle={{backgroundColor: '#f1f1f1'}}
    >

    
    
     <View className="px-[24px] bg-white py-[26px] w-full">
      <View className="flex-row gap-x-3 justify-between items-center w-full">
        <View className="flex-0.5 "><Text className="flex-0.5 text-base ">From</Text></View>
          <Text numberOfLines={1} className="flex-1 text-base">56 Opebi road, Sabo Yaba.</Text>
          <Pressable className="px-3 py-1 rounded-xl bg-[#F6F8FA]"><Text className="text-base text-[#287ED0]">Edit</Text></Pressable>
        </View>
        <View className="flex-row gap-x-3 justify-between items-center mt-3 w-full box-border">
          <View className="flex-0.5 "><Text className="flex-0.5 text-base ">To</Text></View>
          <Text numberOfLines={1} className=" flex-1 text-base text-[#021433]">Allentown, 4140 Parker Rd, Ikeja..</Text>
          <Pressable className="px-3 py-1 rounded-xl bg-[#F6F8FA]"><Text className="text-base text-[#287ED0]">Edit</Text></Pressable>
      </View>
     </View>

     <View className=" bg-white px-[24px] py-[30px]">
      <Text className="text-lg font-psemibold ">Receiver's Information</Text>

      <FormField
      placeholder="receiver's name" 
      contentContainerStyle=""
      />

      <FormField 
      placeholder="phone" 
      keyboardType="phone-pad"
      />
     </View>

     <View className="mt-4 bg-white px-[24px] py-[30px]">
      <Text className="text-lg font-psemibold ">Delivery Information</Text>

      <FormField
      placeholder="Delivery Type" 
      contentContainerStyle=""
      />

      <FormField 
      placeholder="Item" 
      
      />
      <FormField 
      placeholder="Estimated Value" 
      keyboardType="numeric"
      
      />
      <FormField 
      placeholder="Estimated Value" 
      multiline = {true}
      numberOfLines = {4}
      />
     </View>

     <View className="px-[24px] pb-10 bg-white">
      <CustomButton
       handlePress={()=> router.push('/delivery-page')}
        title="Continue"
      />
     </View>

    
    </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default EditDelivery

const styles = StyleSheet.create({})