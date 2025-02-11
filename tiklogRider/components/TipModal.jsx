import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import FormField from './FormField'

const TipModal = ({
    visible,
    skipButton,
    continueButton,
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

            <View className="flex-row justify-start">
            <Pressable onPress={handlePriceBackButton}>
                <Ionicons name="arrow-back-sharp" size={26} />
            </Pressable>
            </View>
             
              <View className="w-full flex-row justify-center ">
              <Image
              source={icons.caution}
               className="w-[100px] h-[100px]"
               resizeMode='contain'
              />
              </View>
              
             {/*  */}
             <View className="w-full mb-5">
             <Text className="text-xl text-center font-psemibold">Tip Rider</Text>
             <Text className="font-pregular text-sm text-center">The rider will get the full amount</Text>
             </View>

             <FormField
              placeholder="Tip Amount"
              otherStyles="mb-10"
              />


             <View 
             className="mt-10 mb-7 w-full"
             style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,

             }}
             >

            <CustomButton
              title="skip"
              containerStyles="flex-1  bg-transparent border border-primary"
              handlePress={skipButton}
              textStyles="text-primary"
             />

             <CustomButton
              title="confirm"
              containerStyles="flex-1 "
              handlePress={continueButton}
             /> 
  
             </View>
             

             
          </View>
        </View>
    </Modal>
  )
}

export default TipModal

const styles = StyleSheet.create({})