import { View, Text, ScrollView,  Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { icons, images } from '../../constants'
import FormField from '../../components/FormField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context'


const CreateProfile= () => {
  const [image, setImage] = useState(null);
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        other_name: "",
        email: "",
        dop: "",
        refCode: "",
      });

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
  return (
    <SafeAreaView className="bg-white flex-1">
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
          //source={images.avartar}
          //source={{ uri: image }}
          source={image  ? { uri: image } : images.avartar}
          className="w-[100px] h-[100px] rounded-full border-solid border-primary border-1"
          resizeMode="contain"
        />
        <Pressable 
          onPress={pickImage}
          className="absolute rounded-full w-[25px] h-[25px] bottom-5 right-[-9] bg-primary flex justify-center items-center"
        >
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
            placeholder="Reference code"
            value={form.refCode}
             handleChangeText={(e) => setForm({...form, refCode: e})}
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
           handlePress={()=> router.navigate('/onboardProfile/create-address')}
          />
         
        </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default CreateProfile