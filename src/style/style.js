import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  outerExterior:{
    flex:1
  },
  exteriorContainer : {
    alignSelf: 'center',
    height: hp('100%'),
    width: wp('100%')
  },
  loadingPageButton: {
    borderWidth: 1,
  },
  Card: {
    height: hp('100%'),
    width: wp('100%'),
    position:'relative'
  },
  CardImage: {
    borderWidth: 1,
    borderRadius: 70,
    height: hp('57%'),
    width: wp('70%'),
    alignSelf: 'center',
    position:'relative'
  },
  LandingPageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	LandingPageInstructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 10
  },
  LandingPageImageStyle: {
    marginTop: 30,
    marginBottom: 10,
    // paddingTop: 500,
    alignSelf: 'center',
    height: hp('40%'),
    width: wp('80%'),
    borderWidth: 1,
    borderRadius: 70
  },
  landingPageWelcomeMessage : {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom:10,
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
    textShadowColor: 'black',
    borderColor: 'gray', 
    borderWidth: 3,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 12,
    color: '#000000'
  },
  questionPageMessage: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
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
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 15
  },
  link: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 15
  },
  imageCredt: {
    marginTop: 10,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 17
  },
  rateMe: {
    fontWeight: 'bold',
    marginBottom:15,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 17
  },
  // infoPagePicture: {
  //   marginTop: 20,
  //   marginBottom: 20,
  //   paddingTop: 500,
  //   alignSelf: 'center',
  //   height: 100,
  //   width: 300,
  //   borderWidth: 1,
  //   borderRadius: 70
  // },
});

export default Styles;
