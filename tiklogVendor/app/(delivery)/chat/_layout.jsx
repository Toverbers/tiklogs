
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Slot, Stack, router } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../../components/BackButton';
import { images } from '../../../constants';



SplashScreen.preventAutoHideAsync();


const ChatLayout = () => {


  return (
   
    <Stack>
        <Stack.Screen name="chat-page" options={{ 
            //headerShown: false,
            //presentation: 'modal', 
            title: '',
            headerBackTitleVisible: false,
            headerLeft: () => (
                <View
              style={{
                flexDirection: 'row',
                //width: 220,
                alignItems: 'center',
                gap: 10,
                paddingBottom: 4,
              }}>
                <BackButton
                handlePress={() => router.back()}
                 />
              <Image
                //source={{ uri: 'https://pbs.twimg.com/profile_images/1564203599747600385/f6Lvcpcu_400x400.jpg',}}
                source={images.dp1}
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
              <View className="flex-col">
              <Text className="text-base">Jonny jonx</Text>
              <Text className="text-xs">Rider</Text>
              </View>
            </View>

            ),

            
            }} />

        <Stack.Screen name="call" 
        options={{ 
            headerShown: false,
            presentation: 'fullScreenModal' 
            }} />
    </Stack>

  );
};

export default ChatLayout