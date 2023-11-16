import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import man1 from './screens/man1';
import man2 from './screens/man2';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='man1' screenOptions={{headerShown:false}}>
        <Stack.Screen name='man1' component={man1}/>
        <Stack.Screen name='man2' component={man2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



