
import React,{useState, useContext} from 'react';
import Constants from 'expo-constants'
import { View,StyleSheet,Text, Dimensions,SafeAreaView,StatusBar } from 'react-native';

// icons    
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

// API
import axios from 'axios';

import { Colors } from './../styles/styles'
const { primary,secondary, tertiary, quaternary } = Colors;

// Redux
import { useDispatch } from 'react-redux';

const Login = ({navigation}) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  console.log(width,height, width/height);

  return (
 <SafeAreaView style={styles.container}>
      <StatusBar 
      style="auto" 
      animated={true}
      backgroundColor="#61dafb"
      />

    <View style={styles.headerlogin} >
      <Text>Header bolis</Text>
    </View>

    <View style={styles.bodylogin} >
      <Text>App cuerpo</Text>
    </View>
  

</SafeAreaView>    
  )
}

export default Login;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop:Constants.statusBarHeight, 

  },

    headerlogin: {
      backgroundColor: 'red',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*(1/16),

    },  

    bodylogin: {
      backgroundColor: 'green',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*(15/16),

    },  

});

