/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, {Component} from 'react';
import Inicio from './componentes/inicio';
import { NativeBaseProvider } from 'native-base';
import Peliculas from './componentes/peliculas';
import Libros from './componentes/libros';
import Wallpapers from './componentes/wallpapers';
import VideoPlayer from './componentes/videoPlayer';
import Lector from './componentes/lector';
import Wallpaper from './componentes/wallpaper';
import Acerca from './componentes/acerca_de';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';

import {Icon} from 'native-base';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from "react-icons/fa";
import { FaBeer } from 'react-icons/fa';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component{
  createHomeStack = () =>
  <Stack.Navigator initialRouteName="Inicio" >
    <Stack.Screen name="Inicio" 
                  component = {Inicio} 
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,},tabBarIcon: { focused: true, color: 'red' }}}/>
    <Stack.Screen name="Peliculas" component = {Peliculas} 
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,}}}/>
    <Stack.Screen name="VideoPlayer" component = {VideoPlayer} 
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,}}}/>
    <Stack.Screen name="Libros" component = {Libros} 
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,}}}/>
    <Stack.Screen name="Libro" component = {Lector}  
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,}}}/>
    <Stack.Screen name="Wallpapers" component = {Wallpapers}  
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,}}}/>
    <Stack.Screen name="Wallpaper" component = {Wallpaper} 
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,}}}/>
    <Stack.Screen name="Acerca" component = {Acerca} 
                  options={{headerStyle: {backgroundColor: '#1e90ff'},headerTintColor: 'white',headerTitleStyle: {
                    fontSize: 30,}}} />
  </Stack.Navigator>
  
  render(){
    return (
      <NativeBaseProvider>
        <StatusBar backgroundColor='#1e90ff' barStyle='light-content' />
        <NavigationContainer>         
           <Drawer.Navigator>
              <Drawer.Screen name="Inicio" component={this.createHomeStack} />
              <Drawer.Screen name="Peliculas" component={Peliculas} />
              <Drawer.Screen name="Libros" component={Libros} />
              <Drawer.Screen name="Wallpapers" component={Wallpapers} />
           </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
      );
  }
};

