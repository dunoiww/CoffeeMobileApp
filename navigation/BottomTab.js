import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import * as Icons from "react-native-heroicons/mini";
import { colors } from "../theme";
import { MaterialIcons } from '@expo/vector-icons';

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
                    tabBarLabelStyle: { color: colors.primary },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Icons.HomeIcon size={30} color={colors.primary} />
                        ) : (
                            <Icons.HomeIcon size={30} color={'gray'} />
                        ),
                }}
            />

            <Tab.Screen
                name="Menu"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Food & Drink",
                    tabBarLabelStyle: { color: colors.primary },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MaterialIcons name="fastfood" size={30} color={colors.primary} />
                        ) : (
                            <MaterialIcons name="fastfood" size={30} color={"gray"} />
                        ),
                }}
            />

            <Tab.Screen
                name="Voucher"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { color: colors.primary },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Icons.ChatBubbleOvalLeftEllipsisIcon size={30} color={colors.primary} />
                        ) : (
                            <Icons.ChatBubbleOvalLeftEllipsisIcon size={30} color="gray" />
                        ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: colors.primary },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Icons.UserCircleIcon size={30} color={colors.primary} />
                        ) : (
                            <Icons.UserCircleIcon size={30} color={'gray'} />
                        ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
