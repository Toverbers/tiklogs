import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Checkbox from 'expo-checkbox';
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



const DeliveryType = () => {

      const [selectedOptions, setSelectedOptions] = useState([]);
    
      const options = ['Any', 'Perishable', 'Cloth', 'Electronics', 'Big items', 'Others'];
    
      const handleSelectOption = (option) => {
        if (selectedOptions.includes(option)) {
          setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
          setSelectedOptions([...selectedOptions, option]);
        }
      };

      console.log("SELECTE",selectedOptions)




  return (
    <SafeAreaView className="bg-white flex-1">
        <KeyboardAwareScrollView
        contentContainerStyle={{
          //height: "100%",
          paddingHorizontal: 24,
          
        }}
      >
        <Text className="text-2xl font-psemibold text-black mt-7 ">Delevery Type</Text>
        <Text className="text-sm font-pregular text-black mt-2 ">Choose the type of deliveries you can handle. Select all that apply.</Text>

         
        
        <View className="mt-10 space-y-3">
            {options.map((option, index) => (
                <View key={index} style={styles.optionContainer} className="flex-row justify-between items-center">
                <Text className="text-sm text-[#0F172A]">{option}</Text>
                <Checkbox
                    value={selectedOptions.includes(option)}
                    onValueChange={() => handleSelectOption(option)}
                    className=""
                    color={"#1F1F76"}
                />
                
                </View>
            ))}
            
            </View>
        
        


       
         
        </KeyboardAwareScrollView>

        <View className="px-[20px] py-2">
        <CustomButton
           title="Continue"
           containerStyles="mt-2"
           handlePress={() => router.navigate('/home')}
          />
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    //padding: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    //marginLeft: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default DeliveryType 