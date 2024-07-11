import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RegisterScreen from '../Screens/RegisterScreen';
import GaleriaScreen from '../Screens/GaleriaScreen';

import OperacionesScreen from '../Screens/OperacionesScreen';
import HistorialScreen from '../Screens/HistorialScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const stack=createStackNavigator();

function MyStackNavigator(){
return(
    <stack.Navigator  screenOptions={{ headerShown: false }}>
    <stack.Screen name='Welcome' component={WelcomeScreen}/>
    <stack.Screen name='Registro' component={RegisterScreen}/>
    <stack.Screen name='Galeria' component={GaleriaScreen}/>
    <stack.Screen name='Historial' component={HistorialScreen}/>
    <stack.Screen name='Drawer' component={MyDrawerNavigation}/>
    <stack.Screen name='Operaciones' component={OperacionesScreen}/>
    </stack.Navigator>
);

}
const Drawer=createDrawerNavigator();

function MyDrawerNavigation(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Menu-Principal' component={GaleriaScreen}/>
            <Drawer.Screen name='Operaciones' component={OperacionesScreen}/>
            <Drawer.Screen name='Historial' component={HistorialScreen}/>
            <Drawer.Screen name='Mas' component={MyTopNavigator}/>
        </Drawer.Navigator>
    )
}
const Top=createMaterialTopTabNavigator();

function MyTopNavigator(){
    return(
        <Top.Navigator>
            <Top.Screen name='Menu-Banco'  component={GaleriaScreen}/>
            <Top.Screen name='Operaciones'  component={OperacionesScreen}/>
            <Top.Screen name='Historial'  component={HistorialScreen}/>
        </Top.Navigator>
    )
}


export default function MainNavigator() {
  return (
    <NavigationContainer>
       <MyStackNavigator/>
    </NavigationContainer>
  )
}
