import { View, Text, Pressable, StyleSheet, Image, Platform, Dimensions } from 'react-native'
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

const Home = () => {
  const bottomSheetRef = useRef(null);
  const [origin, setOrigin] = useState(null)
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
        {origin && destination && (
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
          }
      </MapView>

      <View className="flex-row items-center justify-between w-full px-[24px]" style={{ zIndex: 1, position: 'absolute', top: 50}}>
        <Pressable onPress={onToggle}>
          {/* <Image
             source={icons.menu}
             className="w-[40px] h-[40px]"
             resizeMode="contain"
          /> */}
         <View className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-primary">
         <Ionicons name="menu-outline" size={24} color="#fff" />
         </View>
        </Pressable>
        <Pressable  onPress={()=> router.push('/(drawer)/home/notification')}>
        {/* <Image
             source={icons.notification}
             className="w-[40px] h-[40px]"
             resizeMode="contain"
          /> */}
          <View className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-primary">
         <Ionicons name="notifications-outline" size={24} color="#fff" />
         </View>
        </Pressable>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={keyboardAvoidingHeight ? 3 : 1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        keyboardBehavior={'extend'}
        style={{backgroundColor: '#fff', zIndex: 9999, position: 'absolute'}}
        
        //onChange={handleSheetChanges}
      >
        <BottomSheetView style={{backgroundColor: '#fff', flex: 1 }}>

          <View className=" px-[24px] flex-col gap-y-3" style={{backgroundColor: '#fff', }}>
           
            <View className="flex-row ">
              
                <GooglePlacesAutocomplete
                  placeholder='Pickup'
                  //ref={autoComplete}
                  //autoFocus={false}
                  fetchDetails={true}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    //setKeyboardAvoidingHeight(false);
                    setOrigin({
                      originLat: JSON.stringify(details.geometry.location.lat),
                      originLong: JSON.stringify(details.geometry.location.lng),
                      originAddress: data?.description
                      
                    });
                    handleSnapPress(0)
                    console.log(data, details);
                  }}
                  /* predefinedPlaces={[
                    {
                      type: 'favorite',
                      description: 'Dominos Pizza',
                      geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
                    },
                    {
                      type: 'favorite',
                      description: 'Chicken Republic',
                      geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
                    },
                  ]} */
                  //currentLocation={true}
                  enablePoweredByContainer={false}
                  renderLeftButton={()  => 
                     
                      <MaterialIcons name="my-location" size={20} color="#333" />
                  }

                  //isFocused={()=> setKeyboardAvoidingHeight(true)}
                  
                  query={{
                    key: 'AIzaSyCIgMXmltDX6vNpGWxAR0_egUzH4sk8aHk',
                    language: 'en',
                  }}

                  textInputProps={{
                    //autoFocus: false,
                    autoFocus: false,
                    //onFocus: () => setKeyboardAvoidingHeight(true),
                    onFocus: () => handleSnapPress(3),
                    //unFocus: () => setKeyboardAvoidingHeight(!true)
                  }}

                  styles={{
                    container: {
                      flex: 1,
                       
                  },
                    textInputContainer: {
                      //backgroundColor: '#EAEDF0',
                      backgroundColor: '#EAEDF0',
                      height: 48,
                      //flex: 1,
                      /* zIndex: 10000, */
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      paddingHorizontal: 10
                    },
                    textInput: {
                      height: 48,
                      color: '#5d5d5d',
                      fontSize: 16,
                      backgroundColor: 'transparent',
                      
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                      zIndex: 10000,
                    },
                  }}
                />
            </View>

            <View className="flex-row mb-[20px]">
                <GooglePlacesAutocomplete
                  placeholder='Destination'
                  //ref={autoComplete}
                  //autoFocus={false}
                  fetchDetails={true}
                  enablePoweredByContainer={false}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    //setKeyboardAvoidingHeight(false);
                    setDestination({
                      destinationLat: JSON.stringify(details?.geometry?.location.lat),
                      destinationLong: JSON.stringify(details?.geometry?.location.lng),
                      destinationAddress: data?.description
                    });
                    handleSnapPress(0)
                    console.log(data, details);
                  }}
                  

                  renderLeftButton={()  => 
                      <Ionicons name="location-outline" size={20} color="#333" />
                  }

                  //isFocused={()=> setKeyboardAvoidingHeight(true)}
                  
                  query={{
                    key: 'AIzaSyCIgMXmltDX6vNpGWxAR0_egUzH4sk8aHk',
                    language: 'en',
                  }}

                  textInputProps={{
                    //autoFocus: false,
                    autoFocus: false,
                    //onFocus: () => setKeyboardAvoidingHeight(true),
                    onFocus: () => handleSnapPress(3),
                    //unFocus: () => setKeyboardAvoidingHeight(!true)
                  }}

                  styles={{
                    container: {
                      flex: 1, 
                  },
                    textInputContainer: {
                      //backgroundColor: '#EAEDF0',
                      backgroundColor: '#EAEDF0',
                      height: 48,
                      //flex: 1,
                      zIndex: 10000,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      paddingHorizontal: 10
                    },
                    textInput: {
                      height: 48,
                      color: '#5d5d5d',
                      fontSize: 16,
                      backgroundColor: 'transparent',
                      
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                      zIndex: 10000,
                    },
                  }}
                />
            </View>

            
            <View className="w-full flex-grow-1">
              <HomeVehicleButton />
            </View>
          </View>

          
        </BottomSheetView>
      </BottomSheet>
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