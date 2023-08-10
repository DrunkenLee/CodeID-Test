import * as React from "react";
import { Avatar, Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import data from "../data/userOnline.json";
import Icon from "react-native-vector-icons/FontAwesome";

const MAX_DISPLAY_ITEMS = 7; // Maximum number of items to display

const OnlineCardComp = () => {
  const displayedData = data.slice(0, MAX_DISPLAY_ITEMS);
  const cardsLeft = data.length - displayedData.length;

  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.hStack}>
          {displayedData.map((item, index) => (
            <View key={index} style={styles.vStack}>
              <View style={styles.avatarContainer}>
                <Avatar.Icon
                  size={40}
                  icon={({ size, color }) => (
                    <Icon name="user" size={size} color={color} />
                  )}
                />
              </View>
              <Text style={{ fontSize: 7, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 6 }}>{item.code}</Text>
            </View>
          ))}
          {cardsLeft > 0 && (
            <View
              style={{
                marginBottom: 30,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.avatarContainer}>
                <Avatar.Text
                  size={40}
                  label={`${cardsLeft} more`}
                  labelStyle={{ fontSize: 8 }}
                />
              </View>
            </View>
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  hStack: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 1,
    gap: -10,
  },
  vStack: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 1,
    alignItems: "center",
  },
});

export default OnlineCardComp;
