import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VerifyScreen from '../screens/VerifyScreen';
import ForgotScreen from '../screens/ForgotScreen';
import BottomTab from './BottomTab';
import EditScreen from '../screens/EditScreen';
import ChangePassword from '../screens/ChangePassword';
import DetailItemScreen from '../screens/DetailItemScreen';
import CartScreen from '../screens/CartScreen';
import AddressScreen from '../screens/AddressScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import ChangePasswordForgotScreen from '../screens/ChangePasswordForgotScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTab" component={BottomTab} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="ChangePasswordForgot" component={ChangePasswordForgotScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Detail" component={DetailItemScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}