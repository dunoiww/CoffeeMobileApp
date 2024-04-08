import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { color: "#008e97" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" size={24} color="#008e97" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: "#008e97" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="person" size={24} color="#008e97" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
