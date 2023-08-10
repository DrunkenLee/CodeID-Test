import { View, Text, ScrollView } from "react-native";
import React from "react";
import NotificationCard from "../../components/NotificationCard";
import data from "../../data/notifications.json";

const Notification = () => {
  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {data.map((item, index) => {
          return <NotificationCard item={item} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Notification;
