import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../../../../components/BackButton'
import { router, Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { CurvedTransition, FadeInDown, FadeInRight, FadeOutUp } from 'react-native-reanimated'
import { Entypo, Ionicons } from '@expo/vector-icons'


const notificationData = [
  {
    id: "01",
    read: "unread",
    title: "Deliveery Completed",
    reference: "#555jfj69d",
    date: "Sep 18",
    status: "successful",
    transaction_type: "delivery",
},
{
    id: "02",
    read: "unread",
    title: "System Maintainance",
    reference: "John thamsa",
    date: "Sep 18",
    status: "successful",
    transaction_type: "system"
},
{
    id: "03",
    read: "unread",
    title: "Deals",
    reference: "#fjjjhf000",
    date: "Sep 18",
    status: "failed",
    transaction_type: "deals"
},
{
    id: "04",
    read: "read",
    title: "News",
    reference: "#788ddhjjd7",
    date: "Sep 18",
    status: "successful",
    transaction_type: "news"
},
{
    id: "05",
    read: "read",
    title: "News",
    reference: "Jonny James",
    date: "Sep 18",
    status: "successful",
    transaction_type: "news"
},
{
  id: "06",
  read: "read",
  title: "Incoming Delivery",
  reference: "#555jfj69d",
  date: "Sep 18",
  status: "successful",
  transaction_type: "delivery",
},
{
  id: "07",
  read: "read",
  title: "Deals",
  reference: "John thamsa",
  date: "Sep 18",
  status: "successful",
  transaction_type: "deals"
},
{
  id: "08",
  read: "read",
  title: "Delivery Completed",
  reference: "#fjjjhf000",
  date: "Sep 18",
  status: "failed",
  transaction_type: "delivery"
},
{
  id: "09",
  read: "read",
  title: "System Update",
  reference: "#788ddhjjd7",
  date: "Sep 18",
  status: "successful",
  transaction_type: "system"
},
{
  id: "10",
  read: "read",
  title: "Delivery",
  reference: "Jonny James",
  date: "Sep 18",
  status: "successful",
  transaction_type: "delivery"
}
];

const tabData = [
  {
      id: "01",
      tab: "All",
  },
  {
      id: "02",
      tab: "Read",
  },
  {
      id: "03",
      tab: "Unread",
  },
  
];

const Notification  = () => {

  const transition = CurvedTransition.delay(100);
  return (
    <SafeAreaView className="flex-1 bg-white">
       {/* <Stack.Screen
        options={{
         
          headerLeft: () => (
            <View className="flex-row w-full items-center space-x-2">
            <BackButton
              backButtonContainerStyle="bg-[#fff] rounded-full"
              handlePress={()=> router.back()}
            />

           <View style={{alignSelf: 'flex-start'}} className='bg-red-100 py-[2px] px-[8px] rounded-xl mt-[5px]'>
            <Text className="text-xm font-psemibold text-white">2 new</Text>
            </View>
          </View> 
          ),
        }}
      /> */}
      <View className="flex-row w-full px-[24px] mt-[10px]">
          <BackButton
            backButtonContainerStyle="bg-[#fff] rounded-full"
            handlePress={()=> router.back()}
          />
           </View>
      <ScrollView  contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 24 }}>
      
       <View className=" mt-[10px]">
        <View className="flex-row items-center space-x-2">
        <Text className=" text-xl font-psemibold mb-6">Settings</Text>

        <View style={{alignSelf: 'flex-start'}} className='bg-red-100 py-[2px] px-[8px] rounded-xl'>
          <Text className="text-xm font-psemibold text-white">2 new</Text> 
          </View>
        </View>
        {/* <Pressable onPress={()=> router.push('/(drawer)/home/notification/single-notification')}>
        <Text>open single Notification </Text>
        </Pressable> */}
      </View> 

<View className="my-[10px]">
            <FlatList
                horizontal
                contentContainerStyle={styles.flatlistContainer}
                showsHorizontalScrollIndicator={false}
                data={tabData}
                keyExtractor={item => item?.id}
                renderItem={({item, index}) => (
                    <NotificationTabItem
                    title={item}
                    index={index}
                    />
            )}
                />
            </View>

  
     <Animated.View layout={transition}>
       
     </Animated.View>
        <FlatList
          skipEnteringExitingAnimations
          data={notificationData}
          scrollEnabled={false}
          itemLayoutAnimation={transition}
          keyExtractor={(item) => item.id.toString()}
          //ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
          renderItem={({item, index}) => (
            <NotificationItem
              item={item}
              index={index}
            />
      )}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const NotificationItem = ({item, index,}) => {
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
          onPress={()=> router.push('/(drawer)/home/notification/single-notification') }
          style={{}}>
          <View className="flex-row justify-between w-full space-x-3 items-center">
            <View className={`flex-0.5  w-[40px]  h-[40px] flex justify-center items-center ${item?.transaction_type === 'deals' ? 'bg-[#FFE9E9]' : item?.transaction_type === 'delivery' ? 'bg-[#EAF3E7]' : item?.transaction_type === 'system' ? 'bg-[#F6F8FA]' : 'bg-[#f1f1f1]' } rounded-xl`}>
              <Ionicons 
              name={`${item?.transaction_type === 'delivery' ? "checkmark-circle-outline"  : item?.transaction_type === 'system' ?  "settings-outline" : item?.transaction_type === 'deals' ?  "gift-outline" : "information-circle-outline"}`} 
              size={20} />
            </View>

            <View className="flex-1 flex-col justify-center">
              <View className="flex-1 flex-row space-y-2 justify-between">
                <Text className="text-sm font-pmedium text-[#021433]">{item?.title}</Text>
                <Text className="text-[#616977] font-plight">{item?.date}</Text>
              </View>
              <View className="flex-1 flex-row space-y-1  justify-between">
                <Text className="text-[#616977]">{item?.reference}</Text>
                {item?.read === 'unread' && (<Entypo name="dot-single" size={24} color="red" />)}
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
  )
}

const NotificationTabItem = ({title, index, isActive, handleChangeCategory}) => {
  //let color = isActive? "#fff" : "gray";
  let color =  "#fff";
  //let backgroundColor = isActive? '#1F1F76' : "#F3F3F3";
  let backgroundColor = "#1F1F76";
  return (
      <Animated.View entering={FadeInRight.delay(index+200).duration(1000)}>
        <Pressable 
        //onPress={()=> handleChangeCategory(isActive? null : title)} 
        style={[styles.category, {backgroundColor}]}>
          <Text style={[styles.title, {color}]}>{title?.tab}</Text>
        </Pressable>
      </Animated.View>
  )
}
export default Notification 

const styles =  StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: 4,
    gap: 8,
   },

   category: {
    padding: 8,
    paddingHorizontal: 12,
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
})