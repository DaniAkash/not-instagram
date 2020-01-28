import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import Logo from "./HeaderComponents/Logo";
import LeftButton from "./HeaderComponents/LeftButton";
import RightButton from "./HeaderComponents/RightButton";
import ImageCard from "../../Components/ImageCard/ImageCard";
import newsFeed from "../../Data/newsFeed";

class Home extends Component {
  static navigationOptions = {
    headerTitle: <Logo title={"Not Instagram"} />,
    headerLeft: <LeftButton />,
    headerRight: <RightButton />
  };

  navigateToComments = () => {
    this.props.navigation.navigate("Comments");
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        {newsFeed.map((item, index) => {
          return (
            <ImageCard
              key={index}
              {...item}
              navigateToComments={this.navigateToComments}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default Home;
