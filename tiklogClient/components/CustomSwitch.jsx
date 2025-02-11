import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
//import {COLORS, FONTS, SIZES} from "../constants"

const CustomSwitch = ({ value, onChange }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => onChange(!value)}
    >
        <View style={{ flexDirection:'row'}}>
            {/* Switch */}
            <View
               style={value ? styles.switchContainer : styles.switchOffContainer}
            >
                {/* <View
                  style={{
                    ...styles.dot,
                    backgroundColor: value ? '#fff' : 'blue'
                  }}
                /> */}
                {
                  value ?
                  <AntDesign name="checkcircle" size={20} color={ value ? '#fff' : '#1F1F76'} />
                  :
                  <AntDesign name="minuscircle" size={20} color={ value ? '#fff' : '#fff'} />
                }
            </View>

            {/* Text */}
            {/* <Text
              style={{
                color: value ? 'blue' : 'gray',
                marginLeft: 10,
              }}
            >
                Save Me
            </Text> */}

        </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
    switchContainer: {
        width: 50,
        height: 26,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 13,
        backgroundColor: '#1F1F76'
    },

    switchOffContainer: {
        width: 50,
        height: 26,
        paddingLeft: 2,
        justifyContent: 'center',
        borderRadius: 13,
        //borderWidth: 1,
        backgroundColor: '#E2E4E9'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6
    }
})

export default CustomSwitch;