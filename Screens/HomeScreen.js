import { StyleSheet, Text, View,SafeAreaView,Image,ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../component/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import {setOrigin,setDestination} from "../slices/navSlice"
 import NavFavourites from '../component/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch() 

  return (
    <ScrollView style={tw` bg-white h-full`}>
    <View style={tw`p-5`}>  
        <Image source={{
            uri: 'https://links.papareact.com/gzs',
        }}
         style={{width:100,height:100,resizeMode:"contain"}}    
        />
        <GooglePlacesAutocomplete
        placeholder='Where From?'
        styles={{
          container:{
            flex:0,
          },
          textInput:{fontSize:18},
        }}
        onPress={(data,details=null)=>{
console.log(data)
        dispatch(setOrigin({
          location:details.geometry.location,
          description: data.description,
        }))
        dispatch(setDestination(null))
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
         }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
 
        <NavOptions/>
        <NavFavourites/>
     
    </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})