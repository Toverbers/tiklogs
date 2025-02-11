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



const CreateLicense = () => {
  const [image, setImage] = useState(null);
  const [openExp, setOpenExp] = useState(false);
  const [openIssue, setOpenIssue] = useState(false);
  const [issueDate, setIssueDate] = useState();
  const [expDate, setExpDate] = useState();
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
          //allowsMultipleSelection: true,
          selectionLimit: 10,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          //setImage(result.uri ? [result.uri] : result.selected);
        }
      }; 


     /*  const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        if (!result.canceled) {
            const selectedImageUris = result.assets.map((asset) => asset.uri);
            setImage(selectedImageUris);
        }
    } */
 

  const showIssueDate = () => {
    setOpenIssue(true);
  };

  const hideIssueDate = () => {
    setOpenIssue(false);
  }; 
  const showExpDate = () => {
    setOpenExp(true);
  };

  const hideExpDate = () => {
    setOpenExp(false);
  }; 

  const handleIssueConfirm = (date) => {
    console.warn("Issue date has been picked: ", date);
    setIssueDate(date)
    hideIssueDate();
  };
  const handleExpConfirm = (date) => {
    console.warn("Exp date has been picked: ", date);
    setExpDate(date)
    hideExpDate();
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
        <DatePickerComponent
            isVisible={openIssue}
            onCancel={hideIssueDate}
            onConfirm={handleIssueConfirm}
            onPress={showIssueDate}
            selctedDate={issueDate? moment(issueDate).format('DD MMMM YYYY') : 'Issued Date'}
            />
        <DatePickerComponent
            isVisible={openExp}
            onCancel={hideExpDate}
            onConfirm={handleExpConfirm}
            onPress={showExpDate}
            selctedDate={expDate? moment(expDate).format('DD MMMM YYYY') : 'Expiry Date'}
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

          <Pressable onPress={pickImage} className="h-[220px] border border-[#f1f1f1] border-solid border-1 mt-6 rounded-[8px] flex-col space-y-3 justify-center items-center">
         {image != null && ( <View className=" relative w-[70px] h-[70px]">
            
                <Image
                //source={images.avartar}
                //source={{ uri: image }}
                source={image  ? { uri: image } : images.avartar}
                className="w-[70px] h-[70px] rounded-[5px] border-solid border-primary border-1"
                resizeMode="contain"
                />
            
        </View>)}
            <FontAwesome name="photo" size={18} color="black" />
             <Text>Upload a Photo of Your License</Text>
          </Pressable>

          {/* <View>
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
          </View> */}
        
        
        
        


       
         
        </KeyboardAwareScrollView>

        <View className="px-[20px] py-2">
        <CustomButton
           title="Continue"
           containerStyles="mt-2"
           handlePress={()=> router.navigate('/onboardProfile/create-address')}
          />
        </View>
    </SafeAreaView>
  )
}

export default CreateLicense 