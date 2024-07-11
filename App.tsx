import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './Navegadores/MainNavigator';
import LoginScreen from './Screens/WelcomeScreen';
import GaleriaScreen from './Screens/GaleriaScreen';
import OperacionesScreen from './Screens/OperacionesScreen';

export default function App() {
  return (
  
  
   <MainNavigator/>
   //<GaleriaScreen/>
   //<OperacionesScreen/>

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
