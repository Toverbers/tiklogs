import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormField from '../../../components/FormField';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../../components/BackButton';
import { router } from 'expo-router';

const UpdateAddress = () => {
    const [form, setForm] = useState({
        country: "",
        state: "",
        city: "",
        address: "",
        location: "",
      });
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row w-full px-[24px]">
              <BackButton
                backButtonContainerStyle="bg-[#fff] rounded-full"
                handlePress={()=> router.back()}
              />
           </View>
        <KeyboardAwareScrollView
        contentContainerStyle={{
          //height: "100%",
          paddingHorizontal: 24,
          
        }}
      >
        <Text className="text-2xl font-psemibold text-black mt-7 ">Let's get to know you</Text>
        <Text className="text-sm font-pregular text-black mt-2 ">Kindly provide the information below</Text>

        <FormField
            placeholder="Country*"
            value={form.country}
             handleChangeText={(e) => setForm({...form, country: e})}
             otherStyles="mt-5"
         />
        <FormField
            placeholder="State*"
            value={form.state}
             handleChangeText={(e) => setForm({...form, state: e})}
             otherStyles="mt-0"
         />
        <FormField
            placeholder="City*"
            value={form.city}
             handleChangeText={(e) => setForm({...form, city: e})}
             otherStyles="mt-0"
         />
        <FormField
            placeholder="Address*"
            value={form.address}
             handleChangeText={(e) => setForm({...form, address: e})}
             otherStyles="mt-0"
         />

        <View className="mt-10">
          
          <Text className="text-xl font-psemibold text-[#021433]">Use Precise Location using Map</Text>
          
        <Text>please make sure to select the accurate location</Text>
        </View>
        <FormField
            placeholder="Location"
            value={form.dob}
             handleChangeText={(e) => setForm({...form, dob: e})}
             otherStyles="mt-0"
         />
        
        
        


        <CustomButton
           title="Continue"
           containerStyles="mt-20"
           //handlePress={}
          />
         
        </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default UpdateAddress

const styles = StyleSheet.create({})