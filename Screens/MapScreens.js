import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../component/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCar from '../component/NavigateCar'
import RideOptionCard from '../component/RideOptionCard'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const MapScreens = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation()
  return (
    <View>
  <TouchableOpacity onPress={()=>navigation.navigate("Home")}
  style={tw`bg-gray-100 absolute top-15 left-8 z-50 p-3 rounded-full shadow-lg`}>
    <Icon name="menu"/>
  </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
        <Stack.Screen name="NavigateCar" component={NavigateCar} options={{headerShown:false,}}/>
        <Stack.Screen name=" " component={RideOptionCard} options={{headerShown:false,}}/>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreens

const styles = StyleSheet.create({})