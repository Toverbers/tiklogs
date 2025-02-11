import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const PasswordInput = ({
    title,
    value,
    placeholder,
    prepend,
    handleChangeText,
    otherStyles,
    keyboardType,
    //secureTextEntry,
    //showPassword, setShowPassword,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      
      <View className="border-2 rounded-xl border-gray-200 w-full h-14 px-4 bg-white focus:border-primary flex-row items-center">
          {/* <Text>Hello</Text> */}
       <TextInput
         className="flex-1 text-gray font-psemibold text-base"
         value={value}
         placeholder={placeholder}
         placeholderTextColor="#7b7b8b"
         onChangeText={handleChangeText}
         keyboardType={keyboardType}
         secureTextEntry={ !showPassword}
         //secureTextEntry={ secureTextEntry}
        />
  
       <TouchableOpacity onPress={() => 
                      setShowPassword(!showPassword)}>
                  <Image source={!showPassword ? icons.eye : 
                          icons.eyeHide
                      } className="w-6 h-6" resizeMode='contain'
                      />
                  </TouchableOpacity>
        {prepend}     
         
      </View>
      </View>
    )
  }

export default PasswordInput