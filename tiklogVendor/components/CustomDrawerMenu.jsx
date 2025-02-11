import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../constants'
import CustomButton from './CustomButton'

export default function CustomDrawerMenu(props) {
  return (
     <SafeAreaView className="h-full ">
         <View style={{flex: 1, paddingTop: 40, marginHorizontal: 24}}>

            <View className="flex-row gap-3 items-center">
            <View className=" relative w-[80px] h-[80px]">
               <Image
                  source={images.loginDp}
                  className="w-[80px] h-[80px] rounded-full border-solid border-primary border-1"
                  resizeMode="contain"
               />
               
                  <Image
                     source={icons.status}
                     className="absolute rounded-full w-[25px] h-[25px] top-2 right-[-7] "
                     resizeMode="contain"
                     //style={{tintColor: '#fff'}}
               /> 
               
            </View> 

               <View className="w-full">
                  <Text className="text-base font-psemibold">Jogn thamas Messi</Text>
                  <Text>08100000000</Text>

                  <View className="flex-row gap-2 items-center mt-[0.6px]">
                  <Pressable style={{display: 'flex', borderRadius: 3, flexDirection: 'row', alignItems: 'center', backgroundColor: 'gold', justifyContent: 'center', height: 18, width: 18,}}><Text className="text-white text-sm">4</Text></Pressable>
                  <Text>Ratings</Text>
                  </View>
                  
               </View>
            </View>
            <DrawerContentScrollView
            {...props}
            >
            <DrawerItemList {...props} />
            {/* <DrawerItem label={"Logout"} onPress={() => router.push('/bola')} /> */}
            <CustomButton
               handlePress={() => router.push('/')}
               title="Logout"
               containerStyles="w-full mt-4 bg-transparent border border-[#EF3920]" 
               textStyles="text-[#EF3920] font-pregular text-lg"
            />
            </DrawerContentScrollView>

            {/* <Text>This is another</Text> */}
            

      </View>
     </SafeAreaView>
  )
}