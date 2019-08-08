import { StyleSheet, Dimensions } from 'react-native';import RF from 'react-native-responsive-fontsize';
 Dimensions
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
    textinput1: {
        color: '#000',
        fontSize: 12,
    },
    view1: {
        flexDirection: 'row',
        width: width - 20, height: 45,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 3
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view4: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    view5: {
        width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop:10,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5,
        padding: 10,
    },
    // minHeight: (width * 0.15),
    // width: width / 1.07,
    // backgroundColor: '#fff',
    // shadowOffset: { width: 0, height: 3, },
    // shadowColor: '#000000',
    // marginTop: 10,
    // elevation: 5, 
    // paddingHorizontal:10


    view6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    view7:{
        width: width / 1.07,
        height:(width * 0.28),
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop:10,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5,
        padding: 10,
    },

    touchable1: {
        width: width / 2 + 20,
        height: (width * 0.12),
        backgroundColor: '#c42d3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    textinput1: {
        color: '#000',
        fontSize: RF(2),

    },
    text1: {
        color: '#a13745',
        fontWeight: 'bold'
    },
    text2: {
        color: '#000',
        fontStyle: 'italic'
    },
    text3: {
        color: '#60506a',
        fontWeight: 'bold'
    }


});   