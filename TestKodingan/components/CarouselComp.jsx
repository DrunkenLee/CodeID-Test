import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { Avatar } from "react-native-elements";
const { width } = Dimensions.get("window");

const DATA = [
  {
    coverImageUri: "",
    cornerLabelColor: "#FFD300",
    avatar: "A",
    name: "Anna R.",
  },
  {
    coverImageUri: "",
    cornerLabelColor: "#0080ff",
    avatar: "B",
    name: "Budi W.",
  },
  {
    coverImageUri: "",
    cornerLabelColor: "#2ECC40",
    avatar: "C",
    name: "Cassey Y.",
  },
];

const CarouselComp = () => {
  const renderItem = (data, index) => (
    <View key={index} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <View style={styles.hStack}>
          <View style={{ flexDirection: "column" }}>
            <Avatar
              size={50}
              rounded
              title={data.avatar}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              containerStyle={{
                backgroundColor: "#FF52A2",
                alignSelf: "flex-start",
                margin: 10,
                position: "relative",
              }}
            />
            <View style={styles.kalimat}>
              <Text style={{ fontSize: 13 }}>
                Kalimat1 - Lorem ipsum dolor sit amet.
              </Text>
              <Text style={{ fontSize: 13 }}>
                Kalimat2 - Lorem ipsum dolor sit amet.
              </Text>
              <Text style={{ fontSize: 13 }}>
                Kalimat3 - Lorem ipsum dolor sit amet.
              </Text>
              <Text style={{ fontSize: 13 }}>
                Kalimat4 - Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
          <Text style={{ position: "absolute", left: "20%", top: "15%" }}>
            {data.name}
          </Text>

          <View style={styles.vStack}>
            <Text style={{ marginTop: 5, fontSize: 12 }}>Senin</Text>
            <Text style={{ fontSize: 7 }}>30 Mei 2022</Text>
          </View>
        </View>
        <Image style={styles.card} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
        autoplayInterval={5000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: width * 0.6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#b8b8b811",
    shadowOpacity: 20,
    shadowColor: "black",
    width: "93%",
    height: 170,
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
    resizeMode: "cover",
    shadowOpacity: 1,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  hStack: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#b6b6b61d",
  },
  vStack: {
    position: "absolute",
    right: 0,
    flexDirection: "column",
    alignItems: "flex-end",
    margin: 10,
    marginRight: 10,
  },
  avatar: {
    backgroundColor: "#e05200",
  },
  kalimat: {
    marginBottom: "10%",
    marginLeft: "12%",
  },
});

export default CarouselComp;
