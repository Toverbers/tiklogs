import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { mapStyles } from '../../../assets/MapStyle'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const DeliveryMap = () => {
  return (
    <View className="" style={{zIndex: -10, position: 'relative', flex: 1}}>
        <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyles}
         />

        <View className="px-[24px] w-full top-0 right-0" style={{zIndex: 30, position: 'absolute' }}>
            <SafeAreaView>
            <View className="flex-row justify-start mt-[10px]">
                <Pressable onPress={() => router.back()}
                   className="bg-white h-[36px] w-[36px] flex justify-center items-center rounded-lg"
                    >
                    <Ionicons name="arrow-back-sharp" size={26} />
                </Pressable>
            </View>
            </SafeAreaView>
        </View>
         </View>
  )
}

export default DeliveryMap

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