import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { styles, primaryColor } from '../assets/style/Style';


class CategoriesScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
      <Text>Categories</Text>
      </View>
    );
  }
}

export default CategoriesScreen;
