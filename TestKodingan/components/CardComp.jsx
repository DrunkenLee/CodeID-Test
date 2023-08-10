import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CardComp = () => (
  <Card style={styles.container}>
    <LinearGradient
      colors={["#F31559", "#FF52A2"]}
      style={styles.linearGradient}
    >
      <Card.Content>
        <View style={styles.hStack}>
          <Avatar.Image size={60} source={require("../assets/ava1.jpg")} />
          <View style={styles.vStack}>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>
              Michael Fransisco
            </Text>
            <Text style={{ fontStyle: "italic", fontSize: 10 }}>
              Fullstack Developer
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              position: "absolute",
              right: 0,
              top: 12,
            }}
          >
            <Text style={{ fontSize: 8, fontStyle: "italic" }}>
              Member since
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 10 }}>
              01 Juni 2021
            </Text>
          </View>
        </View>
        <View style={styles.hStack}>
          <View style={styles.vStack}>
            <Text style={{ fontSize: 10 }}>Location</Text>
            <Text style={{ fontSize: 12 }}>Kantor Sahid</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              position: "absolute",
              right: 0,
              bottom: 12,
            }}
          >
            <Text style={{ fontSize: 15, fontStyle: "italic" }}>ICO</Text>
          </View>
        </View>
      </Card.Content>
    </LinearGradient>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  hStack: {
    flexDirection: "row",
  },
  vStack: {
    flexDirection: "column",
    margin: 10,
  },
  linearGradient: {
    borderRadius: 8,
    padding: 10,
  },
});

export default CardComp;
