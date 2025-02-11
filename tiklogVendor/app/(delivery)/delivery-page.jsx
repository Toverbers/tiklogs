import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'
import { mapStyles } from '../../assets/MapStyle'
import DeliveryPriceModal from '../../components/DeliveryPriceModal'
import SearchRideModal from '../../components/SearchRideModal'
import NoRideModal from '../../components/NoRideModal'
import RiderModal from '../../components/RiderModal'
import CompletedModal from '../../components/CompletedModal'
import RatingModal from '../../components/RatingModal'
import TipModal from '../../components/TipModal'
import { router } from 'expo-router'


const DeliveryPage = ({
  
}) => {
  const [showPrice, setShowPrice] = useState(true);
  const [showSearchRide, setShowSearchRide] = useState(false);
  const [showNoRide, setShowNoRide] = useState(false);
  const [showRider, setShowRider] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const [rating, setRating] = useState(0);

  



  const goToSearchRide = () => {
    setShowPrice(false);
    setShowSearchRide(true)
  }

  const goToNoRidehRide = () => {
    setShowPrice(false);
    setShowSearchRide(false)
    setShowNoRide(true)
  }
  const retryButton = () => {
    setShowPrice(false);
    setShowSearchRide(false)
    setShowNoRide(false)
    setShowRider(true)
  }
  const goToNextPage = () => {
    setShowPrice(false);
    setShowSearchRide(false)
    setShowNoRide(false)
    setShowRider(false)
    setShowCompleted(true)
  }
  const goToRating = () => {
    setShowPrice(false);
    setShowSearchRide(false)
    setShowNoRide(false)
    setShowRider(false)
    setShowCompleted(false)
    setShowRating(true)
  }
  const skipToTip = () => {
    setShowPrice(false);
    setShowSearchRide(false)
    setShowNoRide(false)
    setShowRider(false)
    setShowCompleted(false)
    setShowRating(false)
    setShowTip(true)
  }
  const ConfirmTip = () => {
    setShowPrice(false);
    setShowSearchRide(false)
    setShowNoRide(false)
    setShowRider(false)
    setShowCompleted(false)
    setShowRating(false)
    setShowTip(true)
  }

  const goToChatPage = () => {
    router.push('/chat/chat-page')
  }
  


  return (
    <View className="" style={{zIndex: -10, position: 'relative', flex: 1}}>
        <MapView
         provider={MapView.PROVIDER_GOOGLE}
         style={styles.map}
         customMapStyle={mapStyles}
         />

         <View className="bg-[#fff] w-full bottom-0 right-0" style={{zIndex: 30, position: 'absolute' }}>
          <View>
            <DeliveryPriceModal
             visible={showPrice}
             handlePress={goToSearchRide}
             handleRidercloseButton={()=> router.back()}
             />
          </View>

          <View>
            <SearchRideModal
             visible={showSearchRide}
             handlePress={goToNoRidehRide}
             />
          </View>
          <View>
            <NoRideModal
             visible={showNoRide}
             retryButton={retryButton}
             />
          </View>

         </View>
         {showRider && (
          <RiderModal
           nextPage={goToNextPage}
           goToChatPage={goToChatPage}
           //goToCallPage={goToCallPage}

           editDelivery={()=> router.push('/edit-delivery')}
          />
         )}

         <View>
            <CompletedModal
             visible={showCompleted}
             continueButton={goToRating}
             />
          </View>
         <View>
            <RatingModal
             visible={showRating}
             continueButton={goToRating}
              //value={value}
              //onChangeText={handleChangeText}
              userRating={rating}
              setUserRating={setRating}
              skipButton={skipToTip}
              confirmButton={ConfirmTip}
             />
          </View>

         <View>
            <TipModal
             visible={showTip}
             continueButton={goToRating}
              //value={value}
              //onChangeText={handleChangeText}
            
             />
          </View>
         
    </View>
  )
}

export default DeliveryPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex: -999,
  },
});