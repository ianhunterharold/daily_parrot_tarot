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
    //not fulling understadning css that flexes with different containers YET. I know that my styling is not build for flexiability yet either.
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
    marginTop: 50,
    alignSelf: 'center',
    textAlign:'center'
  }


});

export default Styles;
