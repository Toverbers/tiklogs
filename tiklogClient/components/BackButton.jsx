import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const BackButton = ({
    handlePress,
    backButtonContainerStyle,
}) => {
  return (
    <Pressable
     onPress={handlePress} 
    className={`h-[36px] w-[36px] items-center justify-center ${backButtonContainerStyle}`}>
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({})