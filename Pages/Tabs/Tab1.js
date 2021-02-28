import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Tab1 = () => {
  let [listData, setListData] = useState([]);

  useEffect(() => {
    firestore()
      .collection('Vacanies')
      .get()
      .then((querySnapshot) => {

        let temp = [];
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          console.log('user Id: ', documentSnapshot.id);

          let userDetails = {};
          // Document fields
          userDetails = documentSnapshot.data();
          // All the document related data
          userDetails['id'] = documentSnapshot.id;
          temp.push(userDetails);
          setListData(temp);
        });
      });
  }, []);

  const itemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#6B2F'
        }} />
    );
  };

  let itemView = ({item}) => {
    return (
      <View
        key={item.name}
        style={{
          backgroundColor: 'white',
          padding: 20,
          color:'#307ecc'
        }}>
        <Text  style={{
          color:'black',
          fontWeight:'bold'
        }}>Doc Id: {item.id}</Text>
        <Text style={{
          color:'black',
          fontWeight:'bold'
        }}>Name: {item.name}</Text>
        <Text style={{
          color:'black',
          fontWeight:'bold'
        }}>Contact: {item.phonenumber}</Text>
         <Text style={{
          color:'black',
          fontWeight:'bold'
        }}>Address: {item.Address}</Text>
      
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={listData}
        ItemSeparatorComponent={itemSeparatorView}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemView}
      />
    </View>
  );
};

export default Tab1;