import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../../components/FormField'
import CustomButton from '../../../components/CustomButton'
import Animated, { FadeInRight } from 'react-native-reanimated'
import CompleteTransfer from '../../../components/CompleteTransfer'
import { router } from 'expo-router'
import BackButton from '../../../components/BackButton'

const data = [
    {
        id: "01",
        amount: "1000",
    },
    {
        id: "02",
        amount: "2000",
    },
    {
        id: "03",
        amount: "5000",
    },
    {
        id: "04",
        amount: "10,000",
    },
	{
        id: "05",
        amount: "20,000",
    }
];

const TransferFunds = () => {
    const [showCompleteModal, setShowCompleteModal] = useState(false);

    const openCompleteModal = () => {
        setShowCompleteModal(true)
    }
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row w-full px-[24px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
        <ScrollView
        contentContainerStyle={{
        height: '100%',
            paddingHorizontal: 24,
            
        }}
        >
            <View className="mt-10 mb-10">
              <Text className="text-2xl text-[#021433] font-psemibold">Transfer Funds</Text>
              <Text className="text-sm text-[#616977]">Transfer funds securely to other Tiklog users.</Text>
            </View>
            <View>
                <FormField
                  placeholder="Enter user phone number"
                 />
            </View>

            <View className=" bg-[#F3F3F3] mt-10 px-3 py-5 rounded-xl">
                <Text className="text-base text-[#0A0D14] font-pmedium">John Doe Samuel</Text>
                <Text className="text-sm text-[#0A0D14] font-pregular">0810-000-0000</Text>
            </View>

            <View className="mt-10">
            <FlatList
                horizontal
                contentContainerStyle={styles.flatlistContainer}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item?.id}
                renderItem={({item, index}) => (
                    <PriceItem
                    title={item}
                    index={index}
                    />
            )}
                />
            </View>

            <CustomButton
              title="Continue"
              containerStyles="mt-10"
              handlePress={openCompleteModal}
             />


             <View>
                <CompleteTransfer
                  visible={showCompleteModal}
                  handlePress={()=> router.navigate('wallet')}
                 />
             </View>

            
        </ScrollView>
    </SafeAreaView>
  )
}

const PriceItem = ({title, index, isActive, handleChangeCategory}) => {
    let color = isActive? "#fff" : "gray";
    let backgroundColor = isActive? '#1F1F76' : "#F3F3F3";
    return (
        <Animated.View entering={FadeInRight.delay(index+200).duration(1000)}>
          <Pressable 
          //onPress={()=> handleChangeCategory(isActive? null : title)} 
          style={[styles.category, {backgroundColor}]}
          >
            <Text style={[styles.title, {color}]}>{title?.amount}</Text>
          </Pressable>
        </Animated.View>
    )
}

export default TransferFunds

const styles =  StyleSheet.create({
    flatlistContainer: {
     paddingHorizontal: 4,
     gap: 8,
    },
 
    category: {
     padding: 10,
     paddingHorizontal: 15,
     borderWidth: 0.5,
     borderColor: 'gray',
     backgroundColor: 'white',
     borderRadius: 7,
     borderCurve:'continuous'
    },
    title: {
     fontSize: 14,
     fontWeight: 600,
    }
 });