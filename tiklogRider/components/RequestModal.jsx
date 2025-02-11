import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { icons, images } from '../constants'

const RequestModal = ({
    nextPage,
    acceptDelivery,
    visible,
    handlePress,
    rejectDelivery,
    goToCallPage,
}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
    
    <View className="min-h-[50%] w-full bg-white p-[24px] flex-col rounded-tl-xl rounded-tr-xl  gap-y-3 pb-12">
    
  <Text className="text-sm text-center font-pregular">Incoming Request</Text>
   <View>

      <View className="w-full flex-col gap-y-2 justify-center items-center">
      <Image
          source={images.dp1}
          className="w-[56px] h-[56px]"
          />

      <View className="">
          <Text className="text-2xl font-psemibold">Jane Doe</Text>
          <StarRatingDisplay
              rating={4.5}
              starSize={16}
          />
          
      </View>
      <Text className="font-pregular text-sm">Delivery Type: <Text className="text-[#287ED0] font-psemibold">Electronics</Text></Text>
      </View>


   <View className="mt-3">
      <Text className="font-pregular text-center text-sm">Toyota Corolla:<Text className="text-[#287ED0] font-psemibold"> ABJ 123 YZ</Text></Text>
   </View>

   <View className="w-full  space-y-4 mt-5">
      <View className="flex-row gap-x-3">
          <Image
              source={icons.pickupIcon}
              className="w-[20px] h-[20px]"
          />

          <View className="gap-y-1 flex-1">
              <View className="flex-row justify-between">
              <Text className="text-xs  font-plight text-[#616977]">Pickup Location</Text>
              <Text className="text-xs  font-plight text-[#616977]">~5mins away</Text>
              </View>
              <Text numberOfLines={2} className="text-sm font-pregular text-[#021433]">100, Ebute metta str, off alagbado avenue ijebu road</Text>
          </View>
      </View>
      <View className="flex-row gap-x-3">
          <Image
              source={icons.destinationIcon}
              className="w-[20px] h-[20px]"
          />

          <View className="gap-y-1 flex-1">
              <Text className="text-xs font-plight text-[#616977]">Delivery Location</Text>
              <Text numberOfLines={2} className="text-sm font-pregular text-[#021433]">100, Ebute metta str, off alagbado avenue ijebu road</Text>
          </View>
      </View>
   </View>

   <View 
   className="mt-16 mb-7 w-full"
   style={{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,

   }}
   >
  <CustomButton
      title="Reject"
      containerStyles="flex-1  bg-transparent border border-[#EF3920] h-[50]"
      textStyles="text-[#EF3920]"
      handlePress={rejectDelivery}
      /> 

  <CustomButton
    title="Accept"
    containerStyles="flex-1  bg-primary border border-primary h-[50]"
    handlePress={acceptDelivery}
    textStyles="text-white"
   />
   </View>
   
 </View>
    </View>

    </View>
    </Modal>
  )
}

export default RequestModal

const styles = StyleSheet.create({})