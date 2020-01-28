import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

const CardImage = ({ image }) => (
  <View style={styles.cardImage}>
    <Image style={styles.image} source={{ uri: image }} />
  </View>
);

const styles = StyleSheet.create({
  cardImage: {
    height: 300
  },
  image: {
    flex: 1
  }
});

export default CardImage;
