import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../../components/FormField';
import CustomButton from '../../../components/CustomButton';
import { icons, images } from '../../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../../components/BackButton';
import { router } from 'expo-router';

const UpdateProfile = () => {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        other_name: "",
        email: "",
        dop: "",
        refCode: "",
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

        <View className="mt-7 relative w-[100px] h-[100px]">
        <Image
          source={images.avartar}
          className="w-[100px] h-[100px] rounded-full border-solid border-primary border-1"
          resizeMode="contain"
        />
        <Pressable className="absolute rounded-full w-[25px] h-[25px] bottom-5 right-[-9] bg-primary flex justify-center items-center">
         <Image
          source={icons.camera}
          className="w-[16px] h-[16px]"
          resizeMode="contain"
          style={{tintColor: '#fff'}}
        /> 
        </Pressable>
        </View> 

        <FormField
            placeholder="Firstname*"
            value={form.firstname}
             handleChangeText={(e) => setForm({...form, firstname: e})}
             otherStyles="mt-5"
         />
        <FormField
            placeholder="Lasttname*"
            value={form.lastname}
             handleChangeText={(e) => setForm({...form, lastname: e})}
             otherStyles="mt-0"
         />
        <FormField
            placeholder="Other_name*"
            value={form.other_name}
             handleChangeText={(e) => setForm({...form, other_name: e})}
             otherStyles="mt-0"
         />
        <FormField
            placeholder="Email*"
            value={form.email}
             handleChangeText={(e) => setForm({...form, email: e})}
             otherStyles="mt-0"
         />
        <FormField
            placeholder="Date of Birth"
            value={form.dob}
             handleChangeText={(e) => setForm({...form, dob: e})}
             otherStyles="mt-0"
         />

        <FormField
            placeholder="Firstname*"
            value={form.firstname}
             handleChangeText={(e) => setForm({...form, firstname: e})}
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

export default UpdateProfile

const styles = StyleSheet.create({})