import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
//import { icons, images } from '../constants';
import { Link, router, useNavigation } from 'expo-router'
import { icons, images } from '../constants';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
//import * as SecureStore from 'expo-secure-store';
//import {scooter,sedan,van,lorry} from '../constants/images'


const data = [
    {
        id: "01",
        title: "Bike",
        value: "bike",
        description:  "This is for light weight items such as documents, small items",
        image: "bike",
        icon: "rightIcon",
        screen: "MapScreen"
    },
    {
        id: "02",
        title: "Car",
        description:  "Ideal for more Items that will fit in car boots such as box of cloths etc",
        image: "car",
        value: "car",
        icon: "rightIcon",
        screen: "MapScreen"
    },
    {
        id: "03",
        title: "Van",
        value: "van",
        description:  "suitable for moving bigger items such as funitures, refrigirators, etc",
        image: "van",
        icon: "rightIcon",
        screen: "MapScreen"
    },
    {
        id: "04",
        title: "Truck",
        value: "truck",
        description:  "suitable for moving larger items such as funitures, equipments, etc",
        image: "truck",
        icon: "rightIcon",
        screen: "MapScreen"
    }
];

const HomeVehicleButton = () => {

     const navigation = useNavigation();
     const [vehicle, setVehicle] = useState(null);
  return (
   <FlatList
      data={data}
      scrollEnabled={true}
      contentContainerStyle={{ gap: 10, flexDirection: 'row',}}
      //columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={(item) => item.id}
      horizontal
      //contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      //numColumns={1}
      
      
      renderItem={({ index, item }) => (
        <TouchableOpacity
          onPress={ async () => { 
            setVehicle(item.value)
            ///SecureStore.setItemAsync("vehicleType", item.value)
            //router.push('/(drawer)/home/delivery/create-delivery')
            //router.push('/delivery/create-delivery')
            router.push('/create-delivery')
        }} 
        style={{ width: 110, display: 'flex',}} className="p-2 bg-white border border-primary rounded-xl">
         <View style={{display: 'flex', flexDirection: 'column', gap: 8, paddingVertical: 5, justifyContent: 'center', alignItems : 'center'
         }}>
         <Image
             style={{width: 70, height: 70, resizeMode: "contain"}}
             source={ images[item.image] }
            />
            <Text className=''>{item.title}</Text>
            {/* <Text className='text-xs'>{item.description}</Text> */}
            
            {/* <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
             style={{width: 18, height: 18, resizeMode: "contain"}}
             source={ icons[item.icon] }
            />
            </View> */}
            
         </View>
        </TouchableOpacity>
      )}
   />
  )
}

export default HomeVehicleButton

