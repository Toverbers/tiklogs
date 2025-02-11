import { View, Text, ScrollView,  Image, Pressable, Button, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { icons, images } from '../../constants'
import FormField from '../../components/FormField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePickerComponent from '../../components/DatePickerComponent'
import moment from 'moment'
import SelectPickerComponent from '../../components/SelectPickerComponent'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from '@expo/vector-icons/FontAwesome';



const CreateVehicle= () => {
  const [image, setImage] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState();
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        other_name: "",
        email: "",
        dop: "",
        refCode: "",
      });

      /* const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsMultipleSelection: true,
          selectionLimit: 10,
          //allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          //setImage(result.assets[0].uri);
          setImage(result.uri ? [result.uri] : result.selected);
        }
      }; */


      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        if (!result.canceled) {
            const selectedImageUris = result.assets.map((asset) => asset.uri);
            setImage(selectedImageUris);
            console.log("ASSETS", image)
        }
    }
  /*     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);*/

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }; 

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDob(date)
    hideDatePicker();
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

        {/* <View className="mt-7 relative w-[100px] h-[100px]">
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
        </View>  */}

        

         <SelectPickerComponent
         label="Vehicle"
         placeholder={{
             label: 'Select vehicle type...',
             value: null,
         }}
         onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Bicycle', value: 'bicycle' },
            { label: 'Bike', value: 'bike' },
            { label: 'Car', value: 'car' },
            { label: 'Van', value: 'van' },
            { label: 'Truck', value: 'truck' },
                ]}
         
          />
         <SelectPickerComponent
                label="Make"
                placeholder={{
                    label: 'maker...',
                    value: null,
                }}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Toyota', value: 'toyota' },
                    { label: 'Nissan', value: 'nissan' },
                    { label: 'Honda', value: 'honda' },
                        ]}
                
                />

          <View className="flex-row space-x-2 items-center">
            <View className="flex-1">
                <FormField
                placeholder="Color"
                value={form.firstname}
                handleChangeText={(e) => setForm({...form, firstname: e})}
                otherStyles=""
                />
            </View>

            <View className="flex-1">
            
                <SelectPickerComponent
                    label="Make"
                    placeholder={{
                        label: 'Year',
                        value: null,
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '2003', value: '2003' },
                        { label: '2019', value: '2019' },
                        { label: '2020', value: '2020' },
                            ]}
                    
                    />
            </View>
          </View>

        <FormField
            placeholder="Color*"
            value={form.firstname}
             handleChangeText={(e) => setForm({...form, firstname: e})}
             otherStyles=""
         />
        <FormField
            placeholder="Plat number"
            value={form.lastname}
             handleChangeText={(e) => setForm({...form, lastname: e})}
             otherStyles="mt-0"
         />

         {/* <CustomButton
           title="Add Vehicle image(s)"
           containerStyles="mt-5 bg-transparent border border-primary h-[45px] items-center"
           textStyles="text-primary text-sm"
           handlePress={pickImage}
           preAppend={
            
            <FontAwesome name="photo" size={18} color="black" />
           }
          /> */}

          <View>
            <FlatList
             data={image}
             scrollEnabled={false}
             contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'column', gap: 10}}
             columnWrapperStyle={{justifyContent: 'space-between'}}
             //numRows={2}
             //numColumns={Math.ceil(image.length / 2)}
             numColumns={2}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
             keyExtractor={(item, index) => item.uri + index.toString()}
             renderItem={({item}) => (
                <View style={{width: "49%", height: 150, display: 'flex',  justifyContent: 'space-between', backgroundColor: '#f1f1f1', gap: 2, borderRadius: 10 }}>
                        <Image source={{ uri: item }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                    </View>
             )}
             ListHeaderComponent={
                <CustomButton
                    title="Add Vehicle image(s)"
                    containerStyles="mt-5 bg-transparent border border-primary h-[45px] items-center"
                    textStyles="text-primary text-sm"
                    handlePress={pickImage}
                    preAppend={
                        
                        <FontAwesome name="photo" size={18} color="black" />
                    }
                    />

             }
             />
          </View>
        
        
        
        


       
         
        </KeyboardAwareScrollView>

        <View className="px-[20px] py-2">
        <CustomButton
           title="Continue"
           containerStyles="mt-2"
           handlePress={()=> router.navigate('/onboardProfile/create-license')}
          />
        </View>
    </SafeAreaView>
  )
}

export default CreateVehicle