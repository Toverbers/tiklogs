import { View, Text, Pressable, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../../../components/BackButton'

const settingsData = [
  {
    id: '1',
    name: 'Bank Account',
    icon: 'card-outline',
    text: 'Add, Remove and manage bank Account',
    link: 'cards',
  },

  {
    id: '2',
    name: 'Notifications',
    icon: 'notifications-outline',
    text: 'manage notification settings',
    link: 'notification-settings',
  },
 

  {
    id: '3',
    name: 'Account Security',
    icon: 'settings-outline',
    text: 'manage passwords and biometrics',
    link: 'security-settings',
  },
  {
    id: '4',
    name: 'Vehicles',
    icon: 'car-outline',
    text: 'Manage your vehicles',
    link: 'security-settings',
  },
  {
    id: '5',
    name: 'License',
    icon: 'newspaper-outline',
    text: 'Update License if expired',
    link: 'security-settings',
  },
];
const otherSettngsData = [
  {
    id: '1',
    name: 'Help center',
    icon: 'help-outline',
    text: 'Informartion Account',
    link: 'help',
  },
  {
    id: '2',
    name: 'Terms and Condition',
    icon: 'reader-outline',
    text: 'Read our Terms and condition',
    link: 'terms',
  },
  {
    id: '3',
    name: 'Privacy Policy',
    icon: 'shield-checkmark-outline',
    text: 'Read our privacy policy',
    link: 'privacy-policy',
  },
];

const Settings = () => {
  return (
    <SafeAreaView className="bg-[#fff] flex-1">
      <View className="flex-row w-full px-[24px] mt-[10px]">
          <BackButton
            backButtonContainerStyle="bg-[#fff] rounded-full"
            handlePress={()=> router.back()}
          />
           </View>
      <ScrollView contentContainerStyle={{height: '100%',  backgroundColor: '#f1f1f1',}}>
        {/* <View className="bg-white p-[24px]">
          <Text className="text-2xl font-psemibold">Settings</Text>
        </View> */}

        <View className="p-[24px] bg-white">
        <Text className="text-xl font-psemibold mb-6">Settings</Text>
        <FlatList
            data={settingsData}
            scrollEnabled={false}
            //removeClippedSubviews
            contentContainerStyle={{ gap: 10, flexDirection: 'column', backgroundColor: '#fff',}}
            //columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={(item) => item?.id}
            //horizontal
            //removeClippedSubviews
            //itemLayoutAnimation={transition}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => router.push(`/(drawer)/settings/${item?.link}`)}>
                <View style={{}} className="flex-row items-center space-x-4 space-y-2" >
                <View className="flex-0.5 w-[36px] h-[36px]  border-[#f1f1f1] justify-center items-center rounded-md bg-[#E2E4E9]">
                 <Ionicons name={item?.icon} size={20} color="#333" />
                </View>
                <View className="flex-1">
                  <Text style={{ }} className="text-Base text-[#021433] font-pmedium">{item?.name}</Text>
                  <Text style={{ }} className="text-xs text-[#616977]">{item?.text}</Text>
                </View>
                
                <View className="flex-0.5">
                <Ionicons name="chevron-forward" size={20} color="#333" />
                </View>
              </View>
              </TouchableOpacity>
        )}
          
          />
        </View>

        <View className="mt-6 p-[24px] bg-white">
        <Text className="text-xl font-psemibold mb-6">Others</Text>
        <FlatList
            data={otherSettngsData}
            scrollEnabled={false}
            
            contentContainerStyle={{ gap: 10, flexDirection: 'column', backgroundColor: '#fff',}}
            //columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={(item) => item?.id}
            //horizontal
            //removeClippedSubviews
            //itemLayoutAnimation={transition}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity 
              onPress={() => router.push(`/(drawer)/settings/${item?.link}`)}
              >
                <View style={{}} className="flex-row items-center space-x-4 space-y-2">
                <View className="flex-0.5 w-[36px] h-[36px] border border-[#f1f1f1] justify-center items-center rounded-md bg-[#E2E4E9]">
                 <Ionicons name={item?.icon} size={20} backgroundColor={{}} color="#333" />
                </View>
                <View className="flex-1">
                  <Text style={{ }} className="text-Base text-[#021433] font-pmedium">{item?.name}</Text>
                  <Text style={{ }} className="text-xs text-[#616977]">{item?.text}</Text>
                </View>
                
                <View className="flex-0.5">
                <Ionicons name="chevron-forward" size={20} color="#333" />
                </View>
              </View>
              </TouchableOpacity>
        )}
          
          />
        </View>
      </ScrollView>
      <StatusBar style='dark' backgroundColor='#fff' />
    </SafeAreaView>
  )
}

export default Settings