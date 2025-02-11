import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles, 
    isLoading,
    disabled,
    txt,
    preAppend,
    prepend,
}) => {
  return (
    <TouchableOpacity
     onPress={handlePress}
     activeOpacity={0.7}
    className={`bg-primary  h-14 w-full rounded-xl justify-center items-center flex-row space-x-2 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={disabled}
    >
       {preAppend}
        <Text className={`text-white font-psemibold text-lg ${textStyles}`} style={txt}> {title}</Text>
        {prepend}
    </TouchableOpacity>
  )
}

export default CustomButton