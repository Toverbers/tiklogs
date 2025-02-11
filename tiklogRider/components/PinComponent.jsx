import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import FormField from './FormField'

const PinComponent = ({
    visible,
    pinButton,
    pinValue,
    handleChangeText,
    handlePress,
    handlePriceBackButton,
    retryButton,
}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
          <View className="min-h-[45%] w-full bg-white p-[24px] flex-col  gap-y-3 pb-12">

              <View className="w-full flex-row justify-center ">
              <Image
              source={icons.caution}
               className="w-[100px] h-[100px]"
               resizeMode='contain'
              />
              </View>
              
             {/*  */}
             <View className="w-full ">
             <Text className="text-xl text-center font-psemibold">Enter Delivery pin</Text>
             <Text className="font-pregular text-sm text-center ">Kindly tell the customer to provide you a 4-digit pickup pin that has been sent to their phone.</Text>
             </View>


             <View className="mt-10 mb-7 w-full">

            <FormField
              placeholder="1234"
              otherStyles=""
              value={pinValue}
              handleChangeText={handleChangeText}
              
             />

             <CustomButton
              title="Confirm"
              containerStyles="mt-5 "
              handlePress={pinButton}
             /> 
  
             </View>
             

             
          </View>
        </View>
    </Modal>
  )
}

export default PinComponent

const styles = StyleSheet.create({})