import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import Divider from './divider';
import BaiscButton from './BasicButton';
import LoginSignUpButton from './LoginSignUpbutton';
import { Picker } from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';

export default class SignUp extends ValidationComponent{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            ageGroup : "",
            password : "",
            confirmPass : "",
        }
    }
    handelRegisterBtnClick=()=>{
        console.log("Register Clicked!")
        this.validate({
            name: {minlength:3, maxlength:25, required:true},
            email: {email:true, required:true},
            ageGroup: {required:true},
            password: {required:true},
            confirmPass: {equalPassword:this.state.password, required:true},
        });
    }
    handelSignInBtnClick=()=>{
        console.log("Sign In")
    }
    render(){
        return(
            <View>             
                <LinearGradient
                    colors={['#4100ca','transparent','#c800c8']}
                    style={styles.background}
                >
                    <ScrollView style={styles.container}>
                        <View style={{marginVertical:25}}></View>

                        <Text style={styles.title}>Sign Up</Text>

                        <View style={{marginVertical:25}}></View>

                        <View>
                            <Text style={styles.text}>Name :</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter Your Name "
                                value={this.state.name}
                                onChangeText={(name)=>this.setState({name})}
                            ></TextInput>
                        </View>

                        <View style={{marginVertical:25}}></View>

                        <View>
                            <Text style={styles.text}>Email Id :</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder = "Enter Your Registered Email Id"
                                value = {this.state.email}
                                onChangeText={(email)=>this.setState({email})}
                            ></TextInput>
                        </View>

                        <View style={{marginVertical:25}}></View>

                        <View>
                            <Text style={styles.text}>Age Group :</Text>
                            <Picker
                                style={styles.textInput}
                                selectedValue={this.state.ageGroup}
                                onValueChange={(ageGroup,itemIndex)=>this.setState({ageGroup})}
                            >
                                <Picker.Item label="Choose Your Age Group"></Picker.Item>
                                <Picker.Item label="1-4" value="1-4"></Picker.Item>
                                <Picker.Item label="5-12" value="5-12"></Picker.Item>                            
                                <Picker.Item label="13-18" value="13-18"></Picker.Item>
                            </Picker>                            
                            
                        </View>

                        <View style={{marginVertical:25}}></View>

                        <View>
                            <Text style={styles.text}>Password :</Text>
                            <TextInput
                                style={styles.textInput}
                                secureTextEntry
                                placeholder = "Enter Password"
                                value = {this.state.password}
                                onChangeText={(password)=>this.setState({password})}
                            ></TextInput>                            
                        </View>

                        <View style={{marginVertical:25}}></View>

                        <View>
                            <Text style={styles.text}>Confirm Password :</Text>
                            <TextInput
                                style={styles.textInput}
                                secureTextEntry
                                placeholder = "Enter Confirm Password"
                                value = {this.state.confirmPass}
                                onChangeText={(confirmPass)=>this.setState({confirmPass})}
                            ></TextInput>                            
                        </View>

                        <View style={{marginVertical:25}}></View>

                        <BaiscButton
                            text = "Register"
                            onPress = {this.handelRegisterBtnClick}
                        ></BaiscButton>

                        <Text style={styles.errorMsg}>{this.getErrorMessages()}</Text>

                        <View style={{marginVertical:15}}></View>

                        <Divider></Divider>

                        <LoginSignUpButton
                            customStyle={styles.signup}
                            text="Already Have An Account?"
                            btnText="Sign In"
                            onPress={this.handelSignInBtnClick}
                        ></LoginSignUpButton>
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:60,
        paddingHorizontal:8,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        marginVertical:60,
        paddingHorizontal:10,
        borderRadius:10,
        height:640,
    },
    title:{
        textAlign:'center',
        color:"#000070",
        textShadowOffset:{width:3,height:5},
        textShadowColor:"#f8bbd0", 
        textShadowRadius:6,
        fontWeight:"bold",
        fontSize:45,
    },
    text:{
        color:"#291200",
        textShadowColor:"#c4ff00",
        textShadowOffset:{width:3,height:3},
        textShadowRadius:3,
        fontSize:20,
        fontWeight:"bold",
    },
    textInput:{
        borderBottomColor:"#4dd0e1",
        borderBottomWidth:5,
        borderRadius:10,
        borderTopColor:"#4dd0e1",
        borderTopWidth:5,
        borderRightColor:"#002f6c",
        borderRightWidth:5,
        borderLeftColor:"#002f6c",
        borderLeftWidth:5,
    },
    signup:{
          marginVertical:40,
    },
    errorMsg:{
        color:"#000000",
        fontSize:18,
    },
      
});