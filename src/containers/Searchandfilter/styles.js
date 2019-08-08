import { StyleSheet, Dimensions } from 'react-native'; Dimensions
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const COLOR = {
  BLACK: "#000",
  GRAY: "#9A9A9A",
  WHITE: "#FFF",
  Topbackcolor: '#a13745',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',

  },
  container1: {

    flexDirection: 'column',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container3: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 20
  }




});   