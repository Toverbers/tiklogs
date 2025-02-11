import { View, Text, TextInput, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '../constants'

const Phone = ({
    title,
    value,
    placeholder,
    prepend,
    handleChangeText,
    otherStyles,
    keyboardType,
    secureTextEntry,
    countryCode,
    selectedArea,
    setSelectedArea,
    //selectedArea,
    ...props
    
}) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [areas, setAreas] = useState([])
  //const [selectedArea,setSelectedArea]=useState(null);

  //console.log(selectedArea?.callingCode)


  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(response=>response.json())
    .then(data => {
      let areaData = data.map(item => {
        return {
          code: item.alpha2Code,
          item: item.name,
          callingCode: `+${item.callingCodes[0]}`,
          //flag: `https://countryflagsapi.com/png/${item.name}`
          flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`
        }
      });

      setAreas(areaData);
      if(areaData.length > 0){
        let defaultData = areaData.filter(a => a.code == "NG");

        if(defaultData.length > 0){
          setSelectedArea(defaultData[0])
        }
      }
    })
},[])
  //console.log('AREA DATA', areas) 

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
         style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', justifyContent: '' }}
         onPress={() => {
             setSelectedArea(item)
             setModalVisible(false)
         }}
      >
        {item?.flag ? <><Image
           source={{uri: item?.flag} }
           style={{
            height: 35,
            width: 35,
            marginRight: 10,
           }}
          /></> : null}
        
          <Text className="flex-1 items-center">{item.callingCode}  <Text >{item.item}</Text></Text>

          <View className="flex-col  gap-1 items-center">
            
            {/* <Text >{item.item}</Text> */}
          </View>
          
          

      </TouchableOpacity>
    )
  }


  return (
    <View className={`space-y-2 flex-row gap-3 ${otherStyles}`}>
    
    <View className="border-2 rounded-lg border-gray-200 h-14 px-2 flex-0.5 flex-row  items-center">
    <TouchableOpacity 
        style={{
            width: 100,
            height: 50,
            //marginHorizontal: 2,
            marginRight: 0,
            flexDirection: 'row',
        }}
        onPress={()=>setModalVisible(!modalVisible)}>
        
        <View style={{justifyContent: 'center'}}>
          {
            selectedArea?.flag ? <><Image
            source={{ uri: selectedArea?.flag} }
            resizeMode='center'
            style={{
                width: 30,
                //borderRadius: 30,
                height: 30
            }}
            /></> : null
          }  
            
        </View>
                    
                    

        <View style={{justifyContent: 'center', marginLeft: 5}}>
            <Text>{selectedArea?.callingCode}</Text>
        </View>
        <View style={{justifyContent: 'center'}} className="ml-2">
            
            
            <Image
            source={icons.down_arrow}
            style={{
                width: 10,
                height: 10,
                tintColor: "#333"
            }} 
            />
        </View>
        </TouchableOpacity>
    </View>
    <View className="border-2 rounded-lg border-gray-200 w-full h-14 px-4 flex-1 bg-white focus:border-primary flex-row items-center">
        {/* <Text>Hello</Text> */}
    <TextInput
        className="flex-1 text-gray font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        selectedArea={selectedArea}
        //secureTextEntry={ !showPassword}
        secureTextEntry={ secureTextEntry}
        countryCode={selectedArea}
        />

        
        {prepend}     
        
    </View>

    <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >

          <TouchableWithoutFeedback
           onPress={()=> setModalVisible(false)}
          >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50, 0.5)'}}>
              <View
              className="p-5 "
              style={{
                height: '60%',
              width: "100%",
              backgroundColor: "#ffff",
              borderRadius: 5
              }}
            >
             <View>
                <Text className="text-2xl font-psemibold">Select Country</Text>
                
                <View className="border-2 rounded-xl border-gray-200 w-full h-14 px-4  focus:border-primary flex-row items-center mt-3 mb-5">
                    <TextInput 
                    placeholder='search'
                    className="flex-1 text-gray font-psemibold text-base" 
                    />
                 <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: "#333"
                    }} 
                    />   
                </View>
                
             </View>

              <FlatList
                 data={areas}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.code}
                 showsVerticalScrollIndicator={false}
                 style={{
                  marginBottom: 8 ,
                  
                 }}
               />
              
            </View>
            
            </View>

          </TouchableWithoutFeedback>
          </Modal>
  </View>
  )
}

export default Phone