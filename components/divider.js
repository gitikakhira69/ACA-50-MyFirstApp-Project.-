
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
        alignContent:"center",
        flexDirection:"row",
        justifyContent:'space-evenly',
        paddingVertical:30,
    },
    line:{
        height:1,
        width:"35%",
        backgroundColor:"#eeeeee",
    },
    text:{
        fontWeight:"bold",
        textAlign:"center",
        lineHeight:0,
        color:"#000070",
        fontSize:15,
    },
});