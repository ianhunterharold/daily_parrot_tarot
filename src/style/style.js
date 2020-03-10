import { StyleSheet, Dimensions } from 'react-native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')
// haven't used this yet.

const Styles = StyleSheet.create({

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
    //not fulling understadning css that flexes with different containers YET. I know that my styling is not build for flexiability yet either. will update to reflect multiple devices.
    marginTop: 50,
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
    fontSize: 17
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
    fontSize: 17
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
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    textAlign:'center',
    color:'#FA6A30',
    fontSize: 17
  }

});

export default Styles;
