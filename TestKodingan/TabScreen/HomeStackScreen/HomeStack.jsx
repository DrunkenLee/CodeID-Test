import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import Notification from "./Notification";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Badge } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  const navigation = useNavigation();

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
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
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
                    onPress={() => navigation.navigate("Notification")}
                  />
                </View>
              </View>
            );
          },
        }}
      />
      <HomeStack.Screen name="Notification" component={Notification} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
