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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      text: {
        fontSize: 16,
        textAlign: 'center',
      },


  

});   