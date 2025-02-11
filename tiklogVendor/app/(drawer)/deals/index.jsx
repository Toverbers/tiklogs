import { View, Text, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import BackButton from '../../../components/BackButton';

const data = [
  {   id: '1',
      transaction_type: "delivery",
      title: "Welcome Deal",
      short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla arcu in urna ultricies posuere",
      long_description: "We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).",
  },
  {   
    id: '2',
      transaction_type: "deposit",
       title: "Welcome Deal",
      short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla arcu in urna ultricies posuere",
      long_description: "We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).",
  },
  {
      id: '3',
      transaction_type: "delivery",
       title: "Welcome Deal",
      short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla arcu in urna ultricies posuere",
      long_description: "We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).",
  },
  {
      id: '4',
      transaction_type: "delivery",
       title: "Welcome Deal",
      short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla arcu in urna ultricies posuere",
      long_description: "We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).",
  },
{
    id: '5',
      transaction_type: "transfer",
       title: "Welcome Deal",
      short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla arcu in urna ultricies posuere",
      long_description: "We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).",
  },
  {
      id: '6',
      transaction_type: "delivery",
       title: "Welcome Deal",
      short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla arcu in urna ultricies posuere",
      long_description: "We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).",
  },
{
    id: '7',
      transaction_type: "transfer",
       title: "Welcome Deal",
      short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla arcu in urna ultricies posuere",
      long_description: "We take your privacy and the protection of your personal information seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you use our software-as-a-service (SaaS) platform. By accessing or using our services, you consent to the practices described in this policy. Information Collection and Use: We may collect various types of information to provide and improve our services. This may include personally identifiable information (such as your name, Email address, and contact details) and non-personally identifiable information (such as usage data and analytics).",
  },

];

const Deals = () => {
  return (
    <SafeAreaView classNam="">
      
        <ScrollView  className=" px-[24px] mb-[30px]">
        <View className="flex-row w-full py-[10]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
          <View className="mt-1">
            <Text className="text-2xl font-psemibold">Tiklog Deals</Text>
          </View>

          <View className="mt-7">
            <Animated.FlatList
              data={data}
              scrollEnabled={false}
              removeClippedSubviews
              contentContainerStyle={{ gap: 12, flexDirection: 'column',}}
              //columnWrapperStyle={{justifyContent: 'space-between'}}
              keyExtractor={(item) => item.id}
              //horizontal
              //removeClippedSubviews
              //itemLayoutAnimation={transition}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <DealsItem
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


const DealsItem = ({item, index,}) => {
  //let color = isActive? theme.colors.white : theme.colors.neutra(0.8);
  //let backgroundColor = isActive? 'green' : theme.colors.white;
  return (
      <Animated.View 
      entering={FadeInDown.delay(index+200).duration(1000)} 
      exiting={FadeOutUp}
      className=" bg-white p-[16px] rounded-xl"
      >
        <Pressable 
          //onPress={()=> handleChangeCategory(isActive? null : title)} 
          onPress={()=> router.push('/(drawer)/deals/single-deal') }
          style={{}}>
          <View className="flex-row justify-between w-full space-x-3 rounded-lg">
            <View className="flex-0.5  w-[40px]  h-[40px] flex justify-center items-center bg-[#f1f1f1] rounded-full">
              <Ionicons 
              name="gift-outline" 
              size={20} />
            </View>

            <View className="flex-1 flex-col justify-center">
              
                <Text className="text-base font-psemibold text-[#021433]">{item?.title}</Text>
                <Text className="text-sm">{item?.short_description}</Text>
                {/* <Text className="">{item?.long_description}</Text> */}
              
            </View>
          </View>
        </Pressable>
      </Animated.View>
  )
}

export default Deals