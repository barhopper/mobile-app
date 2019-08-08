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
        backgroundColor: '#fff',

    },
    view1: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    text1: {
        color: '#000',
        fontSize: 11,
        marginHorizontal: 6.5
    },



});   