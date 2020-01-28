import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardHeader = ({name, profilePic, location}) => (
  <View style={styles.cardHeader}>

    <View
      style={styles.profilePicContainer}
    >
      <Image source={{uri: profilePic}} style={styles.profilePic}/>
    </View>

    <View
      style={styles.profileDetailsContainer}
    >
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>

    <View style={styles.optionsContainer}>
      <Ionicons name={'ios-options'} size={20} color={'tomato'} />
    </View>

  </View>
);

const styles = StyleSheet.create({

  cardHeader: {
    flex: 1,
    flexDirection: 'row',
  },


  profilePicContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },


  profileDetailsContainer: {
    flex: 7.5,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
  },


  optionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardHeader;
