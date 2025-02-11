import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import FormField from './FormField'
import StarRating from 'react-native-star-rating-widget';

const RatingModal = ({
    visible,
    handlePress,
    handlePriceBackButton,
    retryButton,
    continueButton,
    value,
    onChangeText,
    userRating,
    setUserRating,
    skipButton,
    confirmButton,

}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
          <View className="min-h-[25%] w-full bg-white p-[24px] flex-col  gap-y-1 pb-8 ">

            <View className="flex-row justify-start">
            <Pressable onPress={handlePriceBackButton}>
                <Ionicons name="arrow-back-sharp" size={26} />
            </Pressable>
            </View>
             
              <View className="w-full flex-row justify-center ">
              <Image
              source={icons.starIcon}
               className="w-[100px] h-[100px]"
               resizeMode='contain'
              />
              </View>
              
             {/*  */}
             <View className="w-full mb-5">
             <Text className="text-xl text-center font-psemibold">How was your Trip</Text>
             <Text className="font-pregular text-sm text-center ">We hope you enjoyed your ride? Kindly rate your experience below.</Text>
             </View>

             <View className=" w-full justify-center items-center">
                <StarRating
                    rating={userRating}
                    onChange={setUserRating}
                    starSize={46}
                />
             </View>

             
             <FormField
               placeholder="Enter Comment"
               value={value}
               onChangeText={onChangeText}
               //containerStyles="flex-1 mb-10"
               otherStyles="mb-5"
              />
             

             <View 
             className="w-full mb-5"
             style={{
              //flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,

             }}
             >

            <CustomButton
              title="Skip"
              containerStyles="flex-1  bg-transparent border border-primary h-[45px]"
              handlePress={skipButton}
              textStyles="text-primary"
             />

             <CustomButton
              title="Confirm"
              containerStyles="flex-1 h-[45px]"
              handlePress={confirmButton}
             /> 
  
             </View>

             

             



          
             

             
          </View>
        </View>
    </Modal>
  )
}

export default RatingModal

const styles = StyleSheet.create({})