import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'

const LoginModal = ({
    visible,
    handlePress,
}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
          <View className="min-h-[45%] w-full bg-white p-[24px] flex-col items-center ">
             <Image
              source={images.loginDp}
               className="w-[100px] h-[100px]"
              />
             <Text className="font-psemibold text-2xl">Welcome John Thamas</Text>
             <Text className="text-sm text-center">Ready for another day of smooth rides and happy deliveries?</Text>

             <CustomButton
              title="Let's Go"
              containerStyles="mt-7"
              handlePress={handlePress}
             />
          </View>
        </View>
    </Modal>
  )
}

export default LoginModal