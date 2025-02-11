import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'

const SearchRideModal = ({
    visible,
    handlePress,
    handlePriceBackButton,
}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
          <View className="min-h-[40%] w-full bg-white p-[24px] flex-col  gap-y-3 pb-12">

            {/* <View className="flex-row justify-start">
            <Pressable onPress={handlePriceBackButton}>
                <Ionicons name="arrow-back-sharp" size="26" />
            </Pressable>
            </View> */}
             
              <View className="flex-row justify-center mb-4">
              <View className="w-[80px] h-[80px] bg-[#021433] rounded-full justify-center items-center">
                <Ionicons name="search" size={50} color="#ffffff" />
              </View>
              </View>
              
             {/* <Text className="font-psemibold text-sm text-center">Search Ride</Text> */}
             <Text className="text-2xl text-center font-psemibold">Searching for Ride...</Text>

             

             <CustomButton
              title="Cancel"
              containerStyles="mt-7"
              handlePress={handlePress}
             /> 
          </View>
        </View>
    </Modal>
  )
}

export default SearchRideModal

const styles = StyleSheet.create({})