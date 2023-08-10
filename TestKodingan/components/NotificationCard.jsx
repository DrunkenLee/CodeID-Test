import * as React from "react";
import { Avatar, Badge, Button, Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const NotificationCard = ({ item }) => (
  <Card style={styles.container}>
    <View style={styles.hStack}>
      <LinearGradient
        colors={["#F31559", "#FF52A2"]}
        style={styles.linearGradient}
      >
        <Card.Cover
          source={{
            uri: `https://dummyimage.com/100x100/d9ff2e/a5a8de&text=${
              item ? item.title.slice(0, 1) : "S"
            }`,
          }}
          style={{ width: "100%", height: 80 }}
        />
        <Badge
          size={30}
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor:
              item.status == "ok"
                ? "green"
                : item.status == "reject"
                ? "red"
                : item.status == "process"
                ? "blue"
                : "black",
            color: "white",
          }}
        >
          {item.status == "ok" ? (
            <Icon name="check" size={15} />
          ) : item.status == "reject" ? (
            <Icon name="remove" size={15} />
          ) : item.status == "process" ? (
            <Icon name="repeat" size={15} />
          ) : (
            "X"
          )}
        </Badge>
      </LinearGradient>
      <Card.Content style={styles.cardContent}>
        <Text style={styles.title}>{item ? item.title : "Title"}</Text>
        <Text ellipsizeMode="tail" numberOfLines={4} style={styles.description}>
          {item
            ? item.description
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,sed"}
        </Text>
      </Card.Content>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "90%",
    height: "auto",
    marginTop: 10,
    position: "relative",
  },
  hStack: {
    flexDirection: "row",
  },
  cardContent: {
    flex: 1,
    maxWidth: "70%",
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    color: "gray",
  },
  linearGradient: {
    borderRadius: 8,
    padding: 5,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationCard;
