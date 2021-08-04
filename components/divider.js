
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';

export default function Divider(){
    //"OR" divider
    return(
            <View style={styles.container}>
                <View style={styles.line}></View>
                <Text style={styles.text}>OR</Text>
                <View style={styles.line}></View>
            </View>      
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:'space-evenly',
        paddingVertical:15,
    },
    line:{
        height:1,
        width:"35%",
        backgroundColor:"#eeeeee",
    },
    text:{
        fontWeight:"bold",
        lineHeight:20,
        fontSize:15,
        color:"#000070",
        
    },
});
