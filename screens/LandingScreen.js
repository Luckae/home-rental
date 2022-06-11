import React, { Component } from 'react';
import { View, TouchableOpacity, StatusBar, ImageBackground, Text } from 'react-native';
import { styles, primaryColor, statusBarColor } from '../assets/style/Style';
import house from '../assets/images/house5.jpeg';
import { navigation } from '@react-navigation/native';

class LandingScreen extends Component {

  render() {
    return (
       <View style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
      <ImageBackground source={house} resizeMode="cover" style={styles.container}>
      <View style={styles.explorBox}>
      <Text style={styles.headerText}>Find Your Dream Home</Text>
      <Text style={styles.subtitleText}>Create a unique emotional story that describes better than words.</Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dashboard')} style={styles.button}>
       <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
    );
  }
}

export default LandingScreen;
