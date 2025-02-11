import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({
    title,
    value,
    placeholder,
    prepend,
    handleChangeText,
    otherStyles,
    keyboardType,
    secureTextEntry,
    //showPassword, setShowPassword,
    ...props
}) => {

   const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
    
    <View className="border-2 rounded-xl border-gray-200 w-full h-14 px-4 bg-white focus:border-primary flex-row items-center">
        {/* <Text>Hello</Text> */}
     <TextInput
       className="flex-1 text-gray font-pmedium text-sm"
       value={value}
       placeholder={placeholder}
       placeholderTextColor="#7b7b8b"
       onChangeText={handleChangeText}
       keyboardType={keyboardType}
       //secureTextEntry={ !showPassword}
       //secureTextEntry={ secureTextEntry}
      />
      {prepend}     
       
    </View>
    </View>
  )
}

export default FormField