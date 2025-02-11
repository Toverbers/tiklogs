import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'

const CompleteTransfer = ({
    visible,
    handlePress
}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
          <View className="min-h-[45%] w-full bg-white p-[24px] flex-col items-center gap-4">
             <Image
              source={icons.success}
               className="w-[100px] h-[100px]"
               resizeMode='contain'
              />
             <Text className="font-psemibold text-2xl text-center">Transfer Completed Successfully!</Text>
             <Text className="text-sm text-center">Your transfer to John Doe Samuel(0810000000) was completed successfully.</Text>

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

export default CompleteTransfer