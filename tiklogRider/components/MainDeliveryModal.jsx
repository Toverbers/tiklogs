import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { icons, images } from '../constants';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Ionicons } from '@expo/vector-icons';

const MainDeliveryModal = ({
    nextPage,
    editDelivery,
    goToChatPage,
    goToCallPage,
    arriveButton,
    cancelRequestButton
}) => {
    const bottomSheetRef = useRef(null);


  const snapPoints = useMemo(() => ['25%', '42%', '50%', '70%',"94%" ], []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    
        <BottomSheet
        ref={bottomSheetRef}
        index={2}
        snapPoints={snapPoints}
        style={{backgroundColor: '#fff', zIndex: 9999}}
        //onChange={handleSheetChanges}
      >
        <BottomSheetView style={{backgroundColor: '#fff', flex: 1 }}>

          <View className=" px-[24px] flex-col gap-y-1 mt-1" style={{backgroundColor: '#fff', flex: 1,}}>

          <View className="flex-row justify-between">
            <Text className="text-xl">ETA: 3 min</Text>
            <Pressable onPress={()=> router.navigate('/home')}>
                <Ionicons name="close-circle-outline" size={26} />
            </Pressable>
            </View>
            <Text className="text-sm text-center font-pregular">Going to Destination Location</Text>
           <View>
             <View className="flex-row gap-x-2 items-center justify-between">
                <View className="flex-1 flex-row gap-x-2 items-center">
                <Image
                    source={images.dp1}
                    className="w-[56px] h-[56px]"
                    />

                <View className="">
                    <Text className="text-2xl font-psemibold">Jane Doe</Text>
                    <StarRatingDisplay
                        rating={4.5}
                        starSize={16}
                    />
                    
                </View>
                </View>

                <View className="flex-0.5 flex-row gap-x-3">
                    <Pressable onPress={goToCallPage}>
                        <Image
                            source={icons.call}
                            className="w-[42px] h-[42px]"
                            /> 
                    </Pressable>
                    <Pressable onPress={goToChatPage}>
                        <Image
                            source={icons.chat}
                            className="w-[42px] h-[42px]"
                            /> 
                    </Pressable>
                </View>
             </View>

             <View className="mt-3">
                <Text className="font-pregular text-sm">Toyota Corolla:<Text className="text-[#287ED0] font-psemibold"> ABJ 123 YZ</Text></Text>
             </View>

             <View className="w-full px-[5px] space-y-4 mt-5">
                <View className="flex-row gap-x-3">
                    <Image
                        source={icons.pickupIcon}
                        className="w-[20px] h-[20px]"
                    />

                    <View className="gap-y-1 flex-1">
                    <View className="flex-row justify-between">
                    <Text className="text-xs  font-plight text-[#616977]">Pickup Location</Text>
                    <Text className="text-xs  font-plight text-[#616977]">~5mins away</Text>
                    </View>
                        <Text numberOfLines={2} className="text-sm font-pregular text-[#021433]">100, Ebute metta str, off alagbado avenue ijebu road</Text>
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

             <View 
             className="flex flex-col space-y-4 mt-8 mb-5 w-full"
            
             >
            <CustomButton
                title="I Have Arrived"
                containerStyles="bg-primary h-[55]"
                textStyles="text-white"
                handlePress={arriveButton}
                /> 

            <CustomButton
              title="cancel Request"
              containerStyles=" bg-transparent border border-primary h-[55] mt-4"
              handlePress={cancelRequestButton}
              textStyles="text-primary"
             />

             
  
             </View>
           </View>
          </View>

          
        </BottomSheetView>
      </BottomSheet>
    
  )
}

export default MainDeliveryModal

const styles = StyleSheet.create({})