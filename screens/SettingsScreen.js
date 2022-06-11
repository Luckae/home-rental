import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { styles, primaryColor } from '../assets/style/Style';

class SettingScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
      <Text>Settings</Text>
      </View>
    );
  }
}

export default SettingScreen
