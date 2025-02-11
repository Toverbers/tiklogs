import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants'
import Phone from '../../components/Phone'
import FormField from '../../components/FormField'
import PasswordInput from '../../components/PasswordInput'
import { router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
    password2: "",
  });

  const [selectedArea,setSelectedArea]=useState(null);
  const [openLoginModal,setOpenLoginModal]=useState(false);

  const [showPassword, setShowPassword] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <SafeAreaView className="bg-white">
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 24,
          
        }}
      >
        <View className="w-full mt-[20px]">
        <Image
            source={images.logo}
            className="w-[60px] h-[60px]"
            resizeMode="contain"
          />
        </View>

        <Text className="text-3xl font-psemibold text-black mt-7 ">Welcome back!</Text>
        <Text className="text-sm font-pregular text-black mt-2 ">
            Enter your phone number and password to continue
            </Text>


            <Phone
             placeholder="Phone"
             value={form.phone}
             handleChangeText={(e) => setForm({...form, phone: e})}
             otherStyles="mt-3"
             setSelectedArea={setSelectedArea}
             selectedArea={selectedArea}
             keyboardType='phone-pad'
             />

            
            <PasswordInput
            //title="Password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder="********"
            value={form.password2}
            handleChangeText={(e) => setForm({...form, password2: e})}
            otherStyles="mt-2"

            //prepend={}
            
          />
            <PasswordInput
            //title="Password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder="********"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-2"
       />


        {/* <Text className="text-black"> {selectedArea?.callingCode}</Text> */}
            <CustomButton
                title="Register"
                handlePress={() => router.push('/register-otp')}
                containerStyles="w-full mt-7 "
                textStyles="text-white"
           />

<View className="flex-row justify-center items-center gap-2 mt-3">
           <Text className="font-pregular text-base">Have an account Already?</Text> 
           <Pressable onPress={() => router.push('login')}><Text className="font-psemibold text-base text-primary">Login</Text></Pressable>
          </View>

        </ScrollView>

        <StatusBar backgroundColor='#1F1F76' style='light' />
    </SafeAreaView>
  )
}

export default Register