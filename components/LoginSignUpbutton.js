import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';

export default function LoginSignUpButton({
  customStyle,
  text,
  btnText,
  onPress,
}) {
  
  return(
    <View style = {[styles.container,customStyle]}>
      <Text style = {styles.text}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style = {styles.btnText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
  
}



 const styles = StyleSheet.create({
  container: {
    fontSize:16,
    lineHeight:20,
    flexDirection:"row",
    alignItems:'center',
  },
  text : {
    fontSize : 16,
    lineHeight : 20,
  },
  btnText : {
    fontWeight: "500",
    fontSize:17,
    lineHeight : 20,
    color : "#42a5f5",
    marginLeft : 2,
    
  },
})