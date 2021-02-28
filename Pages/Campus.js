import React from 'react';
import {
	StyleSheet,

} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';



const Campus = ()=>{
   
    return (
      <Container >
        <Header hasTabs />
        <Tabs >
          <Tab heading="Vacancies" >
            <Tab1 />
          </Tab>
          <Tab heading="Company" >
            <Tab2 />
          </Tab>
          
        </Tabs>
      </Container>
    );
  }
 

export default Campus;