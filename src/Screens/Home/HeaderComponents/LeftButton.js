import React, {
  Component,
} from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LeftButton = ({icon, action}) => {
  return (
    <Ionicons style={{paddingLeft: 15}} name={'ios-camera'} size={30} color={'tomato'} />
  )
};

const styles = StyleSheet.create({

});

export default LeftButton;

