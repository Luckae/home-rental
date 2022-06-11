import { StyleSheet } from 'react-native';
const boldFont = "Poppins-Black";
const fontFamily = Platform.OS === 'ios' ? 'Avenir' : boldFont;
const primaryColor = "#152532";
const secondaryColor = "#CC5500";
const accentColor = "#01344F";
const gray = "#616161";
const statusBarColor = "#97adfb";
const fineWhite = "#F6F6FE";
const black = "#000";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center'
  },
  explorBox: {
    width: 297,
    height: 297,
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    position: 'relative',
    top: 136,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 25,
    fontFamily: boldFont,
    color: primaryColor,
    padding: 0,
    fontWeight: 'bold',
    marginBottom: 9
  },
  subtitleText: {
    color: gray,
    padding: 0,
    fontSize: 16,
    marginBottom: 27
  },
  button: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: secondaryColor
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  homeBox: {
    flex: 1,
    backgroundColor: primaryColor,
    padding: 18
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileImage: {
    width: 36,
    height: 36
  },
  profileText: {
    color: '#fff'
  },
  homeContainer: {
    marginTop: 36
  },
  homeSubTitleText:{
    color: secondaryColor,
    fontSize: 18
  },
  homeTitleText: {
    fontSize: 27,
    color: '#fff',
    marginBottom: 18
  },
  dropdownStyle: {
    width: '100%',
    marginBottom: 36
  },
  flatListStyle: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  cardStyle: {
    width: '100%',
    borderRadius: 9,
    marginBottom: 36
  },
  nearbyBox: {
    marginBottom: 18
  },
  nearbyText: {
    color: '#fff',
    fontSize: 25
  }
})

export { styles, fineWhite, primaryColor, secondaryColor, statusBarColor, black }
