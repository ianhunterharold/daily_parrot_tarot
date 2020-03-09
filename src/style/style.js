import { StyleSheet, Dimensions } from 'react-native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

const Styles = StyleSheet.create({
  // will abstract out styling into seperate component and then import it
  //task for monday feb 17th 2020
  // body: {
  //   backgroundColor: white
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24
  // },
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
    height: 100,
    width: 100,
    alignContent: "center"  }
});

export default Styles;
