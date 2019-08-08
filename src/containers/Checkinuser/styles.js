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
        height: (width * 0.20),
        width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        marginTop: 15,
        elevation: 5,
        paddingHorizontal: 10,
    },
    view2: {
        height: (width * 0.20),
        width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        marginTop: 10,
        elevation: 5,
        paddingHorizontal: 10,
    },
    view3: {
        backgroundColor: '#fff',
        height: (width * 0.40),
        width: width / 1.07,
        marginTop: 10,
        borderColor: '#000',
        alignSelf: 'center',
        paddingHorizontal: 10,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        marginTop: 10,
        elevation: 5,
    },
    view4: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    view5: {
        width: width,
        padding: 10,
        marginTop: 10,
        // marginLeft: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf:'center'
    },
    touchable1: {
        width: width / 2 + 20,
        height: (width * 0.11),
        backgroundColor: '#119f29',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    touchable2: {
        width: width / 2 - 20,
        height: (width * 0.11),
        backgroundColor: '#c42d3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    touchable3: {
        width: width / 2 + 20,
        height: (width * 0.11),
        backgroundColor: '#c42d3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        flexDirection: 'row'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000'
    },
    text2: {
        fontSize: 12,
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#000'
    },
    card1: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        minHeight: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowOpacity: 2.0,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5
    },
    child:{
        height: height * 0.31,
        width,
        justifyContent: 'center'
    }






});   