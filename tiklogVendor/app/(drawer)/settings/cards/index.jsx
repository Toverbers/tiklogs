import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated from 'react-native-reanimated'
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { icons } from '../../../../constants';
import CustomButton from '../../../../components/CustomButton';
import { router } from 'expo-router';
import BackButton from '../../../../components/BackButton';
import { StatusBar } from 'expo-status-bar';

const cardsData = [
    { 
      id: '1',
      name: 'card',
      icon: 'card-outline',
      text: 'Add, Remove and manage bank card',
      link: 'cards',
      cardType: 'Debit',
      card: 'Master card',
      last4Digit: 6679,
      cardImage: 'master',
    },
  
    { 
      id: '2',
      name: 'Account Security',
      icon: 'settings-outline',
      text: 'manage passwords and biometrics',
      link: 'account-security',
      cardType: 'Credit',
      card: 'Visit card',
      last4Digit: 6679,
      cardImage: 'visa',
    },
  ];

const Cards = (props) => {
    const onSwipeableOpen = () => {
        
      };
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row w-full px-[24px] mt-[10px]">
          <BackButton
            backButtonContainerStyle="bg-[#fff] rounded-full"
            handlePress={()=> router.back()}
          />
           </View>
        <ScrollView contentContainerStyle={{height: '100%', }}>
            <View className="px-[24px] mt-[12px]">
              <Text className="text-lg font-psemibold text-[#021433]">Bank Cards</Text>
            </View>

            <View className="flex-col justify-between min-h-[90%]">

            <View>
                <Animated.FlatList
                   data={cardsData}
                   scrollEnabled={false}
                   removeClippedSubviews
                   contentContainerStyle={{ gap: 10, flexDirection: 'col', backgroundColor: '#fff', }}
                   item
                   //columnWrapperStyle={{justifyContent: 'space-between'}}
                   keyExtractor={(item) => item.id}
                   //horizontal
                   //removeClippedSubviews
                   //itemLayoutAnimation={transition}
                   showsVerticalScrollIndicator={false}
                   renderItem={({item, index}) => (
                     <Swipeable
                     enableTrackpadTwoFingerGesture
                        friction={1.4}
                        overshootRight={false}
                        rightThreshold={140}
                        onSwipeableOpen={onSwipeableOpen}
                       //renderRightActions={leftSwipe}
                       renderLeftActions={leftSwipe}
                     >
                        <Pressable 
                        //onPress={() => router.push(`/(drawer)/settings/${item?.link}`)} 
                        className="px-[24px] py-[16px]">
                       <View style={{}} className="flex-row items-center space-x-4 space-y-1" >
                       <View className="flex-0.5  justify-center items-center ">
                        {/* <Ionicons name={item.icon} size={20} backgroundColor={{}} color="#333" /> */}
                        <Image
                          source={icons[item.cardImage]}
                          className="h-[36px] w-[36px]"
                          resizeMode='contain'
                         />
                       </View>
                       <View className="flex-1 space-y-[5px]">
                         <Text style={{ }} className="text-Base text-[#021433] font-pmedium">{item.card}</Text>
                         <Text style={{ }} className="text-xs text-[#616977]">{item.cardType}   <Text className="mx-2">****{item.last4Digit }</Text></Text>
                       </View>
                       
                       <View className="flex-0.5">
                       <Ionicons name="chevron-forward" size={20} color="#333" />
                       </View>
                     </View>
                     </Pressable>
                     </Swipeable>
               )}
                 />
            </View>

            <View className="px-[24px] mb-5">
                <CustomButton
                title="Add new Card"
                handlePress={()=> router.push('/(drawer)/settings/cards/new-card')}
                />
            </View>

            </View>
        </ScrollView>
        <StatusBar backgroundColor='#1F1F76' />
    </SafeAreaView>
  )
}

const leftSwipe = () => {
    
    return(
        <Pressable className="bg-red-100 p-[10px] justify-center items-center w-[100px]">
            <View >
            <Animated.Text className="text-white" >Delete</Animated.Text>
        </View>
        </Pressable>
    )
}

export default Cards

const styles = StyleSheet.create({})