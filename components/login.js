import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import LoginButton from './LoginButton';
import Divider from './divider';

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    //functon to handel when login btn is clicked on
    function handelLoginBtnClick(){
      console.log("Login click",email,password);
    }
  return (
    <View>
      <LinearGradient
        colors={['#4100ca','transparent','#c800c8']}
        style={styles.background}
       >
        <ScrollView>
   
          <View style={{marginVertical:25}}></View>

          <Text style={styles.title}>LOGIN</Text>

          <View>
            <Text style={styles.text}>EMAIL ADDRESS :</Text>

            <View style={{padding:5}}></View>

            <TextInput 
            style={styles.textInput}
            keyboardType='email-address'
            placeholder="ENTER YOUR REGISTERED EMAIL"
            value={email}
            onChangeText={(val)=>setEmail(val)}
            ></TextInput>
          </View>

          <View style={{marginVertical:25}}></View>


          <View>
            <Text style={styles.text}>PASSWORD :</Text>

            <View style={{padding:5}}></View>

            <TextInput
              style={styles.textInput}
              placeholder="ENTER YOUR PASSWORD"
              secureTextEntry
              value={password}
              onChangeText={(val)=>setPassword(val)}
              ></TextInput>
          </View>
  
          <LoginButton
            text="LogIn"
            onPress={handelLoginBtnClick}
          />

          <View style={{marginVertical:35}}></View>     

                <Divider></Divider>  

        </ScrollView>
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
    marginVertical:60,
    paddingHorizontal:10,
    borderRadius:10,
    height:640,
  },
 title:{
  textAlign:'center',
  marginVertical:20,
  fontSize:48,
  fontWeight:'bold',
  color:"#000070",
  textShadowOffset:{width:3,height:5},
  textShadowColor:"#f8bbd0", 
  textShadowRadius:6,
},
 text:{ 
  color:"#291200",
  fontWeight:'bold',
  fontSize:20,
  textShadowOffset:{width:3,height:3},
  textShadowRadius:3,
  textShadowColor:"#c4ff00",
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
 buttonText:{
  alignItems:'center',
  paddingLeft:33,
  padding:10,
},
button:{
  backgroundColor:"#6f79a8",
  marginLeft:150,
  marginRight:150,
},

});