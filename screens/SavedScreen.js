import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles, primaryColor } from '../assets/style/Style';

class SavedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
       <Text>Saved Items</Text>
      </View>
    );
  }
}

export default SavedScreen;
