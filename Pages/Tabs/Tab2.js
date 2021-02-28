import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet,Text,Image } from "react-native";
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
const Tab2 = () => {
  const [user, setUser] = useState();
  const {uid} = auth().currentUser;

  const getUser = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('Vacanies')
        .doc(uid)
        .get();

      const userData = documentSnapshot.data();
      setUser(userData);
    } catch {
      //do whatever
    }
  };

  // Get user on mount
  useEffect(() => {
    getUser();
  }, []);

  // return info if user is set
    return (
      <View>
        
      <View style={styles.container}>
       
        <Text  style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'black'}}>Name:  {user && user?.name}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'black'}}>Email: {user && user?.email}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'black'}}>Contact:  {user && user?.phonenumber}</Text>
                <Text></Text>
                <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'black'}}>Address:  {user && user?.Address}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'black'}}>bloodgroup:   {user && user?.bloodgroup}</Text>
      </View>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:1,
 
    
    margin:20,
    
}
});

export default Tab2;