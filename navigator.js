import "react-native-gesture-handler";


import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcom from './Pages/Welcom'


import Login from './Pages/StudentLogin'
import Registration from './Pages/StudentRegistration'
import Student from './Pages/Student'
import StudentForm from './Pages/StudentForm'

import CampusLogin from './Pages/CampusLogin'
 import CampusRegistration from './Pages/CampusRegistration'
 import Campus from './Pages/Campus'
 import CampusForm from './Pages/CampusForm'



const Stack = createStackNavigator();


const navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcom">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: "Login", 
                headerStyle: {
                  backgroundColor: "#6B2F", 
                },
                headerTintColor: "#fff", 
                headerTitleStyle: {
                  fontWeight: "bold", 
                },
              }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              title: "Registration", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
          <Stack.Screen
            name="Welcom"
            component={Welcom}
            options={{
              title: "Welcome", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
          <Stack.Screen
            name="Student"
            component={Student}
            options={{
              title: "Student", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
           <Stack.Screen
            name="StudentForm"
            component={StudentForm}
            options={{
              title: "StudentForm", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
            <Stack.Screen
            name="CampusForm"
            component={CampusForm}
            options={{
              title: "CampusForm", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
                      <Stack.Screen
            name="CampusLogin"
            component={CampusLogin}
            options={{
              title: "CampusLogin", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
                      <Stack.Screen
            name="CampusRegistration"
            component={CampusRegistration}
            options={{
              title: "CampusRegistration", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />
                     <Stack.Screen
            name="Campus"
            component={Campus}
            options={{
              title: "Campus", 
              headerStyle: {
                backgroundColor: "#6B2F", 
              },
              headerTintColor: "#fff", 
              headerTitleStyle: {
                fontWeight: "bold", 
              },
            }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default navigator;