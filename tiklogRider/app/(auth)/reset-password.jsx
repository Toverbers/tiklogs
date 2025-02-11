import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { router } from 'expo-router'

const ResetPassword = () => {
  const [form, setForm] = useState({
    password: "",
    password2: "",
  });
  //const [showPassword, setShowPassword] = useState(false)
  return (
    <SafeAreaView className="bg-white">
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 24
          
        }}
      >
        <Text className="text-2xl font-psemibold text-black mt-7 ">Reset YOUR Password</Text>
        <Text className="text-sm font-pregular text-black mt-2 ">Effortlessly reset your password, providing a new one and confirming for enhanced security.</Text>



        <FormField
          keyboardType='default'
          //secureTextEntry={ !showPassword}
          //secureTextEntry={ true}
         // showPassword={showPassword}
          //setShowPassword={setShowPassword}
          placeholder="New password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          otherStyles="mt-5"
         />
        <FormField
          keyboardType='default'
          //secureTextEntry={ !showPassword}
          //secureTextEntry={ true}
          //showPassword={showPassword}
          //setShowPassword={setShowPassword}
          placeholder="Retype password"
          value={form.password2}
          handleChangeText={(e) => setForm({...form, password2: e})}
          otherStyles="mt-2"
         />

        <Text className="text-sm font-plight text-black mt-3 ">Ensure your password is at least 8 characters and includes one special character.</Text>
       

         <CustomButton
           title="Reset Password"
           containerStyles="mt-20"
           handlePress={()=> router.push('/success-password')}
          />

      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPassword