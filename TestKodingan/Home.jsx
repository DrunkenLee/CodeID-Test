import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import CardComp from "./components/CardComp";
import { IconButton, MD3Colors } from "react-native-paper";
import CarouselComp from "./components/CarouselComp";
import OnlineCardComp from "./components/OnlineCardComp";

const Home = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#F31559",
      secondary: "#FF52A2",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text
              style={{
                alignSelf: "flex-start",
                marginLeft: 20,
                marginBottom: 10,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Hi, Good Morning
            </Text>
            <CardComp />
          </View>
          <View style={styles.activity}>
            <Text
              style={{
                alignSelf: "flex-start",
                marginLeft: 20,
                marginBottom: -8,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Today's Activity
            </Text>
            <View style={styles.hStack}>
              <View style={styles.vStack}>
                <IconButton
                  icon="clock-outline"
                  iconColor="#F31559"
                  size={50}
                  onPress={() => console.log("Pressed")}
                />
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>08:00</Text>
                <Text style={{ fontSize: 10 }}>Check In</Text>
              </View>
              <View style={styles.vStack}>
                <IconButton
                  icon="hours-24"
                  iconColor="#F31559"
                  size={50}
                  onPress={() => console.log("Pressed")}
                />
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, color: "#F31559" }}
                >
                  03:00:00
                </Text>
                <Text style={{ fontSize: 10 }}>Working Hours</Text>
              </View>
              <View style={styles.vStack}>
                <IconButton
                  icon="clock"
                  iconColor="#F31559"
                  size={50}
                  onPress={() => console.log("Pressed")}
                />
                <Text style={{ fontWeight: "bold" }}>--:--</Text>
                <Text style={{ fontSize: 10 }}>Check Out</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.pscnews}>
          <Text
            style={{
              alignSelf: "flex-start",
              marginLeft: 20,
              marginBottom: -15,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            PCS News
          </Text>
          <CarouselComp />
        </View>
        <View style={styles.online}>
          <Text
            style={{
              alignSelf: "flex-start",
              marginLeft: 20,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Online
          </Text>
          <OnlineCardComp />
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "center",
  },
  topContainer: {
    alignItems: "center",
  },
  activity: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignItems: "center",
  },
  hStack: {
    flexDirection: "row",
    marginTop: 10,
    gap: 40,
  },
  vStack: {
    flexDirection: "column",
    alignItems: "center",
  },
  pscnews: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignItems: "center",
  },
  online: {
    alignItems: "center",
    marginBottom: 60,
    height: "10%",
  },
});
export default Home;
