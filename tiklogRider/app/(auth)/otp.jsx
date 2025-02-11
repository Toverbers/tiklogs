import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OtpInput from '../../components/OtpInput';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

const Otp = () => {
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
    <SafeAreaView className="bg-white flex-1">
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 24
          
        }}
        
      >
       <View className="mt-[24px]">
       <Text className="text-2xl font-psemibold text-black">Enter OTP code</Text>
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
           containerStyles="mt-20"
           handlePress={()=> router.push('/reset-password')}
          />
       </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Otp