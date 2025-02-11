import { View, Text } from 'react-native'
import React from 'react'
import OtpTextInput from 'react-native-text-input-otp'

const OtpInput = ({
    otp,
    setOtp,
}) => {
  return (
    <OtpTextInput 
        otp={ otp }
        setOtp={ setOtp }
        digits={4}
        style={{ borderRadius: 5, height: 55, width: 55, marginTop: 40, alignItems: 'center', justifyContent: 'center', }}
        fontStyle={{ fontSize: 20, fontWeight: 'bold' }}
        focusedStyle={{ borderColor: '#1F1F76', borderWidth: 2, }} 
        />
  )
}

export default OtpInput