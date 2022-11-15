import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/context/auth';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import Routes from './src/routes/index'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#131313' style="light" />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

