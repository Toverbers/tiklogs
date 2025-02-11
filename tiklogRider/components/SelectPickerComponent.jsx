import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from '@expo/vector-icons/Ionicons';

const SelectPickerComponent = ({
    title,
    items,
    label,
    placeholder,
    value,
    onValueChange,
    prepend,
    containerStyles,
    onConfirm,
    onCancel,
    hideDatePicker,
    onPress,
    selctedDate,
}) => {
  return (
    <View className={`space-y-1 ${containerStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
    
    <View className="border-2 rounded-xl border-gray-200 w-full h-14 px-4 bg-white focus:border-primary flex-row items-center">
        {/* <Text>Hello</Text> */}
    
      <View className="w-full flex-1">
        <RNPickerSelect
        label={label}
        placeholder={placeholder}
        onValueChange={onValueChange}
        value={value}
        items={items}

        style={{
            placeholder: {
            color: '#333',
            
            },
            inputIOS: {
            justifyContent: 'center',
            color: 'black',
            paddingRight: 30 // to ensure the text is never behind the icon
        },
        inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            color: 'black',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            
            paddingRight: 20 // to ensure the text is never behind the icon
        }
        }}

        Icon={() => {
            return (
                <Ionicons name="caret-down-outline" size={18} color="black" />
            )}
        }
           
        />
    </View>
      <View className="flex-0.5">{prepend}</View>     
       
    </View>
    </View>
  )
}

export default SelectPickerComponent

const styles = StyleSheet.create({})