import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';

export default function BaiscButton({
  //Login Button
    text,
    onPress
}){
  return(
    <View>
      
            <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        
    </View>
    
  );
  
}



 const styles = StyleSheet.create({  
 
  buttonText:{
    textAlign:"center",
    padding:10,
    fontWeight:'bold',
    fontSize:13,

},
  button:{
    backgroundColor:"#6f79a8",
    textAlign:"center",
    marginHorizontal:100,
},
})