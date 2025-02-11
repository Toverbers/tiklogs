import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../constants'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, Ionicons, Octicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import BackButton from '../../../components/BackButton'

const Profile = () => {
  return (
        <View style={{ backgroundColor: '#fff'}}>
          <ScrollView
            contentContainerStyle={{height: '100%'}}
          >
          <StatusBar style="light" />
          <ImageBackground
           source={images.profileBg}
           className="h-[200px] w-full relative"
           resizeMode='cover'
           >
            <View className="flex-row w-full px-[24px]" style={{marginTop: 40}}>
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
        <Image
         source={images.dp1}
         className="h-[100px] w-[100px] rounded-full absolute bottom-[-50px] left-[24px]"
         resizeMode='cover'
        />
  
            <Pressable
             onPress={()=> router.push('/(drawer)/profile/update-profile')}
             className="h-[36px] w-[36px] bg-[#ffffff] rounded-full flex justify-center items-center absolute right-[24px] bottom-[-18px]">
            <Octicons name="pencil" size={20} color="#333" />
              </Pressable>
           </ImageBackground>
      

      <View className="mt-[70px] px-[24px]">
        <View>
          <Text className="text-2xl font-psemibold text-[#021433]">John Doe Messi</Text>
          <Text>John@tiklog.com</Text>
        </View>

        <View className=" mt-5 flex-col space-y-2">
          <Text className="text-sm font-psemibold text-[#021433]">Phone Number</Text>
          <Text className="text-xs">+234 8100441503</Text>
        </View>

        <View className=" mt-5 flex-col space-y-2">
          <Text className="text-sm font-psemibold text-[#021433]">Date of birth</Text>
          <Text className="text-xs">22 - 02 - 2022</Text>
        </View>
        
        {/* Address View */}
        <View>
        <View className="mt-10">
          <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-psemibold text-[#021433]">Address</Text>
          <View className="flex-0.5 flex-row space-x-3 items-center">
            <Pressable onPress={()=> router.push('/(drawer)/profile/new-address')} className="h-[36px] w-[36px] bg-[#f1f1f1] rounded-full flex justify-center items-center">
                <Ionicons name="add-outline" size={20} color="#333" />
              </Pressable>
            </View>
          </View>
          <Text>Below is your address(s)</Text>
        </View>

        <View className="mt-3">
        <View className="w-full p-[15px] border border-[#d8d3f5] rounded-lg mt-4 flex-col space-y-[10px]">
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-psemibold">Home</Text>
            <View className="flex-0.5 flex-row space-x-3 items-center">
            <Pressable className="h-[30px] w-[30px] bg-[#f1f1f1] rounded-lg flex justify-center items-center">
                <Ionicons name="trash-outline" size={18} color="#333" />
              </Pressable>
              <Pressable onPress={()=> router.push('/(drawer)/profile/update-address')} className="h-[30px] w-[30px] bg-[#f1f1f1] rounded-lg flex justify-center items-center">
              <Octicons name="pencil" size={18} color="#333" />
              </Pressable>
            </View>
          </View>

          <View>
            <Text className="text-sm">No 34, 778 street ojuelegba alami lagos, nigeria</Text>
          </View>
        </View>

        <View className="w-full p-[15px] border border-[#d8d3f5] rounded-lg mt-4 flex-col space-y-[10px]">
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-psemibold">Office</Text>
            <View className="flex-0.5 flex-row space-x-3 items-center">
            <Pressable className="h-[30px] w-[30px] bg-[#f1f1f1] rounded-lg flex justify-center items-center">
                <Ionicons name="trash-outline" size={18} color="#333" />
              </Pressable>
              <Pressable className="h-[30px] w-[30px] bg-[#f1f1f1] rounded-lg flex justify-center items-center">
              <Octicons name="pencil" size={18} color="#333" />
              </Pressable>
            </View>
          </View>

          <View>
            <Text className="text-sm">No 34, 778 street ojuelegba alami lagos, nigeria</Text>
          </View>
        </View>
        </View>
        </View>
      </View>
          </ScrollView>

    </View>
  )
}

export default Profile