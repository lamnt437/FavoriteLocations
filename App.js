import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AllPlaces from './screens/AllPlaces'
import AddPlace from './screens/AddPlace'
import Button from './components/UI/Button';

const Stack = createNativeStackNavigator()

export default function App() {
  // TODO header button to navigate to add place screen
  // add options, headerRight, icon, name, size, onPress,
  // add button in UI folder
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllPlaces" component={AllPlaces} options={({navigation}) => ({
            title: 'Your favorite places',
            headerRight: ({tintcolor}) => {
              return (<Button name="add" size={24} color={tintcolor} onPress={() => navigation.navigate('AddPlace')} />)
            }
          })}/>
          <Stack.Screen name="AddPlace" component={AddPlace}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
