import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';

export default function SignUpButton(){
  
  return(
    <LinearGradient
        colors={['#4100ca','transparent','#c800c8']}
        style={styles.background}></LinearGradient>
  );
  
}



 const styles = StyleSheet.create({
    
  background: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: 600,
  borderRadius:10,
},
})