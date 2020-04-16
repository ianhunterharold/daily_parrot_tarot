import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')


const Styles = StyleSheet.create({
  exteriorContainer : {
    alignSelf: 'center',
    flex:1,
    height: hp('100%'),
    width: wp('90%')
  },
  loadingPageButton: {
    borderWidth: 1,
  },
  LandingPageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	LandingPageInstructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
  },
  Card: {
    height: 100,
    width: 100,
    alignContent: "center"
  },
  LandingPageImageStyle: {
    marginTop: 30,
    marginBottom: 80,
    paddingTop: 500,
    alignSelf: 'center',
    height: 100,
    width: 300,
    borderWidth: 1,
    borderRadius: 70
  },
  landingPageWelcomeMessage : {
    fontWeight: 'bold',
    marginTop: 50,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 15
  },
  questionPageImage: {
    marginTop: 50,
    marginBottom: 40,
    paddingTop: 500,
    alignSelf: 'center',
    height: 100,
    width: 300,
    borderWidth: 1,
    borderRadius: 70
  },
  askPageTextInputBox: {
    height: 50, 
    width: 270, 
    borderColor: 'gray', 
    borderWidth: 3,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 12
  },
  questionPageMessage: {
    fontWeight: 'bold',
    marginTop: 50,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 15
  },
  cardImageStyling: {
    marginTop: 50,
    paddingTop: 500,
    alignSelf: 'center',
    height: 80,
    width: 300,
    borderWidth: 1,
    borderRadius: 70
  },
  cardDescription: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 15
  },
  link: {
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 15
  },
  imageCredt: {
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 17
  },
  rateMe: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 17
  },
  infoPagePicture: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 500,
    alignSelf: 'center',
    height: 100,
    width: 300,
    borderWidth: 1,
    borderRadius: 70
  },
});

export default Styles;
