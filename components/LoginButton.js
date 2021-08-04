import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';

export default function LoginButton({
  //Login Button
    text,
    onPress
}){
  return(
    <View>
      <LinearGradient
        colors={['#4100ca','transparent','#c800c8']}
        style={styles.background}>
            <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>
    
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
  buttonText:{
    textAlign:"center",
    padding:10,
    fontWeight:'bold',
    fontSize:13,

},
  button:{
    backgroundColor:"#6f79a8",
    marginTop:400,
    marginHorizontal:100,
},
})