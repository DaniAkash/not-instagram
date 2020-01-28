import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";

class ImageCard extends Component {
  render() {
    // alert(Dimensions.get("screen").width);
    return (
      <View style={styles.cardContainer} elevation={2}>
        <CardHeader
          name={this.props.name}
          profilePic={this.props.profilePic}
          location={this.props.location}
        />

        <CardImage image={this.props.image} />

        <CardFooter
          commentsCount={this.props.comments.length}
          likes={this.props.likes}
          name={this.props.name}
          caption={this.props.caption}
          navigateToComments={this.props.navigateToComments}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 450,
    maxWidth: 375,
    marginVertical: 10
  }
});

export default ImageCard;
