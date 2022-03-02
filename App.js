import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// <---------NPM PACKAGES ---------->
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTPsrc from './Screens/OTPsrc';
import PhoneNumber from './Screens/PhoneNumber';
// <---------END OF NPM PACKAGES ---------->

export default function App() {

  //Creating stack screen
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="OTPcode" component={OTPsrc} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
