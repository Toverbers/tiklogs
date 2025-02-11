import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router';
import MapView from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import { icons, images } from '../../../constants';
import CustomButton from '../../../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../../components/BackButton';

const SingleDelivery = () => {
    //const item = useLocalSearchParams();
    //const coord = useLocalSearchParams();
    const {
        id,
        fee,
        date,
        status,
        destination,
        pickup,
        rider,
        vehicle,
        priority,
        receiver_name,
        receiver_phone,
        pickup_lat,
        pickup_Long,
        dest_lat,
        dest_Long,
    } = useLocalSearchParams();
    //const dest = useLocalSearchParams();

    //console.log("Item",item)
    //console.log("id",id)
    //console.log("Latitude",dest)
    //console.log("Longitude",destLong)
  return (
    
         
           <>
           {status === "On Going" ?
           <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View className="flex-row w-full px-[24px] mt-[10px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
            <ScrollView contentContainerStyle={{height: '100%', paddingHorizontal: 24}}>
            
                <Text className="text-2xl font-psemibold mt-5 mb-5">Ongoing Delivery</Text> 
                
                <View style={{alignSelf: 'center'}} className="text-base bg-[#F3F3F3] font-pregular px-[8px] py-[1.5px] rounded-lg mt-[50px]"><Text className="text-base text-[#287ED0] font-pmedium">Delivery Information</Text></View>

                <View className="flex-row gap-x-2 items-center justify-between">
                <View className="flex-1 flex-row gap-x-2 items-center">
                <Image
                    source={images.dp1}
                    className="w-[56px] h-[56px]"
                    resizeMode='contain'
                    />

                <View className="">
                    <Text className="text-2xl font-psemibold">Jane Doe</Text>
                    
                </View>
                </View>

                <View className="flex-0.5 flex-row gap-x-3">
                    <Pressable>
                        <Image
                            source={icons.call}
                            className="w-[42px] h-[42px]"
                            /> 
                    </Pressable>
                    <Pressable>
                        <Image
                            source={icons.chat}
                            className="w-[42px] h-[42px]"
                            /> 
                    </Pressable>
                </View>
             </View>

             <View className="w-full px-[5px] gap-y-4 mt-5">
                <View className="flex-row gap-x-3">
                    <Image
                        source={icons.pickupIcon}
                        className="w-[20px] h-[20px]"
                    />

                    <View className="gap-y-1 flex-1">
                        <View className="flex-row justify-between items-center ">
                        <Text className="text-xs  font-plight text-[#616977]">Pickup Location</Text>
                        <Text className="text-xs  font-plight text-[#616977]">2 mins away</Text>
                        </View>
                        <Text numberOfLines={2} className="text-sm font-pregular text-[#021433] flex-grow-1">100, Ebute metta str, off alagbado avenue ijebu road</Text>
                    </View>
                </View>
                <View className="flex-row gap-x-3">
                    <Image
                        source={icons.destinationIcon}
                        className="w-[20px] h-[20px]"
                    />

                    <View className="gap-y-1 flex-1">
                        <Text className="text-xs font-plight text-[#616977]">Delivery Location</Text>
                        <Text numberOfLines={2} className="text-sm font-pregular text-[#021433]">100, Ebute metta str, off alagbado avenue ijebu road</Text>
                    </View>
                </View>
             </View>

             <View className="mt-[100px]">
                <CustomButton
                  title="View on Map"
                  handlePress={()=> router.push('/(drawer)/deliveries/delivery-map')}
                  containerStyles="bg-white border border-primary h-[50]"
                  textStyles="text-[#333] text-base"
                  preAppend={
                    <Ionicons name="map-outline" size={24} color="#333" />
                  }
                 />
             </View>
                
            </ScrollView>
            </SafeAreaView> 
    
       
         :
         <>

<SafeAreaView style={{flex: 1}}>
        <ScrollView>
        {/* <Text className="px-[24px] text-2xl font-psemibold mt-5 mb-5">SingleDelivery</Text> */}
          {/* Map View */}
          <View className="h-[180px] relative">
          <View className="flex-row w-full px-[24px] mt-[10px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
            <MapView className="h-[100%] w-[100%] absolute z-[-10]" />
          </View>

            {/* Delivery Details */}

            <View className="row-col space-y-[15px] px-[24px] bg-white py-[24px]">
            <Text className="text-base font-psemibold">Delivery Details</Text>
            <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">status</Text>
            <View style={{alignSelf: 'flex-start'}} className={`${status === 'delivered' ? 'bg-[#23AA26]' : status === 'cancelled' ? 'bg-[#EF3920]' : status === 'On Going' ? 'bg-[#FFA500]' : 'bg-[#fff]'} font-pregular, px-[8px] py-[1.5px] rounded-md`}>
            <Text className={`${status === 'All' ? "text-[#333]" : "text-white"} text-xs`}>{status}</Text>
            </View>
            </View>
            <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">fee</Text>
            <Text className="text-sm text-[#021433] font-pmedium">{fee}</Text>
            </View>

            <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">date</Text>
            <Text className="text-sm text-[#021433] font-pmedium">{date}</Text>
            </View>

            <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">rider</Text>
            <Text className="text-sm text-[#021433] font-pmedium">{rider}</Text>
            </View>

            <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">vehicle</Text>
            <Text className="text-sm text-[#021433] font-pmedium">{vehicle}</Text>
            </View>

            <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">priority</Text>
            <Text className="text-sm text-[#021433] font-pmedium">{priority}</Text>
            </View>

            <View className="flex-row justify-between items-center">
            <Text className="flex-1" numberOfLines={1}>pickup</Text>
            <Text className="flex-1 text-sm text-[#021433] font-pmedium text-right">{pickup}</Text>
            </View>

            {/* <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">Pickup Lat</Text>
            <Text className="text-sm text-[#021433] font-pmedium">{pickup_lat}</Text>
            </View>

            <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#64748B]">Pickup Lat</Text>
            <Text className="text-sm text-[#021433] font-pmedium">{pickup_Long}</Text>
            </View> */}


            </View>

            <View className="row-col space-y-[10px] px-[24px] mt-[15px] bg-white py-[24px] w-full">
            <Text className="text-base font-psemibold">Receiver Information</Text>
                <View className="flex-row justify-between items-center">
                    <Text className="text-sm text-[#64748B]">Receiver name</Text>
                    <Text className="text-sm text-[#021433] font-pmedium">{receiver_name}</Text>
                </View>

                <View className="flex-row justify-between items-center">
                    <Text className="text-sm text-[#64748B]">Receiver phone</Text>
                    <Text className="text-sm text-[#021433] font-pmedium">{receiver_phone}</Text>
                </View>

                <View className="flex-row justify-between items-center">
                    <Text className="flex-1" numberOfLines={1}>Destination</Text>
                    <Text className="flex-1 text-sm text-[#021433] font-pmedium text-right">{destination}</Text>
                </View>
            </View>
</ScrollView>
    </SafeAreaView>
         </>
         }
         
         </>  
  )
}

export default SingleDelivery

const styles = StyleSheet.create({})