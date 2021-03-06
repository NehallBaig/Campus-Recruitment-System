import React,{useState,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Picker
} from 'react-native';
import {Button,Icon} from 'native-base'

export default CampusRegister =({navigation})=>{
    const firestore_ref=firestore().collection('Vacanies')
    //..
    const [fullname,setFullName]=useState('')
    const [displayname,setDisplayName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [Address,setAddress]=useState('')
    const [bloodgroup,setbloodgroup]=useState('')

    //..
    async function RegisterUser(){
        await firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(),password)
        .then((loggeduser)=>{
            const userdata=firestore_ref.doc(loggeduser.user.uid)
            userdata.set({
                Vacancy:fullname,
                Designation:email,
                VacancyCode:password,
                Depary:phoneNumber,
                Location:Address,
            }).then(()=>{
                alert('successfully Register')
                 navigation.navigate("Campus");
            })
        })
        .catch((error)=>{
            alert(error)
        })

    }

    return(
        <View style={styles.container}>
           
            <View style={styles.forms}>
            <TextInput
                placeholder={'Add Vacancies'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setFullName(text)}
                value={fullname}
                style={styles.textinput}>
                </TextInput>
                
                <TextInput
                placeholder={'Email'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setEmail(text)}
                value={email}
                style={styles.textinput}>


                </TextInput>
                <TextInput
                placeholder={'VacancyCode'}
                inlineImageLeft={"account"}
            
                //...
                onChangeText={(text)=>setPassword(text)}
                value={password}
                keyboardType="default"
                style={styles.textinput}>
                </TextInput>

                <TextInput
                placeholder={'Depart'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setPhoneNumber(text)}
                value={phoneNumber}
                style={styles.textinput}>
                </TextInput>
            
                <TextInput
                placeholder={'Location'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setAddress(text)}
                value={Address}
                style={styles.textinput}>
                </TextInput>
              
                <Button
                onPress={()=>RegisterUser()}
                style={{
                    borderRadius:3,
                    padding:10,
                    marginTop:10,
                    justifyContent:'center',
                    backgroundColor:'#6B2F'
                }}
           >
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:25,

               }}>
                   Sign Up
               </Text>

           </Button>
            </View>
           
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        marginVertical:110,
        marginTop:0,
    },
    forms:{
        flexDirection:'column',
        flex:1,
    },
    textinput:{
            fontSize:20,
            fontWeight:'300',
            borderColor:'#6B2F',
            borderWidth:3,
            borderRadius:3,
            padding:10,
            marginTop:7,
    }
})