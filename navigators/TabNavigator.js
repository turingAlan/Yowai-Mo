import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import NewArrival from "../screens/NewArrival";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            // backgroundColor: "#ffffff",
            backgroundColor: "rgba(255,255,255,0)",
            borderRadius: 15,
            height: 90,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Home1" component={Home} />
        <Tab.Screen name="Home2" component={Home} />

        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="NewArrival" component={NewArrival} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
