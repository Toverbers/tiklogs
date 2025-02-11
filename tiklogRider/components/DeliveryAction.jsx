import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const DeliveryAction = ({
    visible,
    startDeliveryButton,
    cancelDeliveryButton,
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
          <View className="min-h-[25%] w-full bg-white p-[24px] flex-col  gap-y-3 pb-12 rounded-tl-3xl rounded-tr-3xl">
             
              <View className="w-full flex-row justify-center ">
              <Image
              source={icons.caution}
               className="w-[100px] h-[100px]"
               resizeMode='contain'
              />
              </View>
              
             {/*  */}
             <View className="w-full mb-2">
             <Text className="font-pregular text-sm text-center mb-3">Kindly click on the buton below to start delivery processes</Text>
             </View>


             <View 
             className=" w-full"
             >

            <CustomButton
              title="Start Delivery"
              containerStyles=" bg-primary "
              handlePress={startDeliveryButton}
              textStyles="text-white"
             />

             <CustomButton
              title="Cancel Request"
              containerStyles="bg-transparent border border-primary mt-5"
              textStyles="text-primary"
              handlePress={cancelDeliveryButton}
             /> 
  
             </View>
             

             
          </View>
        </View>
    </Modal>
  )
}

export default DeliveryAction

const styles = StyleSheet.create({})