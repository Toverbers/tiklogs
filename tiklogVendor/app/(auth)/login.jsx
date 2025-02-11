import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import Phone from '../../components/Phone'
import LoginModal from '../../components/LoginModal'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Login = ({countryCode}) => {

    const [form, setForm] = useState({
        phone: "",
        password: "",
      });

      const [selectedArea,setSelectedArea]=useState(null);
      const [openLoginModal,setOpenLoginModal]=useState(false);

      const [showPassword, setShowPassword] = useState(false)
    
      const [isSubmitting, setIsSubmitting] = useState(false)

      const goHome = () => {
        setOpenLoginModal(false)
        router.navigate('home')
        
      }
    
  return (
    <SafeAreaView className="bg-white">
    <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 24
          
        }}
      >

        <View className="h-full flex-col justify-between py-10">
          <View>
          <View className="w-full mt-6">
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
             otherStyles="mt-5"
             setSelectedArea={setSelectedArea}
             selectedArea={selectedArea}
             keyboardType='phone-pad'
             />

            <FormField
            //title="Password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder="********"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-2"

            //prepend={}
            
          />

          <View className="flex-row justify-end mt-5">
            <Pressable onPress={()=> router.push('/forgot-password')}>
              <Text className="text-primary font-pmedium">Forgot password?</Text>
            </Pressable>
          </View>

        {/* <Text className="text-black"> {selectedArea?.callingCode}</Text> */}
            <CustomButton
                title="Login"
                //handlePress={() => router.push('/login')}
                handlePress={() => setOpenLoginModal(true)}
                containerStyles="w-full mt-7 "
                textStyles="text-white"
           />
          </View>

          <View className="flex-row justify-center items-center gap-2">
           <Text className="font-pregular text-base">You are new here?</Text> 
           <Pressable onPress={() => router.push('register')}><Text className="font-psemibold text-base text-primary">Create Account</Text></Pressable>
          </View>
        </View>


        

          
        <LoginModal
          visible={openLoginModal}
          handlePress={goHome}
        />
        </ScrollView>

        <StatusBar backgroundColor='#1F1F76' style='light' />
    </SafeAreaView>
  )
}

export default Login