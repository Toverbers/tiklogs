import { View, Text, ScrollView, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../../constants'
import Animated, { FadeInDown, FadeInRight, FadeOutUp } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import BackButton from '../../../components/BackButton';



const data = [
  {
      id: "01",
      fee: "2000",
      reference: "#555jfj69d",
      date: "Sep 18",
      status: "successful",
      transaction_type: "delivery",
  },
  {
      id: "02",
      fee: "5000",
      reference: "John thamsa",
      date: "Sep 18",
      status: "successful",
      transaction_type: "deposit"
  },
  {
      id: "03",
      fee: "30000",
      reference: "#fjjjhf000",
      date: "Sep 18",
      status: "failed",
      transaction_type: "delivery"
  },
  {
      id: "04",
      fee: "3000",
      reference: "#788ddhjjd7",
      date: "Sep 18",
      status: "successful",
      transaction_type: "delivery"
  },
{
      id: "05",
      fee: "Bike",
      reference: "Jonny James",
      date: "Sep 18",
      status: "successful",
      transaction_type: "transfer"
  },
  {
    id: "06",
    fee: "2000",
    reference: "#555jfj69d",
    date: "Sep 18",
    status: "successful",
    transaction_type: "delivery",
},
{
    id: "07",
    fee: "5000",
    reference: "John thamsa",
    date: "Sep 18",
    status: "successful",
    transaction_type: "deposit"
},
{
    id: "08",
    fee: "30000",
    reference: "#fjjjhf000",
    date: "Sep 18",
    status: "failed",
    transaction_type: "delivery"
},
{
    id: "09",
    fee: "3000",
    reference: "#788ddhjjd7",
    date: "Sep 18",
    status: "successful",
    transaction_type: "delivery"
},
{
    id: "10",
    fee: "Bike",
    reference: "Jonny James",
    date: "Sep 18",
    status: "successful",
    transaction_type: "transfer"
}
];

const Wallet = () => {
  return (
    <SafeAreaView className="bg-[#F6F8FA] flex-1">
      <View className="flex-row w-full px-[24px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
    <ScrollView
        contentContainerStyle={{
          
          paddingHorizontal: 24,
          
        }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="h-[160px] bg-primary rounded-2xl mt-4 flex-col justify-center p-[16px] flex space-y-2">
         <Text className="text-sm text-white">Wallet Balance</Text>
         <Text className="text-[32px] text-white font-psemibold">₦20,000,000.00</Text>
        </View>

        <View className="flex-row mt-6 justify-center items-center space-x-10">
          <TouchableOpacity onPress={()=> router.push('/(drawer)/wallet/transfer-funds') }>
          <View className="space-y-1 items-center">
            <Image
              source={icons.addFund}
              className="w-[52px] h-[52px] mb-2 "
              resizeMode="contain"
              />
              <Text>Add Funds</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> router.push('/(drawer)/wallet/fund-wallet') }>
          <View className="space-y-1 items-center">
            <Image
              source={icons.transferFund}
              className="w-[52px] h-[52px] mb-2 items-center justify-center"
              resizeMode="contain"
              />
              <Text>Add Funds</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View className="mt-8">
          <Text className="text-base font-psemibold text-[#0A0D14]">Transactions</Text>
          
          
          <Animated.FlatList
            data={data}
            scrollEnabled={false}
            removeClippedSubviews
            contentContainerStyle={{ gap: 10, flexDirection: 'col',}}
            //columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={(item) => item.id}
            //horizontal
            //removeClippedSubviews
            //itemLayoutAnimation={transition}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TransactionItem
                item={item}
                index={index}
              />
        )}
          />

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


const TransactionItem = ({item, index,}) => {
  //let color = isActive? theme.colors.white : theme.colors.neutra(0.8);
  //let backgroundColor = isActive? 'green' : theme.colors.white;
  return (
      <Animated.View 
      entering={FadeInDown.delay(index+200).duration(1000)} 
      exiting={FadeOutUp}
      className="mt-4"
      >
        <Pressable 
          //onPress={()=> handleChangeCategory(isActive? null : title)} 
          onPress={()=> router.push('/(drawer)/wallet/transaction-details') }
          style={{}}>
          <View className="flex-row justify-between w-full space-x-3 ">
            <View className="flex-0.5  w-[40px]  h-[40px] flex justify-center items-center bg-white rounded-full">
              <Ionicons 
              name={`${item?.transaction_type === 'deposit' ? "wallet-outline"  : item?.transaction_type === 'transfer' ?  "arrow-up" : "add"}`} 
              size={20} />
            </View>

            <View className="flex-1 flex-col justify-center">
              <View className="flex-1 flex-row space-y-2 justify-between">
                <Text className="text-sm font-pmedium text-[#021433]">Wallet Deposite</Text>
                <Text className={`${item?.transaction_type === 'deposit' ? 'text-[#23AA26]' : item?.transaction_type === 'transfer' ? 'text-[#EF3920]' : 'text-[#333]'} font-pregular`}>{item?.fee}</Text>
              </View>
              <View className="flex-1 flex-row space-y-2  justify-between">
                <Text className="text-[#616977]">{item?.reference}</Text>
                <Text className="text-[#616977] font-plight">{item?.date}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
  )
}

export default Wallet