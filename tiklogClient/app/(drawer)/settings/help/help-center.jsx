import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../../constants/images'
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../../../../components/BackButton'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const HelpCenter = () => {
  return (
    <View style={{}}>  
            {/* <View className=" px-[24px] my-[10px]">
                <Text className="text-2xl font-psemibold">Privacy Policy</Text>
            </View> */}

            <ImageBackground
              className=" w-full pt-[30px]"
              source={images.bg}
              //resizeMode=''
            >
              <View className="flex-row w-full px-[24px] mt-[10px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
              </View>
                <View className=" p-[24px]">
                 <Text className="text-3xl text-white font-psemibold">Help Center</Text>
                 <Text className="text-sm text-white mt-2">Hello there, How can we help?</Text>
                </View>

            </ImageBackground>

       <ScrollView className="h-[100%] p-[24px]">
         <View className="space-y-2">
            <View className="flex-row space-x-2">
                <View className="flex-1 bg-white rounded-xl p-[16px] min-h-[100px] flex-col space-y-2">
                    <View className="w-[40px] h-[40px] justify-center items-center bg-[#f1f1f1] rounded-full">
                      <Ionicons name='chatbubble-outline' size={24} />
                    </View>
                    <Text className="text-base font-pmedium text-[#021433]">Chat with us</Text>
                    <Text className="text-xs text-[#616977]">Start a conversation on live chat</Text>
                </View>

                <View className="flex-1 bg-white rounded-xl p-[16px] min-h-[100px] flex-col space-y-2">
                    <View className="w-[40px] h-[40px] justify-center items-center bg-[#f1f1f1] rounded-full">
                      <Ionicons name='call-outline' size={24} />
                    </View>
                    <Text className="text-base font-pmedium text-[#021433]">Call us</Text>
                    <Text className="text-xs text-[#616977]">Start a conversation on via phone</Text>
                </View>
            </View>

            <View className="bg-white min-h-[100px] rounded-xl p-[16px] flex-col space-y-2">
               <View className="w-[40px] h-[40px] justify-center items-center bg-[#f1f1f1] rounded-full">
                      <Ionicons name='call-outline' size={24} />
                    </View>
                    <Text className="text-base font-pmedium text-[#021433]">Chat with us</Text>
                    <Text className="text-xs text-[#616977]">Start a conversation on live chat</Text>
                </View>
         </View>


         <View className="mt-5">
            <Text className="text-xl font-psemibold">Help Topics</Text>

            <View>
                
            </View>
        </View>
        </ScrollView>
        <StatusBar backgroundColor='#1F1F76' />
    </View>
  )
}

export default HelpCenter

const styles = StyleSheet.create({})