import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const CompletedModal = ({
    visible,
    handlePress,
    handlePriceBackButton,
    retryButton,
    continueButton
}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
          <View className="min-h-[45%] w-full bg-white p-[24px] flex-col  gap-y-3 pb-12">

            <View className="flex-row justify-start">
            <Pressable onPress={handlePriceBackButton}>
                <Ionicons name="arrow-back-sharp" size={26} />
            </Pressable>
            </View>
             
              <View className="w-full flex-row justify-center ">
              <Image
              source={icons.success}
               className="w-[100px] h-[100px]"
               resizeMode='contain'
              />
              </View>
              
             {/*  */}
             <View className="w-full mb-7">
             <Text className="text-xl text-center font-psemibold">Delivery Completed</Text>
             <Text className="font-pregular text-sm text-center mb-10">Your delivery has been successfully completed. Thank you for choosing our service.</Text>
             </View>

             <CustomButton
              title="Continue"
              containerStyles=" "
              handlePress={continueButton}
             /> 
             

             
          </View>
        </View>
    </Modal>
  )
}

export default CompletedModal

const styles = StyleSheet.create({})