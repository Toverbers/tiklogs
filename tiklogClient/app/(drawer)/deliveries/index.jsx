import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInDown, FadeInRight, FadeOutUp } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import BackButton from '../../../components/BackButton'

const data = [
  {
      id: "01",
      fee: "2000",
      date: "Sep 18",
      status: "delivered",
      destination: "100, Ebute metta str, off alagbado avenue ijebu road",
      pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      "destination_coordinates" : 
        [
         { "lat": "7.554567",
          "long":" 9.664332"}
        ]
        ,
      

      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
  },
  {
      id: "02",
      fee: "5000",
      date: "04 Apr 2022, 11.32 am",
      status: "delivered",
      destination: "100, Ebute metta str, off alagbado avenue ijebu road",
      pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
  },
  {
      id: "03",
      fee: "30000",
      date: "Sep 18",
      status: "cancelled",
      destination: "100, Ebute metta str, off alagbado avenue ijebu road",
      pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
  },
  {
      id: "04",
      fee: "3000",
      date: "Sep 18",
      status: "On Going",
      destination: "100, Ebute metta str, off alagbado avenue ijebu road",
      pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
  },
{
      id: "05",
      fee: "Bike",
      date: "Sep 18",
      status: "On Going",
      destination: "100, Ebute metta str, off alagbado avenue ijebu road",
      pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
  },
  {
    id: "06",
    fee: "2000",
    date: "Sep 18",
    status: "Cancelled",
    destination: "100, Ebute metta str, off alagbado avenue ijebu road",
    pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
    rider: "Jogn Thamas",
    vehicle: "bike",
    priority: "true",
    receiver_name: "Bola James",
    receiver_phone: "07086027790",
    destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
    
},
{
    id: "07",
    fee: "5000",
    date: "Sep 18",
    status: "On Going",
    destination: "100, Ebute metta str, off alagbado avenue ijebu road",
    pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
},
{
    id: "08",
    fee: "30000",
    date: "Sep 18",
    status: "failed",
    destination: "100, Ebute metta str, off alagbado avenue ijebu road",
    pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
},
{
    id: "09",
    fee: "3000",
    date: "Sep 18",
    status: "Cancelled",
    destination: "100, Ebute metta str, off alagbado avenue ijebu road",
    pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
},
{
    id: "10",
    fee: "Bike",
    date: "Sep 18",
    status: "On Going",
    destination: "100, Ebute metta str, off alagbado avenue ijebu road",
    pickup: "100, Ebute metta str, off alagbado avenue ijebu road",
      rider: "Jogn Thamas",
      vehicle: "bike",
      priority: "true",
      receiver_name: "Bola James",
      receiver_phone: "07086027790",
      destination_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      },
      pickup_coordinates : { 
        lat: 7.554567,
        long: 9.664332
      }
      
}
];

const tabData = [
  {
      id: "01",
      tab: "Ongoing",
  },
  {
      id: "02",
      tab: "Delivered",
  },
  {
      id: "03",
      tab: "Cancelled",
  },
  
];

const Deliveries = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row w-full px-[24px] py-[10px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
      <View>
      <View className="px-[24px]">
        <Text className="text-base font-psemibold text-[#0A0D14]">Transactions</Text>
        </View>


        <View className="mt-10 px-[24px]">
            <FlatList
                horizontal
                contentContainerStyle={styles.flatlistContainer}
                showsHorizontalScrollIndicator={false}
                data={tabData}
                keyExtractor={item => item?.id}
                renderItem={({item, index}) => (
                    <DeliveryTabItem
                    title={item}
                    index={index}
                    />
            )}
                />
            </View>

        <View className="mt-8">
          
          
          
          <Animated.FlatList
            data={data}
            scrollEnabled={true}
            removeClippedSubviews
            contentContainerStyle={{ gap: 10, flexDirection: 'col', backgroundColor: '#f1f1f1'}}
            //columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={(item) => item.id}
            //horizontal
            //removeClippedSubviews
            //itemLayoutAnimation={transition}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <DeliveriesItem
                item={item}
                index={index}
              />
        )}
          />

        </View>
      </View>
    </SafeAreaView>
  )
}

const DeliveriesItem = ({item, index,}) => {
  //let color = isActive? theme.colors.white : theme.colors.neutra(0.8);
  //let backgroundColor = isActive? 'green' : theme.colors.white;
  return (
      <Animated.View 
      entering={FadeInDown.delay(index+200).duration(1000)} 
      exiting={FadeOutUp}
      className="mb-1 bg-white px-[24px] py-[10px]"
      >
        
        <Pressable 
          //onPress={()=> handleChangeCategory(isActive? null : title)} 
          //onPress={()=> router.push('/(drawer)/wallet/transaction-details') }
          //onPress={()=> router.push({pathname: `/(drawer)/deliveries/index/${item.id}`, params: item}) }
          onPress={()=> router.push({ pathname: `/(drawer)/deliveries/[id]`, 
             params:  {
              //id : item.id, 
              //dest: item?.destination_coordinates?.lat,
             // destLong: item?.destination_coordinates?.long,
              id: item.id,
              fee: item.fee,
              date: item.date,
              status: item.status,
              destination: item.destination,
              pickup: item.pickup,
              rider: item.rider,
              vehicle: item.vehicle,
              priority: item.priority,
              receiver_name: item.receiver_name,
              receiver_phone: item.receiver_phone,
              pickup_lat: item?.destination_coordinates?.lat,
              pickup_Long: item?.destination_coordinates?.long,
              dest_lat: item?.destination_coordinates?.lat,
              dest_Long: item?.destination_coordinates?.long,
            } 
           //params: item
            //params: { id: item?.id, destination_coordinates: item?.destination_coordinates  }, 
          }) }
          style={{}}>
          <View className="flex-col w-full space-y-2 ">
          <View style={{alignSelf: 'flex-start'}} className={`${item?.status === 'delivered' ? 'bg-[#23AA26]' : item?.status === 'cancelled' ? 'bg-[#EF3920]' : item?.status === 'On Going' ? 'bg-[#FFA500]' : 'bg-[#fff]'} font-pregular, px-[8px] py-[1.5px] rounded-md`}>
            <Text className={`${item?.status === 'All' ? "text-[#333]" : "text-white"} text-xs`}>{item?.status}</Text>
            </View>
          
          <Text className="text-[#021433] text-sm font-psemibold">{item?.destination}</Text>
          <Text className="text-[#616977] text-xs">{item?.date}</Text>
          <Text className="text-[#287ED0] text-sm">{item?.fee}</Text>
          </View>
        </Pressable>
        
      </Animated.View>
  )
}

const DeliveryTabItem = ({title, index, isActive, handleChangeCategory}) => {
  let color = isActive? "#fff" : "gray";
  let backgroundColor = isActive? '#1F1F76' : "#F3F3F3";
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


export default Deliveries

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
})