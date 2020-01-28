import React, {
  Component,
} from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

const Logo = ({title}) => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
  },
});

export default Logo;

