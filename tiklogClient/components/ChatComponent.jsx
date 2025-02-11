import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  SystemMessage,
  IMessage, 
} from 'react-native-gifted-chat'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScrollView } from 'react-native-gesture-handler'


const ChatComponent = () => {

  const insets = useSafeAreaInsets();

    const [messages, setMessages] = useState([])
    const [text, setText] = useState('');
    const [inputMessages, setInputMessage] = useState([]);



    const handleInputText = (text) => {
      setInputMessage(text);
    }
     const submitHandler = () => {
      const message = {
        _id: Math.random().toString(36).toString(7),
        text: inputMessages,
        createdAt: new Date().getTime(),
        user: {_id: 1}
      };

      setMessages((previousMessages) => 
        GiftedChat.append(previousMessages, [message])
      );
    } 
    
    const renderInputToolbar = ({props}) => {
      return (
        <InputToolbar
          {...props}
          //containerStyle={{ backgroundColor: Colors.background }}
          renderActions={() => (
            <View style={{ height: 55, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, borderRadius: 12, }}>
              <SimpleLineIcons name="emotsmile" size={22} color="black" />
            </View>
          )}
        />
      );
    };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])


  return (
    <>
    
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            onInputTextChanged={setText}
            user={{
                _id: 1,
            }}
 
           // textInputProps={styles.composer}
            bottomOffset={insets.bottom}
            renderAvatar={null}
            //maxComposerHeight={100}
            minInputToolbarHeight={0}

            renderBubble={(props) => {
              return (
                <Bubble
                  {...props}
                  textStyle={{
                    right: {
                      color: '#fff',
                    },
                  }}
                  wrapperStyle={{
                    left: {
                      backgroundColor: '#fff',
                    },
                    right: {
                      backgroundColor: '#1F1F76',
                    },
                  }}
                />
              );
            }}

            renderSend={(props) => (
              <View
                style={{
                  height: 55,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 14,
                  paddingHorizontal: 14,
                  
                  
                }}>
                {/* {text === '' && (
                  <>
                    <Ionicons name="camera-outline" color="#1F1F76" size={28} />
                    <Ionicons name="mic-outline" color="#1F1F76" size={28} />
                  </>
                )} */}
                {text !== '' && (
                  <Send
                    {...props}
                    containerStyle={{
                      justifyContent: 'center',
                      backgroundColor: '#1F1F76',
                      height: 40,
                      width: 40,
                      borderRadius: 8,
                      alignItems: 'center'
                    }}>
                    <Ionicons name="send" color="#fff" size={20} />
                  </Send>
                )}
              </View>
            )}

            //renderInputToolbar={ <CustomAction /> }
            keyboardShouldPersistTaps='never'
            forceGetKeyboardHeight
            listViewProps={{keyboardDismissMode: 'on-drag'}}
            //locale={i18n.language}
            renderInputToolbar={()=> {return null}}
            />
            
            
            <View style={styles.inputContainer}>
              <View style={styles.inputMessageContainer}>
              <TouchableOpacity>
                <Feather name="smile" size={20} color="black" />
              </TouchableOpacity>

                <TextInput
                  style={styles.input}
                  placeholder='Type here...'
                  //placeholderTextColor={}
                  value={inputMessages}
                  onChangeText={handleInputText}
                  onInputTextChanged={setText}
                 />

                 <View
                   style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                   }}
                 >
                {inputMessages === '' && (
                  <>
                  <TouchableOpacity>
                    <Ionicons name="camera-outline" size={24} color="#333" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <MaterialCommunityIcons name="sticker-circle-outline" size={24} color="black" />
                  </TouchableOpacity>
                  </>
                  )}
                  {inputMessages !== '' && (

                  
                  <TouchableOpacity 
                    onPress={submitHandler}
                    style={{
                      justifyContent: 'center',
                      backgroundColor: '#1F1F76',
                      height: 40,
                      width: 40,
                      borderRadius: 8,
                      alignItems: 'center'
                    }}>
                    <Ionicons name="send" size={20} color="#fff" />
                  </TouchableOpacity>
                  )}
                 </View>
              </View>
            </View>
     </>       
  )
}

const CustomAction = () => {
  return(
    <View>
      <Ionicons name="send" color="#fff" size={20} />
   </View>
   );
}

export default ChatComponent

const styles = StyleSheet.create({
  composer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    paddingHorizontal: 10,
    paddingTop: 8,
    fontSize: 16,
    
  },

  inputContainer: {
    //backgroundColor: '#fff',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputMessageContainer: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "center",
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    borderColor: "rgba(128, 128, 128, .4)",
    borderWidth: 1,
    paddingHorizontal: 10
  },
  input: {
    color: '#333',
    flex: 1,
    paddingHorizontal: 10
  },

});