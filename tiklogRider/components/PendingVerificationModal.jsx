import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../constants'
import CustomButton from './CustomButton'

const PendingVerificationModal = ({
    visible,
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
          <View className="min-h-[45%] w-full bg-white p-[24px] flex-col rounded-tl-xl rounded-tr-xl  gap-y-3 pb-12">

            {/* <View className="flex-row justify-start">
            <Pressable onPress={handlePriceBackButton}>
                <Ionicons name="arrow-back-sharp" size={26} />
            </Pressable>
            </View> */}
             
              <View className="w-full flex-row justify-center ">
              <Image
              source={icons.caution}
               className="w-[100px] h-[100px]"
               resizeMode='contain'
              />
              </View>
              
             {/*  */}
             <View className="w-full mb-14">
             <Text className="text-xl text-center font-psemibold">Verification Pending</Text>
             <Text className="font-pregular text-sm text-center mb-10">Thanks for completing onboarding! Your account is under review. We'll notify you once verification is complete. Feel free to explore the app while you wait.</Text>
             </View>


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
              title="Continue"
              containerStyles="flex-1  bg-transparent border border-primary"
              handlePress={handlePress}
              textStyles="text-primary"
             />
  
             </View>
             

             
          </View>
        </View>
    </Modal>
  )
}

export default PendingVerificationModal

const styles = StyleSheet.create({})