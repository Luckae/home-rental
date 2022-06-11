import React, { Component } from 'react';
import { View, ScrollView, FlatList, Image, StatusBar, Text } from 'react-native';
import { styles, primaryColor } from '../assets/style/Style';
import Icon from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import { TouchableRipple, Avatar, Button, Card, Title } from 'react-native-paper';
import profile from '../assets/images/profile.png';
import marker from '../assets/images/marker.png';
Icon.loadFont();

const countries = ["Egypt", "Nigeria", "Canada", "Australia", "Ireland"];
const LeftContent = props => <Avatar.Icon {...props} icon="home" />

const data = [
  {
   id: 1,
   title: 'Golden Park',
   avatar: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg',
   description:
     'Golden Park Avenue, Pretoria, SA',
   price: '$200',
 },
 {
 id: 2,
 title: 'Singapore',
 avatar: 'https://picsum.photos/700',
 description:
   'The former trading post of the British Empire has turned out to be one the most highly sought-after tourist destinations in the world. After early years of turbulence and despite lacking natural resources and a hinterland, the nation rapidly developed to become one of the Four Asian Tigers based on external trade, becoming a highly developed country.',
 price: '$650',
},

]

class HomeScreen extends Component {

  renderItem = ({item}) => (
      <TouchableRipple
      rippleColor="rgba(0, 0, 0, .32)"
        onPress={() =>
          requestAnimationFrame(
            () =>
            this.props.navigation.navigate('ViewCourse', {
              image: item.image,
            }),
          )
        }
         style = { styles.flatListStyle }
        >

      <Card style={styles.cardStyle}>
      <Card.Title titleStyle={{textTransform: 'capitalize'}} title={item.title} subtitleStyle={{textTransform: 'capitalize'}} subtitle={item.description} left={LeftContent}  />
      <Card.Cover source={{ uri: item.avatar }} />
      <Card.Actions>
        <Button color= {"#cc5500"}>Explore</Button>
      </Card.Actions>
    </Card>
  </TouchableRipple>
  );

  showHeaders = () => {
    return(
    <View>
    <View style={styles.locationHeader}>
   <Text style={styles.profileText}>Hello, Pete Attah!</Text>
   <Image source={profile} style={styles.profileImage} />
    </View>
    <View style={styles.homeContainer}>
    <Text style={styles.homeSubTitleText}>Welcome Home</Text>
    <Text style={styles.homeTitleText}>Find Your Dream Home</Text>
    </View>
    <SelectDropdown
    data={countries}
    onSelect={(selectedItem, index) => {
      //do action here
    }}
    defaultButtonText="Select location"
    buttonStyle={styles.dropdownStyle}
    search={true}
    searchPlaceHolder="Search location"
    dropdownIconPosition={"right"}
    buttonTextAfterSelection={(selectedItem, index) => {
      // text represented after item is selected
      // if data array is an array of objects then return selectedItem.property to render after item is selected
      return selectedItem
    }}
    rowTextForSelection={(item, index) => {
      // text represented for each item in dropdown
      // if data array is an array of objects then return item.property to represent item in dropdown
      return item
    }}
  />
  </View>
)
  }

  showHomes = () => {
    <View style={styles.flatListStyle}>
    <FlatList
     data={data}
     renderItem={this.renderItem}
     removeClippedSubviews={true}
     keyExtractor={item => item.id.toString()}
     ItemSeparatorComponent={this.renderSeparator}
    />
    </View>
  }

  render() {
    return (
      <ScrollView style={styles.homeBox}>
      <StatusBar barStyle="light-content" backgroundColor={primaryColor} />

      <View style={styles.locationHeader}>
     <Text style={styles.profileText}>Hello, Lawson Luke!</Text>
     <Image source={profile} style={styles.profileImage} />
      </View>
      <View style={styles.homeContainer}>
      <Text style={styles.homeSubTitleText}>Welcome Home</Text>
      <Text style={styles.homeTitleText}>Find Your Dream Home</Text>
      </View>
      <SelectDropdown
      data={countries}
      onSelect={(selectedItem, index) => {
        //do action here
      }}
      defaultButtonText="Select location"
      buttonStyle={styles.dropdownStyle}
      search={true}
      searchPlaceHolder="Search location"
      dropdownIconPosition={"right"}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item
      }}
    />

     <View style={styles.nearbyBox}>
     <Text style={styles.nearbyText}>Nearby Places</Text>
     </View>

      <FlatList
       data={data}
       renderItem={this.renderItem}
       removeClippedSubviews={true}
       keyExtractor={item => item.id.toString()}
       ItemSeparatorComponent={this.renderSeparator}
      />
      </ScrollView>
    );
  }
}

export default HomeScreen;
