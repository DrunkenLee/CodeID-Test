import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Home from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingPage from "./SettingPage";
import AttendancePage from "./AttendancePage";
import FormPage from "./FormPage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { Badge, IconButton, MD3Colors } from "react-native-paper";
import Checkout from "./Checkout";

const Tab = createBottomTabNavigator();
export default function App() {
  const [index, setIndex] = useState(0);

  const styles = StyleSheet.create({
    container: {
      paddingTop: "1%",
      backgroundColor: "rgba(0, 0, 0, 0)",
      marginTop: 20,
      justifyContent: "center",
    },
    hStack: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      padding: 10,
      gap: 40,
    },
    vStack: {
      flexDirection: "column",
      alignItems: "center",
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
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
          header: () => {
            return (
              <View style={styles.container}>
                <View style={styles.hStack}>
                  <Text
                    style={{
                      fontSize: 30,
                      marginLeft: 20,
                      fontWeight: "bold",
                      color: "#F31559",
                    }}
                  >
                    KerjaYuk!
                  </Text>
                  <Badge
                    size={20}
                    style={{ position: "absolute", top: 5, right: 10 }}
                  >
                    3
                  </Badge>
                  <Icon
                    name="bell-o"
                    size={25}
                    color="#F31559"
                    style={{ marginTop: 5, marginRight: 12 }}
                  />
                </View>
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Attendance" component={AttendancePage} />
        <Tab.Screen name="Check Out" component={Checkout} />
        <Tab.Screen name="Form" component={FormPage} />
        <Tab.Screen name="Settings" component={SettingPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
