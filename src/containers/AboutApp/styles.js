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
        // backgroundColor: '#f2f2f2',

    },
    image1: {
        width: 22,
        height: 15,
        marginLeft: 10,
        marginTop: 5,
        tintColor: '#fff',
        marginBottom: 10
    },
    image2: {
        height: (width * 0.40),
        width: width / 2, 
        marginTop: 10
    },

    text1: {
        color: '#fff',
        marginLeft: '25%',
        alignItems:'center',
        fontSize: 16,
        fontWeight:'bold'
    },
    text2: {
        color: '#fff', 
        fontSize: 10, 
        marginTop: 10
    },
    text3: {
        color: '#000',
        fontSize: 11,
        marginHorizontal: 6.5     
    },
    View1: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    View2: {
        marginTop: 20,
        marginLeft: 10, 
        marginRight: 10
    },
    View3:{
        marginTop:25,
        marginLeft:10,
        marginRight:10
    }










});   