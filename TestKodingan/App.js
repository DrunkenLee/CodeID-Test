import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingPage from "./TabScreen/SettingPage";
import AttendancePage from "./TabScreen/AttendancePage";
import FormPage from "./TabScreen/FormPage";
import Checkout from "./TabScreen/Checkout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Badge, IconButton, MD3Colors } from "react-native-paper";
import HomeStackScreen from "./TabScreen/HomeStackScreen/HomeStack";

const Tab = createBottomTabNavigator();
export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeStack") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog-outline";
            } else if (route.name === "Attendance") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Form") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Check Out") {
              return (
                <IconButton
                  icon="logout"
                  iconColor="white"
                  size={50}
                  onPress={() => console.log("Pressed")}
                  style={{
                    marginBottom: 40,
                    backgroundColor: "#F31559",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#FF52A2",
                  }}
                />
              );
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="Attendance" component={AttendancePage} />
        <Tab.Screen name="Check Out" component={Checkout} />
        <Tab.Screen name="Form" component={FormPage} />
        <Tab.Screen name="Settings" component={SettingPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
