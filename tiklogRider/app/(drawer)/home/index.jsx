import { View, Text, Pressable, StyleSheet, Image, Platform, Dimensions, Button, TouchableOpacity } from 'react-native'
import { Link, router, useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions"

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { icons } from '../../../constants';
import { DrawerActions } from '@react-navigation/native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {mapStyles} from '../../../assets/MapStyle'
import HomeVehicleButton from '../../../components/HomeVehicleButton';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PendingVerificationModal from '../../../components/PendingVerificationModal';
import Slider from '@react-native-community/slider';
import CustomButton from '../../../components/CustomButton';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient'
import RequestModal from '../../../components/RequestModal';

const Home = () => {
  const bottomSheetRef = useRef(null);
  const [origin, setOrigin] = useState(null)
  const [pendingVerification, setPendingVerification] = useState(true)
  const [openRequestModal, setOpenRequestModal] = useState(false)
  const [destination, setDestination] = useState(null)
  const mapRef = useRef(null)
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCIgMXmltDX6vNpGWxAR0_egUzH4sk8aHk'
  const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

  /* useEffect(() => {
    if(!origin || !destination || !mapRef.current) return;
  
    //Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {top: 100, right: 70, bottom: 400, left: 70},
    })
    
  },[origin, destination]) 
 */
  useEffect(() => {
    if (!origin || !destination || !mapRef.current) return;

    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: {
          top: 150,
          right: 50,
          bottom: 50,
          left: 50,
        },
      });
    }, 1500);
  }, [origin, destination, mapRef]);

  const snapPoints = useMemo(() => ['42%', '40%', '70%',"90%" ], []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    
  }, []);

  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  } 

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [keyboardAvoidingHeight, setKeyboardAvoidingHeight] = useState(false);

  const autoComplete = useRef();

  useEffect(() => {
    autoComplete.current?.isFocused(setKeyboardAvoidingHeight(true));
  }, []);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      //let location = await Location.getCurrentPositionAsync({});
      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced,});
      //setLocation(location);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0059,
        longitudeDelta: 0.0059,
      }); 
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


    const [isOnline, setIsOnline] = useState(false);
  
    const handleToggle = () => {
      setIsOnline(!isOnline);
    };

    const handlependingVerification = () => {
      setPendingVerification(false)
      setOpenRequestModal(true)
    };
    const handleRejectDelivery = () => {
      setPendingVerification(false)
      setOpenRequestModal(false)
    };
    const handleAcceptDelivery = () => {
      router.navigate('/delivery-page')
      setOpenRequestModal(false)
    };

    
  return (
    <>

    <View style={{ flex: 1, position: 'relative', zIndex: -10}}>
      <MapView 
        //provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        provider={MapView.PROVIDER_GOOGLE}
        //provider={PROVIDER_GOOGLE}
        style={styles.map}
        className="flex-1"
        customMapStyle={mapStyles}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        rotateEnabled={true}
        ref={mapRef}
        region={location}
        //location={latitude: location?.latitude}
      >
       {/*  {origin && destination && (
        <MapViewDirections
           origin={origin?.originAddress}
           destination={destination?.destinationAddress}
           apikey={GOOGLE_MAPS_APIKEY}
           strokeWidth={5}
           strokeColor='blue'
         />
      )}

        {origin && (
          <Marker 
           coordinate={{
            latitude: parseFloat(origin?.originLat),
            longitude: parseFloat(origin?.originLong),
          }}
           //coordinate={origin}
          title='Origin'
          description={origin.originAddress}
          identifier='origin'>
           
          </Marker>
        )}


          {destination && 
            <Marker 
              coordinate={{
                latitude:  parseFloat(destination?.destinationLat),
                longitude:  parseFloat(destination?.destinationLong),
              }}
              //coordinate={destination}
              title='Destination'
              description= {destination?.destinationAddress}
              identifier='destination'>
           
          </Marker>
          } */}
      </MapView>

      <View className="flex-row items-center justify-between w-full px-[24px] h-[50px]" style={{ zIndex: 999, position: 'absolute', top: 55}}>
        <Pressable onPress={onToggle} className="w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center">
         {/* <View className=" flex justify-center items-center "> */}
         <Ionicons name="menu-outline" size={24} color="#fff" />
         {/* </View> */}
        </Pressable>
        <Pressable  
        //onPress={onToggle}
       onPress={()=> router.push('/(drawer)/home/notification')}
        >
          <View className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-primary">
         <Ionicons name="notifications-outline" size={24} color="#fff" />
         </View>
        </Pressable>
      </View>

       {/* bottom sheet */}
       {/* <BottomSheet
        ref={bottomSheetRef}
        index={keyboardAvoidingHeight ? 3 : 1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        keyboardBehavior={'extend'}
        style={{backgroundColor: '#fff', zIndex: 9999, position: 'absolute'}}
      >
        <BottomSheetView style={{backgroundColor: '#fff', flex: 1 }}>

          <View className=" px-[24px] flex-col gap-y-3" style={{backgroundColor: '#fff', }}>
            <View className="w-full flex-grow-1">
              <HomeVehicleButton />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>  */}

      <RequestModal
       visible={openRequestModal}
       acceptDelivery={handleAcceptDelivery}
       rejectDelivery={handleRejectDelivery}
       />


      <Animated.View entering={FadeInDown.duration(600)} className="absolute w-full  bottom-[0px]  justify-center items-center flex-col space-y-2 ">
            <LinearGradient 
              //colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'white', 'rgba(255,255,255,0.3']}
              style={{position: 'absolute',bottom: 0, top: 0, flex: 1, }}
             colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.6)', 'white', 'rgba(255,255,255,0.5)']}
              className="w-full h-full"
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 0.8}}
            />
      {isOnline  && (
         <>
          <Text className=" text-base text-[#0A0D14] font-pmedium">Hello John!</Text>
          <Text className="mb-3 text-base text-[#0A0D14]">Ready to make some happy deliveries?</Text>
         </>
        )}
       <CustomButton
       title={isOnline ? 'Go Offline' : 'Go Online'}
       containerStyles={`h-[55px] w-[200px] mb-[150px] ${isOnline ? 'bg-primary' : isOnline == 'pending' ? 'bg-red-500' : 'bg-[#EF3920]'} rounded-[45px]`}
       textStyles="text-base"
       handlePress={handleToggle}
       prepend={
         <Ionicons name="arrow-forward-outline" size={18} color="#fff" />
       }
       />
      </Animated.View>
      
      <PendingVerificationModal
        visible={pendingVerification}
        //handlePress={() => setPendingVerification(false)}
        handlePress={handlependingVerification}
       />

       
    </View>

    
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex: -999,
  },
});