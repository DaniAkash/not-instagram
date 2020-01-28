import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';

class Comments extends Component {

  static navigationOptions = {
    headerTitle: 'Comments',
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1, backgroundColor: 'yellow'}}>

        </ScrollView>
        <View>
          <TextInput/>
        </View>
      </View>
    );
  }
}

export default Comments;
