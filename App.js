import { StatusBar } from "expo-status-bar";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel:false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color="black" />;
          },
          
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="search1" size={24} color="black" />;
          },
        
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="setting" size={24} color="black" />;
          },
          
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="profile" size={24} color="black" />;
          },
          
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
