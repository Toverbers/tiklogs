import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from '@expo/vector-icons/Ionicons';

const DatePickerComponent = ({
    title,
    value,
    prepend,
    containerStyles,
    onConfirm,
    onCancel,
    hideDatePicker,
    onPress,
    selctedDate,
    
    //showPassword, setShowPassword,
    ...props
}) => {

     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

   /*  const showDatePicker = () => {
      setDatePickerVisibility(true);
    }; */
  
    /* const hideDatePicker = () => {
      setDatePickerVisibility(false);
    }; */

  return (
    <View className={`space-y-1 ${containerStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
    
    <View className="border-2 rounded-xl border-gray-200 w-full h-14 px-4 bg-white focus:border-primary flex-row items-center">
        {/* <Text>Hello</Text> */}
    
      <View>
      {/* <Button title="Show Date Picker" onPress={onPress} /> */}
      <Pressable onPress={onPress} className="flex-row justify-between items-center w-full">
      <Text className="flex-1">{selctedDate? selctedDate : 'Date of Birth'}</Text>
      <View className="flex-0.5"><Ionicons name="calendar-outline" size={22} color="black" /></View>
      </Pressable>

      {/* <Text>Show Date Picker</Text> */}
      <DateTimePickerModal
        //isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={onConfirm}
        onCancel={onCancel}
        hideDatePicker={hideDatePicker}
        {...props}
      />
    </View>
      {prepend}     
       
    </View>
    </View>
  )
}

export default DatePickerComponent

const styles = StyleSheet.create({})