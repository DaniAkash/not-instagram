import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Home from "./src/Screens/Home/Home";
import Profile from "./src/Screens/Profile/Profile";
import Search from "./src/Screens/Search/Search";
import Gallery from "./src/Screens/Gallery/Gallery";
import Notifications from "./src/Screens/Notifications/Notifications";
import { Ionicons } from "@expo/vector-icons";
import Comments from "./src/Screens/Comments/Comments";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Comments: {
    screen: Comments
  }
});

const App = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Search: {
      screen: Search
    },
    Gallery: {
      screen: Gallery
    },
    Notifications: {
      screen: Notifications
    },
    Profile: {
      screen: Profile
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "ios-information-circle";
        switch (routeName) {
          case "Home":
            iconName = `ios-home`;
            break;
          case "Gallery":
            iconName = `md-add-circle`;
            break;
          case "Notifications":
            iconName = `ios-heart`;
            break;
          case "Search":
            iconName = `ios-search`;
            break;
          case "Profile":
            iconName = `ios-person`;
            break;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    navigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      showLabel: false
    },
    tabBarComponent: BottomTabBar
  }
);

export default createAppContainer(App);
