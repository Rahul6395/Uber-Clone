
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './Screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreens from './Screens/MapScreens';
import 'react-native-gesture-handler';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
    <KeyboardAvoidingView
      behavior={"padding"}
     keyboardVerticalOffset={Platform.OS === "android"? -300:0}
      style={{flex:1}}
    >
    <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false,}}/>
       <Stack.Screen name="MapScreen" component={MapScreens} options={{headerShown:false,}}/>
    </Stack.Navigator>
    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}


