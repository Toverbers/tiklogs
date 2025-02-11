import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import OtpInput from '../../components/OtpInput'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import BackButton from '../../components/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const RegisterOtp = () => {
    const [otp, setOtp] = useState('');

  const [timer, setTimer] = useState(60);


  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
          if(prevTimer > 0){
              return prevTimer -1
          } else {
              return prevTimer
          }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row w-full px-[24px] mt-[10px]">
          <BackButton
            backButtonContainerStyle="bg-[#fff] rounded-full"
            handlePress={()=> router.back()}
          />
           </View>
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 24
          
        }}
      >
        
        <Text className="text-2xl font-psemibold text-black mt-7 ">Enter OTP code</Text>
        <Text className="text-sm font-pregular text-black mt-2 ">Check your message for a code from us!</Text>


        <OtpInput
          otp={ otp }
          setOtp={ setOtp }
          digits={4}
          style={{ borderRadius: 7, borderTopWidth: 0 , borderRightWidth:0, borderLeftWidth:0, height: 45 }}
          fontStyle={{ fontSize: 20, fontWeight: 'bold' }}
          focusedStyle={{ borderColor: '#5cb85c', borderBottomWidth: 2 }}
         />

         <View className="flex-row justify-between mt-7">
           <Text className="flex-1">Resend code</Text>
           <Text className="flex-1 text-right">{timer}s</Text>

           {}
         </View>

         {/* <CustomButton
              title={`Resend (${timer}s)`}
              disabled={timer == 0 ? false : true}
              //disabled={isEnabled() ? false : true}
              containerStyles="bg-transparent"
             // textStyles="text-primary text-base"
              textStyles=""
              txt={{ color: timer === 0 ?  'yellow'  : 'green'}}
              
              onPress={() => setTimer(60)}
        /> */}

         <CustomButton
           title="Continue"
           containerStyles="mt-10"
           handlePress={()=> router.navigate('/onboardProfile/create-profile')}
          />

      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterOtp