import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'

const DeliveryPriceModal = ({
    visible,
    handlePress,
    handleRidercloseButton,
}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
          <View className="min-h-[35%] w-full bg-white p-[24px] flex-col  gap-y-1 pb-8">

            <View className="flex-row justify-start">
            <Pressable onPress={handleRidercloseButton}>
                <Ionicons name="arrow-back-sharp" size={26} />
            </Pressable>
            </View>
             
              <View className="flex-row justify-center mb-4">
              <View className="w-[45px] h-[45px] bg-[#021433] rounded-full justify-center items-center">
                <Ionicons name="wallet-outline" size={28} color="#ffffff" />
              </View>
              </View>
              
             <Text className="font-psemibold text-sm text-center">Delivery Amount</Text>
             <Text className="text-2xl text-center font-psemibold">NGN 3,000.00</Text>

             <View className="px-[24px] gap-y-4">
                <View className="flex-row gap-x-3">
                    <Image
                        source={icons.pickupIcon}
                        className="w-[20px] h-[20px]"
                    />

                    <View className="gap-y-1">
                        <Text className="text-xs  font-plight text-[#616977]">Pickup Location</Text>
                        <Text className="text-sm font-pregular text-[#021433]">100, Ebute metta str, off alagbado avenue ijebu road</Text>
                    </View>
                </View>
                <View className="flex-row gap-x-3">
                    <Image
                        source={icons.destinationIcon}
                        className="w-[20px] h-[20px]"
                    />

                    <View className="gap-y-1">
                        <Text className="text-xs  font-plight text-[#616977]">Delivery Location</Text>
                        <Text className="text-sm font-pregular text-[#021433]">100, Ebute metta str, off alagbado avenue ijebu road</Text>
                    </View>
                </View>
             </View>

             <CustomButton
              title="Continue"
              containerStyles="mt-7"
              handlePress={handlePress}
             />
          </View>
        </View>
    </Modal>
  )
}

export default DeliveryPriceModal

const styles = StyleSheet.create({})